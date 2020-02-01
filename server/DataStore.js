"use strict";

class DataStore {

    #purchaseData = [];
    #offerData = [];

    constructor() {
        return;
    }

    storePurchase(req) {
        let index = this.#purchaseData.findIndex(obj => obj.uuid === req.uuid);

        if (index === -1) {
            let newObj = {uuid: req.uuid, purchases: [{pid: req.pid, stid: req.stid, date: req.date}]};
            this.#purchaseData.push(newObj);
            index = 0;
        } else {
            let obj = this.#purchaseData[index];
            obj.purchases.push({pid: req.pid, stid: req.stid, date: req.date});
        }

        console.log(this.#purchaseData.length);
        console.log(this.#purchaseData[index]);
    }

    storeOffer(req) {
        let index = this.#offerData.findIndex(obj => obj.uuid === req.uuid);

        if (index === -1) {
            let newObj = {uuid: req.uuid, offers: [{offerID: req.offerID, pid: req.pid,
                    stid: req.stid, date: req.date, status: req.status}]};
            this.#offerData.push(newObj);
        } else {
            let obj = this.#offerData[index];
            obj.offers.push({offerID: req.offerID, pid: req.pid,
                stid: req.stid, date: req.date, status: req.status});
        }
    }

}

let dataStore = new DataStore();

module.exports = { getDataStore: function () {
    return dataStore;
}};