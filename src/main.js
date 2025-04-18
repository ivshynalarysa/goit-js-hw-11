import {getImagesByQuery} from './js/pixabay-api';
import {createGallery} from './js/render-functions';
import clearGallery from './js/render-functions';
import showLoader from './js/render-functions';
import hideLoader from './js/render-functions;'

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const message = document.querySelector('.message');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input-img');

form.addEventListener('submit', e => {
  e.preventDefault();
  message.innerHTML = 'Wait, the image is loaded';
  const searchQuery = input.value.trim();
  console.log(searchQuery);
  gallery.innerHTML = '';
  getImage(searchQuery)
    .then(images => {
      if (images.length > 0) {
        make(images, '.gallery');
      } else {
        iziToast.error({
          position: 'topRight',
          message: `Sorry, there are no images matching your search ${searchQuery}. Please try again!`,
        });
      }
      message.textContent = '';
    })
    .catch(errror => {
      gallery.innerHTML = '';
    });
});


