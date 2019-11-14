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