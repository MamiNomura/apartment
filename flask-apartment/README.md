flask-example
=============

Flask (backend restAPI) application.

# You need

    Docker   
    python3

# Install and run project

    cd flask-apartment
    pip3 install -r requirements-dev.txt
    python3 run.py # run on 127.0.0.1:5000

# How run the tests?

    nosetests

# To install/start Mongodb and add some sample data:

   cd utils
   docker-compose up   
   python3 create-users.py  # create 100 sample employees
   python3 import.py  # uploads to mongodb

   Note: Make sure to install all python libraries before running create-users.py
   
