from collections import namedtuple

Person = namedtuple('Person', ['name', 'age'])

person1 = Person(name='Alice', age=30)
person2 = Person(name='Bob', age=25)

print(person1.name)  # Output: Alice
print(person2.age)   # Output: 25

print(person1[1])     # Output: 30
