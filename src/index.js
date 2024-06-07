import {mount} from "@odoo/owl";
import Root from "./Components/Todo/Root";
import {createTaskStore} from "./Components/Todo/TaskList";


// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
const env = {store: createTaskStore()};
mount(Root, document.body, {dev: true, env});
