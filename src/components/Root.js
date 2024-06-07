import {Component, useState, xml} from "@odoo/owl";
import {Todo} from "./Todo/Todo";
import Navbar from "./Navbar/Navbar";

export class Root extends Component {
    static template = xml`
    <Navbar tasks="state.tasks"/>
    <div class="container mt-5">
      <Todo tasks="state.tasks"/>
    </div>`;

    static  components = {Todo, Navbar};

    setup() {
        this.state = useState({
            tasks: [
                {
                    id: 1,
                    title: "title",
                    text: "buy milk",
                    isCompleted: true,
                },
                {
                    id: 2,
                    title: "title",
                    text: "clean house",
                    isCompleted: false,
                },

                {
                    id: 3,
                    title: "title",
                    text: "Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:\n" +
                        "\n",
                    isCompleted: false,
                },
                {
                    id: 6,
                    title: "title",
                    text: "Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:\n" +
                        "\n",
                    isCompleted: false,
                },
                {
                    id: 4,
                    title: "title",
                    text: "buy milk",
                    isCompleted: true,
                },
                {
                    id: 5,
                    title: "title",
                    text: "clean house",
                    isCompleted: false,
                },
            ]
        })
    }
}