import json
import random


# with open('pokemons.json', 'r') as file:
#     pokemons = json.load(file)['results']
#     pokemons_name = []
#     for pokemon in pokemons:
#         pokemons_name.append(pokemon['name'])


# def sort_pokemon(pokemons):
# choose_pokemon = random.choice(pokemons)
# return choose_pokemon


# def guess_pokemon(pokemon):
#     play_guess = input('Quem é esse Pokémon? ')
#     if play_guess == pokemon:
#         print(f'Parabéns, você acertou!!! O Pokémon é {pokemon}.')
#     counter = 0
#     while counter < len(pokemon):
#         print('Vou te dar uma dica: {pokemon[counter]}')
#         counter += 1


# if __name__ == '__main__':
#     pokemon = sort_pokemon(pokemons_name)
#     guess_pokemon(pokemon)


# Solução do gabarito:
def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while (wrong_shot):
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if (shot == pokemon_name):
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]

    shot(pokemon_name)
