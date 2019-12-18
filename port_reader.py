import json
from ports import port_numbers

with open("ports.json.bak", "r") as file:
    file = json.load(file)
    for number in port_numbers:
        if number in port_numbers:
            number = str(number)
            try:
                port = file[number]["description"]
                print(port)
            except (KeyError, TypeError):
                pass
#        print(ports)
#    description = file["443"]["description"]
#    print(description)
