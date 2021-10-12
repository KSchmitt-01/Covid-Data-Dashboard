import pandas as pd

def pull_bsu_data():
    sheets = ['0', '2125453347', '1000239595']
    dfDict = {}
    for sheet in sheets:
        google_sheet_url = "https://docs.google.com/spreadsheets/d/17BspZPppmoADS2fwmwoPjHzZPLo_q_4gi9VPyEQQX2M/export?format=csv&gid={}".format(sheet)
        df = pd.read_csv(google_sheet_url)
        dfDict['bsu_'+sheet] = df
    return dfDict

def pull_isu_data():
    sheets = ['945251250', '0', '989892343', '1786585117', '1770627829', '1393139446', '699607076', '982482025']
    dfDict = {}
    for sheet in sheets:
        google_sheet_url = "https://docs.google.com/spreadsheets/d/1aWRYSUrerFhXM0peQFLsHerHhWF1ZvFTtbfUyPN2kpA/export?format=csv&gid={}".format(sheet)
        df = pd.read_csv(google_sheet_url)
        dfDict['isu_'+sheet] = df
    return dfDict

def filter_by_classes(school):
    if school == "BSU":
        dfDict = pull_bsu_data()

pull_isu_data()
