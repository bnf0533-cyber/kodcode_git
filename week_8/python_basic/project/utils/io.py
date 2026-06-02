import json

def read_info():
    with open("./soldiers.json" , "r") as jf:
        json_file = json.load(jf)
    return json_file

def write_info(new_list):
    with open("./soldiers.json","w") as jf:
        json.dump(new_list,jf,indent=2)
        
