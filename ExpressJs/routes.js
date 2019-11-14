const homeController = require("./controllers/home");

function configure(expressServer) 
{
    expressServer.use("/", homeController);
}


module.exports = {
    configure : configure
}
