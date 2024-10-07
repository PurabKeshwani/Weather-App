
const API_KEY ="04e2869bb80dd67b5ffa133b6660cfd7";

let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let icon = document.querySelector(".weather-icon")
let error = document.querySelector(".error");
let weather = document.querySelector(".weather");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 

const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const checkWeather = async (cityName) => {
    const response = await fetch(`${URL}${cityName}&appid=${API_KEY}`);
    if (response.status === 404) {
        error.style.display = "block"; 
        weather.style.display = "none";
        return; 
    } else {
        error.style.display = "none"; 
        weather.style.display = "block";
    }
    var data = await response.json();
    
    console.log(data);
    city.textContent=data.name;
    humidity.textContent=data.main.humidity+'%';
    wind.textContent=data.wind.speed+' km/h';
    temp.textContent = Math.round(data.main.temp) +'°C';

    if (data.weather[0].main == "Clouds" ) {
        icon.src="./images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        icon.src="./images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        icon.src="./images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        icon.src="./images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        icon.src="./images/snow.png"
    }
    
    
};

searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value); 
});










