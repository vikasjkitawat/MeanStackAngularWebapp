const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const serveFavicon = require("serve-favicon");
const path = require("path");

function Configuration(expressServer)
{
    
    //Configuration of Middlewares

    // name=mac&age=20 as req.body.name and req.body.age
    expressServer.use(bodyParser.urlencoded({ extended : false }));

    // {"name": "mac", "age"= 20} as req.body.name and req.body.age
    expressServer.use(bodyParser.json());

    //req.cookies
    expressServer.use(cookieParser());

    // Serve favicon.ico
    expressServer.use(serveFavicon(path.join(__dirname, 'public', 'favicon.ico')))

    // for serving asset files
    expressServer.use(
        express.static(
            path.join(
                __dirname,
                "public"
            )
        )
    );


}

module.exports = {
    configure : Configuration
};