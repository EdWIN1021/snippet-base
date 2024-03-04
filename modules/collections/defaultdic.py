from collections import defaultdict

# Creating a defaultdict with int as the default factory
count_dict = defaultdict(int)

# Incrementing the count for keys
count_dict['apple'] += 1
count_dict['banana'] += 2
count_dict['apple'] += 1

print(count_dict)