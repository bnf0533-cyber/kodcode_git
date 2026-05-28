from shape import Shape

class Square(Shape):
    def __init__(self, shape_id, side):
        super().__init__(shape_id, "square")
        self.side = side

    def get_area(self):
        return self.side * self.side

    def get_perimeter(self):
        return self.side * 4

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.shape_type,
            "side": self.side
        }
