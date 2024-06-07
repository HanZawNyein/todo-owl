import {Component, useRef, useState, xml} from "@odoo/owl";
import Task from "./Task";

export class Todo extends Component {
    static template = xml`
        <div class="container">
                <h1>Tasks</h1>
                <hr/>
                <ui>
                    <li><b>all</b> - <t t-esc="props.tasks.length"/></li>
                    <li><b>Completed</b> - <t t-esc="props.tasks.filter(task=>task.isCompleted).length"/></li>
                    <li><b>Uncompleted</b> - <t t-esc="props.tasks.filter(task=>!task.isCompleted).length"/></li>
                </ui>
        </div>
        <hr/>
        <div class="d-flex m-5">
            <input class="form-control me-2" t-ref="search-input" type="search" placeholder="Search" aria-label="Search" 
            t-on-keyup="searchTodos"/>
            <button class="btn btn-primary" t-on-click="addTodo">AddTodos</button>
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <t t-foreach="state.tasks" t-as="task" t-key="task.id">
              <Task task="task"/>
          </t>
        </div>`;

    static components = {Task};
    static props = ["tasks"];

    inputRef = useRef('search-input');

    state = useState({tasks: this.props.tasks});


    searchTodos() {
        var searchText = this.inputRef.el.value
        this.state.tasks = this.props.tasks.filter((task) => task.text.toLowerCase().includes(searchText))
    }

    addTodo() {
        console.log("add")
        this.state.tasks.push({
            'id': this.state.tasks.length + 1,
            'title': `${this.state.tasks.length + 1}. New Title`,
            'text': 'new text',
            'isCompleted': false,
        })
    }
}