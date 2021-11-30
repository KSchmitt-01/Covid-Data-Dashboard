def isNaN(value):
    return value != value

def get_first_value(dataFrame, columnName):
    for i in range(0,5):
        value = dataFrame[columnName].iloc[i]
        if not isNaN(value):
            return value

def get_last_value(dataFrame, columnName):

    i = 0
    value = dataFrame[columnName].iloc[0]
    while value is not isNaN(i+1):
        value = dataFrame[columnName].iloc[i+1]
        i = i+1
    
    if isNaN(value):
        #Return value
        return 0
    else:
        return value