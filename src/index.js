import { weather, processWeatherJSON } from "./api.js";
import {displayWeather} from "./html.js"
import "./style.css"
import "./reset.css"

weather().then((json)=>{
  console.log(json);
  let data = processWeatherJSON(json);
  displayWeather(data);
})
