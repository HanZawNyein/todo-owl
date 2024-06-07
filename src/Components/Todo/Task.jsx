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
                <h5 class="card-title"><t t-esc="props.task.text.split(' ')[0]"/></h5>
                <p class="card-text">
                    <t t-esc="props.task.text"/>  
                </p>
              </div>
              <div class="card-footer">
                    <div class="row">
                    <div class="col form-check">
                      <input class="form-check-input" type="checkbox" t-att-id="props.task.id"
                       t-att-checked="props.task.isCompleted"  
                       t-on-click="() => store.toggleTask(props.task)"/>
                      <label class="form-check-label" t-att-for="props.task.id">
                        Completed
                      </label>
                    </div>
                    <button class="col-md-2 btn btn-outline-danger m-2" t-on-click="() => store.deleteTask(props.task)">🗑</button>
              </div>
            </div>
            </div>
        </div>`;

    static props = ["task"];

    setup() {
        this.store = useStore();
    }
}
