const router = require("express").Router();

// Configure Router
// http://localhost:90/app and HTTP GET

router.get(
    "/", // sub route
    function appGet(req, res, next)
    {
        res
            .status(200)
            .render(
                "app", // view
                { // Model in MVC                    
                });

        next();
    }
);


module.exports = router;