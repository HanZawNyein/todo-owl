import {Component, mount, onMounted, reactive, useEnv, useRef, useState, xml} from "@odoo/owl";

// -------------------------------------------------------------------------
// Store
// -------------------------------------------------------------------------
export function useStore() {
    const env = useEnv();
    return useState(env.store);
}
