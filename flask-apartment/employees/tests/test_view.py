# -*- coding: utf-8 -*-
import simplejson as json
from flask import url_for
from common.tests import BaseTestCase
from employees.models import Employee


class EmployeesViewTest(BaseTestCase):

    def setUp(self):
        self.employee = Employee (
            name='user1',
            department='Engineering',
            hired_date='2017-08-27'
        ).save()
        self.url = url_for('employee_app.all_employees')

    def tearDown(self):
        Employee.drop_collection()

    def test_get_employees(self):
        # Act
        resp = self.client.get(self.url, content_type='application/json')

        # Assert
        data = json.loads(resp.data)

        self.assertStatus(resp, 200)
        self.assertEquals(1, len(data['data']))
        self.assertEquals('Engineering', data['data'][0]['department'])

class GroupsViewTest(BaseTestCase):
    def setUp(self):
        for i in range(10):
            self.employee = Employee(
                name='user{}'.format(i),
                department='Engineering',
                hired_date='2017-08-27'
            ).save()
        self.url = url_for('employee_app.make_groups')

    def tearDown(self):
        Employee.drop_collection()

    def test_make_groups(self):
        # Arrange
        data = json.dumps(json.loads('{"mia": []}'))

        # Act
        resp = self.client.post(self.url, data=data, content_type='application/json')

        # Assert
        self.assertStatus(resp, 200)

        data = json.loads(resp.data)
        groups = data['data']['groups']

        # 10ppl should go to 2 groups of 5,
        self.assertEquals(2, len(groups))
        for g in groups:
            self.assertEqual(5, len(g))


    def test_make_groups_with_mia(self):
        # Arrange
        # 3 ppl are absent
        mia = []
        for n in range(3):
            user = Employee.objects.get(name='user{}'.format(n))
            mia.append(str(user.id))

        data = {"mia": mia}

        # Act
        resp = self.client.post(self.url, data=json.dumps(data), content_type='application/json')

        # Assert
        data = json.loads(resp.data)
        groups = data['data']['groups']

        self.assertStatus(resp, 200)
        self.assertEquals(2, len(data['data']))

        # 7 ppl should go to 2 groups of 4, 3,
        self.assertEquals(2, len(groups))
        self.assertEqual(4, len(groups[0]))
        self.assertEqual(3, len(groups[1]))