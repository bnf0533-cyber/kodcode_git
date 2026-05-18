# 1
# def remove_duplicates(seti):
#     return set(seti)
# print(remove_duplicates([1, 2, 2, 3, 1, 4, 3]))

# 2

# def count_unique_elements(seti):
#     count = 0
#     chack = []
#     for item in seti:
#         if item not in chack:
#             chack.append(item)
#             count += 1
#     return count
# print(count_unique_elements([1, 2, 2, 3, 1, 4]))

# 3

# def common_elements(listi,listi1):
#     lists = set(listi) & set(listi1)
#     lists = set(lists)
#     return lists
# print(common_elements([1, 2, 3, 4], [3, 4, 5, 6]))

# 4
# def elements_in_only_one(lis,lis1):
#     listi = set(lis) ^ set(lis1)
#     return sorted(listi)

# print(elements_in_only_one([1, 2, 3, 4], [3, 4, 5, 6]))

# 5
# def is_subset(lis,lis1):
#     return set(lis).issubset(set(lis1))
# print(is_subset([1, 2, 3], [1, 2, 3, 4, 5]))
# print(is_subset([1, 2, 6], [1, 2, 3, 4, 5]))

# 6

# def has_unique_characters(string):
#     return len(set(string)) == len(string)
# print(has_unique_characters("abcdef"))
# print(has_unique_characters("hello"))

# 7

# def first_repeated_element(lis):
#     seen = set()
#     for item in lis:
#         if item in seen:
#             return item
#         else:
#             seen.add(item)
#     return None
# print(first_repeated_element([1, 2, 3, 2, 4, 1]))
# print(first_repeated_element([1, 2, 3, 4]))

# 8

# def count_distinct_words(string):
#     return len(set(string.lower().split()))
# print(count_distinct_words("The cat and the dog and the bird"))

# 9

# def pair_sum_exists(numbers,target):
#     seen = set()
#     for num in numbers:
#         comp = target - num
#         if comp in seen:
#             return True
#         seen.add(num)
#     return False
# print(pair_sum_exists([3, 1, 4, 7, 2], 6))
# print(pair_sum_exists([3, 1, 4, 7, 2], 100))

# 10

# def symmetric_difference_without_operators(lis,lis1):
#     listi = set(lis)
#     listi1 = set(lis1)
#     first = [item for item in lis if item not in listi1]
#     second = [item for item in lis1 if item not in listi]
#     to_sum = first + second
#     return sorted(list(set(to_sum)))
# print(symmetric_difference_without_operators([1,2,3,4] , [3,4,5,6]))