def check_even(num):
  return num % 2 == 0

list1 = [1,2,3,4,5]

for num in filter(check_even, list1):
  print(num)

list2 = list(filter(check_even, list1))
print(list2)

list3 = list(filter(lambda num : num%2 == 0, list1))
print(list3)