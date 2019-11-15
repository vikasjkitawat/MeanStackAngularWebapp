const router = require("express").Router();

router.get(
    "/",
    function productsGet(req,res,next)
    {
        //TODO
        res.end("products.get");
    }
)

router.post(
    "/",
    function productsPost(req,res,next)
    {
        //TODO
        console.log(req.body)
        res.end("products.post");
    }
)

//http://localhost:90/api/products/123
//HTTP PUT
router.put(
    "/:productId",
    function productsPut(req,res,next)
    {
        //TODO
        console.log(req.body)
        res.end("products.put : "  + req.params.productId);
    }
)

//http://localhost:90/api/products/123
router.delete(
    "/:productId",
    function productsDelete(req,res,next)
    {
        //TODO
        res.end("products.delete : "  + req.params.productId);
    }
)

module.exports = router;