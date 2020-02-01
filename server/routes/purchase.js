var express = require('express');
var router = express.Router();
var dataStore = require("../DataStore")
let dS = dataStore.getDataStore();

/* GET registerPurchase. */
router.get('/registerPurchase', function(req, res, next) {
    dS.storePurchase(req);
    res.status(200);
    res.send("DONE!");
});

/* GET registerPurchase. */
router.get('/registerOrder', function(req, res, next) {
    dS.storeOrder(req);
    res.status(200);
    res.send("DONE!");
});

/* GET registerPurchase. */
router.get('/', function(req, res, next) {
    res.status(200);
    res.send("HELLO WORLD!");
});

module.exports = router;