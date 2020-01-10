from sqlite3 import connect


def save(ip, port, services):
    with connect("scans.db") as connection:
        cursor = connection.cursor()
        SQL = """INSERT INTO scans (
        ip_address, ports, services) VALUES (?, ?, ?);"""
        values = (ip, port, services)
        cursor.execute(SQL, values)
