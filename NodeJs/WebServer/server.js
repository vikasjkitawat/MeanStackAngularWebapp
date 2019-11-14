const http = require("http");

const fs = require("fs").promises;
const path = require("path");
const homeController = require("./controllers/home");
const reportsController = require("./controllers/reports");


var httpServer = http.createServer(
    function httpHandler(request, response, next) // called for all incoming requests
    {
        try
        {
            var url = request.url;
            console.log(url);

            if (url == "/" || url == "/home")
            {
                homeController(request, response);
            }
            else if (url == "/reports")
            {
                reportsController(request, response);
            }
            else // 404
            {
                response.writeHead(404, {});
            }
        }
        catch (ex)
        {
            console.log(ex);
        }


        //response.end("<h1>Served by NodeJS on " + new Date().toLocaleTimeString());
    }
)

httpServer.listen(
    90, // port
    function onServerStarted()
    {
        console.log("Server is up and running");
    }
);





