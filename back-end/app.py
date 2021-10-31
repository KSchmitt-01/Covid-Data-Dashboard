import time
from flask import Flask
import pullCovidData

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'testJson': 'Hello World'}

@app.route('/test')
def get_data():
    pullCovidData.pull_bsu_data()