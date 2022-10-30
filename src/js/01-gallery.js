// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryParent = document.querySelector('.gallery');
const markupGallery = addImageToMarkupGallery(galleryItems);
const galleryHtml = addGalleryToHtml(markupGallery, galleryParent);
galleryParent.addEventListener('click', resetDownloadFunction);
const lightboxGallery = createNewSimpleLightbox('.gallery a');

function addImageToMarkupGallery(imagesTable) {
  return imagesTable
    .map(
      image =>
        `<a class="gallery__item" href="${image.original}">
            <img
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
            />
        </a>`
    )
    .join('\r\n');
}

function addGalleryToHtml(gallery, htmlElement) {
  htmlElement.innerHTML = gallery;
}

function resetDownloadFunction(event) {
  event.preventDefault();
}

function createNewSimpleLightbox(className) {
  return new SimpleLightbox(className, {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
