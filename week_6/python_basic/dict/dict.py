# 

# def sum_of_values(dicti):
#     s1um_all = 0
#     for v in dicti.values():
#         sum_all += v
#     return sum_all
# print(sum_of_values({"a": 1, "b": 2, "c": 3}))

# 2

# def key_with_max_value(dicti):
#     max_key = None
#     max_value = float("-inf")
#     for key,value in dicti.items():
#         if value > max_value:
#             max_value = value
#             max_key = key
#     return max_key
# print(key_with_max_value({"a": 3, "b": 7, "c": 5})) 

# 3
# def count_characters(string):
#     char_count = {}
#     for char in string:
#         if char in char_count:
#             char_count[char] += 1
#         else:
#             char_count[char] = 1
#     return char_count
# print(count_characters(("banana")))

# 4
# def invert_dictionary(dicti):
#     new_dicti = {}
#     for key, value in dicti.items():
#         new_dicti[value] = key
#     return new_dicti
# print(invert_dictionary({"a": 1, "b": 2, "c": 3}))

# 5

# def merge_dictionaries(dicti1 , dicti2):
#     return dicti1 | dicti2
# print(merge_dictionaries({"a": 1, "b": 2}, {"b": 20, "c": 30}))

# 6

# def filter_by_value(dicti,s):
#     new_dict = {}
#     for k,v in dicti.items():
#         if v > s:
#             new_dict[k] = v
#     return new_dict
# print(filter_by_value({"a": 1, "b": 5, "c": 3, "d": 8},5))

# 7

# def group_by_first_letter(letter : dict):
#     new_dict = {}
#     for word in letter:
#         first_letter = word[0]
#         if first_letter in new_dict:
#             new_dict[first_letter].append(word)
#         else:
#             new_dict[first_letter] = [word]
#     return new_dict
# print(group_by_first_letter(["apple", "banana", "apricot", "cherry", "blueberry", "avocado"]))

# 8
# def word_frequency(list_word):
#     new_dict = {}
#     for word in list_word.split():
#         if word in new_dict:
#             new_dict[word] += 1
#         else:
#             new_dict[word] = 1
#     return new_dict
# print(word_frequency("the cat sat on the mat"))

# 9

# def common_keys(dicti1 : dict , dicti2 : dict):
#     count = []
#     for key in dicti1.keys():
#         if key in dicti2.keys():
#             count.append(key)
#     return sorted(count)
# print(common_keys({"a": 1, "b": 2, "c": 3},{"b": 9, "c": 8, "d": 7}))

# 10
# def most_frequent_value(dicti : dict):
#     value_count = {}
#     for v in dicti.values():
#         if v in value_count:
#             value_count[v] += 1
#         else:
#             value_count[v] = 1
#     max_value = None
#     max_count = float("-inf")
#     for value , count in value_count.items():
#         if count > max_count:
#             max_count = count
#             max_value = value
#     return max_value
# print(most_frequent_value({"a": 1, "b": 2, "c": 1, "d": 3, "e": 1} ))