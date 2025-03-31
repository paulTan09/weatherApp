import './template.html';
import './style.css';

console.log('Welcome to your Webpack template!');
// vars
const img = document.querySelector('.image');
/*
// Clock/Time API

// GIF API
async function getGIF() {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=7XadWpnoz8SX6AYb43bhCxFKCsqqPkZg&s=bill-gates',
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch GIF");
    }
    const responseJSON = await response.json();
    img.src = responseJSON.data.images.original.url;
  } catch (error) {
    console.error(error);
  }
}
getGIF();
// General Weather API
fetch(
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=UV7ZGWGME2ER8YC5FULQYWCBQ',
  {
    mode: 'cors',
  },
)
  .then((response) => response.json())
  .then((data) => console.log(data.currentConditions.datetime))
  .catch((error) => console.error(error));
*/
