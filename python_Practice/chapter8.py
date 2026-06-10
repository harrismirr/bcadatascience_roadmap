#chapter 8 functions and recursions
#find greatestof 3 numbers using function
def greatest(a, b, c):
    if a>b and a>c:
        return a
    elif b>a and b>c:
        return b
    else:
        return c
x=int(input("Enter number 1:"))
y=int(input("Enter number 2:"))
z=int(input("Enter number 3:"))
print("Greatest is:", greatest(x,y,z))
#in this def(function start), () input parameters, return (output)





#convert function to ferheneit using function
#formula is F=(C * 9/5) + 32
def celsius_to_fahrenheit(c):
    return(c*9/5)+32
temp = float(input("Enter temperature in celsius:"))
print("Temperature in fahrenheit is:",
celsius_to_fahrenheit(temp))





#how to precvent print() from adding a new line 
#eg if we write print("hello")
#print("harris") the otput will be as 
#hello
#harris if we want this in one line so we have to write the code diffrently 
print("Hello" ,end="")
print("harris") 
#so we used end="" (itmeans new ine ki jagah spce add karo)





#find sum of first n natural numbers using recursion
#recursion means when jab function khud ko hi call krta hai 
def sum_n(n):
    if n==0:
        return n+sum_n(n-1)
num =int(input("Enter a number:"))
print("sum is:",sum_n(num))

#lets understand this step by step
#take sum_n(5)
#=5+sum_n(4)
#=5+4+sum_n(3)
#=5+4+3+sum_n(2)
#=5+4+3+2+sum_n(1)
#=5+4+3+2+1=sum_n(0)
#=5+4+3+2+1+0
#= 15 so  is the answer of  question


#print pattern using function
#pattern for n = 3
#***
#**
#*
def pattern(n):
    if n == 0:
        return
    print("*" *n)
    pattern(n-1)
pattern(3)




#covert inches into centimeters using function 
#formula 1 inch = 2.54cm
def inch_to_cm(inch):
    return inch* 2.54
value=float(input("Enter value in inche:"))
print("value in cm is:", inch_to_cm(value))






#write a functin to remove a given word from sa list and strip 
#it at the same time#
#eg we have list in that words are l=harry , rohan, shubham,an
#so we have to remove an and clean (strip) list rteturn krni h 
def remove_and_strip(word_list,word):
    new_list=[]
    for item in word_list:
        if item!=word:
            new_list.append(item.strip())
    return new_list 
l=["Harry","Rohan","shubham","an"]
print(remove_and_strip(l,"an"))



#completed

