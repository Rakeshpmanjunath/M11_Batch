import {test} from "@playwright/test";
import login from "../../testdata/login.json"
import Contacts from "../../testdata/contacts.json";
import { loginclass } from "../../pages/login";
import { ContactsCRM } from "../../pages/contatct_POM";

// test('Contact module',async ({page}) => {
//     //! login to the application
//     await page.goto('http://localhost:8888/')
//     await page.locator('//input[@name="user_name"]').fill('admin')
//     await page.locator('//input[@name="user_password"]').fill('admin')
//     await page.getByRole('button',{name:'Login'}).click()

//     //! creating the Contacts
//     await page.getByRole('link',{name:'Contacts'}).click()
//     await page.getByRole('img',{name:'Create Contact...'}).click()
//     await page.locator('//select[@name="salutationtype"]').selectOption({value:'Ms.'})
//     await page.locator('//input[@name="firstname"]').fill("Samprita")
//     await page.locator('//input[@name="lastname"]').fill("Marigoudra")
//     let fstname = await page.locator('//input[@name="firstname"]').inputValue()
//     let lstname = await page.locator('//input[@name="lastname"]').inputValue()
//      await page.locator('//input[@name="birthday"]').fill("1994-01-15");
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

//     //!validation
//     let validfn = await page.locator('//span[@id="dtlview_First Name"]').textContent()
//     let validln = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
//     if(fstname===validfn && lstname===validln){
//         console.log('Contacts is created');
//     }else{
//         console.log('Contacts is not created');
//     }
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()
// })

test.only('Contact module POM',async ({page}) => {
    //! login to the application
    let sign = new loginclass(page)

        await sign.launchurl(login.url)
        await sign.details(login.username,login.password)

    let conts = new ContactsCRM(page)
        await conts.clickcontact()
        await conts.clickcreatecontacts()
        await conts.createcontact(Contacts.firstname,Contacts.lastname)    
        await conts.singout()

})

/////---------------------------------------------------------------------///
//Utils
// import{test,expect} from "@playwright/test"
// import login from '../../testdata/login.json'
// import contacts from '../../testdata/contacts.json'
// import { contactclass } from "../../pages/contacts";
// import { loginclass } from './../../pages/login'; 
// import { random } from "../../utils/random";

// test.only("POM2", async ({page}) => {
//     let sign = new loginclass(page)
//     await sign.launchurl(login.url)
//     await sign.details(login.username, login.password)

//     let contactpage = new contactclass(page)

//     let random_fun = random() 
//     let name = contacts.firstname+ random_fun 
//     let lastName = contacts.lastname + random_fun
//     // One method call instead of ~10 lines
//     let lastname = await contactpage.createContact({
//         firstName:name,
//         lastName: lastName,
//         // filePath: "C:\Users\rakes\Downloads\assertions.png"
//     })

//     await expect(contactpage.verifyLastname).toContainText(lastname)
// })  