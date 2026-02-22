import pandas as pd


def compute_statistics(df: pd.DataFrame):
    numeric_df = df.select_dtypes(include=["number"])
    stats = {}

    for col in numeric_df.columns:
        stats[col] = {
            "mean": float(numeric_df[col].mean()),
            "median": float(numeric_df[col].median()),
            "std_dev": float(numeric_df[col].std()),
            "min": float(numeric_df[col].min()),
            "max": float(numeric_df[col].max()),
            "total": float(numeric_df[col].sum()),  # Added
        }

    return stats