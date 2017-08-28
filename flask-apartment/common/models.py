# -*- coding: utf-8 -*-
from application import db

from datetime import datetime


class BaseDocument(db.Document):

    created_at = db.DateTimeField(
        required=True
    )
    updated_at = db.DateTimeField(        
        required=True
    )

    meta = {'abstract': True}

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        self.updated_at = datetime.now()
        return super(BaseDocument, self).save(*args, **kwargs)
