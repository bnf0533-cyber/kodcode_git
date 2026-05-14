# 1
# def get_active_adults(users_list):
#     active_users = []
#     for user in users_list:
#         if user[1] >= 18 and user[2] == True:
#             active_users.append(user[0])
#     return active_users

# users_data = [
#     ["Dan", 25, True],
#     ["Noa", 16, True],
#     ["Yael", 30, False],
# ]
# print(get_active_adults(users_data))

# # 2
# def is_user_valid(user_email):
#     if not user_email:
#         print("Invalid user")
#         return False
#     return True

# def check_stock_and_quantity(stock, quantity):  
#     if quantity <= 0 or quantity > stock:
#         print("Invalid quantity")
#         return None
#     return stock - quantity

# def check_price(product_price, quantity):    
#     price = product_price * quantity
#     if quantity >= 10:
#         price *= 0.9
#     if quantity >= 50:
#         price *= 0.85
#     return price

# def handle_purchase(user_email, product_name, product_price, stock, quantity):
#     if not is_user_valid(user_email):
#         return None
#     new_stock = check_stock_and_quantity(stock, quantity)
#     if new_stock is None:
#         return None
#     total_price = check_price(product_price, quantity)
#     order_status = "confirmed"
#     print(f"Order {order_status}: {user_email} bought {quantity}x {product_name} for ${total_price}")
#     return user_email, product_name, quantity, total_price, order_status

# # 3
# def validate_input(name, grade):
#     if not name or len(name) < 2:
#         print("Error: invalid name")
#         return False
#     if grade < 0 or grade > 100:
#         print("Error: grade must be 0-100")
#         return False
#     return True

# def calculate_stats(grades):
#     if not grades:
#         return 0, 0, 0
#     total = sum(grades)
#     average = total / len(grades)
#     top_count = sum(1 for g in grades if g >= 90)
#     failing_count = sum(1 for g in grades if g < 56)
#     return average, top_count, failing_count

# def print_report(names, grades, average, top_count, failing_count):
#     print("=== Student Report ===")
#     for i in range(len(names)):
#         print(f"  {names[i]}: {grades[i]}")
#     print(f"Average: {average:.1f}")
#     print(f"Top students: {top_count}")
#     print(f"Failing: {failing_count}")

# def save_to_file(names, grades):
#     with open("students.txt", "w") as f:
#         for i in range(len(names)):
#             f.write(f"{names[i]},{grades[i]}\n")

# def manage_students(names, grades, new_name, new_grade):
#     if not validate_input(new_name, new_grade):
#         return names, grades
#     names.append(new_name)
#     grades.append(new_grade)
#     avg, top, fail = calculate_stats(grades)
#     print_report(names, grades, avg, top, fail)
#     save_to_file(names, grades)
#     return names, grades

# # 4
# def validate_user_data(name, email):
#     if not name or len(name) < 2:
#         raise ValueError("Invalid name")
#     if "@" not in email:
#         raise ValueError("Invalid email")

# def create_user(name, email, role):
#     validate_user_data(name, email)
#     return name, email, role, "2024-01-01", True

# # 5
# def get_status(score):
#     if score >= 90:
#         return "excellent"
#     if score >= 70:
#         return "good"
#     if score >= 55:
#         return "average"
#     return "fail"

# def is_valid_age(age):
#     return isinstance(age, int) and 0 < age < 120

# def get_greeting(hour):
#     if 5 <= hour < 12:
#         return "Good morning"
#     if 12 <= hour < 17:
#         return "Good afternoon"
#     if 17 <= hour < 21:
#         return "Good evening"
#     return "Good night"

# # 6
# def validate_student(name, grades):
#     if not name:
#         return False, "Error: missing name"
#     if not grades:
#         return False, f"Error: {name} has no grades"
#     return True, None

# def calculate_student_stats(grades):
#     average = sum(grades) / len(grades)
#     status = "pass" if average >= 56 else "fail"
#     highest = max(grades)
#     lowest = min(grades)
#     return average, status, highest, lowest

# def print_report_grades(names, averages, statuses, highs, lows):
#     print("=" * 40)
#     print("Student Grade Report")
#     print("=" * 40)
#     passing_count = 0
#     for i in range(len(names)):
#         print(f"Name: {names[i]}")
#         print(f"  Average: {averages[i]}")
#         print(f"  Status: {statuses[i]}")
#         print(f"  Range: {lows[i]} - {highs[i]}\n")
#         if statuses[i] == "pass":
#             passing_count += 1
#     print(f"Total passing: {passing_count}/{len(names)}")

# def process_grades(names, all_grades):
#     result_names = []
#     result_averages = []
#     result_statuses = []
#     result_highs = []
#     result_lows = []
#     for i in range(len(names)):
#         name = names[i]
#         grades = all_grades[i]
#         is_valid, error_msg = validate_student(name, grades)
#         if not is_valid:
#             print(error_msg)
#             continue
#         average, status, highest, lowest = calculate_student_stats(grades)
#         result_names.append(name)
#         result_averages.append(round(average, 1))
#         result_statuses.append(status)
#         result_highs.append(highest)
#         result_lows.append(lowest)
#     print_report_grades(result_names, result_averages, result_statuses, result_highs, result_lows)
#     return result_names, result_averages, result_statuses

# # 7
# TAX_RATE = 0.17

# def process_cart(prices, quantities, user_type):
#     total_price = 0
#     # חישוב הסכום של כל המוצרים בעגלה
#     for i in range(len(prices)):
#         total_price += prices[i] * quantities[i]
#     # נוסיף מע"מ לפני שמחשבים את ההנחות של המועדון
#     total_price += total_price * TAX_RATE
#     # הנחה בקופה לפי סוג הלקוח
#     if user_type == 'premium':
#         total_price *= 0.9
#     elif user_type == 'vip':
#         total_price *= 0.8
#     # משלוח חינם מעל 500 ש"ח, 25 ש"ח מעל 200
#     if total_price > 500:
#         shipping_cost = 0
#     elif total_price > 200:
#         shipping_cost = 25
#     else:
#         shipping_cost = 50
#     total_price += shipping_cost
#     return total_price