import {Component, xml} from "@odoo/owl";

class Counter extends Component {
    static template = xml`
        <div class="container btn-primary mt-0">
            <h1>Hello</h1>
        </div>`;
}

export default Counter;