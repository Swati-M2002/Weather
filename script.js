const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "3f2fa6c5c56067d2608761890cbbdfb4"; // API key for OpenWeatherMap API

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); // Get user entered city name
    if(!cityName) return; // Return if cityName is empty
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("An error occured while fetching the coordinates!");
    });
}
