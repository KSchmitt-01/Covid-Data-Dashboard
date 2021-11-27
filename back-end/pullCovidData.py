import pandas as pd

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
        if sheet == '989892343': #this sheet has no col headers
            df = pd.read_csv(google_sheet_url, header=None)
        else:
            df = pd.read_csv(google_sheet_url)
        dfDictisu['isu_'+sheet] = df
    return dfDictisu