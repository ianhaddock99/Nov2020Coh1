
# class Student: # 1. Create an empty class called "Student"
#     def __init__(self, name):
#         self.name = name

#     def greeting(self):                              
#         return f"Good morning {self.name}" 


# veronica = Student("Veronica")
# ian = Student("ian")
# mary = Student("mary")
# john = Student("john")
# beth = Student("beth")


<<<<<<< HEAD
=======
#2. Create 5 students objects (instances of the class "Student") of "Student" types
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7

# print(veronica.greeting())
# print(ian.greeting())
# print(mary.greeting())
# print(john.greeting())
# print(beth.greeting())

<<<<<<< HEAD
# 2. Create 5 students objects (instances of the class "Student") of "Student" types
# 3a. Create a "greeting" method inside of the class "Student" class that
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}"
# 4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.
# 5a. Create a constructor for the Student class.
# 5b. Create a print statement inside of the constructor
# 5c. Run your lab.py again and you should see a print statement for each student object
# That you created
=======
#3a. Create a "greeting" method inside of the class "Student" class that 
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}" 


#4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

#5a. Create a constructor for the Student class. 
#5b. Create a print statement inside of the constructor
#5c. Run your lab.py again and you should see a print statement for each student object 
# That you created 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7


#6a. Pass in "name" as a parameter to your Student constructor. 
#6b. Create an instance variable for name
#6c. Refactor your greeting method by removing the name parameter and 
# adding a "self" in front of the printed "name" variable in the return statement 
#6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated 

#7. Class Methods
#7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument. 
#7b. call the campus method by invoking Student.campus()
#7c. Call the campus method on each of the student objects 
#7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

#8. Class Variables 
#8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
#8b. Print to the console each class variable for each of the student objects, i.e. 
# Michah.cohort 
#8c. Refactor your class method to print out the class variable when it is called 
#8d. Call the class method on the class (i.e. Student.campus())
#8e. Call the class method on each object (i.e. Dan.campus())

#9. Accessor Modifiers 
# Refactor your constructor to take a parameter for studentID
#9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
#9b. Print the studentID value to the console
# Change the value of studentID to __studentID 
# Print the value to the console (you should get an error)


#. Inheritance 

# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"

# Create a new class called Hybrid that inherits from the Car class
#  with the following method: CarType which prints "I am a hybrid car" 


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car" 

# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance 
# Call the method Car Details on each instance



# Add the following instance variables to the Car class :
# - make 
# - model 
# - color

# class Car:
#     def __intit__(self, make, model, color):
#         self.make = make
#         self.model = model
#         self.color = color

#     def carDetails(self):
#         print("deets of car")

# class Hybrid(Car):
#     def CarType(self):
#         print("I am a hybrid car")

# class Electric(Car):
#     def CarType(self):
#         print("I am a electric car")

# prius = Hybrid("Honda", "prius", "lime green")

# tesla = Electric("tesla", "model-s", "red")

# print(prius.make)
# prius.carType()
# prius.carDetails()

# print(tesla.make)
# tesla.carType()
# tesla.carDetails()









# Implicit Inheritance 

#. Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION

<<<<<<< HEAD
"""

Added a store. The hero can now buy a tonic or a sword. A tonic will add 2 to the hero's health wherease a sword will add 2 power.

"""



import random

import time



class Character(object):

    def __init__(self):

        self.name = '<undefined>'

        self.health = 10

        self.power = 5

        self.coins = 20



    def alive(self):

        return self.health > 0



    def attack(self, enemy):

        if not self.alive():

            return

        print("{} attacks {}".format(self.name, enemy.name))

        enemy.receive_damage(self.power)

        time.sleep(1.5)



    def receive_damage(self, points):

        self.health -= points

        print("{} received {} damage.".format(self.name, points))

        if self.health <= 0:

            print("{} is dead.".format(self.name))



    def print_status(self):

        print("{} has {} health and {} power.".format(self.name, self.health, self.power))



class Hero(Character):

    def __init__(self):

        self.name = 'hero'

        self.health = 10

        self.power = 5

        self.coins = 20



    def restore(self):

        self.health = 10

        print("Hero's heath is restored to {}!".format(self.health))

        time.sleep(1)



    def buy(self, item):

        self.coins -= item.cost

        item.apply(hero)



class Goblin(Character):

    def __init__(self):

        self.name = 'goblin'

        self.health = 6

        self.power = 2



class Wizard(Character):

    def __init__(self):

        self.name = 'wizard'

        self.health = 8

        self.power = 1



    def attack(self, enemy):

        swap_power = random.random() > 0.5

        if swap_power:

            print("{} swaps power with {} during attack".format(self.name, enemy.name))

            self.power, enemy.power = enemy.power, self.power

        super(Wizard, self).attack(enemy)

        if swap_power:

            self.power, enemy.power = enemy.power, self.power



class Battle(object):

    def do_battle(self, hero, enemy):

        print("=====================")

        print("Hero faces the {}".format(enemy.name))

        print("=====================")

        while hero.alive() and enemy.alive():

            hero.print_status()

            enemy.print_status()

            time.sleep(1.5)

            print("-----------------------")

            print("What do you want to do?")

            print("1. fight {}".format(enemy.name))

            print("2. do nothing")

            print("3. flee")

            print("> ", end=' ')

            keyinput = int(input())

            if keyinput == 1:

                hero.attack(enemy)

            elif keyinput == 2:

                pass

            elif keyinput == 3:

                print("Goodbye.")

                exit(0)

            else:

                print("Invalid input {}".format(input))

                continue

            enemy.attack(hero)

        if hero.alive():

            print("You defeated the {}".format(enemy.name))

            return True

        else:

            print("YOU LOSE!")

            return False



class Tonic(object):

    cost = 5

    name = 'tonic'

    def apply(self, character):

        character.health += 2

        print("{}'s health increased to {}.".format(character.name, character.health))



class Sword(object):

    cost = 10

    name = 'sword'

    def apply(self, hero):

        hero.power += 2

        print("{}'s power increased to {}.".format(hero.name, hero.power))



class Store(object):

    # If you define a variable in the scope of a class:

    # This is a class variable and you can access it like

    # Store.items => [Tonic, Sword]

    items = [Tonic, Sword]

    def do_shopping(self, hero):

        while True:

            print("=====================")

            print("Welcome to the store!")

            print("=====================")

            print("You have {} coins.".format(hero.coins))

            print("What do you want to do?")

            for i in range(len(Store.items)):

                item = Store.items[i]

                print("{}. buy {} ({})".format(i + 1, item.name, item.cost))

            print("10. leave")

            input = int(input("> "))

            if input == 10:

                break

            else:

                ItemToBuy = Store.items[input - 1]

                item = ItemToBuy()

                hero.buy(item)



    if __name__ == "__main__":

    hero = Hero()

    enemies = [Goblin(), Wizard()]

    battle_engine = Battle()

    shopping_engine = Store()



    for enemy in enemies:

        hero_won = battle_engine.do_battle(hero, enemy)

        if not hero_won:

            print("YOU LOSE!")

            exit(0)

        shopping_engine.do_shopping(hero)



    print("YOU WIN!")
=======

>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
