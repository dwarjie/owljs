import { Component, xml, onMounted, useRef, useState } from "@odoo/owl";
import { useStore } from "./utils/useStore";
import Task from "./components/Task";

class Root extends Component {
  static template = xml`
    <div class="todo-app">
      <input placeholder="Enter a task" t-on-keyup="addTask" t-ref="add-input"/>
      <div class="task-list">
        <t t-foreach="store.tasks" t-as="task" t-key="task.id">
          <Task task="task"/>
        </t>
      </div>
    </div>
  `;
  static components = { Task };
  setup() {
    const inputRef = useRef("add-input");
    onMounted(() => inputRef.el.focus());
    this.store = useStore();
  }

  addTask(event) {
    if (event.keyCode == 13) {
      this.store.addTask(event.target.value);
      event.target.value = "";
    }
  }
}

export default Root;
