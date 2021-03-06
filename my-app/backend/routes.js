const router = require('express').Router();
const controller = require('./controllers/cart');

router.post('/cart', controller.postCart);
router.get('/cart', controller.getCart);
router.delete('/cart/:description', controller.deleteItem);
router.get('/cart/calories', controller.calculateCalories);

module.exports = router;