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

@app.route('/isu-total-pocatello-campus-cases')
def isu_get_total_campus_cases():
    return isu_parse_cases_since_july()

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

@app.route('/isu-weekly-student-positive-tests')
def isu_get_student_positive_tests():
    return isu_parse_student_positives()

@app.route('/weekly-total-tests')
def get_weekly_total_tests():
    return bsu_parse_weekly_total_tests()

@app.route('/isu-weekly-faculty-positive-tests')
def isu_get_faculty_positive_tests():
    return isu_parse_faculty_positives()

@app.route('/isu-weekly-campus-cases')
def get_isu_weekly_cases():
    return isu_parse_new_cases()

@app.route('/isu-cases-by-category')
def isu_cases_by_catergory():
    return isu_parse_cases_by_category()

@app.route('/another-test-route')
def test2():
    return test_def()

@app.route('/bsu_isolation_bed_count')
def get_isolation_bed_count():
    return bsu_parse_isolation_bed_count()

@app.route('/bsu_parse_weekly_oncampus_cases')
def get_weekly_oncampus_cases_count():
    return bsu_parse_weekly_oncampus_cases()

@app.route('/bsu_parse_weekly_offcampus_cases')
def get_weekly_offcampus_cases_count():
    return bsu_parse_weekly_offcampus_cases()

@app.route('/bsu_parse_weekly_faculty_cases')
def get_weekly_faculty_cases_count():
    return bsu_parse_weekly_faculty_cases()
@app.route('/weekly-on-campus')
def get_weekly_on_campus():
    return bsu_parse_on_campus_by_week()

@app.route('/isu-pocatello-cases')
def get_isu_pocatello_cases():
    return isu_parse_pocatello_week_by_week();
@app.route('/bsu_parse_Vacination_Table')
def get_large_table_data():
    return bsu_parse_Vacination_Table()

@app.route('/bsu_Vacination_Table_Small')
def get_small_Table_Data():
    return bsu_parse_Vacination_Table_Small()

