

# 1. Write a function called "greeting" that prints "hello world" to the console
<<<<<<< HEAD
# def greeting():
#     print("Hello World")
# greeting()

# 2. Execute (call/ run) the "greeting function"

# 3. Reduced code using function
# def students():
#     print("Dan")
#     print("Wendy")
# students()
# print("Day 1: Students in SRE class")
# print("lecture: git 101")
# students()
# print("Day 2: Students in SRE class")
# print("lecture: git 102")
# students()
# print("Day 3: Students in SRE class")
# print("lecture: python 101")
# students()
=======


# 2. Execute (call/ run) the "greeting function"

# 3. Reduce this code using functions

print("Day 1: Students in SRE class")
print("lecture: git 101")
print("Shu")
print("Thomas")
print("Gustavo")
print("Alim")
print("Day 2: Students in SRE class")
print("lecture: git 102")
print("Shu")
print("Thomas")
print("Gustavo")
print("Alim")
print("Day 3: Students in SRE class")
print("lecture: python 101")
print("Shu")
print("Thomas")
print("Gustavo")
print("Alim")
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877


# 4 Reduce the print statements for the  todolist code we worked on yesterday with a function

<<<<<<< HEAD
# todos = []
# index = 0
# while True:
#     index = 0
#     task = input(
#         "What would you like to do?\n1. add a item\n2.remove item\n3.Print items\n4.exit\n>>>   ")
#     if int(task) == 1:
#         todoItem = input("Please enter a todo list item >>>   ")
#         todos.append(todoItem)
#         # add item
#     elif int(task) == 2:
#         # remove item
#         print('Which item do you want to delete?')
#         while index < len(todos):
#             # print(todos[index])
#             print(f'{index + 1}.{todos[index]}')
#             index += 1
#         delItem = input("item# >> ")
#         delItemNum = int(delItem)
#         del todos[delItemNum - 1]
#     elif int(task) == 3:
#         while index < len(todos):
#             print(todos[index])
#             index += 1
#         # print items
#     elif int(task) == 4:
#         break
=======
todos = []
index = 0
while True:
    index = 0
    task = input(
        "What would you like to do?\n1. add a item\n2.remove item\n3.Print items\n4.exit\n>>>   ")
    if int(task) == 1:
        todoItem = input("Please enter a todo list item >>>   ")
        todos.append(todoItem)
        # add item
    elif int(task) == 2:
        # remove item
        print('Which item do you want to delete?')
        while index < len(todos):
            # print(todos[index])
            print(f'{index + 1}.{todos[index]}')
            index += 1
        delItem = input("item# >> ")
        delItemNum = int(delItem)
        del todos[delItemNum - 1]
    elif int(task) == 3:
        while index < len(todos):
            print(todos[index])
            index += 1
        # print items
    elif int(task) == 4:
        break
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# 5. Nested Functions

# 6. Functions with parameters
# Create a function that creates the following recommendation letter.
# The Parameters for the functions should be the first and last name person you
# are recommending

<<<<<<< HEAD
# def resume(first1,last1):

#     print(f"""
# {first1} {last1}
=======
# Karen Jones
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877
# 1234 Park St
# Anytown, Pennsylvania 12345

# April 14, 2019

# ABC College Admission’s Board
# 1234 Butler Ave
# Everywhere, CA 12345

# Dear ABC College Admission’s Board:

<<<<<<< HEAD
# My name is {first1} {last1}. I have served as a science teacher at Parktown High School for the past fifteen years and have had the privilege 
# to serve as Ryan Thomas’s teacher for the past three. I have also been Ryan’s advisor on the science academic team here at school. Due to his qualifications, 
# I feel that Ryan would be an excellent addition to your school.
# While he has been a student here, Ryan has always challenged himself academically, taking all of the AP courses that our school has to offer. 
# He has been captain of the academic team for the past two years, showing strong leadership qualities and organizational skills. 
# His superior written and verbal skills have far surpassed any student of his age.
# Ryan would bring much to your school, both in and out of the classroom. If you have any questions regarding Ryan’s qualifications,
# please contact me at (123) 555-5555 or at {first1}.{last1}@email.com.
=======
# My name is Karen Jones. I have served as a science teacher at Parktown High School for the past fifteen years and have had the privilege to serve as Ryan Thomas’s teacher for the past three. I have also been Ryan’s advisor on the science academic team here at school. Due to his qualifications, I feel that Ryan would be an excellent addition to your school.

# While he has been a student here, Ryan has always challenged himself academically, taking all of the AP courses that our school has to offer. He has been captain of the academic team for the past two years, showing strong leadership qualities and organizational skills. His superior written and verbal skills have far surpassed any student of his age.

# Ryan would bring much to your school, both in and out of the classroom. If you have any questions regarding Ryan’s qualifications, please contact me at (123) 555-5555 or at Karen.Jones@email.com.
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# Sincerely,


<<<<<<< HEAD
# {first1} {last1}
# Science Department Head
# Park Town High School
# """)

# first = input("FIrst Name") # executes letter for input from user
# last = input("Last Name")
# resume(first, last)

# resume("Ian", "Haddock") #Exectues Ian Haddock printed
# resume("Zack", "Haddock") #Executes Zack Haddock printed
=======
# Karen Jones
# Science Department Head
# Park Town High School
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877


# 7. Order of parameters
# In the last example, reverse the order of the arguments when the function is
# called (switch first name and last name) and look at the results


# 8 Write a function that accepts a List of numbers as an argument.
# Return a new List that includes the only the even numbers.


# 9 Args and Keyword Args
# use the recommendation letter exercise and name your arguments


# Return statements break the code block


# Placement of Functions


# Local Scope


# Local Variables

# Do parameters and local variables have the same scope?


# Global Variables


# Global Variables and Local Variables with the Same Names
