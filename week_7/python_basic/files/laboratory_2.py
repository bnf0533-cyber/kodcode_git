
def create_grades_file(filename):
    students = [
    ("Dan", [85, 90, 78]),
    ("MOMO", [92, 88, 95]),
    ("Yoni", [70, 65, 80]),
    ("Avi", [100, 95, 98]),
    ("Sara", [60, 72, 68]),
    ]
    with open(filename , "w") as file:
        for i in students:
            file.write(str(i)+"\n")
create_grades_file("grades.txt")

def calculate_averages(filename):
    with open(filename,"r") as file:
        lines = file.readlines()
        all_data = []
        for line in lines:
            clean_line = line.split(",",1)[1].strip(" ()[]\n")
            only_name = line.split(",",1)[0].strip("()'"" []\n")
            change = clean_line.split(",")
            all_grades = 0
            for grade in change:
                all_grades += int(grade)
            avereg = all_grades / len(change)
            all_data.append([only_name,avereg])
    return all_data
calculate_averages("grades.txt")

def save_results(averages, output_filename):
    sorted_data = sorted(averages, key=lambda x: x[1], reverse=True)
    with open(output_filename,"w") as output:
        output.write("=== Student Results ===\n")
        for i,student in enumerate(sorted_data):
            output.write(f"{i+1}. {student[0]}: {round(student[1],1)}\n")
        output.write("\n=== Statistics ===\n")
        averag = 0
        pass_count = 0
        for grade in sorted_data:
            averag += grade[1]
            if grade[1] >= 60:
                pass_count += 1
        class_avereg = averag / len(sorted_data)
        output.write(f"class average: {round(class_avereg,1)}\n")
        output.write(f"highest: {sorted_data[0][0]} ({round(sorted_data[0][1],1)})\n")
        output.write(f"lowest: {sorted_data[-1][0]} ({round(sorted_data[-1][1],1)})\n")
        output.write(f"passing (>=60): {pass_count} / {len(sorted_data)}")
averages = calculate_averages('grades.txt')
save_results(averages, 'results.txt')