import { Component, xml } from "@odoo/owl";
import { useStore } from "../utils/useStore";

class Task extends Component {
  static template = xml`
    <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
      <input type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="() => store.toggleTask(props.task)"/>
      <span><t t-esc="props.task.text"/></span>
      <span class="delete" t-on-click="() => store.deleteTask(props.task)">🗑</span>
    </div>
  `;
  static props = ["task"];

  setup() {
    this.store = useStore();
  }
}

export default Task;
