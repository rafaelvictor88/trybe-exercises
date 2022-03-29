import random

ATTEMPTS = 3

WORDS = ['Banana', 'Laranja', 'Limão']


def get_random_and_scramble_word(words):
    choose_word = random.choice(words)
    scrambled_word = ''.join(random.sample(choose_word, len(choose_word)))
    return scrambled_word, choose_word


def player_guesses():
    guesses = []
    for guess in range(ATTEMPTS):
        word = input('Adivinhe a palavra: ')
        guesses.append(word)
    return guesses


def verify_game_result(choose_word, guesses):
    if choose_word in guesses:
        print(f'Parabéns, você acertou a palavra era {choose_word}')
    else:
        print(f'Que pena, você errou! A palavra era {choose_word}')


if __name__ == '__main__':
    scrambled_word, choose_word = get_random_and_scramble_word(WORDS)
    print(f'A palavra é {scrambled_word}')
    guesses = player_guesses()
    verify_game_result(choose_word, guesses)

# Resultado conseguido com auxilio do gabarito;
