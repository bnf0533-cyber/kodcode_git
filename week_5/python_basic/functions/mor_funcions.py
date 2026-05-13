def momo(a,/,b,c):
    print(f"a = {a} , b = {b} , c = {c}")
    print()
momo(1,2,3)
momo(1,b=2,c=3)

def momo2(*agrs, **kwarges):
    print("pos: " , agrs)
    print("key: ",kwarges)
    print()
momo2(1,2,3 ,nams = "israel" , age=30)

def momo3(pos_only, /, *, kw_only):
    print(f"Positional only: {pos_only}")
    print(f"Keyword only: {kw_only}")

momo3("Hello", kw_only="World")