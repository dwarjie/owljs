import { reactive } from "@odoo/owl";
import OpenWeather from "./OpenWeather";

/**
 * A function for creating a reactive object of OpenWeather Instance
 * @returns reactive instance of the OpenWeather class
 **/
function createStore() {
  return reactive(new OpenWeather());
}

export { createStore };
