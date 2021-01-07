# 1. Write a function called power which accepts a base and an exponent.
# The function should return the power of the base to the exponent.

<<<<<<< HEAD
# RECURSION EXAMPPLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

# def power(base, exponent):

#     if exponent == 0: 
#         return 1

#     return base * power(base, exponent - 1)

# result = power(2,0)

# print(result)

# RECURSION EXAMPLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
=======
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

<<<<<<< HEAD
# def factorial(x):

#     if x == 0: 
#         return 1

#     return x * factorial(x-1)

# result = factorial(4)

# print(result)
=======
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function

<<<<<<< HEAD
# def recursiveRange(x):

#     if x == 0:
#         return 0
    
#     return x + recursiveRange(x-1)

# result = recursiveRange(4)  

# print(result)

# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse

# def recursiveRange(x):

#     if len(x) == 0:
#         return x
    
#     return recursiveRange(x[1:]) + x[0]

# result = recursiveRange("abcdefgh")  

# print(result)

=======
# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse

>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.

<<<<<<< HEAD
# def palindrome(x):



=======
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them all

<<<<<<< HEAD
# def product(arr):

#     if len(arr) ==1:
#         return arr[0]

#     return arr[0] * product(arr[1:])


# list1 = product([1,2,3])

# print(list1)


=======
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877

# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in teh Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.
<<<<<<< HEAD


# def fib(n):

#     arr = [0,1]

#     for index in range(2,n+1):
#         a = arr[index - 1]
#         b = arr[index - 2]
#         arr.append(a+b)
#     return arr[n]

# result = fib(6)

# print(result)
=======
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877
