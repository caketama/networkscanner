import json


def port_reader(ports):
    with open("ports.json", "r") as file:
        file = json.load(file)
        number = str(ports)
        try:
            port = file[number]["description"]
            return port
        except (KeyError, TypeError):
            pass
