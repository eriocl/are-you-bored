import createImageElem from './createImageElem.js';
import createVideoElem from './createVideoElem.js';

const activityElem = document.querySelector('[data-activity]');
const searchButton = document.querySelector('[data-search]');
const imageWrapper = document.querySelector('[data-image-wrapper]');
const videoWrapper = document.querySelector('[data-video-wrapper]');
const navMenu = document.querySelector(('.nav.nav-pills'));

searchButton.addEventListener('click', async () => {
  imageWrapper.innerHTML = '';
  videoWrapper.innerHTML = '';
  const responseActivity = await fetch('http://www.boredapi.com/api/activity/');
  if (responseActivity.ok) {
    const data = await responseActivity.json();
    activityElem.textContent = data.activity;
  }
  const responseSearch = await fetch(`/search/${activityElem.textContent}`);
  if (responseSearch.ok) {
    const dataSearch = await responseSearch.json();
    const { video, image } = dataSearch;

    const imageUrls = image.results
      .map((el) => el.img_src)
      .filter((el) => el);
    imageUrls.forEach((url) => {
      const newImg = createImageElem(url);
      newImg.addEventListener('error', () => newImg.remove());
      imageWrapper.append(newImg);
    });
    document.addEventListener('load', () => {
      navMenu.styles.classList.remove('d-none');
    });

    const videoUrls = video.results
      .filter((el) => el.embedded)
      .map((el) => el.embedded.match(/src=\"(.*?)\"/)[1]);
    console.log(videoUrls);
    videoUrls.forEach((url) => {
      const newVideo = createVideoElem(url);
      newVideo.addEventListener('error', () => newVideo.remove());
      videoWrapper.append(newVideo);
    });
  }
});
