const cardAndQtyQuery = require('./getCardPrice');

const sentCardData = async (req,res) => {

    try {
        const data = await cardAndQtyQuery(req.params.type);
        res.status(200).json({
            status: 'success',
            data
        })
    } catch(error) {
        res.status(500).json({
            status: 'fail',
            data: null
        })
    } 
   
};

module.exports = {
    sentCardData
};