#chapter2 variables and data types
#write a program to add two numbers 
#1 type 
a = 10
b = 20
sum = a + b
print("The sum is:",sum)

#2 type we can do it as 
a = int(input("Enter first number:"))
b = int(input("Enter second number:"))
sum = a + b
print("The sum is:",sum)






#find a reminder when a number is divided by z
#first of all % is denoted as z and , / as division, // as floor division, ** as power
#lets do 
#the above two methods we do it is as same but we use the sign % this 
a = 10
b = 20
remainder= a % b
print("Remainder is:",remainder) 





#check type od type of variable assigned using input() function 
a = input("Enter something")
print("you entered:", a)
print("Type of variable is:", type(a))

# remember these classes
# value         class
# 10             int (numbers)
#3.5             float (decimals)
#"hello"         str (text)
#true/flase      boolean 






#use comprison operator to check weather a is > b 

a = 34
b = 80
if a > b:
    print("a is greater")
else:
    print("a is not greater")

# > greater than 
# < less than
# >= greater or equal
# <= less or equal
# == equal
# != not equal





#write a program to find avg of two numbers entered by user
a=int(input("Enter first number:"))
b=int(input("Enter second number:"))
average = (a+b)/ 2
print("The average is:", average)





#write a program to calculate square of a number entered by user
a = int(input("Enter a number:"))
square = a ** a
print("square is:", square)


# completed 


    