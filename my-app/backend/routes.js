const router = require('express').Router();
const controller = require('./controllers/cart');

router.post('/cart', controller.postCart);
router.get('/cart', controller.getCart)

module.exports = router;