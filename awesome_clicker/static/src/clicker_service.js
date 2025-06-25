import { registry } from "@web/core/registry"
import { ClickerModel } from "./clicker_model"

const clickerService = {
    start(env, { }) {
        const clickerProperty = { clicks: 980, level: 0, clickBot: 0 }
        const clickerModel = new ClickerModel(clickerProperty)

        setInterval(() => {
            const clickPerTenSecs = 10 * clickerModel.state.clickBot
            console.log(`Add ${clickPerTenSecs} click(s)`)
            clickerModel.state.clicks += clickPerTenSecs
        }, 10000)

        return { state: clickerModel.state, increment: clickerModel.increment, decrement: clickerModel.decrement }
    }
}

registry.category("services").add("awesome_clicker.clicker", clickerService)