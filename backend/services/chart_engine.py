import pandas as pd
import numpy as np


def recommend_chart(schema):
    numeric_cols = schema["numeric_columns"]
    categorical_cols = schema["categorical_columns"]
    datetime_cols = schema["datetime_columns"]

    recommendation = {
        "type": None,
        "x_axis": None,
        "y_axis": None
    }

    if datetime_cols and numeric_cols:
        recommendation["type"] = "line"
        recommendation["x_axis"] = datetime_cols[0]
        recommendation["y_axis"] = numeric_cols[0]

    elif categorical_cols and numeric_cols:
        recommendation["type"] = "bar"
        recommendation["x_axis"] = categorical_cols[0]
        recommendation["y_axis"] = numeric_cols[0]

    elif numeric_cols:
        recommendation["type"] = "histogram"
        recommendation["x_axis"] = numeric_cols[0]

    return recommendation


def generate_chart_data(df: pd.DataFrame, recommendation: dict):
    chart_type = recommendation["type"]

    if chart_type == "line":
        x = recommendation["x_axis"]
        y = recommendation["y_axis"]

        data = df[[x, y]].dropna()
        return data.to_dict(orient="records")

    elif chart_type == "bar":
        x = recommendation["x_axis"]
        y = recommendation["y_axis"]

        grouped = df.groupby(x)[y].sum().reset_index()
        return grouped.to_dict(orient="records")

    elif chart_type == "histogram":
        x = recommendation["x_axis"]

        bins = 5
        counts, edges = np.histogram(df[x].dropna(), bins=bins)

        chart_data = []
        for i in range(len(counts)):
            chart_data.append({
                "bin": f"{round(edges[i],2)}-{round(edges[i+1],2)}",
                "count": int(counts[i])
            })

        return chart_data

    return []