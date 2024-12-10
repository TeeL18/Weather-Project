function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "oe47bb3454cd0f1af7dfdf430teb7c08"; //search city is going to take care of searching for a city
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  searchCity(searchInput.value); //When a city is entred (this function has been ran) it goes to the top function to get the apikey (data) of the city they have entered.
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London"); // This is calling the 'searchCity' when I load the page, which will go insde the 'searchCity function'
//it makes a call to the API which replaces the 2 elements
