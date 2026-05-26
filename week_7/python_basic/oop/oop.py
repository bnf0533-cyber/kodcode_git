# 1
# class Dog:
#     def __init__(self,name):
#         self.name = name
#     def bark(self):
#         return f"{self.name} says woof"
# d = Dog("Rex")
# print(d.bark())

# 2
# class Rectangle:
#     def __init__(self,widht,height):
#         self.widht = widht
#         self.height = height
#     def area(self):
#         return self.widht * self.height
# r = Rectangle(3,4)
# print(r.area())

# 3
# class Counter:
#     def __init__(self, counter = 0):
#         self.counter = counter
#     def increment(self):
#         self.counter += 1 
#     def value(self):
#         return self.counter
# c = Counter()
# c.increment()
# print(c.value())
# c.increment()
# print(c.value())

# 4
# class Point:
#     def __init__(self,x,y):
#         self.x = x
#         self.y = y
#     def __str__(self):
#         return f"({self.x}, {self.y})"
# print(Point(1, 2))

# 5
# class BankAccount:
#     def __init__(self,balance = 0):
#         self.balance = balance
#     def deposit(self,amount):
#         self.balance += amount 
#     def withdraw(self,amount):
#         if amount <= self.balance:
#             self.balance -= amount

# 6
# class Temperature:
#     def __init__(self,celsius):
#         self.celsius = celsius
#     def to_fahrenheit(self):
#         return  self.celsius * 1.8 + 32
# t = Temperature(0)
# print(t.to_fahrenheit())

# 7
# class Student:
#     school = "kodcode"
#     def __init__(self,name):
#         self.name = name
# a = Student("a")
# b = Student("b")
# b.name = "c"
# assert b.name
# print(a.name)
# print(b.name)

# 8
# class Player:
#     count = 0
#     def __init__(self):
#         Player.count += 1
# p1 = Player()
# p2 = Player()
# print(Player.count)

# 9
# class Money:
#     def __init__(self,amount):
#         self.amount = amount
#     def is_more_than(self, other):
#         return self.amount > other.amount

# 10
# class Playlist:
#     def __init__(self):
#         self.songs = []
#     def add(self,title):
#         self.title = title
#         self.songs.append(title)
#     def remove(self,title):
#         self.title = title
#         self.songs.remove(title)
#     def count(self):
#         return len(self.songs)
#     def __str__(self):
#         return str(self.songs)

# p = Playlist()
# p.add("song one")
# # print(p)
# p.add("song two")
# # print(p)
# p.add("song thre")
# # print(p)
# p.add("song four")
# print(p.count())
# print(p)
# p.remove("song one")
# # print(p)
# p.remove("song two")
# # print(p)
# p.remove("song thre")
# print(p)
# print(p.count())


