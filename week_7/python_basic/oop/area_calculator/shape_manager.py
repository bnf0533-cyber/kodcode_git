import json
import os
from square import Square
from rectangle import Rectangle
from circle import Circle
from triangle import Triangle
from hexagon import Hexagon

class ShapeManager:
    def __init__(self):
        self.shapes = []
        self.filename = "shapes.json"
        self.load_from_json()

    def load_from_json(self):
        if not os.path.exists(self.filename):
            return
        try:
            with open(self.filename, "r") as file:
                data = json.load(file)
                for item in data:
                    s_type = item.get("type")
                    s_id = item.get("id")
                    if s_type == "square":
                        self.shapes.append(Square(s_id, item.get("side")))
                    elif s_type == "rectangle":
                        self.shapes.append(Rectangle(s_id, item.get("width"), item.get("height")))
                    elif s_type == "circle":
                        self.shapes.append(Circle(s_id, item.get("radius")))
                    elif s_type == "triangle":
                        self.shapes.append(Triangle(s_id, item.get("height"), item.get("base"), item.get("side_a"), item.get("side_b"), item.get("side_c")))
                    elif s_type == "hexagon":
                        self.shapes.append(Hexagon(s_id, item.get("side")))
        except Exception:
            pass

    def save_to_json(self):
        with open(self.filename, "w") as file:
            json.dump([shape.to_dict() for shape in self.shapes], file, indent=4)

    def create_shape(self, shape):
        self.shapes.append(shape)
        self.save_to_json()

    def get_all_shapes(self):
        return self.shapes

    def update_shape(self, shape_id, new_data):
        for shape in self.shapes:
            if shape.id == shape_id:
                for key, value in new_data.items():
                    shape.check_numbers(value)
                    setattr(shape, key, value)
                self.save_to_json()
                return True
        return False

    def delete_shape(self, shape_id):
        for i, shape in enumerate(self.shapes):
            if shape.id == shape_id:
                del self.shapes[i]
                self.save_to_json()
                return True
        return False