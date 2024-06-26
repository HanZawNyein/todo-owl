import {Component, onMounted, useRef, useState, xml} from "@odoo/owl";
import {Task} from "./Task";
import {useStore} from "../Store";
import Navbar from "../Navbar/Navbar";
// -------------------------------------------------------------------------
// Root Component
// -------------------------------------------------------------------------
export default class Todo extends Component {
    static template = xml/* xml */`
<div class="container m-5">
        <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input" class="form-control"/>
        <div class="mt-5">
               <div style="color: navy;
            margin-top: 8px;
            font-size: 14px;
            display: flex;" t-if="store.tasks.length">
          <h2 style="flex-grow: 1;">
            <t t-esc="displayedTasks.length"/>
            <t t-if="displayedTasks.length lt store.tasks.length">
                / <t t-esc="store.tasks.length"/>
            </t>
            task(s)
          </h2>
          <h5>
            <span t-foreach="['all', 'active', 'completed']"  t-as="f" t-key="f">
                <button t-on-click="() => this.setFilter(f)" class="btn btn-outline-primary m-2"><t t-esc="f" /></button> 
            </span>
          </h5>
        </div>
        </div>
        <div class="mt-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <t t-foreach="displayedTasks" t-as="task" t-key="task.id">
                          <Task task="task"/>
              </t>
            </div>
        </div>
</div>`;

    static components = {Task, Navbar};

    get displayedTasks() {
        const tasks = this.store.tasks;
        switch (this.filter.value) {
            case "active":
                return tasks.filter((t) => !t.isCompleted);
            case "completed":
                return tasks.filter((t) => t.isCompleted);
            case "all":
                return tasks;
        }
    }

    setup() {
        const inputRef = useRef("add-input");
        onMounted(() => inputRef.el.focus());
        this.store = useStore();
        this.filter = useState({value: "all"});
    }

    addTask(ev) {
        // 13 is keycode for ENTER
        if (ev.keyCode === 13) {
            this.store.addTask(ev.target.value);
            ev.target.value = "";
        }
    }

    setFilter(filter) {
        this.filter.value = filter;
    }
}