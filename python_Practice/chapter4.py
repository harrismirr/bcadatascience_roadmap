#chapter4 lists and tuples
#write a program to store seven fruits in a list enetered by an user
fruits =[]
f1 = input("Enter fruit 1:")
f2 = input("Enter fruit 2:")
f3 = input("Enter fruit 3:")
f4 = input("Enter fruit 4:")
f5 = input("Enter fruit 5:")
f6 = input("Enter fruit 6:")
f7 = input("Enter fruit 7:")
fruits =[f1,f2,f3,f4,f5,f6,f7]
print(fruits)

#one more method to make list
fruits =[]
for i in range(7):
    fruit=input("Enter fruit:")
    fruits.append(fruit)
print(fruits)







#write a program to accept marks of 6 students amfd display thrm in a sorted manner 
marks = []
for i in range(6):
    m = int(input("Enter marks:"))
    marks.append(m)
marks.sort()
print("Sorted marks:",marks)







#check the tuple type cannot be changed in pyhton 
#(tuple is immutable it means we cannot change the tuple)
a=(1,2,3,4)
a[0] = 5
print(a)
# concept list and tuple 
#  syntax  []      ()
#        mutable   immutbale 
# in both indexing start from 0,1,2,3etc
# eg list 
numbers = [1,2,3]
numbers[0] = 10
print(numbers)
#output will be (10,2,3)







#write a program to sum a list with 4 numbers 
#means in list there are four numbers we have to to get the sum 
numbers = [10,20,30,40]
print(sum(numbers))
#alternate method
mumbers = [10,20,30,40]
total = 0
for num in numbers:
    total = total + num
print(total)
#he we get sum from the loop






#write the program to count the numbers of zeros in the following tuple
a=(7,0,8,0,0,9) #given tuple
print(a.count(0))
#output is 3 because the 0 occurs 3 times


#completed 