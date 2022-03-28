print(10 * (1 / 0))
# Traceback (most recent call last):
# File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
# print(4 + spam * 3)
# Traceback (most recent call last):
# File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
print('2' + 2)
# Traceback (most recent call last):
# File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str

# Tratamento de exceções;
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")

# Exemplos de uso do else: e do finally: ;
try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")
