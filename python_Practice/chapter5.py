#chapter 5 dictionary and sets
#create a dictionary of hindi words with their english translation and allow user to look it up 
words = {
    "pani":"water",
    "kursi":"chair",
    "billi":"cat",
    "kutta":"dog"
}
word = input("Enter the hindi word:")
print("Meaning is",words[word])

#one more
student = {
    "name":"harris",
    "age":18,
    "city":"srinagar"
}
#here the key is name and value is harris
#eg print(student["name"]) #output will be harris




#write a program to input eight numbers from the user and display all the unique numbers(once)
numbers = set()
for i in range(8):
    n = int(input("Enter number:"))
    numbers.add(n)
print(numbers)





#can we have a set with 18(int) and '18' (str) as a value in it
#ans: yes it may be 
s={18,"18"}
print(s)
#both value will be in set 
#proof of this 
print(type(18))
print(type("18"))






#what will be the length of following set
s=set()
s.add(20)
s.add(20.0)
s.add("20")
print(s)
print(len(s))






#what is the type of s
s={}
print(type(s))
#output <class 'dict'>
#empty{} dictionary hota h
#empty set ,set() se banta h






#create an empty dictionary and allow 4 friends to enter thier favorite language as values and use their names as keys
fav_lang={}
name=input("Enter friend's name:")
lang=input("Enter favorite language:")
fav_lang[name]=lang 
#atlast write
print(fav_lang)
#same for more 3 friends 






#if the names of the two friends are same in the qno6 what will happen 
fav_lang={}
fav_lang["ali"] = "python"
fav_lang["harris"]="java"
fav_lang["ali"]="c++"
print(fav_lang)
#in this case ali ka python will be replaced with c++ so the output will be ali c++ and harris python 
#more two questions theory based 
#completed 










