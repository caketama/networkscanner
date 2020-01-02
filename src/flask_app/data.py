import sqlite3

# TODO insert IP into database


def save(ip, port, services):
    with sqlite3.connect("scans.db") as connection:
        cursor = connection.cursor()
        SQL = """INSERT INTO scans (
        ip_address, ports, services) VALUES (?, ?, ?);"""
        values = (ip, port, services)
        cursor.execute(SQL, values)
