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

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(autoload_with=engine)

# reference to the table
perth_crime_data = sqlalchemy.Table('perth_crime_data', sqlalchemy.MetaData(), autoload=True, autoload_with=engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return """
    hello! here are the pages available for you to look at:

    Available Routes:

        /api/v1.0/dates

        /api/v1.0/crimes

        /api/v1.0/districts
    """

@app.route("/api/v1.0/crimes")
def get_crimes():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of crimes"""
    # Query the data
    excluded_columns = ['district', 'Month and Year']

    results = [str(column.name) for column in perth_crime_data if column.name not in excluded_columns]

    session.close()

    all_crimes = list(np.ravel(results))

    return jsonify(all_crimes)


@app.route("/api/v1.0/districts")
def get_districts():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of districts"""
    # Query the data
    results = session.query(perth_crime_data.District.distinct()).all()

    session.close()

    all_districts = list(np.ravel(results))

    return jsonify(all_districts)


@app.route("/api/v1.0/dates")
def get_dates():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of dates"""
    # Query all data
    results = session.query(perth_crime_data.Month_and_Year.distinct()).all()

    session.close()

    all_dates = list(np.ravel(results))

    return jsonify(all_dates)


if __name__ == "__main__":
    app.run(debug=True)
