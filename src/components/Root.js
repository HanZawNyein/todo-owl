import {Component, useState, xml} from "@odoo/owl";
import {Todo} from "./Todo/Todo";
import Navbar from "./Navbar/Navbar";

export class Root extends Component {
    static template = xml`
    <Navbar/>
    <div class="container mt-5">
      <Todo/>
    </div>`;

    static  components = {Todo, Navbar};
}