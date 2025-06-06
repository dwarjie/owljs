import "./style.css";
import { mount } from "@odoo/owl";
import Root from "./Root";
import { createTaskStore } from "./utils/createTaskStore";

const env = {
  store: createTaskStore(),
};

mount(Root, document.body, { dev: true, env });
