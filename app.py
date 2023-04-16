import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from datetime import datetime
from dateutil.relativedelta import relativedelta


from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://postgres:postgres@localhost:5432/perth_crimes")

print(engine.url)

# reflect an existing database into a new model

results = engine.execute("SELECT * FROM perth_crime_data")
print(results)



#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    print("server recieved request for 'home' page...")
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/crimedata<br/>"
        f"/api/v1.0/stations<br/>"
        
    )


@app.route("/api/v1.0/crimedata")
def get_data():
    with engine.connect() as conn:
        result = conn.execute('select * FROM perth_crime_data')
        headers = result.keys()
        rows = result.fetchall()
        data = []
        for row in rows:
            data.append(dict(zip(headers, row)))

        return jsonify(data)

        
@app.route("/api/v1.0/stations")
def get_stations():
    with engine.connect() as conn:
        result = conn.execute('select * FROM station_data')
        headers = result.keys()
        rows = result.fetchall()
        data = []
        for row in rows:
            data.append(dict(zip(headers, row)))

        return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
