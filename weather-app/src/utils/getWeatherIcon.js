/**
 * A util function to get the icon based on the weather
 * @function
 * @param {string} code - The OpenWeather code of the icon
 * @returns {string} The icon element
 **/
function getWeatherIcon(code) {
  let icon;
  if (code === "01d" || code === "01n") {
    icon = "wi-day-sunny";
  }

  if (code === "02d" || code === "02n") {
    icon = "wi-day-cloudy";
  }

  if (code === "03d" || code === "03n") {
    icon = "wi-cloud";
  }

  if (code === "04d" || code === "04n") {
    icon = "wi-cloudy";
  }

  if (code === "09d" || code === "09n") {
    icon = "wi-rain";
  }

  if (code === "10d" || code === "10n") {
    icon = "wi-rain";
  }

  if (code === "11d" || code === "11n") {
    icon = "wi-thunderstorm";
  }

  if (code === "13d" || code === "13n") {
    icon = "wi-snow";
  }

  if (code === "50d" || code === "50n") {
    icon = "wi-windy";
  }

  return icon;
}

export { getWeatherIcon };
