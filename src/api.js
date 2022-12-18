export const weather = async (city="geoloc") => {
  try {
    if (city = 'geoloc') { city = await userCity(); }
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=192b28bd218cb149c13d51cfd3d48358`,
                               {mode: 'cors'});
    return await response.json();
  } catch(e) {
    console.log(e)
  }
}

export const userCity = async () => {
  try {
    let response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=3599edc5b76545b399662fa4a2d56185`,
                               {mode: 'cors'});
    const json = await response.json();
    return json.city;
  } catch(e) {
    console.log(e)
  }
}

export const processWeatherJSON = (json)=> {
  let data = {};

  data.location = json.name
  data.feels = Math.round(json.main.feels_like)
  data.humidity = json.main.humidity
  data.pressure = json.main.pressure
  data.temp = Math.round(json.main.temp)
  data.weather = json.weather[0].main.toLowerCase();
  data.wind = json.wind.speed
  data.speedMetric = "m/s"
  data.tempMetric = "C"

  return data;
}

export const metricToAmerican = (data) =>{


  return data;
}
