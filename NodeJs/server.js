const t1 = require("./task")

t1.run(); //type 1
t1.funcType2(); //Type 2
t1.run3app(); // Type 3


// User Class
const User = require("./models/User")
var user = new User("TestUser1", 30);

console.log(user.name);
console.log(user.age);
t1.UserClassFunction(user);


// File IO
const fileIo = require('./fileio');
var result = fileIo.readSync("sample.txt");
console.log(result);

fileIo.readAsync(
    "sample.txt",
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

// File IO with Promise
var promise = fileIo.readAsyncWithPromise("sample.txt");
promise.then(
    function onComplete(fileData)
    {
        console.log("\nAsyncWithPromise: \n");
        console.log(fileData);
    },
    function onError(errorMessage)
    {
        console.log("AsyncWithPromise Read Failed: \n");
        console.log(errorMessage);
    }
);

// ReadFileAsyncWithBuiltInPromiseAPI
var promise2 = fileIo.readFileAsyncWithBuiltInPromiseAPI("sample.txt");
promise2.then(
    function onComplete(fileData)
    {
        console.log("\n readFileAsyncWithBuiltInPromiseAPI: \n");
        console.log(fileData);
    },
    function onError(errorMessage)
    {
        console.log("readFileAsyncWithBuiltInPromiseAPI Read Failed: \n");
        console.log(errorMessage);
    }
);

// Work directly with fs promise API
const fs = require("fs").promises;
const path = require("path");

var promise3 = fs.readFile(
    path.join(__dirname, "sample.txt"),
    "UTF-8", // File Encoding
);

promise3.then(
    function success(fileData)
    {
        console.log("\n Work directly with fs promise API: \n");
        console.log(fileData);
    },
    function error(errorMessage)
    {
        console.log("Work directly with fs promise API Read Failed: \n");
        console.log(errorMessage);
    }
);
