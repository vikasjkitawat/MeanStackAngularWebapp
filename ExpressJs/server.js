const cluster = require('cluster');
const express = require('express');
const http = require("http");

if(cluster.isMaster) 
{
    setupMaster();  
} 
else 
{
    setupCluster();
}

function setupMaster()
{
    var cpuCount = require('os').cpus().length;
    console.log("Number of CPU Cores available: " + cpuCount + " cores");

    for(var count = 0; count < cpuCount; count++) 
    {
        cluster.fork();
    }

    cluster.on(
        'online', 
        function(worker) 
        {
            console.log('Worker ' + worker.process.pid + ' is online');
        }
    );

    cluster.on(
        'exit', 
        function(worker, code, signal) 
        {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
        }
    );
}

function setupCluster()
{
    // var expressServer = express();
    
    // expressServer.use(
    //     "/", 
    //     function(req, res) 
    //     {
    //         var response = 'You have been served by process ' + process.pid;
    //         console.log(response);
    //         res.end(response);
    //     }
    // )

    // expressServer.listen(
    //     80, 
    //     function() 
    //     {
    //         console.log('Process ' + process.pid + ' is listening to all incoming requests');
    //     }
    // );

    const expressServer = require("./server_express");
    
    const webServer = http.createServer(expressServer);

    webServer.listen(
        90,
        function onStart() 
        {
            console.log("Server Started");
        }
    )

}
