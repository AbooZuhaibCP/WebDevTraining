import mysql.connector
from flask import current_app

def create_connection():
    current_app.config['MYSQL_HOST'] = 'localhost'
    current_app.config['MYSQL_USER'] = 'root'
    current_app.config['MYSQL_PASSWORD'] = ''
    current_app.config['MYSQL_DATABASE'] = 'organisation'

    mysql = mysql.connector.connect(**current_app.config['MYSQL'])

    return mysql