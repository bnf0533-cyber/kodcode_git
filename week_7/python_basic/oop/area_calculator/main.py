from calculator import Shape
from rectangle import Rectangle
from square import Square
from triangle import Triangle
from circle import Circle
from hexagon import Hexagon

shapes = [
    Rectangle(5, 10),
    Square(4),
    Triangle(4, 3, 3, 4, 5),
    Circle(3),
    Hexagon(6)
]

for sh in shapes:
    print(f"== {sh} ==")
    print(f"{sh.get_area():.2f}")
    print(f"{sh.get_perimeter():.2f}")
    print("-" * 20)