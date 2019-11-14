const fs = require("fs");
const path = require("path");

function ReadFile(filePath)
{
    // __dirname gives current directory path
    var fileContents = fs.readFileSync(path.join(__dirname, filePath), "UTF-8");
    return fileContents;
}

function ReadFileAsync(filePath, success, failure)
{
    fs.readFile(
        path.join(__dirname, filePath),
        "UTF-8", // File Encoding
        function onReadComplete(error, data) // call back
        {
            if (error)
            {
                failure(error);
            }
            else // Success
            {
                // send data to server.js
                success(data);
            }
        }
    )
}

module.exports =
    {
        readSync: ReadFile,
        readAsync: ReadFileAsync
    };