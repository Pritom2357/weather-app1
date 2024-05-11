const apiKey="be7582a9f7412709a984d37a17b488fb";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const weatherIcon=document.querySelector(".temp img");

async function checkWeather(city)
{
    const response= await fetch(apiURL+ city + `&appid=${apiKey}`);
    console.log(response);
    var data=await response.json();
    console.log(data);
    document.querySelector(".cityName").innerHTML=data.name;
    document.querySelector(".Temp").innerHTML=Math.round(data.main.temp )+ "°C";
    document.querySelector(".Humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".windSpeed").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".condition").innerHTML=data.weather[0].main;

    if(data.weather[0].main=="Clouds" || data.weather[0].main=="Haze")
        weatherIcon.src="cloudy.png";
    else if(data.weather[0].main=="Clear")
        weatherIcon.src="sunny.png";
    else if(data.weather[0].main=="Rain" ||data.weather[0].main=="Drizzle" ||data.weather[0].main=="Mist")
        weatherIcon.src="rainy.png";
    else if(data.weather[0].main=="Snow")
        weatherIcon.src="snowy.png";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
