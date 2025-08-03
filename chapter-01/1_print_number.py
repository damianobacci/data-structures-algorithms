def print_number_version_one():
    number = 2

    while number <= 100:
        if number % 2 == 0:
            print(number)

        number += 1

def print_number_version_two(): # this will take half of steps as the previous version
    number = 2

    while number <= 100:
        if number % 2 == 0:
            print(number)

        number += 2