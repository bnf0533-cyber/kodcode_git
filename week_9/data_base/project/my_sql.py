# import mysql.connector

# connection = mysql.connector.connect(
#     host="127.0.0.1",
#     port=3306,
#     user="root",
#     password="secret",
#     database="mydb"
# )

# cursor = connection.cursor(dictionary=True)
# db = "create database users;"
# cursor.execute(db)
# cursor.execute("use ;")

# cursor.execute("""
#                 create table table_users (
#                 id int primary key auto_increment,
#                 email varchar(20) unique,
#                 phon varchar (30),
#                 age int
#                 );""")
# print(cursor.fetchall())
