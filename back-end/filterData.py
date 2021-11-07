import json
from pullCovidData import *

dfDictbsu = pull_bsu_data()

#gets the date and cases for that week returns as a json object
def parse_week_by_week_bsu():
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

def parse_isolation_capacity():
    #fetches the main sheet out of the bsu google sheet
    bsumain = dfDictbsu['bsu_0']
    #gets the data coulmums for Date and weekly cases
    isolationBedOccupants = int(bsumain['Occ_Isolation_Beds'].iloc[0])
    print(isolationBedOccupants)

    occupants = {
    "Occupants": isolationBedOccupants
    }


    return json.dumps(occupants)