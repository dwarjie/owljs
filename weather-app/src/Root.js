import { Component, xml, useEffect, useState } from "@odoo/owl";
import { useStore } from "./utils/useStore";
import template from "./templates/main.xml?raw";
import Search from "./components/Search";
import MainInfo from "./components/MainInfo";

class Root extends Component {
  static template = xml`${template}`;
  static components = { Search, MainInfo };

  async setup() {
    this.state = useStore();
    this.city = useState({ value: "" });
    this.icon = useState({ value: "" });
    this.loading = useState({ value: true });
    this.error = useState({ value: "" });

    useEffect(
      () => {
        const requestWeather = async () => {
          this.loading.value = true;
          this.error.value = "";
          const coord = await this.state.getCoordinates();
          if (!coord) return (this.error.value = "Invalid City");
          const weather = await this.state.requestWeather();
          if (!weather) return (this.error.value = "Invalid Request");
          this.icon.value = this.state.getIcon();
          this.loading.value = false;
        };
        requestWeather();
        return () => {};
      },
      () => [this.state.city],
    );
  }
}

export default Root;
