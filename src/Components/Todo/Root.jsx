import {Component, xml} from "@odoo/owl";
import Todo from "./Todo";
import Navbar from "../Navbar/Navbar";
// -------------------------------------------------------------------------
// Root Component
// -------------------------------------------------------------------------
export default class Root extends Component {
    static template = xml/* xml */
        `<div>
            <Navbar/>
            <Todo/>
        </div>`;

    static components = {Navbar, Todo};
}