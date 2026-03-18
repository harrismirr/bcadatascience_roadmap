#strings (anything which is inside commas or double commas are strings) 
#write a program to display a user entered name followed by good afternoon
name = input("Enter your name:")
print("Good afternoon",name)




#fill a number template with name and date 
#tempelate is like this dear<|name|>,you are selected <|date|>

letter ='''
Dear <|Name|>,
You are selected!
<|Date|>
'''
name = input("Enter your name:")
date = input("Enter date:")
letter = letter.replace("<|Name|>",name)
letter = letter.replace("<|Date|>",date)
print(letter)






#write a program to detect double space in a  string
text = "This is a string with double spaces"
print(text.find(" "))

#if  we want to check how many spaces are in this string eg:
text ="Hello   harris"
print(text.count(" ")) #3 spaces 



#replace the double spaces from problem 3 with single space
text = "This ia a string with double space"
new_text = text.replace(" "," ")
print(new_text)
#replace()function means old/new 





#format the following letter using escape sequence characters
#given string dear harris, this python course is nice. thanks!
letter = "Dear harris.\n\t This python course is nice.\nThanks!"
print(letter)
