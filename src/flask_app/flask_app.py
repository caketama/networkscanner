from flask import Flask, jsonify, request
import json
from subprocess import check_output

app = Flask(__name__)


@app.route("/api/scan", methods=["POST"])
def scan():
    data = request.data
    data = json.loads(data)
    print(data)
    ip = data.get("ip_address")
    scan = check_output(["python", "port_scanner.py", ip]).decode()
    print(scan)
    return jsonify({"scan": scan})


@app.route("/api/get_scans", methods=["GET"])
def get_scans():
    pass


@app.route("/api/post_scans", methods=["POST"])
def post_scans():
    pass


@app.route("/api/add_scans", methods=["POST"])
def add_scans():
    pass


if __name__ == "__main__":
    app.run()
