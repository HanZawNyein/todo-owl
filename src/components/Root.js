import {Component, useState, xml} from "@odoo/owl";
import Counter from "./Counter/Counter";
export class Root extends Component {
    static template = xml`
    <div t-on-click="update">
      Hello <t t-esc="state.text"/>
      <Counter/>
    </div>`;

    static  components = {Counter};

    state = useState({text: "Owl"});

    update() {
        this.state.text = this.state.text === "Owl" ? "World" : "Owl";
    }
}