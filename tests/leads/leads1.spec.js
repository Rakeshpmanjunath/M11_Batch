import {test} from '../../fixtures/crmfixtures'
import leadsdata from '../../testdata/leads.json'

test('lead fixture',async ({leads}) => {
    test.slow()
    await leads.clickLeads()
    await leads.clickCreateLead()
    await leads.createLead(
        leadsdata.firstname,
        leadsdata.lastname,
        leadsdata.company_name)
    await leads.signout()
}) 