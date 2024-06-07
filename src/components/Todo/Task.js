import {Component, useState, xml} from "@odoo/owl";

export default class Task extends Component {
    static template = xml /* xml */`
           <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><t t-esc="props.task.title"/></h5>
                    <p class="card-text">
                    <input type="checkbox" t-att-checked="state.task.isCompleted" t-on-click="isCompleted"/><br/>
                    <t t-esc="props.task.text"/>
                    </p>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-warning m-2">Edit</button>
                    <button class="btn btn-danger m-2">Delete</button>
                  </div>
                </div>
              </div>`;

    static props = ["task"];

    state = useState({task: this.props.task});


    isCompleted() {
        this.state.task.isCompleted = !this.state.task.isCompleted
        this.updateTodos(this.state.task)
    }

    updateTodos(updatedTask) {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskIndex = savedTasks.findIndex(task => task.id === updatedTask.id);
        if (taskIndex !== -1) {
            savedTasks[taskIndex] = updatedTask;
        }
        localStorage.setItem('tasks', JSON.stringify(savedTasks));

    }

}