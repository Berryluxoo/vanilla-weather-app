function showTemperature(response) {
  console.log(response.data);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  let displayCity = document.querySelector("#city");
  displayCity.innerHTML = response.data.name;
  let currentDescrip = document.querySelector("#description");
  currentDescrip.innerHTML = response.data.weather[0].description;
  let feelsTemperature = document.querySelector("#feels-temp");
  feelsTemperature.innerHTML = Math.round(response.data.main.feels_like);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let unit = "metric";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);
