class IndexController {
  static async getIndex(req, res) {
    res.render('index');
  }
}

module.exports = IndexController;
