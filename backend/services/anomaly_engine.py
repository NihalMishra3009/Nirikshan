import pandas as pd


def detect_anomalies(df: pd.DataFrame):
    numeric_df = df.select_dtypes(include=["number"])
    anomalies = {}

    for col in numeric_df.columns:
        mean = numeric_df[col].mean()
        std = numeric_df[col].std()

        if std == 0:
            anomalies[col] = 0
            continue

        threshold = mean + 2 * std
        anomaly_count = int((numeric_df[col] > threshold).sum())

        anomalies[col] = anomaly_count

    return anomalies