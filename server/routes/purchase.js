var express = require('express');
var router = express.Router();
var dataStore = require("../DataStore")
let dS = dataStore.getDataStore();

/* GET registerPurchase. */
router.post('/registerPurchase', function(req, res, next) {
    dS.storePurchase(req.body);
    generateOffers(res);
});

/* GET registerPurchase. */
router.post('/registerOffer', function(req, res, next) {
    dS.storeOffer(req.body);
});

function generateOffers(res) {
    let prod = { prodName: "Corsair Keyboard", type: 0, description: "A new corsair mechanical " +
            "keyboard to go along with your Dell XPS 13!", orderID: 9999, pid: 1234, stid: 778, price: 150 };
    let serv = { prodName: "GeekSquad Support", type: 1, description: "Get 2 years of geek squad support " +
            "on your new DELL XPS 13!", orderID: 9999, pid: 1234, stid: 778, price: 200 };
    let arr = [prod, serv];

    res.json(arr);
}

module.exports = router;
