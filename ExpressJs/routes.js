const homeController = require("./controllers/home");
const registerController = require("./controllers/register");

function configure(expressServer) 
{
    expressServer.use("/", homeController);
    expressServer.use("/register", registerController);
}


module.exports = {
    configure : configure
}
