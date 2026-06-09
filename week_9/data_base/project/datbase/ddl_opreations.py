import mysql.connector
from datbase.connection import connection


def run_query(query: str):
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute(query)
    except Exception as e:
        return e
    finally:
        cursor.close()


def create_database():
    create_db_college = "create database if not exists college"
    run_query(create_db_college)
    run_query("use college")


def drop_database():
    delete_db_college = "drop database if exists college"
    run_query(delete_db_college)


def create_students_table():
    st_table = """create table if not exists students(
    id int auto_increment primary key,
    full_name varchar(100),
    email varchar(100));
    """
    run_query(st_table)

def create_courses_table():
    cr_table = """create table if not exists courses(
    id int auto_increment primary key,
    course_name varchar(100),
    price decimal(10,2));
    """
    run_query(cr_table)


def create_teachers_table():
    th_table = """create table if not exists teachers(
    id int auto_increment primary key,
    full_name varchar(100),
    salary decimal(10,2));"""
    run_query(th_table)

def add_phone_column():
    add_phon = "alter table students add phone varchar(20)"
    run_query(add_phon)


def add_birth_date_column():
    add_birth = "alter table students add birth_date date"
    run_query(add_birth)

def modify_email_column():
    mod_email = "alter table students modify email varchar(255)"
    run_query(mod_email)

def rename_courses_table():
    re_courses = "rename table courses to training_courses"
    run_query(re_courses)

def drop_phone_column():
    de_phon = "alter table students drop column phone"
    run_query(de_phon)


def drop_teachers_table():
    de_techer_tab = "drop table if exists teachers"
    run_query(de_techer_tab)


def drop_all_tables():
    drop_all = "drop table if exists training_courses , students"
    run_query(drop_all)

