from flask import Flask, jsonify, request
from subprocess import run
from sqlite3 import connect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/add_scan", methods=["POST"])
def add_scans():
    data = request.get_json()
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
