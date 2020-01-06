from flask import Flask, jsonify, request
from json import loads
from subprocess import check_output
from sqlite3 import connect

# from data import save_port

app = Flask(__name__)


@app.route("/api/get_scans", methods=["POST"])
def get_scans():
    data = request.data
    data = loads(data)
    ip = data.get("ip_address")
    if ip:
        with connect("scans.db") as connection:
            cursor = connection.cursor()
            SQL = """SELECT ports, services FROM scans
            WHERE ip_address=?"""
            ports = cursor.execute(SQL, (ip,)).fetchall()
            if ports:
                return jsonify({"ports": ports})
    return jsonify({"this": "doesn't work"})


@app.route("/api/post_scans", methods=["POST"])
def post_scans():
    pass


@app.route("/api/add_scans", methods=["POST"])
def add_scans():
    data = request.data
    data = loads(data)
    ip = data.get("ip_address")
    scan = check_output(["python", "port_scanner.py", ip]).decode()
    return jsonify({"scan": scan})


if __name__ == "__main__":
    app.run()
