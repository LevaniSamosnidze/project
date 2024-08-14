# Write a function with the rules:

# returns true  / True if every element in an array is an integer or a float with no decimals.
# returns true  / True if array is empty.
# returns false / False for every other input.


# Test cases:
# [] -> True
# [1, 2, 3, 4] -> True
# [1.0, 2.0, 3.0] -> True
# [1.0, 2.0, 3.0001] -> False
# ["-1"] -> False


def list_arr(arr):
    for i in arr:
        if not ((isinstance(i, int)) or (isinstance(i, float)) and i.is_integer()):
            return False
    return True

print(list_arr([1,2,3,4]))

