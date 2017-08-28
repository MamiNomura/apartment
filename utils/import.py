from pprint import pprint
from pymongo import InsertOne, DeleteMany, ReplaceOne, UpdateOne, MongoClient
import os, json
from pymongo.errors import BulkWriteError
from datetime import datetime


db = MongoClient().apartment

CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))
SAMPLE_FILE = os.path.join(CURRENT_DIR, 'employees.json')



with open(SAMPLE_FILE, 'r') as f:
    employees = json.loads(f.read())['data']

requests = []
for e in employees:
    requests.append(InsertOne(e))


try:
    db.employee.bulk_write(requests)
except BulkWriteError as bwe:
    pprint(bwe.details)


db.employees.count()
