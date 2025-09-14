print("program 1 : Numbers from 1 to 10")
i = 1
while i >=10:
 print(i)
i += 1
print("_" * 40)
print("program 2 : numbers from 10 to 1")
i = 10
while i >=1:
 print(i)
 i -= 1
 print("_" * 40)
print("program 3 : sum of natural numbers")
n=int(input("Enter a number :"))
i = 1
total = 0
while i <= n:
 total += i
 i += 1
print("sum is:", total)
print("_" * 40)
print("program 4 : foctorial calculator")
n =int(input("Enter a number :"))
fact = 1
i = 1
while i <= n:
 fact *= i
 i += 1
print("Factorial is:",fact)
print("_" * 40)
print("program 5 : multiplication table")
num=int(input("Enter a number :"))
i = 1
while i <= 10:
 print(num,"x" , i, "=" , num * i)
 i += 1
print("_" * 40)
print("program 6 : simple calculator")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number:"))
op = input("Enter operation(+,-,*,/) : ")
if op == "+" :
  print("Result:", num1 + num2)
elif op == "-" :
 print("Result :", num1 - num2)
elif op == "*" :
 print("Result :" , num1 * num2)
elif op == "/" :
 if num2 != 0 :
   print("Result :", num1 / num2)
 else:
  print("Division by zero is not allowed.")
else:
  print("Invalid operation.")
print("_" * 40)







      

