import {test} from '../../fixtures/crmfixtures'
import contact from '../../testdata/contacts.json'
import { random } from '../../utils/random'

test('contacts fixture',async ({contacts}) => {
    await test.slow()
    let random_fun = random()
    // let name = contact.firstname+random_fun
    // let lastname = contact.lastname
    await contacts.createContact(contact.firstname,contact.lastname)
}) 