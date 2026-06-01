import requests
from fastapi import FastAPI

respon = requests.get("http://jsonplaceholder.typicode.com/posts/1")
print(respon.status_code)
print(f"{respon.json()}")
print(respon.text)


nwe_post = {"title" : "hello",
            "body": "somthing",
            "result" : 1}


r = requests.post("http://jsonplaceholder.typicode.com/posts",json=nwe_post)
print(r.status_code)


r = requests.delete("http://jsonplaceholder.typicode.com/posts/1")
print(r.status_code)


r = requests.get("http://jsonplaceholder.typicode.com/users/1").json()
print(f"Name : {r["name"]}")
print(f"Email : {r["email"]}")
print(f"City : {r["address"].get("city","defult")}")


r = requests.get("http://jsonplaceholder.typicode.com/posts")
r = r.json()
print(len(r))


r = requests.get("http://jsonplaceholder.typicode.com/posts?userId=2")
r = r.json()
for p in r:
    print(p["title"])


def safe_get(url):
    r = requests.get(url)
    if r.status_code == 200:
        return r.json()
    elif r.status_code == 404:
        return None


app = FastAPI()
@app.get("/greet")
def get_hello(name="world"):
    return {"message" : f"hello , {name}!"}


posts = requests.get("http://jsonplaceholder.typicode.com/posts").json()
users = requests.get("http://jsonplaceholder.typicode.com/users").json()

user_map = {}
for user in users:
    user_map[user["id"]] = user["name"]
for post in posts:
    id_post = post["userId"]
    name = user_map.get(id_post,"yyy")
    print(f'"{post["title"]}" by {name}')

