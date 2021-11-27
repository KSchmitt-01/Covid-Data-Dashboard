import json
from pullCovidData import *

isumain = pull_isu_data()

def isu_parse_cases_by_category():
    isumain = dfDictisu['isu_989892343']
    student_cases = int(isumain.iloc[0,1])
    faculty_cases = int(isumain.iloc[1,1])
    print(student_cases, faculty_cases)

    cases = {
        'Occupants': [student_cases, faculty_cases] #probably should change property name
    }
    return json.dumps(cases)

def test_def():
    j = {
        'Total': 690,
        'Description': 'ISU test route description'
    }
    return json.dumps(j)

def isu_parse_week_by_week():
    #fetches the main sheet out of the bsu google sheet
    isu = dfDictisu['isu_0']
    #gets the data coulmums for Date and weekly cases
    isuDateCase = isu.values

    z = 0

    length = len(isuDateCase)

    rstring = "["

    for i in isuDateCase:
        rstring+='{"date": "'+i[0]+'",'
        rstring+='"cases": '+str(i[1])
        if z+1 == length:
            rstring += '}'
        else:
            rstring += '},'
        z+=1

    rstring += "]"
    return rstring

