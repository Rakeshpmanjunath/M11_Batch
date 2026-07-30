import {test} from "@playwright/test";
import login from "../../testdata/login.json"
import opportunity from "../../testdata/opportunity.json"
import { loginclass } from "../../pages/login";
import { Opportunity } from "../../pages/opportunity_POM";


// test('Opportunity module',async ({page}) => {
//     //! login to the application
//     await page.goto('http://localhost:8888/')
//     await page.locator('//input[@name="user_name"]').fill('admin')
//     await page.locator('//input[@name="user_password"]').fill('admin')
//     await page.getByRole('button',{name:'Login'}).click()

//     //! creating the Opportunity
//     await page.getByRole('link',{name:'Opportunities'}).click()
//     await page.getByRole('img',{name:'Create Opportunity...'}).click()
//     await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill("Qspider_Playwright")
//     let oprname = await page.locator('(//input[@class="detailedViewTextBox"])[1]').inputValue()
//     let [page2] = await Promise.all([
//         page.waitForEvent("popup"),
//         await page.getByRole('img',{name:"Select"}).first().click()
//     ])
//     await page2.getByRole('link',{name:"Qspider_Playwright"}).click()
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

//    //!validation
//     let valid = await page.locator('//span[@id="dtlview_Opportunity Name"]').textContent()
//     if(oprname===valid){
//         console.log('Opportunity is created');
//     }else{
//         console.log('Opportunity is not created');
//     }
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()
// })

test('Opportunity module',async ({page}) => {
    //! login to the application
    let signin = new loginclass(page)

    await signin.launchurl(login.url)
    await signin.details(login.username,login.password)

    let opp = new Opportunity(page);

    await opp.clickOpportunity()
    await opp.clickCreateOpportunity()
    await opp.createOpportunity(opportunity.opportunity_name,opportunity.organization_name)
    await opp.signOut()

})