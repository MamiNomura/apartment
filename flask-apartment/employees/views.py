# -*- coding: utf-8 -*-
import json
import numpy as np
from random import shuffle
from datetime import datetime
from flask import request
from flask import (
    Blueprint, request
)
from employees.models import Employee


employee_app = Blueprint('employee_app', __name__)


@employee_app.route('/employees/', methods=['GET'])
def all_employees():
    employees = json.loads(Employee.objects.all().order_by('name').to_json())

    results = {}
    results['success'] = True
    results['data'] = employees

    return json.dumps({ 'success': True, 'data': employees })

@employee_app.route('/employee', methods=['POST'])
def add_employee():
    name = request.json['name']
    department = request.json['department']

    hired_date = datetime.utcnow().strftime("%Y-%m-%d")
    new = Employee(name=name, department=department, hired_date=hired_date)
    new.save()
    return json.dumps({ 'success': True })


@employee_app.route('/groups', methods=['POST'])
def make_groups():

    mia = request.json.get('mia', [])

    employees = json.loads(Employee.objects.all().to_json())

    # filter out mia ppl
    present_employees = list(filter(lambda person: person['_id']['$oid'] not in mia, employees))

    # shuffle people
    shuffle(present_employees)

    # devide them into groups
    emp_size = len(present_employees)
    floor_division = emp_size // 5
    # if you can divide by 5, everybody can fit into that number, otherwise, add 1
    indices_or_sections = floor_division if emp_size % 5 == 0 else  floor_division + 1
    nparrays = np.array_split(present_employees, indices_or_sections)

    # convert np array to list
    groups = list(map(lambda a: a.tolist(), nparrays))


    return json.dumps({'success': True, 'data': {'groups': groups, 'size': len(present_employees)}})
