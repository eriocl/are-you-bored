const router = require('express').Router();
const IndexController = require('../controllers/indexController');

router.get('/', IndexController.getIndex);

module.exports = router;
