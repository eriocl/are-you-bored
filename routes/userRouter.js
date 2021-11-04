const router = require('express').Router();
const redirectLoginedUser = require('../middleware/redirectLoginedUser')
const UserController = require('../controllers/userController');

router.route('/new')
  .get(redirectLoginedUser, UserController.create);

router.route('/')
  .post(redirectLoginedUser, UserController.store);

router.route('/login')
  .get(redirectLoginedUser, UserController.getLogin)
  .post(redirectLoginedUser, UserController.login);

router.route('/logout')
  .post(UserController.logout);

module.exports = router;
