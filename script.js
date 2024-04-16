const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); // Get user entered city name and remove extra spaces
    if (!cityName) {
        return;
    }
    const GEOCODING_API_URL =``;
}
searchButton.addEventListener("click", getCityCoordinates);