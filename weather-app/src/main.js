import { mount, loadFile, whenReady } from "@odoo/owl";
import "./style.css";
import Root from "./Root";
import { createStore } from "./utils/createStore";

const env = {
  store: createStore(),
};

mount(Root, document.body, { dev: true, env });
