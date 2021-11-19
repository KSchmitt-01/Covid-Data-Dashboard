from flask import Flask
from bsu_filter import *
from isu_filter import *

app = Flask(__name__)


@app.route('/bsuweekdata')
def get_data():
    return bsu_parse_week_by_week_bsu()

@app.route('/isolation-bed-occupants')
def get_isolation_bed_occupants():
    return bsu_parse_isolation_capacity()

@app.route('/weekly-campus-cases')
def get_weekly_campus_cases():
    return bsu_parse_weekly_campus_cases()

@app.route('/total-campus-cases')
def get_total_campus_cases():
    return bsu_parse_total_campus_cases()

@app.route('/school-year-cases')
def get_total_school_year_cases():
    return bsu_parse_cases_since_school_start()

@app.route('/test-route')
def test():
    return isu_parse_cases_by_category()