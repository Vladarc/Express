const { priceModel } = require('../../model/cardValuesModel/index');

const cardAndQtyQuery = async (params) => {
 return await priceModel.find({"type": params},  (err, prices) => {
        if(err)  throw new Error(err);
        return  prices;
 }) 
} 

module.exports = cardAndQtyQuery;