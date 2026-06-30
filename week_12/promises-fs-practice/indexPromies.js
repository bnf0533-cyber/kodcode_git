function getUser() {
	const p = new Promise((resolve, reject) => {
		console.log("start promise");
		setTimeout(() => {
			resolve(5);
		}, 2000)
	});
	return p;
}
const pr = getUser();
pr.then((v) => {
	console.log(v);
})
console.log("After promise");

const fs = require("fs")

function getUser() {
	const p = new Promise((resolve, reject) => {
		console.log("start promise");
		fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8", (err, data) => {
			if (err) {
				reject(err);
				return;
			};
			resolve(data);
			console.log("success");
		})
	});
	return p;
}
const pr = getUser();
pr.then((v) => {
	console.log(v);
})
	.catch((e) => {
		console.log("Error");

	})
console.log("After promise");



const { readFile } = require("fs");
const fs = require("fs/promises")
const p = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")
p.then((data) => {
	console.log(data);
	const p2 = readFile("./callbacks-fs-practice/data/copy.txt", "utf-8");
	p2.then(() => {

	})
		.catch(() => {

		})
})
	.catch(e => {
		console.log(e);
	})
	.finally(() => {
		console.log("End handler promise");
	})



const fs = require("fs/promises")
const p1 = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")
const p2 = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")
const p3 = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")

Promise.all([p1, p2, p3])
	.then(results => {
		console.log(results);

	})
	.catch(err => console.log(err));
Promise.race([p1, p2, p3])
	.then(results => {
		console.log(results);

	})
	.catch(err => console.log(err));
Promise.allSettled
