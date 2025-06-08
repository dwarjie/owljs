import { getWeatherIcon } from "./getWeatherIcon";

/**
 * Class representing an OpenWeather API
 *
 * @class
 **/
class OpenWeather {
  static #API_KEY = import.meta.env.VITE_API_KEY;
  city = "";
  lat = 0;
  lon = 0;
  weather = {
    temp: 0,
    icon: "",
    desc: "",
  };
  weatherElem = null;

  constructor() {
    this.city = "Metro Manila";
  }

  /**
   * A getter function for weather temperation of city using in accessOpenWeather function
   * @function
   * @returns {Object} Object with the temp, icon, and description of the weather
   **/
  getWeatherTemp() {
    return this.weather;
  }

  /**
   * A getter function for city
   * @function
   * @returns {string} city
   **/
  getCity() {
    return this.city;
  }

  /**
   * A getter function for the Icon Element
   * @function
   * @returns {string} Icon Element
   **/
  getIcon() {
    return getWeatherIcon(this.weather.icon);
  }

  /**
   * A setter function for city to be used for OpenWeather
   * @function
   * @param {string} city
   **/
  setCity(city) {
    this.city = city;
  }

  /**
   * A setter function for lat and lon for OpenWeather API
   * @function
   * @param {float} lat
   * @param {float} lon
   **/
  setCoordinates(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  /**
   * An async function for accessing OpenWeather Geocoding API
   *@async
   *@returns {Object} - Returns the lat and lon of the city to be used for getWeather function
   *@returns {Boolean} - Returns false if request is invalid
   **/
  async getCoordinates() {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=${1}&appid=${OpenWeather.#API_KEY}`;
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error(`Something went wrong: ${res.status}`);
      }
      const data = await res.json();
      const coord = { lat: data[0].lat, long: data[0].lon };
      this.setCoordinates(coord.lat, coord.long);
      return coord;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }

  /**
   * A function for requesting the weather using OpenWeather
   * @async
   *@returns {Boolean} - Returns true if request is valid, false otherwise
   **/
  async requestWeather() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${OpenWeather.#API_KEY}&units=metric`;
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error(`Something went wrong: ${res.status}`);
      }
      const data = await res.json();
      this.weather = {
        temp: data.main.temp,
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
      };
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }
}

export default OpenWeather;
