const router = require('express').Router();
const controller = require('./controllers/cart');

router.post('/cart', controller.postCart);

module.exports = router;