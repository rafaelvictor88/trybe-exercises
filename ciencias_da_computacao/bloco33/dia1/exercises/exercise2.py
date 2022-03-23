list = [2, 3, 4, 5, 6, 7, 8, 9]


def arithmetic_average_calculator(array):
    total = 0
    for item in array:
        total = total + item

    return total / len(array)


print(arithmetic_average_calculator(list))
