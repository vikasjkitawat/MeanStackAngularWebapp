const router = require("express").Router();

// Configure Router
// http://localhost:90/subscribe and HTTP GET

router.get(
    "/", //sub route
    function subscribeGet(req, res, next)
    {
        res
            .status(200)
            .render(
                "subscribe", // view
                { // Model in MVC
                });
        next();
    }
);


router.post(
    "/", //sub route
    function subscribePost(req, res, next)
    {
        //TODO
        
        var user = req.body;
        console.log(user);
        res.end(user.name + ", you are registered")
        next();
    }
);


module.exports = router;