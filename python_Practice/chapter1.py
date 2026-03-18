#write a program to print twinkle twinkle little star poem in python
print("""Twinle, twinkle, little star!""")


#use REPL and print the table of 5
# open terminal and write python and we will be in interactive mode with python 

#install an external module and use it 
import emoji 
print(emoji.emojize("I am learning python :rocket:"))
print(emoji.emojize("cool boy :sunglasses:"))


#write a program to print contents of a directory using os module
import os
#current directory ka path 
path ="."
#directory k andar jo bhi files ya folders hain unki list 
contents = os.listdir(path)
print("Files and folders in this directory:")
print(contents)


#chapter 1 completed 
#conclusion
#comments - #single line ,"""multi line cooments""" python ignores comments 
#REPL (direct calculations , interacting directly with python)
#MODULES readymade code , eg import os import emoji
#PIP python package installer external libraries install krna then import krke use krna

  
