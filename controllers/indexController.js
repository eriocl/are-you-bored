const axios = require('axios');

class IndexController {
  static async getIndex(req, res) {
    res.render('index');
  }

  static async search(req, res) {
    const { query } = req.params;
    const images = await axios(`https://searx.roughs.ru/search?q=${encodeURIComponent(query)}&format=json&categories=images`);
    const videos = await axios(`https://searx.roughs.ru/search?q=${encodeURIComponent(query)}&format=json&categories=videos`);

    res.json({ image: images.data, video: videos.data });
  }
}

module.exports = IndexController;
