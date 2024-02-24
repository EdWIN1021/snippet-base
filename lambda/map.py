def square(num):
  return num**2

list1 = [1,2,3,4,5]

for item in map(square, list1):
  print(item)

list2 = list(map(square, list1))
print(list2)

list3 = list(map(lambda num : num**2, list1))
print(list3)