# weight = float(input("please enter your weight: "))
# hige = float(input("please entre your hige: "))
# x = hige ** 2
# y = weight / x
# print(round(y,2))

# num = float(input("please enter a namber type float: "))
# intger = (int(num))
# print(intger)
# print(float(num - intger))

# age = int(input("please enter your age: "))
# if age < 0 or age > 120:
#     print("invalid")
# elif 0 <= age <= 12:
#     print("child")
# elif 13 <= age <= 17:
#     print("teen")
# else:
#     print("adult")

# char = input("please enter char: ")
# if not char.isalpha() or len(char) != 1:
#     print("invalid")
# elif char.lower() in "aeiou":
#     print("vowel")
# else:
#     print("cosonans")

# age = int(input("please enter your age: "))
# is_member = input("please enter y if you member and n if you not: ").lower()
# if age < 16:
#     print("access denied")
# elif (age > 18 and is_member == "y") or (age in [19,20,21]):
#     print("access granted")
# else:
#     print("access denied")

# num = int(input("please enter a number: "))
# if num % 2 == 0 and num > 0:
#     print("positive even")
# elif num % 2 == 1 and num > 0:
#     print("positive odd")
# elif num < 0:
#     print("negative")
# elif num == 0:
#     print("zero")

# password = "12345678"
# user_password = input("please enter your password: ")

# if user_password == password:
#     print("access granted")
# elif len(user_password) < 8:
#     print("too short")
# else:
#     print("wrong password")

# x = int(input("please enter your x between 10 - 50: "))
# y = int(input("please enter your y between 20 - 80: "))
# if x < 10 or x > 50 or y < 20 or y > 80:
#     print("outside the rectangle")
# elif x == 10 or x == 50 or y == 20 or y == 80:
#     print("on the edge")
# else:
#     print("inside the rectangle")

# name = input("please enter your name: ")
# user_name = name or "anonymus"
# if user_name:
#     print(f"hello {user_name}")

# num1 = int(input("enter a nunber :"))
# num2 = int(input("enter a nunber :"))
# num3 = int(input("enter a nunber :"))
# sum_all = (num1 > 0) + (num2 > 0) + (num3 > 0)
# print(sum_all)

# gread = int(input("please enter a number: "))
# print("a" if gread >= 90 else ("b" if gread >= 80 else ("c" if gread >= 70 else ("f"))))

# for i in range(1,10,2):
    # if i == 7:
        # break
    # print(i)

# password = "1234"
# while True:
#     user_passw = (input("enter password: "))
#     if password == user_passw:
#         print("welcome")
#         break
#     else:
#         print("try again")

# for row in range(1,4):
#     for col in range(1,4):
#         if col == 2:
#             break
#         print(f"{row}, {col}")

# mutzarim = []
# while True:
#     m = input()
#     if m == "done":
#         break
#     mutzarim.append(m)
# for index,items in enumerate(mutzarim,start=1):
#     print(f"{index},{items}")

# counter = 0
# user_input = input()
# for i in user_input:
#     if i.lower() in "aeiou":
#         counter += 1
#     print(counter)

# for i in range(1,6):
#     for j in range(1,6):
#         result = i * j
#         print(f"{i} * {j} = {result}")

# user_input = input()
# rever = ""
# for char in user_input:
#     rever = char + rever
# print(rever)

# num = int(input())
# even_num = 0
# while num > 0:
#     digit = num % 10
#     if digit % 2 == 0:
#         even_num += 1
#     num = num // 10
# print(even_num)

# me = "abcdef"
# new = ""
# for char in me:
#     x = char * 2
#     new += x
# print(new)

# high_num = 0
# while True:
#     num = int(input())
#     if num == 0:
#         break
#     if high_num < num:
#         high_num = num
# print(high_num)

# user_input = input()
# is_clean = True
# for char in user_input:
    # if not char.isalnum():
#         is_clean = False
#         break
# print(is_clean)

# num = int(input())
# revers = 0
# while num > 0:
#     digit = num % 10
#     revers = (revers * 10) + digit
#     num = num // 10
# print(revers)