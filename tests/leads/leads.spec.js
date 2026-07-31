import { expect, test} from "@playwright/test";
import login from '../../testdata/login.json'
import leads from '../../testdata/leads.json'
import { loginclass } from "../../pages/login";
import { LeadsPage } from "../../pages/leads_POM";

// test('lead module',async ({page}) => {
//     //! login to the application
//     await page.goto('http://localhost:8888/')
//     await page.locator('//input[@name="user_name"]').fill('admin')
//     await page.locator('//input[@name="user_password"]').fill('admin')
//     await page.getByRole('button',{name:'Login'}).click()

//     //! creating the lead
//     await page.getByRole('link',{name:'Leads'}).click()
//     await page.getByRole('img',{name:'Create Lead...'}).click()
//     await page.locator('//select[@name="salutationtype"]').selectOption({value:'Ms.'})
//     await page.locator('//input[@name="firstname"]').fill('akhila')
//     await page.locator('//input[@name="lastname"]').fill('gandla')
//     let lastname = await page.locator('//input[@name="lastname"]').inputValue()
//     await page.locator('//input[@name="company"]').fill('qspiders')
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

//     //!validation
//     let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
//     if(lastname===valid){
//         console.log('lead is created');
//     }else{
//         console.log('lead is not created');
//     }
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()
// }) 

// test('lead module_ddt',async ({page}) => {
//     test.slow()
//     //! login to the application
//     await page.goto(login.url)
//     await page.locator('//input[@name="user_name"]').fill(login.username)
//     await page.locator('//input[@name="user_password"]').fill(login.password)
//     await page.getByRole('button',{name:'Login'}).click()

//     //! creating the lead
//     await page.getByRole('link',{name:'Leads'}).click()
//     await page.getByRole('img',{name:'Create Lead...'}).click()
//     await page.locator('//select[@name="salutationtype"]').selectOption({value:'Ms.'})
//     await page.locator('//input[@name="firstname"]').fill(leads.firstname)
//     await page.locator('//input[@name="lastname"]').fill(leads.lastname)
//     let lastname = await page.locator('//input[@name="lastname"]').inputValue()
//     await page.locator('//input[@name="company"]').fill(leads.company_name)
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

//     //!validation
//     // let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
//     // if(lastname===valid){
//     //     console.log('lead is created');
//     // }else{
//     //     console.log('lead is not created');
//     // }

//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toContainText(lastname)
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()
// }) 

// test('pom', async ({ page }) => {
//     let signin = new loginclass(page);

//     await page.goto(login.url);
//     await signin.username.fill(login.username);
//     await signin.password.fill(login.password);
//     await signin.button.click();
// });

test('pom2', async ({ page }) => {
    let sign = new loginclass(page);

    await sign.launchurl(login.url);
    await sign.details(login.username, login.password);

    let leadsobj = new LeadsPage(page);

    await leadsobj.clickLeads();
    await leadsobj.clickCreateLead();
    await leadsobj.createLead(
        leads.firstname,
        leads.lastname,
        leads.company_name   )
    await leadsobj.signout();
})