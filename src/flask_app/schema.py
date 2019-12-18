import sqlite3


def schema(dbpath="scans.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        DROPSQL = "DROP TABLE IF EXISTS {tablename};"
        cursor.execute(DROPSQL.format(tablename="ips"))
        sql = """ CREATE TABLE ips (
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                ip_address VARCHAR(15)
            );"""
        cursor.execute(sql)

        cursor.execute(DROPSQL.format(tablename="scans"))
        sql = """ CREATE TABLE scans (
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                ip_address_pk INTEGER,
                ports VARCHAR,
                services VARCHAR,
                version_number VARCHAR,
                FOREIGN KEY (ip_address_pk) REFERENCES ip_address(pk)
            );"""
        cursor.execute(sql)


schema()
