const router = require('express').Router();
const IndexController = require('../controllers/indexController');

router.get('/', IndexController.getIndex);

router.get('/search/:query(*)', IndexController.search)

module.exports = router;
