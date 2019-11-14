const router = require("express").Router();

// Configure Router
// http://localhost:90/ and HTTP GET

router.get(
    "/",
    function homeGet(req, res, next)
    {
        res.end("Home");
    }
);

router.get(
    "/res",
    function homeGet(req, res, next)
    {
        res.end("res");
    }
)

module.exports = router;