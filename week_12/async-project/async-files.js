const fs = require("fs");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("--- File content --- \n" + data);
    }
})



fs.writeFile("./output.txt", "write successfully by nod.js", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("teh file write successfully");
    }
})



fs.readFile("./input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error " + err);
    } else {
        const newData = data.toUpperCase()
        fs.writeFile("./output-upper.txt", newData, (err) => {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Everything ended successfully!");
            }
        })
    }
})



const fsPromises = require('fs').promises;

fsPromises.readFile("./input.txt", "utf-8")
    .then(function (data) {
        console.log("I read with Promise.");
    })
    .catch((e) => {
        console.log(e);

    })



fsPromises.readFile("./input.txt", "utf-8")
    .then((data) => {
        const newData = data.toUpperCase()
        return fsPromises.appendFile("./output-upper.txt", newData)
    })
    .then(() => {
        console.log("all mission ended successfully");
    })
    .catch((err) => {
        console.error("Error: " + err);
    })





Promise.all([

    fsPromises.readFile('input.txt', 'utf8'),

    fsPromises.readFile('output.txt', 'utf8')

]).then(function (results) {
    console.log(results[0].length);
    console.log(results[1].length);


}).catch(function (err) {
    console.error(err);

});


// 1 ההבדל הוא שבקריא רגילה ללא הבטחה אנחנו מגיעים למצב של שרשור פעולות מסובך וקשה ולא קריא בעליל
// לעומת זאת ב PROMISE הקריאות הרבה יותר נוחות וטובות יותר ברורות לעין אנחנו יכולים לשרשר פעולות אחת לשניה בלי להסתבך ובלי להדפק

// 2 לא הבנתי את השאלה בכלל

// 3 הקריאה של הקוד הוא הרבה יותר ברור ומובן

// 4 הקוד לא ימשיך ל than  הבא