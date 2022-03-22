# Percorra a lista do exercício 14 e imprima "Múltiplo de 3"
# se o elemento for divisível por 3.

from exercise14 import new_ratings

only_multiple_of_three = [
    rating for rating in new_ratings if rating % 3 == 0
    ]

print(only_multiple_of_three)
