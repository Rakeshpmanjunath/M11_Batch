import { test as base } from "./login";
import { LeadsPage } from "../pages/leads_POM";
import { ContactsCRM } from "../pages/contatct_POM";

export let test = base.extend({
    leads :async ({login},use) => {
        let lead = new LeadsPage(login)
        await use(lead)
    },
    contacts : async ({login},use) => {
        let contact = new ContactsCRM(login)
        await use(contact)
    }
}) 