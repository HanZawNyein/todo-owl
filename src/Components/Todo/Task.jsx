import {Component, xml} from "@odoo/owl";
import {useStore} from "../Store";


// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
export class Task extends Component {
    static template = xml/* xml */`
      <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
        <input type="checkbox"
          t-att-id="props.task.id"
          t-att-checked="props.task.isCompleted"
          t-on-click="() => store.toggleTask(props.task)"/>
        <label t-att-for="props.task.id"><t t-esc="props.task.text"/></label>
        <span class="delete" t-on-click="() => store.deleteTask(props.task)">🗑</span>
      </div>`;

    static props = ["task"];

    setup() {
        this.store = useStore();
    }
}
