/** @owl-module */

import { Component, useState } from "@odoo/owl";

export class Card extends Component {
    static template = "awesome.Card"
    static props = {
        title: { type: String, optional: false},
        slots: {
            type: Object,
            values: { optional: false }
        }
        // content: { type: HTMLElement, optional: true}
    }

    setup() {
        this.state = useState({ isOpen: true }) 
    }

    toggleCard() {
        this.state.isOpen = !this.state.isOpen
    }

}