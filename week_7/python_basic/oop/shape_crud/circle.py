from shape import Shape
import math

class Circle(Shape):
    def __init__(self, shape_id, radius):
        super().__init__(shape_id, "circle")
        self.radius = radius

    def get_area(self):
        return math.pi * (self.radius ** 2)

    def get_perimeter(self):
        return 2 * math.pi * self.radius

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.shape_type,
            "radius": self.radius
        }
