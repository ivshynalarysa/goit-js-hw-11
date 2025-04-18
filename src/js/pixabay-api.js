
import axios from "axios";

const API_KEY = "49795001-63fc88dd531083a7427250d55";

export function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            
        }
    })

    .then(response => {
      console.log(response);
      return response.data.hits;
    })
    .catch(error => {
      return [];
    });
}


//. Ця функція повинна 
// приймати один параметр query (пошукове слово, яке є рядком), 
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.