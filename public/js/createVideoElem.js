export default function createVideoElem(url) {
  const iframe = document.createElement('iframe');
  iframe.allowfullscreen = true;
  iframe.src = url;
  iframe.classList.add('video');
  return iframe;
}
