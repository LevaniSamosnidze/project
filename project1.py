# Determine if a walk (given as an array of directions) takes exactly 10 minutes 
# and returns you to the starting point.

# Args:
# walk (list of str): List of one-letter direction strings ('n', 's', 'e', 'w').
# Each direction takes 1 minute (so list with length of 10 elements takes 10 minutes)

# Returns:
# bool: True if the walk is exactly 10 minutes and returns to start, False otherwise.

# Test Cases:
# ['w','e','w','e','w','e','w','e','w','e','w','e'] -> False
# ['n','s','n','s','n','s','n','s','n','s'] -> True
# ['n','n','n','s','n','s','n','s','n','s'] -> False
# ['e', 'e', 'w', 'n', 'n', 's', 'e', 'w', 'n', 's'] -> False
# ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'] -> True



def listfun(arr):
    if len(arr) != 10:
        return False
    len1 = 0
    len2 = 0
    
    
    for i in arr:
        if i == 'n':
            len1 += 1
        elif i == 's':
            len1 -= 1
        elif i == 'e':
            len2 += 1
        elif i == 'w':
            len2 -= 1
    return len2 == 0 and len1 == 0
            
print(listfun(['w','e','w','e','w','e','w','e','w','e','w','e']))