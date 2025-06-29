def greatestNumber(array):
    isIValTheGreatest = 0
    for i in array:
        if i > isIValTheGreatest:
            isIValTheGreatest = i
    return isIValTheGreatest

print(greatestNumber([22, 5, 10]))
