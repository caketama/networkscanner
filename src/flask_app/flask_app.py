from flask import Flask, jsonify, request
from json import loads
from subprocess import check_output
# from data import save_port

app = Flask(__name__)


@app.route("/api/scan", methods=["POST"])
def scan():
    data = request.data
    data = loads(data)
    ip = data.get("ip_address")
    scan = check_output(["python", "port_scanner.py", ip]).decode()
    scan = scan.split("\n")
    # print(scan)
    # ports = [scan.split(":")[0] for scan in scan]
    for service in scan:
        try:
            print(service.split(":")[1])
        except IndexError:
            pass
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
