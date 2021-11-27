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
