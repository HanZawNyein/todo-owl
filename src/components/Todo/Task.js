import {Component, xml} from "@odoo/owl";

export default class Task extends Component {
    static template = xml /* xml */`
           <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><t t-esc="props.task.title"/></h5>
                    <p class="card-text">
                    <input type="checkbox" t-att-checked="props.task.isCompleted"/><br/>
                    <t t-esc="props.task.text"/>
                    </p>
                  </div>
                </div>
              </div>`;

    static props = ["task"];
}