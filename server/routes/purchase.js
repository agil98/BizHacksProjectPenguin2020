var express = require('express');
var router = express.Router();
var dataStore = require("../DataStore")
let dS = dataStore.getDataStore();

/* GET registerPurchase. */
router.post('/registerPurchase', function(req, res, next) {
    dS.storePurchase(req.body);
    res.status(200);
    res.send("DONE!");
});

/* GET registerPurchase. */
router.post('/registerOrder', function(req, res, next) {
    dS.storeOrder(req.body);
    res.status(200);
    res.send("DONE!");
});

module.exports = router;
