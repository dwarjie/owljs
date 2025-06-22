/** @odoo-module **/

import { useService } from "@web/core/utils/hooks";
import { Component, useState } from "@odoo/owl";
import { DashboardItem } from "./dashboard_item/dashboard_item";
import { PieChart } from "./pie_chart/pie_chart";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = { Layout, DashboardItem, PieChart }

    setup() {
        this.action = useService("action")
        this.stats = useState(useService("awesome_dashboard.statistics"));
    }

    openCustomers() {
        this.action.doAction("base.action_partner_form")
    }

    async openLeads() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Leads",
            target: "current",
            res_model: "crm.lead",
            views: [[ false, "list" ], [ false, "form" ]]
        })
    }
}

registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);
