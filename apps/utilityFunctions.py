def isNaN(value):
    return value != value

def get_first_value(dataFrame, columnName):
    for i in range(0,5):
        value = dataFrame[columnName].iloc[i]
        if not isNaN(value):
            return value
