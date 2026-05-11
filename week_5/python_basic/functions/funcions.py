# 1
# def is_even(n):
#     if n % 2 == 0:
#         return True
#     return False

# 2
# def factorial1(n):
#     result = 1
#     for i in range(1,n + 1):
#         result *= i
#     return result

# 3
# skeeping

# 4
# def is_palindrome(s):
#     string = s.lower()
    
#     if string == string[::-1]:
#         return True
#     return False

# 5
# def digital_root(n):
#     while n > 9:
#         n = sum_digits(n)
#     return n
# def sum_digits(n):
#     string = str(n)
#     sum_all_part = 0
#     for i in string:
#         sum_all_part += int(i) 
#     return sum_all_part

# 6
# def sum_char(n):
#     counter = 0
#     while n > 0:
#         n = n // 10
#         counter += 1
#     return counter

# 7
# def revers_int(n):
    # is_negative = False
    # revers_num = 0
    # if n < 0:
    #     n = abs(n)
    #     is_negative = True
    # while n > 0:
    #     digits = n % 10
    #     revers_num = revers_num * 10
    #     revers_num += digits
    #     n = n // 10
    # if is_negative:
    #     revers_num = -revers_num
    # return revers_num

# 8
# nums = [12,3,0,3,0]
# insert_pos = 0
# for char in nums:
#     if char != 0:
#         nums[insert_pos] = char
#         insert_pos += 1
# while insert_pos < len(nums):
#     nums[insert_pos] = 0
#     insert_pos += 1
# print(nums)

# 9
# def is_anagram(word1,word2):
#     return sorted(word1) == sorted(word2)

# 10
# def counter_word(user_input):
#     word_counts = {}
#     for word in user_input.lower().split():
#         if word in word_counts:
#             word_counts[word] += 1
#         else:
#             word_counts[word] = 1
#     return word_counts

# 11
# def calculate_resource_drain(cost,waste_factor):
#     return cost * waste_factor
# def get_net_resources(cost,waste_factor):
#     drain = calculate_resource_drain(cost,waste_factor)
#     return cost - drain

# 12
# def intercept_length(packet):
#     return len(packet)
# def verify_transmission(packet):
#     length = intercept_length(packet)
#     print(f"Intercepted packet contains {length} bytes of data.")

