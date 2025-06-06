import { reactive } from "@odoo/owl";
import TaskList from "../components/TaskList";

const createTaskStore = () => {
  return reactive(new TaskList());
};

export { createTaskStore };
