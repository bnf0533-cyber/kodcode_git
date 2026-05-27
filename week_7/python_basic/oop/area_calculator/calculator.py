class Shape:
    def __init__(self,*number):
        for num in number:
            self.check_numbers(num)
        
    def check_numbers(self,number):
        if type(number) is bool or not isinstance(number,(int,float)):
            raise ValueError("the char is not a number.")
        if number <= 0:
            raise ValueError("the number must be positive number.")
    def get_area(self):
        pass
    
    def get_perimeter(self):
        pass
    
    def __str__(self):
        return self.__class__.__name__