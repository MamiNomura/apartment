# -*- coding: utf-8 -*-
from settings import *

# flask core settings
TESTING = True

# flask wtf settings
WTF_CSRF_ENABLED = False

# flask mongoengine settings
MONGODB_SETTINGS = {
    'DB': 'apartment_test'
}


PRESERVE_CONTEXT_ON_EXCEPTION = False
# flask wtf settings
WTF_CSRF_ENABLED = False
