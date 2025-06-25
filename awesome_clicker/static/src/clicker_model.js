/** @odoo-module **/

import { Reactive } from "@web/core/utils/reactive"

export class ClickerModel extends Reactive {

    /**
     * @typedef ClickerObject
     * @property { Number } clicks
     * @property { Number } level
     * @property { Number } clickBot
     */

    /**
     * @param {ClickerObject} state 
     */

    constructor(state) {
        super()
        this.state = state
    }

    increment(incValue) {
        this.state.clicks += incValue
    }

    decrement(decValue) {
        this.state.clicks -= decValue
    }
}