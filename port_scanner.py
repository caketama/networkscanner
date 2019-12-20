import socket
import threading
from ports import port_numbers
from port_reader import port_reader
from sys import argv


def TCP_connect(ip, port_number=range(10000), delay=3):
    TCPsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    TCPsock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    TCPsock.settimeout(delay)
    try:
        TCPsock.connect((ip, port_number))
        if port_number:
            port_number = str(port_number) + ": " + port_reader(port_number)
            print(port_number)
        # output[port_number] = "Listening"
    except:
        pass


def scan_ports(host_ip, delay=3):

    threads = []  # To run TCP_connect concurrently
    #    output = {}  # For printing purposes
    # Spawning threads to scan ports
    for i in range(10000):
        thread = threading.Thread(target=TCP_connect, args=(host_ip, i, delay))
        threads.append(thread)
        # , output))

    # Starting threads
    for i in range(10000):
        threads[i].start()

    # Locking the main thread until all threads complete
    for i in range(10000):
        threads[i].join()

    # Printing listening ports from small to large


#    for i in range(10000):
#        if output[i] == "Listening":
#            print(str(i) + ": " + output[i])


def print_ports(port_number):
    if port_number in port_numbers:
        print(str(port_number) + ": " + port_reader(port_number))


def main():
    host_ip = input("Enter host IP: ")
    scan_ports(host_ip)


if __name__ == "__main__":
    main()
