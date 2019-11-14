const router = require("express").Router();

// Configure Router
// http://localhost:90/register and HTTP GET

router.get(
    "/", //sub route
    function registerGet(req, res, next)
    {
        res
            .status(200)
            .render(
                "register", // view
                { // Model in MVC
                });
    }
);


router.post(
    "/", //sub route
    function registerPost(req, res, next)
    {
        var user = req.body;
        console.log(user);

        res.end(user.name + ", you are registered");
    }
);


module.exports = router;