import json
from pullCovidData import *
from constants import *
from utilityFunctions import *

isumain = pull_isu_data()

#faculty vs student cases
def isu_parse_cases_by_category():
    isumain = dfDictisu['isu_989892343']
    student_cases = int(isumain.iloc[0,1])
    faculty_cases = int(isumain.iloc[1,1])
    cases = {
        'Total': [student_cases, faculty_cases]
    }
    return json.dumps(cases)

def isu_parse_cases_since_july():
    isumain = dfDictisu['isu_945251250']
    cases = int (isumain['Total'].iloc[2])
    cases = {
        'Total': cases,
        'Description': "Total Pocatello campus cases since 7/8/21"
    }
    return json.dumps(cases)

def isu_parse_student_positives():
    isumain = dfDictisu['isu_1770627829']
    total_positives =  int(get_last_value(isumain, 'Student'))
    positives = {
        'Total': total_positives,
        'Description': "Confirmed positive student cases"
    }
    return json.dumps(positives)

def isu_parse_faculty_positives():
    isumain = dfDictisu['isu_1770627829']
    total_positives = int(get_last_value(isumain, 'Faculty/Staff'))
    positives = {
        'Total': total_positives,
        'Description': "Confirmed positive faculty or staff cases"
    }
    return json.dumps(positives)

def isu_parse_new_cases():
    isumain= dfDictisu['isu_0']
    most_recent =  int(get_last_value(isumain, 'New cases on campus'))
    positives = {
        "Weekly": most_recent,
        'Description': "Positive campus tests this week"
    }
    return json.dumps(positives)

def isu_parse_total_cases_by_location():
    isumain = dfDictisu['isu_945251250']
    pocatello = int(isumain['Total'].iloc[2])
    meridian = int(isumain['Total'].iloc[3])
    idaho_falls = int(isumain['Total'].iloc[4])
    twin_falls = int(isumain['Total'].iloc[5])
    off_campus = int(isumain['Total'].iloc[6])
    experiential = int(isumain['Total'].iloc[7])
    satellite = int(isumain['Total'].iloc[8])

    #There is probably a better name for this but as of right now it needs to 
    #have the same name as bsu in order to load properly
    cases = {
        'vaccinations': [pocatello, meridian, idaho_falls, twin_falls, off_campus,
                experiential, satellite]
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
    #gets the data columns for Date and weekly cases
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

def isu_parse_pocatello_week_by_week():
    isumain= dfDictisu['isu_1393139446']
    #gets the data columns for Date and weekly cases
    isuDateCase = isumain.values

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