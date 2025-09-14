num = 7
if num > 0:
    print("Positive number")
elif num == 0 :
    print("Zero")
else:
    print("NEgative number")

a = int(input("Enter first number:"))
b = int(input("Enter second number:"))
c = int(input("Enter third number:"))
if a >= b and a >= c:
    print(a, "is the largest")
elif b >= a and b >= c:
    print(b, "is the largest")
else:
    print(c, "is the largest")


marks = int(input("Enter your marks"))
if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Grade Fail")


for i in range(1,6):
    print("Step",i)

count = 1
while count <= 5:
    print("Step",count)
    count += 1


total = 0
for i in range(1, 52):
    if i % 2 == 0:
        total += i
print("Sum of even numbers from 1 to 50 is:", total)


a, b =0, 1
count = 0
while count < 10:
    print(a)
a, b = b, a + b
count += 1


              
