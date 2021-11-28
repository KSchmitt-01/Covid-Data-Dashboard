import json
from pullCovidData import *
from utilityFunctions import *
from constants import *

dfDictbsu = pull_bsu_data()

#gets the date and cases for that week returns as a json object
def bsu_parse_week_by_week_bsu():
    #fetches the main sheet out of the bsu google sheet
    bsumain = dfDictbsu['bsu_0']
    #gets the data coulmums for Date and weekly cases
    bsudate = bsumain['Date']
    bsuweeklycases = bsumain['Weekly_Cases']
    rdict = {}

    i = 0
    length = len(bsudate)
    while  i < length:
        rdict[bsudate[i]] = int(bsuweeklycases[i])
        i+=1
    return json.dumps(dict)

def bsu_parse_on_campus_by_week():
    #fetches the main sheet out of the bsu google sheet
    bsumain = dfDictbsu['bsu_0']
    #gets the data coulmums for Date and weekly cases
    bsudate = bsumain['Date']
    bsuweeklycases = bsumain['On-Campus_In_Person']

    rstring = "["
    i = 0
    length = len(bsudate)
    while i < length:
        if pd.isna(bsudate[i]):
            i+=1
            continue

        rstring+='{"date": "'+bsudate[i]+'",'
        rstring+='"cases": '+str(bsuweeklycases[i])
        if i+1 == length:
            rstring += '}'
        else:
            rstring += '},'
        i+=1
    rstring += "]"
    return rstring

def bsu_parse_isolation_capacity():
    #fetches the main sheet out of the bsu google sheet
    bsumain = dfDictbsu['bsu_0']
    isolationBedOccupants = int(get_first_value(bsumain, 'Occ_Isolation_Beds'))

    occupants = {
        "Total": [isolationBedOccupants, (BSU_ISOLATION_BEDS-isolationBedOccupants)], #90 total isolation beds
        "Title": "Isolation Capacity",
        "Labels": ["Occupied Beds (%)", "Avaliable Beds (%)"],
        "Colors": [BSU_BLUE, BSU_ORANGE]
    }
    return json.dumps(occupants)

def bsu_parse_weekly_campus_cases():
    bsumain = dfDictbsu['bsu_0']
    weekly_cases = int(get_first_value(bsumain, 'Weekly_Cases'))

    campus_cases = {
        'Weekly': weekly_cases,
        'OnCampus': int(get_first_value(bsumain, 'On-Campus_In_Person')),
        'OffCampus': int(get_first_value(bsumain, 'Off_Campus_In_Person')),
        'Faculty': int(get_first_value(bsumain, 'Faculty/Staff')),
        'Description': "New cases this week"
    }
    return json.dumps(campus_cases)

def bsu_parse_get_total_vaccines_per_type():
    bsuvaccinations = dfDictbsu['bsu_2125453347']
    moderna =int(get_first_value(bsuvaccinations,'Moderna Vaccine (Total)'))
    pfizer = int(get_first_value(bsuvaccinations,'Pfizer Vaccine (Total)'))
    jj =int(get_first_value(bsuvaccinations,'Johnson & Johnson Vaccine (Total)'))

    total_vaccinations = {
        'vaccinations': [moderna, pfizer, jj]
    }

    return json.dumps(total_vaccinations)

def bsu_parse_total_campus_cases():
    #total cases since 8/15/2021
    bsumain = dfDictbsu['bsu_0']
    total_cases = int(get_first_value(bsumain, 'Total_Cases'))
    print(total_cases)
    campus_cases = {
        'Total': total_cases,
        'OnCampus': int(get_first_value(bsumain, 'Total_On-Campus_In_Person')),
        'OffCampus': int(get_first_value(bsumain, 'Total_Off_Campus_In_Person')),
        'Faculty': int(get_first_value(bsumain, 'Total Faculty/Staff')),
        'Description': "Total campus cases"
    }
    return json.dumps(campus_cases)

def bsu_parse_cases_since_school_start():
    bsumain = dfDictbsu['bsu_0']
    start_index = bsumain.index[bsumain['Date'] == '8/12/2021']
    #total cases
    start_cases = int(bsumain['Total_Cases'].iloc[start_index])
    total_cases = int(get_first_value(bsumain, 'Total_Cases'))
    cases = total_cases - start_cases
    cases = {
        'Total': cases,
        'Description': "Total campus cases since 8/13/21"
    }
    return json.dumps(cases)

def bsu_parse_weekly_positive_tests():
    bsumain = dfDictbsu['bsu_2125453347']
    total_positives = int(get_first_value(bsumain, 'Campus Positive Tests (CLIA)'))
    print(total_positives)
    positives = {
        'Total': total_positives,
        'Description': "Positive campus tests this week (CLIA)"
    }
    return json.dumps(positives)

def bsu_parse_weekly_total_tests():
    bsumain = dfDictbsu['bsu_2125453347']
    total_tests = int(get_first_value(bsumain, 'Campus Total Tests (CLIA)'))
    tests = {
        'Total': total_tests,
        'Description': "Total campus tests this week (CLIA)"
    }
    return json.dumps(tests)

def bsu_parse_week_by_week():
    #fetches the main sheet out of the bsu google sheet
    bsumain = dfDictbsu['bsu_0']
    #gets the data coulmums for Date and weekly cases
    bsudate = bsumain['Date']
    bsuweeklycases = bsumain['Weekly_Cases']

    rstring = "["
    i = 0
    length = len(bsudate)
    while i < length:
        if pd.isna(bsudate[i]):
            i+=1
            continue

        rstring+='{"date": "'+bsudate[i]+'",'
        rstring+='"cases": '+str(bsuweeklycases[i])
        if i+1 == length:
            rstring += '}'
        else:
            rstring += '},'
        i+=1
    rstring += "]"
    return rstring
