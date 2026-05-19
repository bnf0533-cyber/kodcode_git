# 1

# count = 0
# def bump():
    # global count
    # count += 1
# def value():
#     return count
# bump()
# bump()
# bump()
# print(count)

# 3

# x = "global"
# def outer():
#     x = "enclosing"
#     def inner():
#         x = "local"
#         print(x)
#     inner()
#     print(x)
# outer()
# print(x)
#  ידפיס את שלושתם כי בהתחלה הוא מדפיס את לוכל הוא יוצא מהפונקציה ואז הוא מדפיס את אנכלודינג ואז בסוך הוא מדפיס את הגלובל

# 4
# קוד שגוי מכיוון שהשם של המשתנה ליסט הוא אותו דבר כמו של הקאסטינג ולכן הוא מוציא שגיאת טייפ אררור
# list = [1, 2, 3]
# print(list(range(5)))
# קוד תקין שיניתי את שם המשתנה והכל עובד כמו חדש
# listi = [1,2,3]
# print(list(range(5)))


# 8

# import math
# def public_names(m):
#     listi = []
#     for i in dir(m):
#         if i.startswith("_"):
#             continue
#         else:
#             listi.append(i)
#     return sorted(listi)
# print(public_names(math))

# 9

# def add_item(item, bag=None):
#     if bag is None:
#         bag = []
#     bag.append(item)
#     return bag# הסבר: כל פעם שהפונקציה נטענת היא זוכרת את הפעם הקודמת והרשימה לא מתחדשת לכן מאתחלים עם NONE כדי שכל פעם הרשימה תהיה ריקה

# 10

