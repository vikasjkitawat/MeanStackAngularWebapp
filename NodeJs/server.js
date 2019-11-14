const t1 = require("./task")

t1.run(); //type 1
t1.funcType2(); //Type 2
t1.run3app(); // Type 3


// User Class
const User = require("./models/User")
var user = new User("TestUser", 30);

console.log(user.name);
console.log(user.age);
t1.UserClassFunction(user);