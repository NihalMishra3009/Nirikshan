import pandas as pd


def detect_patterns(df: pd.DataFrame):
    numeric_df = df.select_dtypes(include=["number"])
    patterns = {
        "trends": {},
        "growth_percentage": {},
        "top_contributors": {},
        "correlations": {}
    }

    for col in numeric_df.columns:
        if len(numeric_df[col]) > 1:
            first = numeric_df[col].iloc[0]
            last = numeric_df[col].iloc[-1]

            # Trend
            if last > first:
                trend = "upward"
            elif last < first:
                trend = "downward"
            else:
                trend = "stable"

            patterns["trends"][col] = trend

            # Growth %
            if first != 0:
                growth = ((last - first) / abs(first)) * 100
                patterns["growth_percentage"][col] = round(growth, 2)
            else:
                patterns["growth_percentage"][col] = None

            # Top contributor
            max_value = numeric_df[col].max()
            patterns["top_contributors"][col] = float(max_value)

    patterns["correlations"] = numeric_df.corr().to_dict()

    return patterns