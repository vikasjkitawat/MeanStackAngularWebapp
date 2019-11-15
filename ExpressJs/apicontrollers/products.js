const router = require("express").Router();
const mongoService = require("../services/mongoService")

router.get(
    "/",
    async function productsGet(req,res,next)
    {        
        var data = await mongoService.getData("MEAN","products",{});
        res.end(JSON.stringify(data));
        next();
    }
)

router.post(
    "/",
    async function productsPost(req,res,next)
    {
        var data = req.body;
        var newProductId = await mongoService.addData("MEAN","products", data);
        res.status(201).end(newProductId);        
        next();
    }
)

//http://localhost:90/api/products/123
//HTTP PUT
router.put(
    "/:productId",
    async function productsPut(req,res,next)
    {
        var productId = req.params.productId;
        var data = req.body;
        await mongoService.updateData("MEAN","products", productId, data);
        res.status(200).end();
        next();
    }
)

//http://localhost:90/api/products/123
router.delete(
    "/:productId",
    async function productsDelete(req,res,next)
    {
        var productId = req.params.productId;
        var response = await mongoService.deleteData("MEAN","products", productId);
        res.status(200).end();
        next();
    }
)

module.exports = router;