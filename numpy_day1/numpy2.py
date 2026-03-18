import numpy as np
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])
print(arr[2])
print(arr[-1])

print(arr[1:4])
print(arr[:3])
print(arr[2:])

mat = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ])
print(mat[0, 0])
print(mat[1, 2])
print(mat[2, 1])

print(mat[0:2, 1:3])
print(mat[:, 1])
print(mat[1, :])

arr2 =np.arange(1, 7)
print(arr2)
reshaped = arr2.reshape(2, 3)
print(reshaped)

flat = reshaped.flatten()
print(flat)

