try:
  result = 10 + 10

except TypeError:
  print("TypeError")

except OSError:
  print("OSError")

except:
  print("Error")

else:
  print(result)

finally:
  print("I always")