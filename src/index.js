import './template.html';
import './style.css';

// vars
const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResults');
const API_KEY = 'UV7ZGWGME2ER8YC5FULQYWCBQ';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.innerHTML = '<p>Please enter a city name</p>';
    return;
  }
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch Weather data!");
    }

    const responseJSON = await response.json();
    console.log(responseJSON);
  } catch (error) {
    console.error(error);
  }
});
