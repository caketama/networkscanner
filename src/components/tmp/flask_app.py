from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from subprocess import run, check_output
from sqlite3 import connect

app = Flask(__name__)
CORS(app)

@app.route("/api/get_ip", methods=["POST"])
def get_ip():
    data = request.data
    data = loads(data)
    ip = data.get("ip_address")
    if ip:
        with connect("scans.db") as connection:
            cursor = connection.cursor()
            SQL = """SELECT ip_address FROM scans WHERE ip_address=?"""
            ip = cursor.execute(SQL, (ip,)).fetchone()


@app.route("/api/scans", methods=["POST"])
def add_scans():
    data = json.loads(data)
    # data2 = request.is_json()
    # print(data2)
    ip = data.get("ip_address")
    if ip:
        run(["python", "port_scanner.py", ip])
        # print(scan)
        # scan1 = check_output(["python", "port_scanner.py", ip]).decode()
        # print(scan1, "1")
        with connect("scans.db") as connection:
            cursor = connection.cursor()
            SQL = """SELECT ip_address, ports, services FROM scans
            WHERE ip_address=?"""
            scans = cursor.execute(SQL, (ip,)).fetchall()
            print("code got this far")
            return jsonify({"scan": scans})
    else:
        return jsonify({"error": "fix me"})


if __name__ == "__main__":
    app.run()
