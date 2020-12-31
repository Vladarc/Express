const express = require('express');
const router = express.Router();
const { sentCardData } = require('../../handlers/cardValues/cardPriceHandlers');

router.use((req, res, next) => next());

router.route('/card-price/:type')
      .get(sentCardData)


module.exports = router;