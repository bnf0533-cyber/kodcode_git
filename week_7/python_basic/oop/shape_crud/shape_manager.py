import json
from square import Square
from rectangle import Rectangle
from circle import Circle

class ShapeManager:
    def __init__(self):
        self.shapes = []
        self.load_from_json()

    def load_from_json(self):
        try:
            with open("shapes.json", "r") as f:
                data = json.load(f)
                for item in data:
                    if item["type"] == "square":
                        self.shapes.append(Square(item["id"], item["side"]))
                    elif item["type"] == "rectangle":
                        self.shapes.append(Rectangle(item["id"], item["width"], item["height"]))
                    elif item["type"] == "circle":
                        self.shapes.append(Circle(item["id"], item["radius"]))
        except FileNotFoundError:
            self.shapes = [] 
        except Exception:
            self.shapes = [] 

    def save_to_json(self):
        data_list = []
        for s in self.shapes:
            data_list.append(s.to_dict())
        
        with open("shapes.json", "w") as f:
            json.dump(data_list, f, indent=4)

    def create_shape(self, shape):
        self.shapes.append(shape)
        self.save_to_json()

    def get_all_shapes(self):
        return self.shapes

    def update_shape(self, shape_id, new_data):
        for s in self.shapes:
            if s.id == shape_id:
                if s.shape_type == "square" and "side" in new_data:
                    s.side = new_data["side"]
                elif s.shape_type == "rectangle":
                    if "width" in new_data:
                        s.width = new_data["width"]
                    if "height" in new_data:
                        s.height = new_data["height"]
                elif s.shape_type == "circle" and "radius" in new_data:
                    s.radius = new_data["radius"]
                
                self.save_to_json()
                return True
        return False

    def delete_shape(self, shape_id):
        for i in range(len(self.shapes)):
            if self.shapes[i].id == shape_id:
                self.shapes.pop(i)
                self.save_to_json()
                return True
        return False
