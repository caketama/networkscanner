import socket
import threading
from port_reader import port_reader
from sys import argv
from data import save


def TCP_connect(ip, port_number, time_out=2):
    TCPsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    TCPsocket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    TCPsocket.settimeout(time_out)
    try:
        TCPsocket.connect((ip, port_number))
        if TCPsocket.connect:
            port_number = str(port_number)
            services = port_reader(port_number)
            save(ip, port_number, services)
            print(port_number + ": " + services)
    except:
        pass


def scan_ports(host_ip, time_out=2):

    threads = []  # To run TCP_connect concurrently
    # Spawning threads to scan ports
    for port in range(10000):
        port = threading.Thread(target=TCP_connect, args=(host_ip, port, time_out))
        threads.append(port)

    # Starting threads
    for thread in range(10000):
        threads[thread].start()

    # Locking the main thread until all threads complete
    for thread in range(10000):
        threads[thread].join()


def main():
    host_ip = argv[1]
    scan_ports(host_ip)


if __name__ == "__main__":
    main()
