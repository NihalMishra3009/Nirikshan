import pandas as pd


def run_audit(df: pd.DataFrame):
    missing_values = df.isnull().sum().to_dict()
    duplicate_rows = int(df.duplicated().sum())

    total_cells = df.shape[0] * df.shape[1]
    total_missing = int(df.isnull().sum().sum())
    completeness = round(((total_cells - total_missing) / total_cells) * 100, 2)

    return {
        "missing_values_per_column": missing_values,
        "duplicate_rows": duplicate_rows,
        "data_completeness_percentage": completeness,
    }