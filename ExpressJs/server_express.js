const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const serveFavicon = require("serve-favicon");
const http = require("http");

const expressServer = express();

const webServer = http.createServer(expressServer);

webServer.listen(
    90,
    function onStart() 
    {
        console.log("Server Started");
    }
)
