const str = '<iframe width=\"540\" height=\"304\" src=\"https://peertube.su/videos/embed/14aa175e-923a-428f-9516-ad522cc8cfe4\" frameborder=\"0\" allowfullscreen></iframe>';

const result = str.match(/src=\"(.*?)\"/);
console.log(result[1]);
