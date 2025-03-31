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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch Weather data!");
    }

    const responseJSON = await response.json();
    weatherResult.innerHTML = `
    <h2>${responseJSON.resolvedAddress}</h2>
    <div class="results">
      <div class="weatherResult">
        <i class="fa-solid fa-temperature-full"></i>
        <p><b>Temperature:</b> ${responseJSON.currentConditions.temp}°F</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-umbrella"></i>
        <p><b>Conditions:</b> ${responseJSON.currentConditions.conditions}</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-cloud-showers-heavy"></i>
        <p><b>Precipitation:</b> ${responseJSON.currentConditions.precip}%</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-droplet"></i>
        <p><b>Humidity:</b> ${responseJSON.currentConditions.humidity}%</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-wind"></i>
        <p><b>Wind:</b> ${responseJSON.currentConditions.windspeed} m/s</p>
      </div>

    </div>
    `;
    console.log(responseJSON);
  } catch (error) {
    console.error(error);
  }
});
