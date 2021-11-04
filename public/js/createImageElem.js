export default function createImageElem(url) {
  const selectors = ['search-img', 'z-index1'];
  const img = document.createElement('img');
  img.classList.add(...selectors);
  img.src = url;
  return img;
}
