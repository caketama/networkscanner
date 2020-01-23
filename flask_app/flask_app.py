from flask import Flask, jsonify, request
from subprocess import run
from sqlite3 import connect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# TODO add error handling
# TODO check for duplicate scans
# TODO enter on scan
# TODO ddg search for services


@app.route("/api/add_scan", methods=["POST"])
def add_scans():
    data = request.get_json()
    ip = data.get("ip_address")
    if ip:
        run(["python", "port_scanner.py", ip])
        with connect("scans.db") as connection:
            cursor = connection.cursor()
            SQL = """SELECT ip_address, ports, services FROM scans
            WHERE ip_address=?"""
            scan = cursor.execute(SQL, (ip,)).fetchall()
            return jsonify({"scan": scan})
    else:
        return jsonify({"error": "fix me"})


if __name__ == "__main__":
    app.run(debug=True)
