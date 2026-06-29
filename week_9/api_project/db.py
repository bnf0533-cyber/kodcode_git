import mysql.connector 
from config import *

class DBmanger: 
    def __init__(self):
        self.config = {
                "host" : HOST,
                "port" : PORT,
                "user" : USER,
                "password" : PASSWORD,
                "database" : DATABASE
                }
        self._connection = None
    def get_connection(self):
        try:
            if self._connection:
                return self._connection
            self._connection = mysql.connector.connect(
                **self.config
            )
            return self._connection
        except Exception as e:
            raise e
        
    def disconect(self):
        if self._connection and self._connection.is_connected():
            self._connection.close()
            self._connection = None

    def is_connect(self):
        return self._connection and self._connection.is_connected()