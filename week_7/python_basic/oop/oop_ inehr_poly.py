# inher

class Vehicle:
    def __init__(self,color):
        self.color = color
    def drive(self):
        pass

class Car(Vehicle):
    def __init__(self, color):
        super().__init__(color)
    def name_of(self,name):   
        self.name = name

c = Car("black")
c.drive()
c.name_of("yoram")
print(c.name)


# poly

class Sahpe:
    def area(self):
        return "a"

class Circle(Sahpe):
    def area(self):
        return "b"

class Rectangle(Sahpe):
    def area(self):
        return "c"
    
def make_area(sahpe):
    print(sahpe.area())
ares = [Circle(),Rectangle()]
for a in ares:
    make_area(a)



