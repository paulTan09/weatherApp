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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`,
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch Weather data!");
    }

    const responseJSON = await response.json();
    // const celsiusTemp = Math.round(
    //   ((responseJSON.currentConditions.temp - 32) * 5) / 9,
    // );
    weatherResult.innerHTML = `
    <h1>${responseJSON.resolvedAddress}</h1>
    <h2>${responseJSON.description}</h2>
    <div class="results">

      <div class="weatherResult">
        <i class="fa-solid fa-temperature-full"></i>
        <p><b>Temperature:</b> ${responseJSON.currentConditions.temp}°C</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-umbrella"></i>
        <p><b>Conditions:</b> ${responseJSON.currentConditions.conditions}</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-cloud-showers-heavy"></i>
        <p><b>Precipitation:</b> ${responseJSON.currentConditions.precip} mm</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-droplet"></i>
        <p><b>Humidity:</b> ${responseJSON.currentConditions.humidity}%</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-wind"></i>
        <p><b>Wind:</b> ${responseJSON.currentConditions.windspeed} KM/H</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-eye"></i>
        <p><b>Visibility:</b> ${responseJSON.currentConditions.visibility} KM</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-water"></i> <!--yes I know, I just couldn't find a free bar/pressure icon -->
        <p><b>Pressure:</b> ${responseJSON.currentConditions.pressure} Millibars</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-sun"></i>
        <p><b>Solar Radiation:</b> ${responseJSON.currentConditions.solarradiation} W/m²</p>
      </div>
      <div class="weatherResult">
        <i class="fa-solid fa-poo-storm"></i>
        <p><b>Solar Energy:</b> ${responseJSON.currentConditions.solarenergy} MJ/m²</p>
      </div>
      
    </div>
    `;
    console.log(responseJSON);
  } catch (error) {
    weatherResult.innerHTML = `<p>Error: ${error.message}`;
    console.error(error);
  }
});
