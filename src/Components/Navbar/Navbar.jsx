import {Component, onMounted, useRef, useState, xml} from "@odoo/owl";
import {useStore} from "../Store";
// -------------------------------------------------------------------------
// Root Component
// -------------------------------------------------------------------------
export default class Navbar extends Component {
    static template = xml/* xml */`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Todo App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>`;
}