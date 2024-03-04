def cubes_generator(n):
  for x in range(n):
    yield x**3

n = 5
for cube in cubes_generator(n):
    print(cube)

# 

print(list(cubes_generator(5)))

# 

cube = cubes_generator(5)
print(next(cube))

# 

s = "hello"
s_iter = iter(s)
print(next(s_iter))