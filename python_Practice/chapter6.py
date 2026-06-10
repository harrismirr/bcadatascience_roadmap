#chapter 6 conditional expressions
#write a program to find the greatest of four numbers entered by the user 
a=int(input("Enter number 1:"))
b=int(input("Enter number 2:"))
c=int(input("Enter number 3:"))
d=int(input("Enter number 4:"))
if a > b and a > c and a > d:
    print("Greatest number is a:",a)
elif b > a and b > c and b > d:
    print("Greatest number is b:",b)
elif c > a and c > b and  c > d:
    print("Greatest number is c:",c)
else:
    print("Greatest number is d:",d)



#check weather a student has passed or failed
s1=int(input("Enter marks of subject1:"))
s2=int(input("Enter marks of subject 2:"))
s3=int(input("Enter marks of subject 3:"))
total_percentage=(s1+s2+s3)/3
if total_percentage >= 40 and s1 >= 33 and s2>=33 and s3 >= 33:
 print("student is passed")
else:
   print("student is failed")



#detect spam comments
comment =input("Enter your comment:")
if "make a lot of money" in comment:
 print("this is a spam comment")
elif "buy now" in comment:
   print("this is a spam comment")
elif "subscribe this" in comment:
   print("this is a spam comment")
elif "click this" in  comment:
   print("this is a spam comment")
else:
   print("This is not a spam")
#this checks  inside string is there any word or not
#example we say that 
#text="hello harris"
#print("harris" in text)
#if we run it we get output true



#check weather username contains less than 10 characters
username = input("Enter your username:")
if len(username) <10:
   print("Username contains less than 10 characters")
else:
   print("Username contains 10 or more characters")
 #len() is a function it tells us length of a string (how many characters)   





 #check weather a given name is present in a list or not
names= ["Harris","Ali","Sara","Ahmed"]
name = input("Enter your name:")
if name in names:
   print("Name is present in the list")
else:
   print("name is not present in the list")



#write a program to calculate grade of a student based on marks
marks=int(input("Enter your marks:"))
if marks >=90:
   print("Grade:A")
elif marks >=80:
   print("Grade:B")
elif marks >=70:
   print("Grade c")
elif marks >=60:
   print("Grade D")
elif marks >=50:
   print("Grade E")
else:
   print("F")


