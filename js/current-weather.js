const urlAPI = '//api.openweathermap.org/data/2.5/weather?zip=83549,us&appid=fd307e239e9bae91c4715e9cd61be4b8&units=imperial';

fetch(urlAPI)
  .then((response) => response.json())
  .then((myJsonInfo) => {
    let currentWeather = document.querySelector('#current-weather');
    const t = document.querySelector('#temperature');
    let humidity = document.querySelector('#humidity');
    const s = document.querySelector('#wind-speed');
    let windChill = document.querySelector('#wind-chill');

    t.innerHTML = myJsonInfo.main.temp;
    s.innerHTML = myJsonInfo.wind.speed;
    currentWeather.innerHTML = myJsonInfo.weather[0].main;
    humidity.innerHTML = myJsonInfo.main.humidity;
    
    let f = 35.74 + (0.6215*t.innerHTML) - 35.75*Math.pow(s.innerHTML, 0.16) + (0.4275*t.innerHTML*Math.pow(s.innerHTML, 0.16));
    
    if(s.innerHTML > 3 && t.innerHTML <= 50){
        windChill.innerHTML = f.toFixed(1);
    } else {
        windChill.innerHTML = 'N/A';
    }

  });