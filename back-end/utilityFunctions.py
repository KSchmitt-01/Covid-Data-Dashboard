def isNaN(value):
    return value != value

def get_first_value(dataFrame, columnName):
    for i in range(0,5):
        value = dataFrame[columnName].iloc[i]
        if not isNaN(value):
            return value

def get_last_value(dataFrame, columnName):
    value = int(dataFrame[columnName].tail(1))

    if not isNaN(value):
        return value
    else:
        return 0