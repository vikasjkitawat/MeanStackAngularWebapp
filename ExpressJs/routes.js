const homeController = require("./controllers/home");
const registerController = require("./controllers/register");
const subscribeController = require("./controllers/subscribe");
const reportsController = require("./controllers/reports");

function configure(expressServer) 
{
    //Custom Middleware
    // PRE
    expressServer.use(
        "", // this pattern means any routes
        function (req, res, next)
        {
            console.log(req.url + ":" + req.method + " at " + new Date().toLocaleTimeString());
            next(); // this is required as if it is not there then it will not go forward
        }
    );

    expressServer.use("/", homeController);
    expressServer.use("/register", registerController);
    expressServer.use("/subscribe", subscribeController);

    expressServer.use("/reports", reportsController);

    //Custom Middleware
    // PRE
    expressServer.use(
        "", // this pattern means any routes
        function (req, res, next)
        {
            console.log(req.url + ":" + req.method + " ended at " + new Date().toLocaleTimeString());
        }
    );
}


module.exports = {
    configure: configure
}
