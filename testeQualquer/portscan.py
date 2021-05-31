import socket 
ip = "177.19.74.49"
port = [21, 22, 25, 80, 8080, 3306]
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
for i in port:
    conexao = s.connect_ex((ip.i))
    s.settimeout(0.2)
    if conexao == 0:
        print(i, ">>> OPEN")
    else:
        print(i, ">>> CLOSED")
