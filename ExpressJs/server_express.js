const express = require("express");
const http = require("http");
const expressServer = express();
const middleware = require("./middlewares");
const routes = require("./routes");
const apiRoutes = require("./apiRoutes");
const path = require("path");
const router = require("express").Router();


middleware.configure(expressServer);

//Custom Middleware - Logging - Before
expressServer.use(
    "", // this pattern means any routes
    function (req, res, next)
    {
        const processId = process.pid;
        console.log(processId + " : " + req.url + " : " + req.method + " at " + new Date().toLocaleTimeString());
        next(); // this is required as if it is not there then it will not go forward
    }
);


//Web and API Routes
routes.configure(expressServer);
apiRoutes.configure(expressServer);


//Custom Middleware - Logging - After
expressServer.use(
    "", // this pattern means any routes
    function (req, res, next)
    {
        console.log(req.url + ":" + req.method + " ended at " + new Date().toLocaleTimeString());
        next();
    }
);

router.use(
    "",
    function(err, req, res, next) 
    {
        console.log("New Error:");
        if (err) 
        {
            res.status(404).end(err);
        }
        
        next();
        
    }
);

// View Engine Setup
expressServer.set(
    "views",
    path.join(__dirname,"views")
    );
expressServer.set(
    "view engine",
    "ejs" // ejs = Embedded Javascript - Other view engine options jade and 
    );

// const webServer = http.createServer(expressServer);

// webServer.listen(
//     90,
//     function onStart() 
//     {
//         console.log("Server Started");
//     }
// )

module.exports = expressServer;

//http://localhost:90/products
//GET
//POST : ADD
//PUT : UPDATE
//DELETE