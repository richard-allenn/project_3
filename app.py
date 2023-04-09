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

#reference to the table
#perth_crime_data = Base.classes.perth_crime_data



#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return "hello! here are the pages available for you to look at"
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/dates<br/>"
        f"/api/v1.0/crimes<br/>"
        f"/api/v1.0/districts"
    )




@app.route("/api/v1.0/crimes")
def passengers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of crimes"""
    # Query the data
    excluded_columns = ['district', 'Month and Year']

    results = [str(column.name) for column in perth_crime_data.columns if column.name not in excluded_columns]

    session.close()

    all_crimes = list(np.ravel(results))
    

    return jsonify(all_crimes)


@app.route("/api/v1.0/districts")
def passengers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of districts"""
    # Query the data
    results = session.query(perth_crime_data.District.distinct()).all()

    session.close()

    all_districts = list(np.ravel(results))
    

    return jsonify(all_passengers)


@app.route("/api/v1.0/dates")
def passengers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of dates"""
    # Query all data
    results = session.query(perth_crime_data.column("month and year").distinct()).all()

    session.close()

    all_dates = list(np.ravel(results))
    

    return jsonify(all_dates)


                                    
if __name__ == "__main__":
    app.run
