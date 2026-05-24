import os

with open ("diary.txt" , "w") as f:
    f.write("full project tuday : 01.15.2024 \n")
    f.write("i lern about fike handling in python : 01.16.2024\n")
    f.write("I completed the first exercise : 01.17.2024\n")
    print("the calendar was created successfully")

with open("diary.txt", "r") as read:
    file = read.read()
    print(file)


def add_entry(filename,data,content):
    with open(filename , "a") as f:
        f.write(data +"\n" + content + "\n")
add_entry("diary.txt" , "01.18.2024","wonderful day I finished exercise 1")


def search_diary(filname,keyword):
    with open(filname,"r") as file:
        for re in file:
            if keyword in re:
                print(re)
search_diary("diary.txt","day")

def safe_read_diary(filename):
    if os.path.exists(filename):
        with open(filename,"r") as f:
            print(f.read())
    else:
        print("file not found!")
safe_read_diary("diary.txt")