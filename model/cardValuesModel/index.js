const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
    type: String,
    values: [
        { id: String, qty:Number , price: String, packPrice:String}
    ],
}, { collection : 'cardPrice' });

const priceModel = mongoose.model('cardPrice', priceSchema);


module.exports = {
    priceModel
};
