from shape import Shape
from math import sqrt

class Hexagon(Shape):
    def __init__(self,side):
        super().__init__(side)
        self.side = side
    
    def get_area(self):
        return (3 * sqrt(3) * self.side**2) / 2
    
    def get_perimeter(self):
        return self.side *  6