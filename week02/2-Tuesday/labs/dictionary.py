# 1. Create a dictionary called zodiac with the following inforation.
# Each key is the name of the zodiac

<<<<<<< HEAD
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

# key = zodiac["Aries"]
# print(key)

=======

# Aries - The Warrior
# Taurus - The Builder
# Gemini - The Messenger
# Cancer - The Mother
# Leo - The King
# Virgo -The Analyst
# Libra - The Judge
# Scorpio - The Magician
# Sagittarius - the Gypsy
# Capricorn - the Father
# Aquarius - The Thinker
# Pisces - TheMystic
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877


# 1a. Retrieve information about your zodiac from the zodiac dictionary

# 2. Given the following dictionary

<<<<<<< HEAD
# phonephonebook_dict = {

#     "Alice": "703-493-1834",
#     "Bob": "857-384-1234",
#     "Elizabeth": "484-584-2923"

# }

# print(phonephonebook_dict["Elizabeth"]) #2a

# phonephonebook_dict["Kareem"] = "938-489-1234" #2b

# del phonephonebook_dict["Alice"] #2c

# phonephonebook_dict["Bob"] = "968-345-2345" #2d

# print(phonephonebook_dict) #2e


# 2a. Print Elizabeth"s phone number
# 2b. Add a entry to the dictionary: Kareem"s number is 938-489-1234.
# 2c. Delete Alice"s phone entry.
# 2d. Change Bob"s phone number to "968-345-2345".
=======
phonebook_dict = {
    'Alice': '703-493-1834',
    'Bob': '857-384-1234',
    'Elizabeth': '484-584-2923'
}


phonebook_dict["Kareem"] = "938-489-1234"
# 2a. Print Elizabeth's phone number
# 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# 2c. Delete Alice's phone entry.
# 2d. Change Bob's phone number to '968-345-2345'.
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877
# 2e. Print all the phone entries.


# 3. Nested dictionaries

<<<<<<< HEAD
# ramit = {
#     "name": "Ramit",
#     "email": "ramit@gmail.com",
#     "interests": ["movies", "tennis"],
#     "friends": [
#         {
#             "name": "Jasmine",
#             "email": "jasmine@yahoo.com",
#             "interests": ["photography", "tennis"]
#         },
#         {
#             "name": "Jan",
#             "email": "jan@hotmail.com",
#             "interests": ["movies", "tv"]
#         }
#     ]
# }

# print(ramit["email"]) #3a
# print(ramit["interests"][0]) #3b
# print(ramit["friends"][0]["email"]) #3c
# print(ramit["friends"][1]["interests"][1]) #3d

# 3a. Write a python expression that gets the email address of Ramit.
# 3b. Write a python expression that gets the first of Ramit"s interests.
# 3c. Write a python expression that gets the email address of Jasmine.
# 3d. Write a python expression that gets the second of Jan"s two interests.
=======
ramit = {
    'name': 'Ramit',
    'email': 'ramit@gmail.com',
    'interests': ['movies', 'tennis'],
    'friends': [
        {
            'name': 'Jasmine',
            'email': 'jasmine@yahoo.com',
            'interests': ['photography', 'tennis']
        },
        {
            'name': 'Jan',
            'email': 'jan@hotmail.com',
            'interests': ['movies', 'tv']
        }
    ]
}
# 3a. Write a python expression that gets the email address of Ramit.
# 3b. Write a python expression that gets the first of Ramit's interests.
# 3c. Write a python expression that gets the email address of Jasmine.
# 3d. Write a python expression that gets the second of Jan's two interests.
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

<<<<<<< HEAD

# def histogram(word):
#     count = {}
#     for i in word:
#         if i not in count:
#             count[i] = 1
#         else:
#             count[i] +=1
#     return count

# print(histogram("banana"))


# string = input("Input a word: ")

# def histogram(string):
#     freq = {}
#     for i in string: 
#         freq[i] = freq.get(i, 0) + 1
#     return freq
# print(histogram(string))

# Word Summary
# Write a word_histogram function that takes a paragraph of 
# text as its input, and returns a dictionary containing the tally 
# of how many times each word in the alphabet was used in the text. 
# For example:

# def wordCount(string):
#     count = {}
#     for i in string.lower().split():
#         if i in count:
#             count[i] += 1
#         else:
#             count[i] = 1
#     return count
# print(wordCount("to be or not be to be or not to be to be or not to be"))


# Given a histogram tally (one returned 
# from either letter_histogram or word_histogram), 
# print the top 3 words or letters.

# import LetterSummary
# import wordSummary
# def top3(dict):
#     topList = []
#     for i in range(0, 3):
#         max1 = (max(dict.values()))
#         for item in dict:
#             if dict[item] == max1:
#                 topList.append(item)
#                 break
#         del dict[item]
#     print(topList)
# top3(LetterSummary.letter_histogram("bananas ssssss"))


# PRACTICE PHONEBOOK

# phonebook = {}

# while True:

#     print("""
#         Electronic Phone Book
#         +++++++++++++++++++++
#         1 - Add an entry
#         2 - Lookup an entry
#         3 - Delete an entry
#         4 - Print all entries
#         5 - Exit""")
#     choice = input("Enter an option: ")

#     if choice == "1":
#         name = input("Name: ")
#         phone = input("Telephone Number: ")
#         phonebook[name] = phone

#     elif choice == "2":
#         name = input("Name: ")
#         print("Number:", phonebook[name])

#     elif choice == "3":
#         name = input("Name: ")
#         del phonebook[name]
    
#     elif choice == "4":
#         print(phonebook)
    
#     elif choice == "5":
#         break

#     else:
#         print("Invalid option.")
=======
# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# >>> word_histogram('To be or not to
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877
