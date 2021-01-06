
d = {}

while True:

def phonebook():
    print("Electronic Phone Book")
    print("=" * 21)
    print(dedent("""
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entrys
    5. Quit
    """))
    choice = input("What do you want to do (1-5)? ")
phonebook()

    if choice == "1":
        print("Look up entry:")
        name = input("Name: ")
        if name in d:
            print(d[name])
        else:
            print("{} not found".format(name))
        phonebook()
    elif choice == "2":
        name = input("Name: ")
        number = input("Number: ")
        d[name] = number
        print("Entry stored for {}".format(name))
        phonebook()
    elif choice == "3":
        name = input("Name: ")
        del d[name]
        print("Deleted entry for {}".format(name))
        phonebook()
    elif choice == "4":
        for key in d:
            print("Found entry for {}: {}".format(key, d[key]))
        print("")
        phonebook()
    elif choice == "5":
        print("Bye!")
    else:
        print("Please enter a valid command")
        phonebook()


