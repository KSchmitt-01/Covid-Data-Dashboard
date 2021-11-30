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
        'Total': [student_cases, faculty_cases],
        'Title': 'Total Cases by Category',
        "Labels": ["Students", "Faculty/Staff"],
        "Colors": [ISU_GREY, ISU_LIGHT_ORANGE]

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
    total_positives = int(isumain['Student'].tail(1))
    print(total_positives)
    positives = {
        'Total': total_positives,
        'Description': "Confirmed Positive Student Cases"
    }
    return json.dumps(positives)

def isu_parse_faculty_positives():
    isumain = dfDictisu['isu_1770627829']
    total_positives = int(isumain['Faculty/Staff'].tail(1))
    print(total_positives)
    positives = {
        'Total': total_positives,
        'Description': "Confirmed Positive Faculty or Staff Cases"
    }
    return json.dumps(positives)

def isu_parse_new_cases():
    isumain= dfDictisu['isu_0']
    most_recent = int(isumain['New Cases on Campus'].tail(1))
    print("length")
    print(len(isumain))
    positives = {
        "Weekly": most_recent,
        'Description': "Positive campus tests this week (CLIA)"
    }

    print(positives)
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

