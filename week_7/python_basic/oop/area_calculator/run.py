from shape_manager import ShapeManager
from rectangle import Rectangle
from square import Square
from circle import Circle
from triangle import Triangle
from hexagon import Hexagon


def prompt_positive_number(prompt_text):
    while True:
        try:
            value = float(input(prompt_text).strip())
            if value <= 0:
                print("Please enter a positive number greater than zero.")
                continue
            return value
        except ValueError:
            print("Please enter a valid number.")


def prompt_nonempty_text(prompt_text):
    while True:
        value = input(prompt_text).strip()
        if value:
            return value
        print("This value cannot be empty.")


def choose_shape_type():
    print("Choose a shape type:")
    print("1. Rectangle")
    print("2. Square")
    print("3. Circle")
    print("4. Triangle")
    print("5. Hexagon")
    choice = input("Choice: ").strip()
    return choice


def create_shape_from_input():
    shape_id = prompt_nonempty_text("Enter a unique shape ID: ")
    while True:
        choice = choose_shape_type()
        if choice == "1":
            width = prompt_positive_number("Enter width: ")
            height = prompt_positive_number("Enter height: ")
            return Rectangle(shape_id, width, height)
        if choice == "2":
            side = prompt_positive_number("Enter side length: ")
            return Square(shape_id, side)
        if choice == "3":
            radius = prompt_positive_number("Enter radius: ")
            return Circle(shape_id, radius)
        if choice == "4":
            height = prompt_positive_number("Enter height: ")
            base = prompt_positive_number("Enter base: ")
            side_a = prompt_positive_number("Enter side a: ")
            side_b = prompt_positive_number("Enter side b: ")
            side_c = prompt_positive_number("Enter side c: ")
            return Triangle(shape_id, height, base, side_a, side_b, side_c)
        if choice == "5":
            side = prompt_positive_number("Enter side length: ")
            return Hexagon(shape_id, side)
        print("Invalid choice, please try again.")


def print_shapes(manager):
    shapes = manager.get_all_shapes()
    if not shapes:
        print("There are currently no shapes saved.")
        return
    for shape in shapes:
        print(
            f"{shape.id}: {shape.__class__.__name__} | area={shape.get_area():.2f} | perimeter={shape.get_perimeter():.2f}"
        )


def main():
    manager = ShapeManager()

    while True:
        print("\n--- Shape Manager Menu ---")
        print("1. Create a new shape")
        print("2. Show all shapes")
        print("3. Delete shape by ID")
        print("4. Exit")
        choice = input("Choose an action: ").strip()

        if choice == "1":
            shape = create_shape_from_input()
            manager.create_shape(shape)
            print("Shape saved successfully.")
            continue
        if choice == "2":
            print_shapes(manager)
            continue
        if choice == "3":
            shape_id = prompt_nonempty_text("Enter the shape ID to delete: ")
            if manager.delete_shape(shape_id):
                print("Shape deleted.")
            else:
                print("No shape found with that ID.")
            continue
        if choice == "4":
            print("Goodbye!")
            break
        print("Invalid choice, please try again.")


if __name__ == "__main__":
    main()
