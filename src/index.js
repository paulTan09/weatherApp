import './template.html';
import './style.css';

console.log('Welcome to your Webpack template!');
// vars
const img = document.querySelector('.image');

// Image GIF API
fetch(
  // 'https://api.giphy.com/v1/gifs/translate?api_key=7XadWpnoz8SX6AYb43bhCxFKCsqqPkZg&s=city',
  {
    mode: 'cors',
  },
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
  });

// General Data API
