from rectangle import  Rectangle
class Square(Rectangle):
    def __init__(self,shape_id,side):
        super().__init__(shape_id,side,side)
        self.shape_type = "square"
        self.side = side
    