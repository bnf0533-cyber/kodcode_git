const items = [
    {
        title: "Red Apple",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A sweet and crisp red fruit."
    },
    {
        title: "Green Banana",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A fresh and healthy tropical snack."
    },
    {
        title: "Ripe Orange",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A juicy citrus fruit rich in vitamin C."
    },
    {
        title: "Sweet Strawberry",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A small red berry with tiny seeds."
    },
    {
        title: "Purple Grape",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A small sweet fruit that grows in bunches."
    },
    {
        title: "Fresh Lemon",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A sour yellow citrus fruit used for juice."
    },
    {
        title: "Juicy Peach",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A soft fuzzy fruit with a sweet stone inside."
    },
    {
        title: "Slice of Watermelon",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A large green melon with red flesh inside."
    },
    {
        title: "Tropical Pineapple",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A large spiky fruit with sweet yellow meat."
    },
    {
        title: "Ripe Kiwi",
        imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlMhljRi6WAz0N74e4zLT7wa_FLh-3YcuwqyoD-zL07gCeLD1RH8uD6r0pKM0ehG1rPGzFZ-EG2WxaUa9xePZIT1fnpv_MQhsjcB1zw&s=10",
        description: "A small brown fuzzy fruit with green inside."
    }
];
const parentSection = document.getElementById("parent-section");
const fetchBtn = document.getElementById("fetch-btn");
const form = document.querySelector("form")

fetchBtn.addEventListener("click", createItems);

parentSection.addEventListener("click", (e) => {
    if (parentSection !== e.target)
        console.log(e);
    const card = e.target.closest(".card");
    if (!card) return;
    const newCard = createCard(card.dataset.title, card.dataset.imglink, card.dataset.description);
    parentSection.appendChild(newCard);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = form.name.value;
    
})

function createItems() {
    const res = await fetch("http://localhost:3000/items")
    const item = await res.json()
    items.forEach((item) => {
        const card = createCard(item.title, item.imglink, item.description);
        if (item.title.includes("pl"))
            card.classList.add("special-title");
        card.dataset.title = item.title;
        card.dataset.imglink = item.imglink;
        card.dataset.description = item.description;

        parentSection.appendChild(card);
    })
}


function createCard(title, img, description) {
    const card = document.createElement("div");
    const h3 = document.createElement("h3");
    const imgTag = document.createElement("img");
    const p = document.createElement("p");

    card.classList.add("card");
    imgTag.classList.add("card-image");

    h3.textContent = title;
    imgTag.src = img;
    p.textContent = description;

    card.appendChild(h3);
    card.appendChild(imgTag);
    card.appendChild(p);

    return card;
}