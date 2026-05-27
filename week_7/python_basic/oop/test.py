class Car:
    def __init__(self, age):
        self.age = age
        self.color = "black"
class Toyota(Car):
    def __init__(self,age):
        super().__init__(age)


b = Toyota()

print(b.__dict__)