import socket
import threading
from port_reader import port_reader
from sys import argv
from data import save

# from ports import port_numbers


def TCP_connect(ip, port_number, delay=.5):
    TCPsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
    TCPsocket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    TCPsocket.settimeout(delay)
    try:
        TCPsocket.connect((ip, port_number))
        if TCPsocket.connect:
            port_number = str(port_number)
            services = port_reader(port_number)
            print(port_number + " " + services)
            save(ip, port_number, services)
    except:
        pass


def scan_ports(host_ip, delay=3):

    threads = []  # To run TCP_connect concurrently
    # Spawning threads to scan ports
    for thread in range(10000):
        thread = threading.Thread(target=TCP_connect, args=(host_ip, thread, delay))
        threads.append(thread)

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
