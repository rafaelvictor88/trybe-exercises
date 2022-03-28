with open('arquivo_example.txt', mode='r') as file:
    reproved_students = []
    for line in file:
        line_content = line.split()
        if int(line_content[1]) < 6:
            reproved_students.append(line_content[0])

    file_to_return = open('reproved_students_file.txt', mode='w')
    for students in reproved_students:
        file_to_return.write(f'{students}\n')
