import pandas as pd


def detect_schema(df: pd.DataFrame):
    numeric_columns = df.select_dtypes(include=["number"]).columns.tolist()
    categorical_columns = df.select_dtypes(include=["object"]).columns.tolist()

    datetime_columns = []
    for col in df.columns:
        try:
            pd.to_datetime(df[col])
            datetime_columns.append(col)
        except Exception:
            pass

    return {
        "total_columns": len(df.columns),
        "total_rows": len(df),
        "numeric_columns": numeric_columns,
        "categorical_columns": categorical_columns,
        "datetime_columns": datetime_columns,
    }