/** @odoo-module **/

import { Component } from "@odoo/owl";

export class DashboardItem extends Component {
    static props = { 
        size: { type: Number, optional: true },
        slots: { type: Object }
    }
    static defaultProps = { size: 1 }
    static template = "dashboard.DashboardItem"
}