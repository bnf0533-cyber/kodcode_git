from shape import Shape
from math import pi
class Circle(Shape):
    def __init__(self,id,radius,*number):
        super().__init__(id,"circle",radius)
        self.radius = radius
    
    def get_area(self):
        return pi * self.radius**2
    
    def get_perimeter(self):
        return self.radius * 2 * pi