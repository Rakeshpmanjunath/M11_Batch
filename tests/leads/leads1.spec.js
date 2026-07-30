import {test} from '../../fixtures/crmfixtures'
import leads from '../../testdata/lead.json'

test('lead',async ({leads}) => {
    test.slow()
    await leads.clickLeads()
    await leads.clickCreateLead()
    await leads.createLead(
        lead.firstname,
        lead.lastname,
        lead.company_name)
    await leads.signout()
}) 