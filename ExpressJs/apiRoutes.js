const productsController = require("./apicontrollers/products");


function configure(expressServer) 
{    
    expressServer.use("/api/products", productsController);    
}


module.exports = {
    configure: configure
}
