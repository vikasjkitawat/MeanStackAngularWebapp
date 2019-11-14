// Type 1
function funcType1()
{
    console.log("funcType1 Called");
}

module.exports = // default export
{
    run : funcType1 // revealing Module Pattern
}

// Type 2
module.exports.funcType2 = function()
{
    console.log("funcType2 Called");
}

//Type 3

function funcType3()
{
    console.log("funcType3 Called");
}

module.exports.run3app = funcType3;

// User Class
function UserClassFunction(user)
{
    log(user.name);
}

function log(param)
{
    console.log("App Started for " + param)
}

module.exports.UserClassFunction = UserClassFunction;