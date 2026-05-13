def f1(element):
    x=200
    print("f1 x=",x)
    print("f1 arg element:",element)
    f2()
    return 

def f2():
    x="aaa"
    print("f2 x=",x)
    f3()
    return

def f3():
    x=500
    print("f3 x=", x)
    index = 1
    while index < 6:
        print(index)
        index += 1

    f4()
    return

def f4():
    x=33
    print("f4 x=",x)
    for number in range(5):
        print(number," -- ",end=""  )
    print()

    basket_of_fruit=["apple","ananas","orange","kiwi"]
    sum_of_fruit_in_basket=0
    for fruit in basket_of_fruit:
        print(fruit)
        sum_of_fruit_in_basket+=1

    for char in "Yaniv":
        print(char,"*",end="")
    print()

    for x in range(5):
        if x == 2: # if x!=2 print
            continue
        print(x)  # Prints 0, 1, 3, 4 (skips 2)


    return

    user = {"name": "Alice", "age": 25,"phone":123456}
    for key, value in user.items():
        print(f"{key}: {value}")




def main():
    x=5
    print("main x=", x)
    f1("Hello from main")
    return

# Activating the menu
if __name__ == "__main__":
    main()
    