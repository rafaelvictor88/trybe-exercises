def verify_if_is_triangle(size1, size2, size3):
    if size1 + size2 > size3 or size2 + size3 > size1 or size3 + size1 > size2:
        if size1 == size2 and size2 == size3:
            return print('Isto é um triângulo Equilátero')
        elif size1 == size2 or size2 == size3 or size3 == size1:
            return print('Isto é um triângulo Isósceles')
        elif size1 != size2 and size2 != size3 and size3 != size1:
            return print('Isto é um triângulo Escaleno')
    return print('Isto não é um triângulo')


verify_if_is_triangle(2, 3, 10)
