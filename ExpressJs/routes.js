const homeController = require("./controllers/home");
const registerController = require("./controllers/register");
const subscribeController = require("./controllers/subscribe");
const reportsController = require("./controllers/reports");
const appController = require("./controllers/app");


function configure(expressServer) 
{
    

    expressServer.use("/", homeController);
    expressServer.use("/register", registerController);
    expressServer.use("/subscribe", subscribeController);

    expressServer.use("/reports", reportsController);
    expressServer.use("/app", appController);

    expressServer.use("/app/*", appController);

}


module.exports = {
    configure: configure
}


