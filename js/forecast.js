const myDate = new Date();
const todayNumber = myDate.getDay();
const weekDays = new Array(7);
weekDays[0] = 'Sunday';
weekDays[1] = 'Monday';
weekDays[2] = 'Tuesday';
weekDays[3] = 'Wednesday';
weekDays[4] = 'Thursday';
weekDays[5] = 'Friday';
weekDays[6] = 'Saturday';

const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=83549,us&appid=fd307e239e9bae91c4715e9cd61be4b8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((myJsInfo) => {
    console.log(myJsInfo);
    let myList = myJsInfo.list;
    let forecastDayNumber = todayNumber;
    for(let i = 0; i<myList.length; i++){
      let time = myList[i].dt_txt;
      if(time.includes('18:00:00')){
        console.log(`Found an entry with 18:00:00 in the time. It was report ${i} from the myList of 40.`);
        forecastDayNumber+=1;
        if(forecastDayNumber === 7){
          forecastDayNumber = 0;
        }
        let dayName = document.createElement('span');
        dayName.innerHTML = weekDays[forecastDayNumber];

        let myTemp = document.createElement('p');
        myTemp.innerHTML = `${myJsInfo.list[i].main.temp}\xB0`;

        let iconCode = myJsInfo.list[i].weather[0].icon;
        let iconPath = `//openweathermap.org/img/w/${iconCode}.png`;
        let myIcon = document.createElement('img');
        myIcon.setAttribute('alt', myList[i].weather[0].description);
        myIcon.setAttribute('title', myList[i].weather[0].description);
        myIcon.style.width = '70px';
        myIcon.src = iconPath;

        let myDay = document.createElement('div');
        myDay.setAttribute('class', 'myDays');
        myDay.appendChild(dayName);
        myDay.appendChild(myIcon);
        myDay.appendChild(myTemp);
        
        let myForecast = document.querySelector('.sqr');
        myForecast.appendChild(myDay);

        let fore = document.querySelector('.days');
        fore.appendChild(myForecast);
      }
    }
 });