const myForm = document.getElementById("userForm");
myForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const name = myForm.name.value;
    const email = myForm.email.value;
    const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
        loadUsers(response)
    }
});

function addUser(user) {
    list.innerHTML += `<li class = 'child'>${user.name} - ${user.email}</li>`;
}
async function loadUsers() {
    list.innerHTML = ``;
    const res = await fetch("http://127.0.0.1:3000/api/users");
    const users = await res.json();
    users.forEach(addUser);
}

const list = document.querySelector("#parent");
list.addEventListener("click", (e) => {
    e.stopPropagation();
    const li = e.target.closest("li");
    li.classList.toggle("selected");
});

const btn = document.querySelector(".btn-add");
btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const li = document.createElement("li");
    li.classList.add("child");
    li.textContent = "number two";
    list.appendChild(li);
});

window.addEventListener("click", (e) => {
    console.log("clicked");
});

loadUsers();
