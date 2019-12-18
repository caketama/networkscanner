import json


with open('ports.json', 'r') as file:
    file = json.loads(file)
    print(file['ports'])
