import sqlite3


def save(ip, port, services):
    with sqlite3.connect("scans.db") as connection:
        cursor = connection.cursor()
        SQL = """INSERT INTO scans (
        ip_address, ports, services) VALUES (?, ?, ?);"""
        values = (ip, port, services)
        cursor.execute(SQL, values)


def save_port(port):
    with sqlite3.connect("scans.db") as connection:
        cursor = connection.cursor()
        SQL = """INSERT INTO scans (
        ports) VALUES (?);"""
        values = (port,)
        cursor.execute(SQL, values)
