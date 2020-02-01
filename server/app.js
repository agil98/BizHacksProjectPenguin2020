var express = require('express');
var purchaseRouter = require('./routes/purchase');
var app = express();

const port = 3001;

app.use('/registerPurchase', purchaseRouter);
app.use('/registerOrder', purchaseRouter);
app.use('/', purchaseRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
