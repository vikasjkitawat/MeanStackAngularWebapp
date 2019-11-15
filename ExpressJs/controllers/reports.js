
const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");


var availableReports = [
    { id:"wsr", fileName : "WeeklyStatusReport.pdf" },
    { id:"bwsr", fileName : "BiWeeklyStatusReport.pdf" },
    { id:"msr", fileName : "MonthlyStatusReport.pdf" },
];

// http://localhost:90/reports/id

router.get(
    "/:id", // sub route => we use :id
    async function reportsGet(req, res, next)
    {
        //var reportId = req.params.id;
        var matchedReport = availableReports.find(
            function predicate(reportDetails) 
            {
                return reportDetails.id == req.params.id;
            }
        );

        if (matchedReport) // matchedReport != undefined
        {
            var reportData = await fs.readFile(
                path.join(__dirname, "../documents", matchedReport.fileName)
            );

            res.setHeader("Content-Type", "application/pdf");

            res.end(reportData);
        }
        else
        {
            res.status(404).end("No Report Found")
        }
        res.end("Report for " + req.params.id);
    }
);


// http://localhost:90/reports 

router.get(
    "/", // sub route
    function reportsGet(req, res, next)
    {        
        res
            .status(200)
            .render(
                "reports", // view
                { // Model in MVC
                    
                });
    }
);


module.exports = router;
