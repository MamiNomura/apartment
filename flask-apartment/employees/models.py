# -*- coding: utf-8 -*-
from flask import current_app

from datetime import datetime
from application import db
from common.models import BaseDocument


class Employee(BaseDocument):

    name = db.StringField(
        required=True,
        max_length=100
    )

    department = db.StringField(
        default=False,
        required=True
    )

    hired_date = db.StringField(
        required=False
    )

    meta = {
        'indexes': ['name']
    }

    def __unicode__(self):
        return self.name
