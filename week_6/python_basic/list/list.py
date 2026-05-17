import copy

# 1

# def sum_all(arr): 
#     sum_all = 0
#     for item in arr:
#         sum_all += item
    # return sum_all

# 2

# def maxi(arr):
#     sort = sorted(arr)
#     return sort[-1]
# print(maxi([1,2,5,95,67,4,3567,7543,5]))

# 3

# def count_item(arr,value):
#     cuont_item = 0
#     for item in arr:
#         if item == value:
#             cuont_item += 1
#     return cuont_item
# print(count_item([1,2,3,4,5,5,5,6,7],5))

# 4

# def rever(arr):
#     arr2 = []
#     for item in arr:
#         arr2.insert(0,item)
#     return arr2
# print(rever([1,2,3,4,5]))

# 5

# def remove(arr):
#     new_list = []
#     for item in arr:
#         if item not in new_list:
#             new_list.append(item)
#     return new_list
# print(remove([1, 2, 2, 3, 1, 4, 3]))

# 6

# def second_largest(arr):
#     sort = sorted(arr)
#     sort = sort[-1]
#     second = []
#     for item in arr:
#         if item == sort:
#             continue
#         else:
#             second.append(item)
#     if second == []:
#         return None
#     sort2 = sorted(second)
#     sort2 = sort2[-1]
#     return sort2
# print(second_largest([10,10,10]))

# 7

# def marg_lists(arr,arr1):
#     new_full_list = []
#     for i in arr:
#         new_full_list.append(i)
#     for j in arr1:
#         new_full_list.append(j)
#     new_full_list = sorted(new_full_list)
#     return new_full_list
# print(marg_lists( [1, 3, 5], [2, 4, 6]))

#  8 

# def loop_of_list(arr,k):
#     if not arr:
#         return arr
#     k = k % len(arr)
#     for _ in range(k):

#         popi = arr.pop()
#         arr.insert(0,popi)
#     return arr
# print(loop_of_list( [1, 2, 3, 4, 5],4))