const fs = require("fs").promises;

const path = require("path");

async function homeController(req, res)
{
    try
    {
        res.writeHead(
            200, // HTTP Status
            {
                "Content-Type": "text/html",
                "ServedBy": "Custom NodeJS Server",
            } // HTTP response headers
        );

        var data = await fs.readFile(
            path.join(__dirname, "../views", "home.html"),
            "UTF-8"
        );

        res.end(data);
    }
    catch (ex)
    {
        console.log(ex);
    }

}

module.exports = homeController;