/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, useState, useEffect } from "@odoo/owl";
import { ClickerValue } from "../clicker_value/clicker_value";
import { useClicker } from "../clicker_hook";


export class ClientAction extends Component {
    static template = "awesome_clicker.ClientAction" 
    static components = { ClickerValue }

    setup() {
        this.clicker = useClicker()

        useEffect(
            () => {
                if (this.clicker.state.level < 1) {
                    if (this.clicker.state.clicks >= 1000) {
                        this.clicker.state.level = 1
                    }
                }
            },
            () => [this.clicker.state.clicks]
        )
    }

    incrementBtn() {
        this.clicker.increment(100)
    }

    buyClickBot() {
        this.clicker.decrement(1000)
        this.clicker.state.clickBot += 1
    }

}

registry.category("actions").add("awesome_clicker.client_action", ClientAction)