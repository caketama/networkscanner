import sqlite3


def seed(dbpath="scans.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

        SQL = """ INSERT INTO scans (ip_address, ports, services)VALUES ("127.0.0.1","22", "ssh")"""
        cursor.execute(SQL)


seed()
