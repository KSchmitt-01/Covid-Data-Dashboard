import json
from pullCovidData import *

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

def bsu_parse_isolation_capacity():
    #fetches the main sheet out of the bsu google sheet
    bsumain = dfDictbsu['bsu_0']
    isolationBedOccupants = int(bsumain['Occ_Isolation_Beds'].iloc[0])

    occupants = {
        "Occupants": [isolationBedOccupants, (90-isolationBedOccupants)] #90 total isolation beds
    }
    return json.dumps(occupants)

def bsu_parse_weekly_campus_cases():
    bsumain = dfDictbsu['bsu_0']
    weekly_cases = int(bsumain['Weekly_Cases'].iloc[1])

    campus_cases = {
        'Weekly': weekly_cases,
        'OnCampus': int(bsumain['On-Campus_In_Person'].iloc[0]),
        'OffCampus': int(bsumain['Off_Campus_In_Person'].iloc[0]),
        'Faculty': int(bsumain['Faculty/Staff'].iloc[0]),
        'Description': "New cases this week"
    }
    return json.dumps(campus_cases)

def bsu_parse_get_total_vaccines_per_type():
    bsuvaccinations = dfDictbsu['bsu_2125453347']
    moderna =int(bsuvaccinations['Moderna Vaccine (Total)'].iloc[1])
    pfizer = int(bsuvaccinations['Pfizer Vaccine (Total)'].iloc[1])
    jj =int(bsuvaccinations['Johnson & Johnson Vaccine (Total)'].iloc[1])

    total_vaccinations = {
        'vaccinations': [moderna, pfizer, jj]
    }

    return json.dumps(total_vaccinations)

def bsu_parse_total_campus_cases():
    #total cases since 8/15/2021
    bsumain = dfDictbsu['bsu_0']
    total_cases = int(bsumain['Total_Cases'].iloc[1])
    print(total_cases)
    campus_cases = {
        'Total': total_cases,
        'OnCampus': int(bsumain['Total_On-Campus_In_Person'].iloc[0]),
        'OffCampus': int(bsumain['Total_Off_Campus_In_Person'].iloc[0]),
        'Faculty': int(bsumain['Total Faculty/Staff'].iloc[0]),
        'Description': "Total campus cases"
    }
    return json.dumps(campus_cases)

def bsu_parse_cases_since_school_start():
    bsumain = dfDictbsu['bsu_0']
    start_index = bsumain.index[bsumain['Date'] == '8/12/2021']
    #total cases
    start_cases = int(bsumain['Total_Cases'].iloc[start_index])
    total_cases = int(bsumain['Total_Cases'].iloc[1])
    cases = total_cases - start_cases
    cases = {
        'Total': cases,
        'Description': "Total campus cases since 8/13/21"
    }
    return json.dumps(cases)

def bsu_parse_weekly_positive_tests():
    bsumain = dfDictbsu['bsu_2125453347']
    total_positives = int(bsumain['Campus Positive Tests (CLIA)'].iloc[0])
    positives = {
        'Total': total_positives,
        'Description': "Positive campus tests this week (CLIA)"
    }
    return json.dumps(positives)

def bsu_parse_weekly_total_tests():
    bsumain = dfDictbsu['bsu_2125453347']
    total_tests = int(bsumain['Campus Total Tests (CLIA)'].iloc[0])
    tests = {
        'Total': total_tests,
        'Description': "Total campus tests this week (CLIA)"
    }
    return json.dumps(tests)
