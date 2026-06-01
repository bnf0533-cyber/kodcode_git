from shape_manager import ShapeManager
from square import Square
from rectangle import Rectangle
from circle import Circle
from triangle import Triangle
from hexagon import Hexagon

def print_menu():
    print("\n--- Main Menu ---")
    print("1. Add shape")
    print("2. Show all shapes")
    print("3. Update shape")
    print("4. Delete shape")
    print("5. Exit")

def main():
    manager = ShapeManager()
    
    while True:
        print_menu()
        user_choice = input("Enter choice (1-5): ")
        
        if user_choice == '1':
            print("1. Square")
            print("2. Rectangle")
            print("3. Circle")
            print("4. Triangle")
            print("5. Hexagon")
            shape_type = input("Which shape to add? ")
            
            if shape_type not in ['1', '2', '3', '4', '5']:
                print("Wrong choice.")
                continue
                
            try:
                s_id = int(input("Enter shape ID: "))
                
                exists = False
                for s in manager.get_all_shapes():
                    if s.id == s_id:
                        exists = True
                
                if exists:
                    print("This ID already exists!")
                    continue
                
                if shape_type == '1':
                    side = float(input("Enter side length: "))
                    new_shape = Square(s_id, side)
                elif shape_type == '2':
                    w = float(input("Enter width: "))
                    h = float(input("Enter height: "))
                    new_shape = Rectangle(s_id, w, h)
                elif shape_type == '3':
                    r = float(input("Enter radius: "))
                    new_shape = Circle(s_id, r)
                elif shape_type == '4':
                    h = float(input("Enter height: "))
                    b = float(input("Enter base: "))
                    a = float(input("Enter side A: "))
                    side_b = float(input("Enter side B: "))
                    side_c = float(input("Enter side C: "))
                    new_shape = Triangle(s_id, h, b, a, side_b, side_c)
                elif shape_type == '5':
                    side = float(input("Enter side length: "))
                    new_shape = Hexagon(s_id, side)
                    
                manager.create_shape(new_shape)
                print("Shape created successfully!")
                
            except ValueError:
                print("Error: You must enter numbers only.")
                
        elif user_choice == '2':
            all_shapes = manager.get_all_shapes()
            if len(all_shapes) == 0:
                print("List is empty.")
            else:
                for s in all_shapes:
                    print(f"ID: {s.id} | Type: {s.shape_type} | Area: {s.get_area():.2f} | Perimeter: {s.get_perimeter():.2f}")
                    
        elif user_choice == '3':
            try:
                s_id = int(input("Enter ID of shape to update: "))
                print("Leave empty and press Enter if you don't want to change a value.")
                
                new_data = {}
                
                val = input("Enter new side (for square/hexagon): ")
                if val != "":
                    new_data["side"] = float(val)
                    
                val = input("Enter new width (for rectangle): ")
                if val != "":
                    new_data["width"] = float(val)
                    
                val = input("Enter new height (for rectangle/triangle): ")
                if val != "":
                    new_data["height"] = float(val)
                    
                val = input("Enter new radius (for circle): ")
                if val != "":
                    new_data["radius"] = float(val)
                    
                val = input("Enter new base (for triangle): ")
                if val != "":
                    new_data["base"] = float(val)
                    
                val = input("Enter new side A (for triangle): ")
                if val != "":
                    new_data["side_a"] = float(val)
                    
                val = input("Enter new side B (for triangle): ")
                if val != "":
                    new_data["side_b"] = float(val)
                    
                val = input("Enter new side C (for triangle): ")
                if val != "":
                    new_data["side_c"] = float(val)
                
                if len(new_data) > 0:
                    success = manager.update_shape(s_id, new_data)
                    if success:
                        print("Update ok.")
                    else:
                        print("Shape not found.")
                else:
                    print("Nothing to update.")
                    
            except ValueError:
                print("Error: Bad number format.")
                
        elif user_choice == '4':
            try:
                s_id = int(input("Enter ID to delete: "))
                success = manager.delete_shape(s_id)
                if success:
                    print("Deleted successfully.")
                else:
                    print("Shape not found.")
            except ValueError:
                print("Error: ID must be a number.")
                
        elif user_choice == '5':
            print("Goodbye!")
            break
            
        else:
            print("Please select 1-5.")

if __name__ == "__main__":
    main()