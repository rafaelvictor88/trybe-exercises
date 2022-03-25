values_for_sum = input(
    'Digite valores naturais para somar(separe os somente com espaço): '
    )

array_of_values = values_for_sum.split()
counter = 0
total = 0
invalid_values = list()

while counter < len(array_of_values):
    if array_of_values[counter].isdigit() is True:
        integer_value = int(array_of_values[counter])
        total += integer_value
    else:
        invalid_values.append(array_of_values[counter])
    counter += 1

print("Erro ao somar valores, ", end='')
print(f"{invalid_values} é um valor inválido")
print(total)
