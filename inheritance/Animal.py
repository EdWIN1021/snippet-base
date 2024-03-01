class Animal():

  def __init__(self):
    print("Animal Created")

  def who_am_i(self):
    print("I am an animal")

  def eat(self):
    print("I am eating")


class Dog(Animal):

  def __init__(self):
    super().__init__()
    print("Dog Created")

  def who_am_i(self):
    print("I am a dog")

  def eat(self):
    print("I am a dog and eating")

  def bark(self):
    print("WOOF!")


my_dog = Dog()

my_dog.who_am_i()
my_dog.eat()
my_dog.bark()


