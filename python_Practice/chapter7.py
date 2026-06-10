#chapter7 loops in python for and while loop
#write a program to print multiplication table of a given number using for loop
n =int(input("Enter a number:"))
for i in range(1, 100):# eg 1 to 100 this depends on us how many we want like i want 100
 print(n, "x",i, "=", n * i)




#greet all names that start with s 
I=["Harry", "sohan", "suhail","rahul"]
for name in I:
 if name.startswith("s"): #string function startswith()
  print("Hello MR", name)




#print multiplication table using while loop
n =int(input("Enter a number:"))
i=1
while i <=10:
 print(n, "x",i,"=",n*1)
 i+=1




#check weather a number is prime or not
n =int(input("Enter a number:"))
is_prime = True
for i in range(2, n):
 if n % i == 0:
  is_prime = False
  break
 if is_prime:
  print("Number is prime")
else:
 print("Number is not prime")





#find the sum of n natural numbers using while loop
n=int(input("Enter a number:"))
i=1
sum=0
while i<=n:
 sum += i
 i+=1
print("Sum is:",sum)




#Find the factorial of a given number using loop
n=int(input("Enter a number:"))
factorial =1
for i in range(1, n+1):
 factorial*=i
print("Factorial is:",factorial)





#print star pattern
#pattern
#*
#**
#***
#****
n=4
for i in range(1, n+1):
 print("*"*i)











