import mysql.connector
import config

connection = mysql.connector.connect(
    host=config.HOST,
    port=3306,
    user=config.USER,
    password=config.PASSWORD
    )