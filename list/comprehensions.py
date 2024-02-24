list1 = [1,2,3,4,5]

list2 = [num for num in list1]
print(list2)

list3 = [num**2 for num in range(0,10)]
print(list3)

list4 = [num for num in range(0,10) if num%2 == 0]
print(list4)

list5 = [num if num%2 == 0 else "odd" for num in list1]
print(list5)