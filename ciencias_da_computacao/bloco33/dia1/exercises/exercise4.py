def show_the_bigger_name(array):
    bigger_name = ''
    for name in array:
        if len(name) > len(bigger_name):
            bigger_name = name
    return print(bigger_name)


list_of_names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

show_the_bigger_name(list_of_names)
