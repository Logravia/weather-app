const weatherBox = document.querySelector(".weather-box");

export const displayWeather = (data) => {
  weatherBox.innerHTML = `
                <p id="temp">${data.temp}</p>
                <div class="extra-data">
                    <p class="weather">The weather is ${data.weather}</p>
                    <p class="feels-like">It feels like it's ${data.feels}</p>
                    <p class="windspeed">The wind speed is ${data.wind}</p>
                    <p class="humidity">Humidity is ${data.humidity}</p>
                    <p class="pressure">The current pressure is ${data.pressure}</p>
                </div>`
}
