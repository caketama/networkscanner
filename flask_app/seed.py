import sqlite3


def seed(dbpath="scans.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

        SQL = """INSERT INTO ips (pk, ip_address) VALUES ("1","127.0.0.1")"""
        cursor.execute(SQL)

        SQL = """ INSERT INTO scans (ip_address_pk, ports, services, version_number)VALUES ("1","22", "ssh", "1337")"""
        cursor.execute(SQL)


seed()
