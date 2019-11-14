
// Promisify Async await if the function does not return promise
console.log("promisifiedRead");

const fs2 = require("fs").promises;
const util =  require("util");
const fileIo2 = require('./fileio');

var promisifiedRead = util.promisify(fileIo2.readAsync);
promisifiedRead("sample.txt").then(
    function onComplete(fileData)
    {
        console.log("\nAsync read: \n");
        console.log(fileData);
    },
    function onError(errorMessage)
    {
        console.log("Async Read Failed: \n");
        console.log(errorMessage);
    }
);



//console.log(promisifiedRead);
// promisifiedRead.then(
//     "sample.txt",
//     function onComplete(fileData)
//     {
//         console.log("\nAsync read: \n");
//         console.log(fileData);
//     },
//     function onError(errorMessage)
//     {
//         console.log("Async Read Failed: \n");
//         console.log(errorMessage);
//     }
// );