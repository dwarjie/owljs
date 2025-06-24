import { registry } from "@web/core/registry"
import { reactive } from "@odoo/owl"

const clickerService = {
    start(env, {}) {
        const state = reactive({ clicks: 980, level: 0, clickBot: 0 })

        setInterval(() => {
            const clickPerTenSecs = 10 * state.clickBot
            console.log(`Add ${clickPerTenSecs} click(s)`)
            state.clicks += clickPerTenSecs
        }, 10000)

        const increment = (incValue) => {
            state.clicks += incValue
        } 

        const decrement = (decValue) => {
            state.clicks -= decValue
        }

        return { state, increment, decrement }
    }
}

registry.category("services").add("awesome_clicker.clicker", clickerService)