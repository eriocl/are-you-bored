const bcrypt = require('bcrypt');
const { User } = require('../db/models');

class UserController {
  static create(req, res) {
    res.render('users/create');
  }

  static async store(req, res) {
    const { email, password, name } = req.body;
    try {
      const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
      const currentUser = await User.create({ email, password: cryptPass, name });
      req.session.user = { id: currentUser.id, email: currentUser.email, name: currentUser.name };
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  }

  static async getLogin(req, res) {
    res.render('users/login');
  }

  static async login(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const currentUser = await User.findOne({ where: { email } });
        if (currentUser && await bcrypt.compare(password, currentUser.password)) {
          req.session.user = { id: currentUser.id, email: currentUser.email };
          res.redirect('/');
        } else {
          res.sendStatus(400);
        }
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    }
  }

  static async logout(req, res) {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  }
}

module.exports = UserController;
