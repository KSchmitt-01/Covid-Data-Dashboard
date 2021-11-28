from flask import Flask
from bsu_filter import *
from isu_filter import *

app = Flask(__name__)


@app.route('/bsuweekdata')
def get_bsu_data_week_by_week():
    return bsu_parse_week_by_week()

@app.route('/isuweekdata')
def get_isu_data_week_by_week():
    return isu_parse_week_by_week()

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

@app.route('/total-vaccinations-per-type')
def get_total_vaccines_per_type():
    return bsu_parse_get_total_vaccines_per_type()

@app.route('/total_cases_by_location')
def get_total_cases_by_location():
    return isu_parse_total_cases_by_location()
    
@app.route('/weekly-positive-tests')
def get_weekly_positive_tests():
    return bsu_parse_weekly_positive_tests()

@app.route('/weekly-total-tests')
def get_weekly_total_tests():
    return bsu_parse_weekly_total_tests()

@app.route('/test-route')
def test():
    return isu_parse_cases_by_category()

@app.route('/another-test-route')
def test2():
    return test_def()

@app.route('/bsu_parse_Vacination_Table')
def gettabledata():
    return bsu_parse_Vacination_Table()
