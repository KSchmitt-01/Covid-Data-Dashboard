import pandas as pd
import json

dfDictbsu = {}
dfDictisu = {}

def pull_bsu_data():
    sheets = ['0', '2125453347', '1000239595']
    for sheet in sheets:
        google_sheet_url = "https://docs.google.com/spreadsheets/d/17BspZPppmoADS2fwmwoPjHzZPLo_q_4gi9VPyEQQX2M/export?format=csv&gid={}".format(sheet)
        df = pd.read_csv(google_sheet_url)
        dfDictbsu['bsu_'+sheet] = df
    return dfDictbsu

def pull_isu_data():
    sheets = ['945251250', '0', '989892343', '1786585117', '1770627829', '1393139446', '699607076', '982482025']
    for sheet in sheets:
        google_sheet_url = "https://docs.google.com/spreadsheets/d/1aWRYSUrerFhXM0peQFLsHerHhWF1ZvFTtbfUyPN2kpA/export?format=csv&gid={}".format(sheet)
        df = pd.read_csv(google_sheet_url)
        dfDictisu['isu_'+sheet] = df
    return dfDictisu

def filter_by_classes(school):
    if school == "BSU":
        dfDict = pull_bsu_data()

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