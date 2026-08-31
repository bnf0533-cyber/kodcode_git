// function greeTS(name: string) {
//     return name.toUpperCase();
// }

// console.log(greeTS("nehoray"));

// const name: string = "nehoray";
// const age: number = 23;

// function add(a: number, b: number): number {
//     return a + b;
// }
// const greet = (name: string): string => `שלום, ${name}!`;
// function log(msg: string, tag?: string) {
//     console.log(tag ?? "info", msg);
// }
// console.log(greet("ner"));

function formatFullName(first: string, last: string): string {
    return first + " " + last;
}

interface Product {
    id: number;
    name: string;
    price: number;
    inStock?: boolean;
    tags?: Array<string | number>;
}

function printProduct(product: Product): string {
    console.log(
        `מזהה: ${product.id}, שם: ${product.name}, מחיר: ₪${product.price}, במלאי: ${product.inStock ? "כן" : "לא"}`
    );
    const result: number = product.price * 0.9;
    return String(result);
}

const item1: Product = {
    id: 1,
    name: "laptop",
    price: 50,
    inStock: true,
};
console.log(printProduct(item1));

type Direction = "left" | "right" | "up" | "down";

function move(dir: Direction, steps: number): string {
    return steps + " " + dir;
}

console.log(move("left", 1));
console.log(move("right", 4));

export {};
