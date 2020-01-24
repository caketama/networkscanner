from sqlite3 import connect

DBPATH = "scans.db"


def save(ip, port, services):
    with connect(DBPATH) as connection:
        cursor = connection.cursor()
        # SQL = """SELECT ip_address FROM scans WHERE ip_address=?"""
        # check = cursor.execute(SQL, (ip,)).fetchone()
        SQL = """INSERT INTO scans (
        ip_address, ports, services) VALUES (?, ?, ?);"""
        values = (ip, port, services)
        cursor.execute(SQL, values)


def check_database(ip, port, services):
    with connect(DBPATH) as connection:
        cursor = connection.cursor()
        SQL = """SELECT ip_address FROM scans
        WHERE ip_address=?"""
        scan = cursor.execute(SQL, (ip,)).fetchall()
        print(len(scan))
        if len(scan) == 0:
            save(ip, port, services)
        else:
            pass
