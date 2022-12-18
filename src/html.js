const weatherBox = document.querySelector(".weather-box");

export const displayWeather = (data) => {
  weatherBox.innerHTML = `
                <p id="temp">${data.temp}${data.tempMetric}</p>
                <div class="extra-data">
                    <p class="location">In ${data.location}</p>
                    <p class="weather">The weather is ${data.weather}</p>
                    <p class="feels-like">It feels like it's ${data.feels}${data.tempMetric}</p>
                    <p class="windspeed">The wind speed is ${data.wind}${data.speedMetric}</p>
                    <p class="humidity">Humidity is ${data.humidity}%</p>
                    <p class="pressure">The current pressure is ${data.pressure}hpA</p>
                </div>`
}
