import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const refs = {
	form: document.querySelector('form'),
	loader: document.querySelector('.loader'),
	gallery: document.querySelector('.gallery'),
};



hideLoader();

refs.form.addEventListener('submit', handleSubmit);




function handleSubmit(event) {
    event.preventDefault();
	refs.gallery.innerHTML = '';

	
	showLoader();

    const enteredInput = event.target.elements.search.value.trim();
	

    if (!enteredInput) {
        showMessage ('Please enter a search query');
        
        
        return;
    }

    showLoader();
	
    clearGallery();
	

    getImagesByQuery(enteredInput)
        .then(response => {
            const data = response.data;

            if (!data.hits || data.hits.length === 0) {
                showMessage ('Sorry, no images found. Please try another query!');
                
                return;
            }

            
            createGallery(data.hits);

        })
        .catch(error => {
            showMessage ( 'Failed to fetch images. Please try again later.');
            
            console.error('Error:', error);
        })
        .finally(() => {
            hideLoader();
            
        });
		event.target.reset();
}




function showMessage(message) {
	iziToast.warning({
		message: message,
		titleColor: '#fff',
		titleSize: '16px',
		titleLineHeight: '1.5',
		messageColor: '#fff',
		messageSize: '16px',
		messageLineHeight: '1.5',
		backgroundColor: '#ef4040',
		position: 'topRight',
	});
}