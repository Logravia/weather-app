import { weather, processWeatherJSON, metricToAmerican } from "./api.js";
import {displayWeather} from "./html.js"

const searchBtn = document.querySelector("#search-btn");
const searchText = document.querySelector("#search-text");
const americanMeasurements = document.querySelector("#american");
let curData = {};

searchBtn.addEventListener("click", (e)=>{
  let city = searchText.value;
  update(city);
})

americanMeasurements.addEventListener("click", (e)=>{
  if (JSON.stringify(curData) == "{}") {return}

  if (americanMeasurements.checked) {
    displayWeather(metricToAmerican(curData));
  } else {
    displayWeather(curData);
  }
})

const update = (city) => {
  weather(city).then((json) => {
    let data = processWeatherJSON(json);
    console.log(data);
    displayWeather(data);
    curData = data;
  })
}

update();
