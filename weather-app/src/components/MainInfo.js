import { Component, xml } from "@odoo/owl";
import template from "../templates/maininfo.xml?raw";
import { useStore } from "../utils/useStore";

class MainInfo extends Component {
  static template = xml`${template}`;
  static props = ["icon", "loading"];

  setup() {
    this.state = useStore();
  }
}

export default MainInfo;
