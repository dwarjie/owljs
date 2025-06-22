/** @odoo-module **/

import { loadJS } from "@web/core/assets"
import { Component, useEffect, onWillStart, onWillUnmount, useRef } from "@odoo/owl";

const pieShape = {
    m: Number,
    s: Number,
    xl: Number,
}

export class PieChart extends Component {
    static template = "awesome_dashboard.PieChart"
    static props = {
        label: { type: String, optional: false },
        data: { type: Object, optional: false, shape: pieShape }
    }

    setup() {
        this.canvas = useRef("canvas")
        this.chart = null

        onWillStart(async () => {
            await loadJS("/web/static/lib/Chart/Chart.js")
        })
        useEffect(() => this.renderPie())
        onWillUnmount(() => {
            if (this.chart) {
                this.chart.destroy()
            }
        })
    }

    renderPie() {
        if (this.chart) {
            this.chart.destroy()
        }
        if (this.canvas.el) {
            const config = {
                type: "pie",
                data: {
                    labels: Object.keys(this.props.data),
                    datasets: [{
                        label: this.props.label,
                        data: Object.values(this.props.data)
                    }],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)"
                    ],
                    hoverOffset: 4
                }
            }
            this.chart = new Chart(this.canvas.el, config)
        }
    }

}