from flask import Flask
import filterData

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'testJson': 'Hello World'}

@app.route('/bsuweekdata')
def get_data():
    return filterData.parse_week_by_week_bsu()

@app.route('/isolation-bed-occupants')
def get_isolation_bed_occupants():
    return filterData.parse_isolation_capacity()