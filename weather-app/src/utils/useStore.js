import { useEnv, useState } from "@odoo/owl";

/**
 * A function for accessing the OpenWeather instance from the createStore function
 * @returns Reactive state of the OpenWeather instance using useState
 **/
function useStore() {
  const env = useEnv();
  return useState(env.store);
}

export { useStore };
