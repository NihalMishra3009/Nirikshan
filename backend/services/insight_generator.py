def generate_insights(schema, audit, stats, anomalies, patterns):
    insights = []

    # Data quality
    completeness = audit["data_completeness_percentage"]
    if completeness < 90:
        insights.append(("high", f"Data completeness is low at {completeness}%."))

    # Duplicates
    if audit["duplicate_rows"] > 0:
        insights.append(("medium", f"{audit['duplicate_rows']} duplicate rows detected."))

    # Trends & Growth
    for col, trend in patterns["trends"].items():
        growth = patterns["growth_percentage"].get(col)
        if trend == "upward":
            insights.append(("medium", f"{col} shows upward trend with {growth}% growth."))
        elif trend == "downward":
            insights.append(("medium", f"{col} shows downward trend with {growth}% change."))

    # Anomalies
    for col, count in anomalies.items():
        if count > 0:
            insights.append(("high", f"{col} has {count} anomaly points detected."))

    # Rank insights
    priority_order = {"high": 1, "medium": 2, "low": 3}
    insights.sort(key=lambda x: priority_order[x[0]])

    # Return only messages
    return [msg for _, msg in insights]