from rectangle import  Rectangle
class Triangle(Rectangle):
    def __init__(self,height,base,side_a,side_b,side_c):
        super().__init__(height,base)
        self.check_numbers(side_a)
        self.check_numbers(side_b)
        self.check_numbers(side_c)
        self.base = base
        self.side_a = side_a
        self.side_b = side_b
        self.side_c = side_c
    
    def get_area(self):
        return (self.base * self.height) / 2
    
    def get_perimeter(self):
        return  self.side_a + self.side_b + self.side_c
    