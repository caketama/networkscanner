from sqlite3 import connect

DBPATH = "scans.db"


def check_services(dpath=DBPATH):
    with connect(DBPATH) as connection:
        cursor = connection.cursor()
        SQL = """SELECT services FROM scans;"""
        services = cursor.execute(SQL,).fetchall()
        print(services)


check_services()
