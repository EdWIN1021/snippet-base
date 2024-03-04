def hello(func):
  print("Hello World")
  func()

@hello
def greet():
  print("Hi Edwin")