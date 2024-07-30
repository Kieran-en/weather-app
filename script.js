const cityName = document.getElementById("city-name");
const searchBtn = document.getElementById("searchBtn");
const cityy = document.getElementById("city");
const temp = document.getElementById("temp");
const humid = document.getElementById("humid");
const speed = document.getElementById("speed");
const weather = document.querySelector(".clouds");

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=ae8ce40bc7a2980aaa2282d098bab8e9&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);

  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".hide").innerHTML = "This city name does not exist";
    document.querySelector(".hide").style.display = "block";
  } else {
    document.querySelector(".hide").style.display = "none";
  }

  var data = await response.json();

  console.log(data);
  console.log(response);

  cityy.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  humid.innerHTML = data.main.humidity + "%";
  speed.innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Rain") {
    weather.src = "images/rain.png";
    document.querySelector(".weather").style.display = "block";
  } else if (data.weather[0].main == "Clear") {
    weather.src = "images/clear.png";
    document.querySelector(".weather").style.display = "block";
  } else if (data.weather[0].main == "Drizzle") {
    weather.src = "images/drizzle.png";
    document.querySelector(".weather").style.display = "block";
  } else if (data.weather[0].main == "Mist") {
    weather.src = "images/mist.png";
    document.querySelector(".weather").style.display = "block";
  } else if (data.weather[0].main == "Clouds") {
    weather.src = "images/clouds.png";
    document.querySelector(".weather").style.display = "block";
  } else if (data.weather[0].main == "Snow") {
    weather.src = "images/snow.png";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(cityName.value);
});

cityName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(cityName.value);
  }
});
