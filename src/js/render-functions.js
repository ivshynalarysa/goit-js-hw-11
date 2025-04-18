//створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(imagesArr, gallery) {
    const gallery = document.querySelector(gallery);
    const photos = imagesArr.map(image => {
        return `
          <li class="gallery-item">
              <a class='gallery-link' href="${image.largeImageURL}">
                <img class="li-img"
                src="${image.webformatURL}" 
                alt="${image.tags}/> 
                <div class="li-text">
                  <table class="table">
                      <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                      <tr><td>>${image.likes}</td><td>${image.views}</td><td>${image.comments}</td><td>${image.downloads}</tr>
                  </table>   
                  </div>
                </a>
              </li>
          `;
      })
      .join('');

      gallery.insertAdjacentHTML('afterbegin', photos);

      const lightbox = new SimpleLightbox(gallery + ' a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    }
    

//. Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї 
// та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
clearGallery()
//. Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
showLoader()
//. Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
hideLoader()
//. Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.