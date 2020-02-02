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
    let prod = { uuid: 2250, prodName: "Corsair Keyboard", type: 0, description: "Corsair mechanical " +
            "keyboard to go along with your Dell XPS 13!", promoKey: "Holiday Season Special Sale", offerID: 9999, pid: 1234, stid: 778, price: 150, status: "true" };
    let serv = { uuid: 2250, prodName: "GeekSquad Support", type: 1, description: "Get 2 years of geek squad support " +
            "on your new DELL XPS 13!", promoKey: "Black Friday Special Sale", offerID: 9999, pid: 1234, stid: 778, price: 200, status: "true" };
    let arr = [prod, serv];

    res.json(arr);
}

module.exports = router;
