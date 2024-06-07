import {useEnv, useState} from "@odoo/owl";

// -------------------------------------------------------------------------
// Store
// -------------------------------------------------------------------------
export function useStore() {
    const env = useEnv();
    return useState(env.store);
}
