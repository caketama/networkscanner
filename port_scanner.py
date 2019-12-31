import socket
import threading
from port_reader import port_reader
from ports import port_numbers

# from sys import argv


def TCP_connect(ip, port_number, delay=3):
    # result = set()
    TCPsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    TCPsocket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    TCPsocket.settimeout(delay)
    try:
        TCPsocket.connect((ip, port_number))
        if TCPsocket.connect:
            port_number = str(port_number) + ": " + port_reader(port_number)
            print(port_number)
            # result.add(port_number)
            # print(result)
        # return result
    except:
        pass


def scan_ports(host_ip, delay=3):

    threads = []  # To run TCP_connect concurrently
    # Spawning threads to scan ports
    for i in range(10000):
        thread = threading.Thread(target=TCP_connect, args=(host_ip, i, delay))
        threads.append(thread)

    # Starting threads
    for i in range(10000):
        threads[i].start()

    # Locking the main thread until all threads complete
    for i in range(10000):
        threads[i].join()


# def print_ports(port_number):
#     ip = input("Enter host IP: ")
#     TCP_connect(ip)
#     if port_number:
#         print(str(port_number) + ": " + port_reader(port_number))


def main():
    host_ip = input("Enter host IP: ")
    scan_ports(host_ip)
    # print(TCP_connect(host_ip,ports))
    # ip = "192.168.1.214"
    # print(scan_ports(host_ip))
    # print(port_reader(scan_ports(host_ip)))


if __name__ == "__main__":
    main()
