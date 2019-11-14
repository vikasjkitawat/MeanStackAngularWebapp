const http = require("http");

var httpServer = http.createServer(
    function httpHandler(request, response, next) // called for all incoming requests
    {
        response.writeHead(
            200, // HTTP Status
            {
                "Content-Type": "text/html",
                "ServedBy": "Custom NodeJS Server",
            } // HTTP response headers
        );

        response.end("<h1>Served by NodeJS on " + new Date().toLocaleTimeString());
    }
)

httpServer.listen(
    90, // port
    function onServerStarted()
    {
        console.log("Server is up and running");
    }
);