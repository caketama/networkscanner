from sqlite3 import connect

DBPATH = "scans.db"


def schema(dbpath=DBPATH):
    with connect(dbpath) as conn:
        cursor = conn.cursor()
        DROPSQL = "DROP TABLE IF EXISTS {tablename};"
        cursor.execute(DROPSQL.format(tablename="scans"))
        sql = """ CREATE TABLE scans (
                ports VARCHAR,
                services VARCHAR NOT NULL,
                ip_address VARCHAR(15),
                time INTEGER
            );"""
        cursor.execute(sql)


schema()
