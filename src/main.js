// (function () {
import {Component, mount, onMounted, reactive, useEnv, useRef, useState, xml} from "@odoo/owl";
// const { Component, mount, xml, useRef, onMounted, useState, reactive, useEnv } = owl;
import Root from "./Todo/Root";
import {createTaskStore} from "./Todo/TaskList";


// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
const env = {store: createTaskStore()};
mount(Root, document.body, {dev: true, env});
// })();