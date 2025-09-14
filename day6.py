num = int(input("Enter a number:"))
if num <= 1:
  print("Number should be greater than 1")
else:
  is_prime = True
  for i in range(2,num):
    if num % 1 == 0:
      is_prime = False
      break
  if is_prime:
    print(num,"is a prime number")
  else:
    print(num,"is not a prime number")


    num = int(input("enter a number:"))
    total = 0
    temp = num
    while temp > 0:
      digit = temp % 10
      total += digit
      temp //= 10
  print("sum of the digits of",num, "is:",total)


num=int(input("Enter a number:"))
rev=0
temp=num
while temp > 0:
  digit=temp % 10
  rev = rev*10+ digit
  temp //=10
print("Reverse of",num,"is",rev)


num=int(input("Enter a number:"))
rev = 0
temp = num
while temp > 0:
  digit = temp % 10
  rev = rev*10 + digit
  temp //=10
  if num == rev:
    print(num,"is palindrome number")
else:
  print(num,"is NOT a plindrome number")


num=int(input("Enter a number:"))
fact=1
if num <0:
  print("Foctorial does not exist for negative numbers")
elif num ==0:
  print("Foctorial of 0 is 1")
else:
  for i in range(1,num+1):
    fact*=1
  print("Foctorial of",num,"is:",fact)
  
        
  


  
