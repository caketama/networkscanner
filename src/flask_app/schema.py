import sqlite3


def schema(dbpath="scans.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        DROPSQL = "DROP TABLE IF EXISTS {tablename};"
        cursor.execute(DROPSQL.format(tablename="scans"))
        sql = """ CREATE TABLE scans (
                ip_address VARCHAR(15),
                ports VARCHAR,
                services VARCHAR
            );"""
        cursor.execute(sql)


schema()
