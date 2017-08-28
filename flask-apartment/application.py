# -*- coding: utf-8 -*-
from flask import Flask
from flask_cors import CORS
from flask.ext.mongoengine import MongoEngine

# flask mongoengine
db = MongoEngine()


def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)

    # allows cors
    CORS(app)

    # flask mongoengine init
    db.init_app(app)

    # import blueprints
    from employees.views import employee_app

    # register blueprints
    app.register_blueprint(employee_app)


    return app
