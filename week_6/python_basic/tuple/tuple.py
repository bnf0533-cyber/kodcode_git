# 1

# def sum_of_tuple(num):
#     sum_all = 0
#     for item in num:
#         sum_all += item
#     return sum_all
# print(sum_of_tuple((1, 2, 3, 4, 5)))

# 2

# def get_max_element(num):
#     max_num = 0
#     for item in num:
#         if max_num < item:
#             max_num  = item
#     return max_num
# print(get_max_element((3, 7, 2, 8, 5)))

# 3

# def count_occurrences(num ,value):
#     count_value = 0
#     for item in num:
#         if item == value:
#             count_value += 1
#     return count_value
# print(count_occurrences((1, 2, 3, 2, 4, 2), 2))

# 4

# def revers_tuple(num):
#     new_tuple = ()
#     for item in num:
#         new_tuple = (item,) + new_tuple
#     return new_tuple
# print(revers_tuple((1,2,3,4,5)))

# 5

# def swap_paris(num):
#     new_tuple = ()
#     for items in range(0,len(num),2):
#         first = num[items]
#         second = num[items + 1]
#         new_tuple += (second,first)
#     return new_tuple
# print(swap_paris((1,2,3,4,5,6)))

# 6 

# def find_min_max(num):
#     min_t = num[0]
#     max_t = num[0]
#     for item in num:
#         if item < min_t:
#             min_t = item
#         if item > max_t:
#             max_t = item
#     return min_t,max_t
# print(find_min_max((1,2,3,4,5,7,2,3,4,6,4,5,6)))

# 7

# def euclidean_distance(p1,p2):
#     x1, y1 = p1
#     x2, y2 = p2
#     distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
#     return distance
# print(euclidean_distance((0,0), (3,4)))

# 8

# def merge_and_sort(num1,num2):
#     numbers = list(num1 + num2)
#     nwe_tuple = [numbers[0]]
#     for i in range(1,len(numbers)):
#         item = numbers[i]
#         if item >= nwe_tuple[-1]:
#             nwe_tuple.append(item)
#         else:
#             pos = sum(1 for x in nwe_tuple if x < item)
#             nwe_tuple.insert(pos,item)
#     return tuple(nwe_tuple)
# print(merge_and_sort((1,2,2,3),(4,5,3,4)))

# 9

# def frequency_table(num):
#     new_tuple = ()
#     seen = []
#     for item in num:
#         if item not in seen:
#             seen.append(item)
#             count_item = num.count(item)
#             new_tuple += ((item, count_item),)
#     return new_tuple
# print(frequency_table(("a", "b", "a", "c", "b", "a")))

# 10

# def rotate_tuple(num,k):
#     if not num:
#         return num
#     num_list = list(num)
#     k = k % len(num_list)
#     for _ in range(k):
#         popi = num_list.pop()
#         num_list.insert(0,popi)
#     return tuple(num_list)
# print(rotate_tuple((1,2,3,4,5,6,7),5))