from shape import Shape
from math import pi
class Circle(Shape):
    def __init__(self,radius):
        super().__init__(radius)
        self.radius = radius
    
    def get_area(self):
        return pi * self.radius**2
    
    def get_perimeter(self):
        return self.radius * 2 * pi