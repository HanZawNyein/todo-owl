import {Component, xml} from "@odoo/owl";
import {useStore} from "../Store";


// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
export class Task extends Component {
    static template = xml/* xml */`
        <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title"><t t-esc="props.task.text"/></h5>
                <p class="card-text">
                    <t t-esc="props.task.text"/>  
                </p>
              </div>
              <div class="card-footer">
                    <input type="checkbox"
                      t-att-id="props.task.id"
                      t-att-checked="props.task.isCompleted"
                      t-on-click="() => store.toggleTask(props.task)"/>
                      <button class="btn btn-outline-danger" t-on-click="() => store.deleteTask(props.task)">🗑</button>
                </div>
            </div>
        </div>`;

    static props = ["task"];

    setup() {
        this.store = useStore();
    }
}
