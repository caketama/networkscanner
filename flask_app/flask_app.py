from flask import Flask

app = Flask(__name__)


@app.route('api/get_scans', methods=["GET"])
def get_scans():
    pass


@app.route('api/post_scans', methods=["POST"])
def post_scans():
    pass


@app.route('api/add_scans', methods=["POST"])
def add_scans():
    pass


if __name__ == "__main__":
    app.run()
