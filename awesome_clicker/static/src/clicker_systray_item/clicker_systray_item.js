/** @odoo-module **/

import { Component, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "../clicker_hook";
import { ClickerValue } from "../clicker_value/clicker_value";

export class ClickerSystrayItem extends Component {
    static template = "awesome_clicker.ClickerSystrayItem"
    static components = { ClickerValue }

    setup() {
        this.clicker = useClicker() 
        this.action = useService("action")

        useExternalListener(document.body, "click", (event) => {
            this.clicker.increment(1)
        }) 
    }

    openClickerPopover() {
        this.action.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker" 
        })
    }
}

const systrayItem = {
    Component: ClickerSystrayItem
}

registry.category("systray").add("awesome_clicker.clicker_item", systrayItem, { sequence: 50})

