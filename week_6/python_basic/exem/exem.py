# 1
def revers_tuple(tpl):
	lst = list(tpl)
	res = []
	for i in range(len(lst) -1 , -1 , -1):
		res.append(lst[i]
	return tuple(res)

# 2
def second_largest(numbers):
      if len(numbers) < 2:
          return None
      first = None
      second = None
      for num in numbers:
        if first is None or num > first:
            second = first
            first = num
        elif num < first and (second is None or num > second):
            second = num
    return second

# 3
def turn_oraund(numbers,k):
	oraund = []
	k = k & len(numbers)
	return numbers[k:] + number[:k]

# 4
def count_elements(tpl):
	dicti = {}
        for item in tpl:
              if item in dicti:
                  dicti[item] = dict[item] + 1
              else:
                  dicti[item] = 1
       pairs = []
       for k, v in dicti.items():
 	   pairs.append((k, v))
       return tuple(pairs)

# 5
def larges_in_target(dicti,target):
        new_dict = {}
	for k,v in dicti.items():
	    if v > target:
		new_dict[k] = v
	return new_dict

# 6
def sorted_list(lst1, lst2):
      res = []
      for x in lst1:
          if x not in lst2 and x not in res:
              res.append(x)
      for x in lst2:
          if x not in lst1 and x not in res:
              res.append(x)
      for i in range(len(res)):
          for j in range(i + 1, len(res)):
              if res[i] > res[j]:
                  res[i], res[j] = res[j], res[i]
      return res

# 7
def set_age(age):
      if age < 0 or age > 150:
          raise ValueError()
      return age

# 8
def invert_dictionary(dct):
      res = {}
      for k, v in dct.items():
          res[v] = k
      return res

# 9
def marge_dicti(dict1, dict2):
      res = {}
      for k, v in dict1.items():
          res[k] = v
      for k, v in dict2.items():
          res[k] = v
     return res

# 10
def map_of_first_letter(words):
      res = {}
      for word in words:
          if len(word) > 0:
              letter = word[0]
              if letter not in res:
                  res[letter] = []
                  res[letter].append(word)
    return tuple(res)














		
		