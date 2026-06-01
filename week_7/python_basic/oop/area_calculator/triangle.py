from shape import Shape
class Triangle(Shape):
    def __init__(self,shape_id,height,base,side_a,side_b,side_c):
        super().__init__(shape_id,"triangle",side_a,side_b,side_c,height,base)
        self.base = base
        self.side_a = side_a
        self.side_b = side_b
        self.side_c = side_c
        self.height = height
        
    
    def get_area(self):
        return (self.base * self.height) / 2
    
    def get_perimeter(self):
        return  self.side_a + self.side_b + self.side_c
    