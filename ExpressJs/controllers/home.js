const router = require("express").Router();

// Configure Router
// http://localhost:90/ and HTTP GET

router.get(
    "/", // sub route
    function homeGet(req, res, next)
    {
        //res.end("Home");

        //Type 1
        //res.render("home");

        //Type 2
        //res.status(200).render("home");

        //Type 3
        res
            .status(200)
            .render(
                "home", // view
                { // Model in MVC
                    time: new Date().toLocaleTimeString()
                });

        next();
    }
);


module.exports = router;