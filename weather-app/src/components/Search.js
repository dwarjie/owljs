import { Component, xml, useState, useRef, onMounted } from "@odoo/owl";
import template from "../templates/search.xml?raw";
import { useStore } from "../utils/useStore";

class Search extends Component {
  static template = xml`${template}`;
  static props = ["city", "error"];

  setup() {
    const searchInput = useRef("searchInput");
    onMounted(() => searchInput.el.focus());
    this.state = useStore();
  }

  async searchCity(event) {
    if (event.keyCode != 13) return true;

    this.props.city.value = event.target.value;
    const val = this.props.city.value.trim();
    if (val) {
      this.state.setCity(val);
    }
  }
}

export default Search;
