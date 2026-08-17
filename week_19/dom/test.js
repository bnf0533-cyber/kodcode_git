const p = document.querySelector("p");
// p.classList.add("text-blue")
// p.classList.remove("text-blue")

const newInput = document.createElement("input");
newInput.type = "password";
newInput.placeholder = "pass";
newInput.classList.add("input");
document.body.appendChild(newInput);

const parentSection = document.getElementById("parent-section");


function createCard(title, description, img) {
    const card = document.createElement("div");
    const h3 = document.createElement("h3");
    const imgTag = document.createElement("img");
    const p = document.createElement("p");
    
    card.classList.add("card");
    imgTag.classList.add(".card-img");

    h3.textContent = title;
    p.textContent = description;
    imgTag.src = img;

    card.appendChild(h3)
    card.appendChild(imgTag)
    card.appendChild(p)

    return card
}
 
