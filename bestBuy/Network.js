import React from 'react';

export default class Network {
    constructor() {
    }

    // REMEMBER TO CHANGE THE IPADDR IF IT CHANGES TOO!!
    async sendPurchase() {
        try {
            let response = await fetch('http://206.12.68.63:3001/storeData/registerPurchase', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uuid: 2250,
                    pid: 1000,
                    stid:32,
                    date: Date.now()
                }),
            });
            let res = await response.json();
            return res;
        } catch (e) {
            console.error(e);
        }
    }

    async replyToOffer(offer) {
        offer.date = Date.now();
        try {
            let response = await fetch('http://206.12.68.63:3001/storeData/registerOffer', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(offer),
            });
            return response.statusCode === 200;
        } catch (e) {
            console.error(e);
        }
    }

}