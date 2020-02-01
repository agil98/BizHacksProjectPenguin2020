"use strict";

class DataStore {

    #purchaseData = [];
    #orderData = [];

    constructor() {
        return;
    }

    storePurchase(req) {
        let index = this.#purchaseData.findIndex(obj => obj.uuid === req.uuid);

        if (index === -1) {
            let newObj = {uuid: req.uuid, purchases: [{pid: req.pid, stid: req.stid, date: req.date}]};
            this.#purchaseData.push(newObj);
        } else {
            let obj = this.#purchaseData[index];
            obj.purchases.push({pid: req.pid, stid: req.stid, date: req.date});
        }
    }

    storeOrder(req) {
        let index = this.#orderData.findIndex(obj => obj.uuid === req.uuid);

        if (index === -1) {
            let newObj = {uuid: req.uuid, orders: [{orderID: req.orderID, pid: req.pid,
                    stid: req.stid, date: req.date, status: req.status}]};
            this.#orderData.push(newObj);
        } else {
            let obj = this.#orderData[index];
            obj.orders.push({orderID: req.orderID, pid: req.pid,
                stid: req.stid, date: req.date, status: req.status});
        }
    }

}

let dataStore = new DataStore();

module.exports = { getDataStore: function () {
    return dataStore;
}};