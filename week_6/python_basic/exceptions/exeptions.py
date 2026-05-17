# 1

# def safe_ints(s):
#     try:
#         change = int(s)
#         return change
#     except Exception:
#         return None
# print(safe_ints("1234"))
# print(safe_ints("asd"))
# 2

# def safe_divide(a, b):
#     try:
#         return a / b
#     except ZeroDivisionError:
#         print("undefinde")
# print(safe_divide(3,3))
# print(safe_divide(3,0))

# 3
# def get_volue(d, key):
#     try:
#         return d[key]
#     except KeyError:
#         return "missing"
# print(get_volue({"a" : 1} , "a"))
# print(get_volue({"a" : 1} , "d"))

# 4
# def parse_ints(values):
#     new_listi = []
#     for i in values:
#         try:
#             int(i)
#             new_listi.append(i)
#         except ValueError , TypeError:
#             continue
#     return new_listi
# print(parse_ints(["1", "2", "x", "3", "y"]))

# 5
# def set_age(age):
#         if 150 > age > 0:
#             return age
#         raise ValueError
# print(set_age(25))
# print(set_age(-3))

# 6
# def retry(func, n):
#     for att in range(n):
#         try:
#             return func
#         except Exception:
#             if att == n -1:
#                 raise

# 7
def count_errors(funcs):
    count = 0
    for f in funcs:
        try:
            f()
        except Exception:
            count += 1
    return count
my_functions = [lambda: 1, lambda: 1/0, lambda: int("x"), lambda: 2]
print(count_errors(my_functions))