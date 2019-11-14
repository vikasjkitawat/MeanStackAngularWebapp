const homeController = require("./controllers/home");
const registerController = require("./controllers/register");
const subscribeController = require("./controllers/subscribe");

function configure(expressServer) 
{
    expressServer.use("/", homeController);
    expressServer.use("/register", registerController);
    expressServer.use("/subscribe", subscribeController);
}


module.exports = {
    configure : configure
}
