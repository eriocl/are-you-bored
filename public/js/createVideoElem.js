export default function createVideoElem(url) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowFullScreen', '');
  iframe.src = url;
  iframe.classList.add('video');
  // iframe.onerror = function () {
  //   iframe.remove();
  // };
  return iframe;
}
