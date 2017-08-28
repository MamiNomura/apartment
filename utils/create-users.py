# -*- coding: utf-8 -*-
# Create fake 200 employees and save in employees.json
from faker import Factory
import json, random, os
import pandas as pd
import numpy as np

# N: number of employees
N = 100
fake = Factory.create()
CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))

def random_date(start, end):
    """Return a random date

    Args:
    start: begin date of your date range
    end: end date of your date range

        Format for the start and end can be anything that Pandas Timestamp feature permits
        example:
        "1/1/2008 1:30 PM", "2008-01-01 13:30", "20160817"

    Returns:
    A string representation of randome date in YYYY-MM-DD format
    """

    start, end = pd.Timestamp(start), pd.Timestamp(end)
    delta = (end-start).total_seconds()
    offset = np.random.uniform(0., delta)
    offset = pd.offsets.Second(offset)

    return (start + offset).strftime('%Y-%m-%d')


def create_person(i):
    person = {}
    person['name'] = fake.name()
    person['department'] = random.choice(["HR", "Engineering", "Sales", "Marketing"])
    person['hired_date'] = random_date(pd.datetime.now() - pd.DateOffset(years=5), pd.datetime.now())
    return person

def main():
    people = []
    data = {}
    file_path = os.path.join(CURRENT_DIR, 'employees.json')
    with open(file_path, 'w') as f:
        for n in range(N):
            p = create_person(n)
            people.append(p)
        data["data"] = people
        f.write(json.dumps(data))

if __name__ == '__main__':
    main()
