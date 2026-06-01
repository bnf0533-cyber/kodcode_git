
class Shape:
    
    def __init__(self,shape_id,shape_type,*number):
        for num in number:
            self.check_numbers(num)
        self.id = shape_id
        self.shape_type = shape_type
        
    def check_numbers(self,number):
        if type(number) is bool or not isinstance(number,(int,float)):
            raise ValueError("the char is not a number.")
        if number <= 0:
            raise ValueError("the number must be positive number.")
    def get_area(self):
        pass
    
    def get_perimeter(self):
        pass
    
    def to_dict(self):
        data = self.__dict__.copy()
        if "shape_type" in data:
            data["type"] = data.pop("shape_type")
        return data
    def __str__(self):
        return self.__class__.__name__