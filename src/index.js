import './template.html';
import './style.css';

console.log('Welcome to your Webpack template!');
// vars
const img = document.querySelector('.image');
const date = document.querySelector('.date');

// Clock/Time API (couldn't find a free one that queries by city so I'm resorting to system time)
function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.querySelector('.clock').textContent =
    `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);

// GIF API
async function getGIF() {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=7XadWpnoz8SX6AYb43bhCxFKCsqqPkZg&s=cat',
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
async function getWeather() {
  try {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=UV7ZGWGME2ER8YC5FULQYWCBQ',
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch Weather data");
    }
    const responseJSON = await response.json();
    console.log(responseJSON);
    date.textContent = responseJSON.days[0].datetime;
  } catch (error) {
    console.error(error);
  }
}
getWeather();
