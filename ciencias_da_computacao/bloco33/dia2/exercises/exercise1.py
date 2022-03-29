def name_in_inverted_ladder(name):
    for removed_letter in range(len(name)):
        for index in range(len(name) - removed_letter):
            print(name[index], end='')
        print()


name_in_inverted_ladder('rafael')
