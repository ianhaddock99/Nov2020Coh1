#Lists

# day 1 = "Mon"
# day 2 = "Tues"
# day 3 = "Wed"
# day 4 = "Thurs"
# day 5 = "Fri"
# day 6 = "Sat"
# day 7 = "Sun"

#days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

# days[0]
# print(days)
# print(days[0])
#days[0] = "Nothing"/changes sunday to nothing

#days.append("Hello")

# numsArr = [5, 6, 8, 2, 5, 4.5, "hello", True]

# count = 0


# print(len(numsArr))

# while (count < len(numsArr)):
#     print(f'{count}: {numsArr[count]}')
#     count += 1

#todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# addditionalTodos = ["binge watch a show", "go to sleep"]

# todos.extend(addditionalTodos)

# print(todos)

#del todos[0] # delets first item in list

#del todos[1:3] # delets items 1 and 2
#print(todos)

#nums = [4, 6, 7, 8, 9, 5]
#  sublist = nums[1:4] # gives back 6 7 8 SLICING
#  print(sublist)

# nums.insert(3, "inserted here") #inserts into 3 spot

# poppedElement = nums.pop() # takes last element off list
# print(poppedElement)
# print(nums)
# print(nums)

#result = nums.index(4) # returns index value in this case 0
#print(result)

# matrix = [[0,1], [2,3]]

# matrix[0][1]

# print(matrix[0][1]) #returns 1 from [0,1]

# a = [ [2, 4, 6, 8 ],  
#     [ 1, 3, 5, 7 ],  
#     [ 8, 6, 4, 2 ],  
#     [ 7, 5, 3] ]

# outterIndex = 0
# innerArrIndex = 0

# while outterIndex < len(a):
#     print(a[outterIndex])

#     while innerArrIndex < len(a[outterIndex]):
#         print(a[outterIndex][innerArrIndex])
#         innerArrIndex += 1

#     innerArrIndex = 0
#     outterIndex += 1

# alphabet = "abcdefghijklmnopqrstuvwxyz" # prints alphabet vertically
# index = 0
# while index < len(alphabet):
#     print(alphabet[index])
#     index += 1

# alphabet = "abcdefghijklmnopqrstuvwxyz" # convert string to list
# alphalist = list(alphabet)
# alphalist[0] = "4"
# print(alphalist)

# alphabet = "abcdefghijklmnopqrstuvwxyz" #convert list into a string
# alphalist = list(alphabet)
# alphalist[0] = "4"
# print(alphalist)
# alphabet = "".join(alphalist)
# print(alphabet)

# alphabet = "abcdefghijklmnopqrstuvwxyz" #prints in reverse
# alph = list(alphabet)
# print(alph)
# alph.reverse()
# print(alph)

# result = range(1,20,3)

# print(list(result))

# names = ["Claude","Ian","Zach","Matthew", "Kim","Susan"] #prints individual names

# for nameElement in names:
#     print(nameElement)

# alphabet = "abcdefghijklmnopqrstuvwxyz"

# for letter in alphabet:
#     print(letter)

# for num in range(0,6):
#     print(num)

#FUNCTIONS

# def myFunction():
#     print("Hello World")
#     print("Hello World")
#     print("Hello World")

# myFunction()

# def loops():

#     for i in range(5):
#         print("Hello World")

# loops()
# print('---------------------------------')
# loops()

# def add():
#     a = 4
#     b = 4
#     print(a + b)
# add()


# def add(a,b):
#     print(a + b)
# add(4,4) #8
# add(10,6) #16

# def add(a,b):
#     print("inside",a + b)

# result = add(5, 8)
# print("outside",result)

# def takeShower():
#     return "Showering"

# def eatBreakfast():
#     meal = sorted
#     return f"eating {meal}"

# def cookFood():
#     foodList = ["Oatmean", "eggs"]

#     return foodList[0]

# def wakeUp():
#     takeShower()

#     eatBreakfast()

#     print("go to work")
    

# if True:
#     print("inside of if")

# wakeUp()

# while False:
#     pass


# def multiple(a, b, c):

#     return a * a, b * b, c * c


# var1, var2, var3 = multiple(2, 5, 8)

# print(var1,var2,var3)

# def square(side):

#     if side == 0:
#         return None
#     return side * (2* side)

# result = square(0)

# print(result)

# import random


# def getAnswer(answerNumber):
#     if answerNumber == 1:
#         return "It is certain"
#     elif answerNumber == 2:
#         return "It is decidely so"
#     elif answerNumber == 3:
#         return 'Yes'
#     elif answerNumber == 4:
#         return 'Reply hazy try again'
#     elif answerNumber == 5:
#         return 'Ask again later'
#     elif answerNumber == 6:
#         return 'Concentrate and ask again'
#     elif answerNumber == 7:
#         return 'My reply is no'
#     elif answerNumber == 8:
#         return 'Outlook not so good'
#     elif answerNumber == 9:
#         return 'Very doubtful'

# r = random.randint(1, 9)
# fortune = getAnswer(r)
# print(fortune)
# random.randit(1, 9)

# GlobalA = 5
# spam = " global spam"

# def someFunction(a):
#     localA = 5
#     print(a)
#     print(GlobalA)
    
#     global spam 
#     spam = "local spam"
#     # print(spam)

# if True:
#     print("Hello World")

# someFunction(5)
# someFunction(4)
# someFunction(5)

# print(spam)
# print("global space")

# TAX_RATE = .09  # 9 percent tax
# COST_PER_SMALL_WIDGET = 5.00
# COST_PER_LARGE_WIDGET = 8.00

# def calculateCost(nSmallWidgets, nLargeWidgets):
#     subTotal = (nSmallWidgets * COST_PER_SMALL_WIDGET) + (nLargeWidgets * COST_PER_LARGE_WIDGET)
#     taxAmount = subTotal * TAX_RATE
#     totalCost = subTotal + taxAmount
#     return totalCost

# total1 = calculateCost(4, 8)  #  4 small and 8 large widgets
# print('Total for first order is', total1)
# total2 = calculateCost(12, 15)

# def callMe():
#     if True:
#         pass
#     else
#         callMe()

# callMe()

# for num in range(1, 11):
#     print(num)

# def loopNTime(n):
#     if (n <=1):
#         return "complete"
#     return loopNTime(n-1)

#----------------------------------------------------

# Dictionary CRUD


# myDictionary = {
#     "firstName" : "Ian",
#     "LastName"  : "Haddock"
# }

# name =myDictionary["firstName"]
# print(name)

# myDictionary = {
#     "firstName" : "Ian",
#     "LastName"  : "Haddock"
# }

# name = myDictionary.get("middleName")

# print(name)

# myDictionary = {

#     "firstName" : "Ian",
#     "LastName"  : "Haddock"

# }

# isValid = "middleName" in myDictionary

# print(isValid)

# myDictionary = {

#     "firstName" : "Ian",
#     "LastName"  : "Haddock"

# }

# myDictionary["firstName"] = "Jacob"

# print(myDictionary)

# myDictionary = {

#     "firstName" : "Ian",
#     "LastName"  : "Haddock"

# }

# keys = myDictionary.keys()

# print(keys)

# myDictionary = {

#     "firstName" : "Ian",
#     "LastName"  : "Haddock"

# }

# values = myDictionary.values()

# print(values)

# myDictionary = {

#     "firstName" : "Ian",
#     "LastName"  : "Haddock"

# }

# del myDictionary["firstName"]

# print(myDictionary)

# myDictionary = {

#     "firstName" : "Ian",
#     "LastName"  : "Haddock"

# }

# values = myDictionary.values()

# print(values)


#DRILLING DOWN
# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# print(contact[1]["phone"]["cell"])



#CREATES FILE AND ADDS TXT TO IT

# file_handle = open("hello.txt", "w")

# file_handle.write("Hello World")

# file_handle.close()



#TAKES TXT FROM ANOTHER FILE AND PRINTS TO CURRENT TERMINAL
# file_handle = open("declaration.txt", "r")

# contents = file_handle.read()

# file_handle.close()

# print(contents)

#USED WHEN QUITTING TO SAVE TO FILE

# import pickle

# zodiac = {
#     "Aries" : "The Warrior",
#     "Taurus" : "The Builder",
#     "Gemini" : "The Messenger",
#     "Cancer" : "The Mother",
#     "Leo" : "The King",
#     "Virgo" : "The Analyst",
#     "Libra" : "The Judge",
#     "Scorpio" : "The Magician",
#     "Sagittarius" : "the Gypsy",
#     "Capricorn" : "the Father",
#     "Aquarius" : "The Thinker",
#     "Pisces" : "TheMystic",
# }

# with open("zodiac.pickle", "wb") as fx:
#     pickle.dump(zodiac, fx)

# TO PULL BACK OUT SAVED DATA FROM A FILE
# import pickle

# with open('zodiac.pickle', 'rb') as fh:
#     data = pickle.load(fh)
# print(data)


#===============================================================#

# class Button:
#     def __init__(self):
#         self.count = 0
    
#     def click(self):
#         self.count +=1

#         if(self.count > 2):
#             print("Do you need help")
#             self.count = 0

# navButton = Button()
# helpButton = Button()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# navButton.click()
# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")


#Object oriented programming

# Class

# import datetime  # we will use this for date objects


# class Greeting:

#   def say_hello(self): #functions
#     print("Hello there!")

# greet = Greeting() #greet is obect
# greet.say_hello()

# greet1 = Greeting() #greet1 is an object
# greet1.say_hello()


# class Person:
#   def __init__(self, firstname, lastname, age, city):
#     self.firstname = firstname
#     self.lastname = lastname
#     self.age = age
#     self.city = city

#   def say_hello(self): #functions
#     print(f"Hello there! {self.firstname} {self.lastname}")

# greet = Person("Ian", "Haddock", 34, 'Atlanta')

# greet.say_hello()

# greet1 = Person("Joe", "Haddk", 31, 'Atlaa')

# greet1.say_hello()
#   def greet(self):
#     self._greet()

#   def _greet(self):
#     self.count += 1
#     if self.count > 1:

# # Creating Instance Methods


# class Person:
#   def greet(self):
#     print("Hello")


# me = Person()
# me.greet()

# # Working With Constructors


# class MyClass:
#     def __init__(self):
#       print("Upon Initialization: Hello!")

#     def instance_method(self):
#       print("hello instance")

#     def class_method():
#       print("Hello class method!")


# test = MyClass()
# test.instance_method()
# MyClass.class_method()
# test.class_method()


# class Person:
#     def __init__(self, name, surname, birthdate, address, telephone, email):
#         self.name = name
#         self.surname = surname
#         self.birthdate = birthdate
#         self.address = address
#         self.telephone = telephone
#         self.email = email

#     def age(self):
#         today = datetime.date.today()
#         age = today.year - self.birthdate.year
#         if today < datetime.date(today.year, self.birthdate.month,
#         self.birthdate.day):
#             age -= 1
#         return age

# class Person:

#     def __init__(self, name, lastName, birthdate, address, telephone, email):
#         self.name = name
#         self.lastName = lastName
#         self.birthdate = birthdate
#         self.address = address 
#         self.telephone = telephone
#         self.email = email
#         self.friends = []
    
#     def print_contact_info(self):
#         print(sonny.email, sonny.telephone)

# sonny = Person("sonny", "guy", "11/01/20", "1234 place dr", "404-123-4509", "sonny@hotmail.com")
# sonny.print_contact_info()

# class Person:
#     def __init__(self, firstName, lastName, email):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.email = email
#         self.friends = []
#     def print_contact_info(self):
#         for friend in self.friends:
#             print(f'{friend.firstName} {friend.lastName}  {friend.email}')
#     def add_friend(self, friendObj):
#         self.friends.append(friendObj)
# jordan = Person("Jordan", "Rivers", "Jordan@dc.com")
# michael = Person("Michel", "Cook", "Michael@dc.com")
# micah = Person("Micah", "Peterson", "Micah@dc.com")
# # jordan.friends.append(michael)
# # jordan.friends.append(micah)
# jordan.add_friend(michael)
# jordan.add_friend(micah)
# jordan.print_contact_info()
# print(len(jordan.friends))


    # def age(self):
    #     pass

# michael = Person("mike", "1", "2", "3", "4","5")

# # Instance Variables
# class Person: 

#   def __init__(self, name, email, phone):
#     self.name = name
#     self.email = email
#     self.phone = phone

#   def greet(self, other_person):
#     print('Hello {}, I am {}!'.format(other_person.name, self.name))

# sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
# jordan = Person("Jordan", "jordan@hotmail.com", "495-411-5168")

# sonny.greet(jordan)
# jordan.greet(sonny)

# print(sonny.email, sonny.phone)
# print(jordan.email, jordan.phone)


# class Person:
#   GlobalPerson = "Zelda"

#   def __init__(self, name):
#     self.name = name

#   def greet(self, friend):
#     print("Hello {} and {} and {}".format(
#         self.name, friend, self.GlobalPerson))


# me = Person('Paul')
# me.greet('Pepper')
# matt = Person('Matt')
# matt.greet('Eric')
# travis = Person('Travis')
# travis.greet('Hussein')
# Person.GlobalPerson = "Skyler"
# me.greet('Pepper')
# matt.greet('Eric')
# travis.greet('Hussein')

# # Creating Class Methods


# class MyClass:
#       def SayHello():
#         print("Hello there!")


# MyClass.SayHello()


# # Class Variables

# class MyClass:
#     Greeting = ""

#     def SayHello(self):
#             print("Hello {0}".format(self.Greeting))


# MyClass.Greeting = "Zelda"


# # MyClass.SayHello()
# test = MyClass()
# test.SayHello()
# test2 = MyClass()
# test.SayHello()

# # More Class Patterns


# class Person:
#   def __init__(self, name):
#     self.name = name
#     self.count = 0

#   def greet(self):
#     self._greet()

#   def _greet(self):
#     self.count += 1
#     if self.count > 1:
#       print("Stop being so nice")
#       self.__reset_count()
#     else:
#       print("Hello", self.name)

#   def __reset_count(self):
#     self.count = 0

# # Accessor Modifiers in Python


# class Test(object):
#     def __init__(self):
#         self.__a = 'a'
#         self._b = 'b'


# t = Test()
# t._b
# # 'b'

# t.__a
# # Traceback (most recent call last):
# #   File "<stdin>", line 1, in <module>
# # AttributeError: 'Test' object has no attribute '__a'

# # Inheritance


# class Animal:
#   def __init__(self, name):
#     self.name = name


# class Dog (Animal):
#   def woof(self):
#     print("Woof")


# class Cat (Animal):
#   def meow(self):
#     print("Meow")

# # Implicit Inheritance
#     class Parent(object):
#         def implicit(self):
#             print("PARENT implicit()")

#     class Child(Parent):
#         pass
#     dad = Parent()
#     son = Child()
#     dad.implicit()
#     son.implicit()

# # Override Explicitly
#     class Parent(object):
#         def override(self):
#             print("PARENT override()")

#     class Child(Parent):
#         def override(self):
#             print("CHILD override()")
#     dad = Parent()
#     son = Child()
#     dad.override()
#     son.override()

# # Alter Before and After


# class Parent(object):
#         def altered(self):
#             print("PARENT altered()")
#     class Child(Parent):
#         def altered(self):
#             print("CHILD, BEFORE PARENT altered()")
#             super(Child, self).altered()
#             print("CHILD, AFTER PARENT altered()")
#     dad = Parent()
#     son = Child()
    
# # THE REASON FOR SUPER()
# class SuperFun(Child, BadStuff):
#     pass

# # Using super() with init
# class Child(Parent):
#     def __init__ (self, stuff):
#         self.stuff = stuff
#         super(Child, self).__init__()
        
# # COMPOSITION
# class Other(object):
#     def override(self):
#         print("OTHER override()")
#     def implicit(self):
#         print("OTHER implicit()")
#     def altered(self):
#         print("OTHER altered()")
            
# class Child(object):
#         def __init__(self):
#             self.other = Other()
#         def implicit(self):
#             self.other.implicit()
#         def override(self):
#             print("CHILD override()")
#         def altered(self):
#             print("CHILD, BEFORE OTHER altered()")
#             self.other.altered()
#             print("CHILD, AFTER OTHER altered()")

# # Student Management System Using Composition
# class Student(object):
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
#     def printStudent(self):
#         print(f"{self.firstName} {self.lastName} campus: {self.campus}")
        
# class Campus(object):
#     def __init__(self):
#         self.students = []
#     def addStudent(self, firstName, lastName, campus):
#         temp  = Student(firstName, lastName, campus)
#         self.students.append(temp)
#     def showCurrentStudent(self):
#         for studentObject in self.students :
#             print(f"{studentObject.firstName} {studentObject.lastName} campus: {studentObject.campus}")
            
# # Student Management System Using Composition
# management = Campus()
# management.addStudent("Sabrina", "Goldfarb", "Houston")
# management.addStudent("Michael", "Dao", "Houston")
# management.addStudent("Cindy", "Smith", "Atlanta")
# management.addStudent("Alfie", "Santos", "Houston")
# management.showCurrentStudent()

# class Student:
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
#     def printStudent(self):
#         print(f"{self.firstName} {self.lastName} campus: {self.campus}")
# class Campus:
#     def __init__(self):
#         self.students = []
#     def addStudent(self, firstName, lastName, campus):
#         student = Student(firstName, lastName, campus)
#         self.students.append(student)
#     def showCurrentStudents(self):
#         for studentObj in self.students:
#             print(f'{studentObj.firstName} {studentObj.lastName} {studentObj.campus}')
# dc = Campus()
# dc.addStudent('Kanny', 'Mohommad', 'Houston')
# dc.addStudent('Matthew', 'Chun', 'Seattle')
# dc.addStudent('Kim', 'Long', 'Atlanta')
# dc.addStudent('Joe', 'Stocks', 'Houston')
# dc.showCurrentStudents()

class AccountHolder:
    def __init__(self, fName, accountType, status, balance):
        self.fName = fName
        self.accountType = accountType
        self.status = status
        self.balance = balance

class Bank:
    def __init__(self, name, address):
        self.name = name 
        self.address = address 
        self.accounts = []

    def open_new_account(self, fName, accountType, status, balance):
        newAccount = AccountHolder(fName, accountType, status, balance)
        self.accounts.append(newAccount)

    def show_account_holder(self):
        for acctObject in self.fName:
            print(f"Account holder is {acctObject.fName}")
    
    def show_bank_balance(self):
        pass

var = Bank()
var.show_account_holder("Ian") 
