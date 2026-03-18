import numpy as np
print("NumPy Imported Successfully!")

import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr)

print(type(arr))

arr2 = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
print(arr2)

z = np.ones((3,3))
print(z)
o = np.ones((2,2))
print(o)

f = np.full((3,3), 7)
print(f)

x = np.arange(1, 11)
print(x)

arr = np.array([10, 20, 30])
print(arr + 5)
print(arr * 2)
print(arr / 10)
print(arr ** 2)

print(arr.shape)
print(arr.ndim)
print(arr.size)

