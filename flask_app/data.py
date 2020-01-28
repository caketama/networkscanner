from sqlite3 import connect

DBPATH = "scans.db"


def save(ip, port, services):
    with connect(DBPATH) as connection:
        cursor = connection.cursor()
        SQL = """INSERT INTO scans (
        ip_address, ports, services, time) VALUES (?, ?, ?, strftime('%s'));"""
        values = (ip, port, services)
        cursor.execute(SQL, values)
