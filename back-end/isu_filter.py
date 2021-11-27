import json
from pullCovidData import *
from constants import *

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

def test_def():
    j = {
        'Total': 690,
        'Description': 'ISU test route description'
    }
    return json.dumps(j)

