from shape import Shape

class Rectangle(Shape):
    def __init__(self,shape_id,width,height):
        super().__init__(shape_id,"rectangle",width,height)
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height
    
    def get_perimeter(self):
        return (self.width + self.height) * 2
    