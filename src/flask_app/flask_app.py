from flask import Flask, jsonify, request
from json import loads
import json
from subprocess import run
from sqlite3 import connect
from flask_cors import CORS

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


@app.route("/api/add_scan", methods=["POST"])
def add_scans():
    data = request.data
    print(request.mimetype)
    print(type(data))
    print(data)
    data = json.loads(data)
    ip = data.get("ip_address")
    if ip:
        scan = run(["python", "port_scanner.py", ip])
        if scan:
            with connect("scans.db") as connection:
                cursor = connection.cursor()
                SQL = """SELECT ip_address, ports, services FROM scans
                WHERE ip_address=?"""
                scans = cursor.execute(SQL, (ip,)).fetchall()
                return jsonify({"scan": scans})
        else:
            return jsonify({"error": "fix me"})


if __name__ == "__main__":
    app.run(debug=True)
