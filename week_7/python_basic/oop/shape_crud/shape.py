class Shape:
    def __init__(self, shape_id, shape_type):
        self.id = shape_id
        self.shape_type = shape_type

    def get_area(self):
        return 0

    def get_perimeter(self):
        return 0

    def to_dict(self):
        return {}
