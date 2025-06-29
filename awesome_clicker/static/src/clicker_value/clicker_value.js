/** @odoo-module **/

import { Component } from "@odoo/owl";
import { humanNumber } from "@web/core/utils/numbers"
import { useClicker } from "../clicker_hook";

export class ClickerValue extends Component {
    static template = "awesome_clicker.ClickerValue"
    formatConfig = { decimals: 1}

    setup() {
        this.clicker = useClicker()
    }

    getHumanNumber() {
        return humanNumber(this.clicker.state.clicks,
            this.formatConfig
        )
    }
}