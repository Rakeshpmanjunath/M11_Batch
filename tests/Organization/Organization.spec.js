import { expect, test} from "@playwright/test";
import login from '../../testdata/login.json'
import org from '../../testdata/org.json'
import { loginclass } from "../../pages/login";
import { organization } from "../../pages/organization_POM";

// test('Organization module',async ({page}) => {
//     //! login to the application
//     await page.goto('http://localhost:8888/')
//     await page.locator('//input[@name="user_name"]').fill('admin')
//     await page.locator('//input[@name="user_password"]').fill('admin')
//     await page.getByRole('button',{name:'Login'}).click()

//     //! creating the Organization
//     await page.getByRole('link',{name:'ORGANIZATIONS'}).click()
//     await page.getByRole('img',{name:'Create Organization...'}).click()
//     await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill("Qspider_Playwright")
//     let orgname = await page.locator('(//input[@class="detailedViewTextBox"])[1]').inputValue()
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

//     //!validation
//     let valid = await page.locator('//span[@id="dtlview_Organization Name"]').textContent()
//     if(orgname===valid){
//         console.log('Organization is created');
//     }else{
//         console.log('Organization is not created');
//     }
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()

//     })


// test('Organization module',async ({page}) => {
//     //! login to the application
//     await page.goto(login.url)
//     await page.locator('//input[@name="user_name"]').fill(login.username)
//     await page.locator('//input[@name="user_password"]').fill(login.password)
//     await page.getByRole('button',{name:'Login'}).click()

//     //! creating the Organization
//     await page.getByRole('link',{name:'ORGANIZATIONS'}).click()
//     await page.getByRole('img',{name:'Create Organization...'}).click()
//     await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill(org.organization_name)
//     let orgname = await page.locator('(//input[@class="detailedViewTextBox"])[1]').inputValue()
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

//     // //!validation
//     // let valid = await page.locator('//span[@id="dtlview_Organization Name"]').textContent()
//     // if(orgname===valid){
//     //     console.log('Organization is created');
//     // }else{
//     //     console.log('Organization is not created');
//     // }

//     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(org.organization_name)
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()

//     })


test.only('Organization module POM',async ({page}) => {
    //! login to the application
    let signin = new loginclass(page)
    await signin.launchurl(login.url)
    await signin.details(login.username,login.password)

    //! creating the Organization
    let orgcreation = new organization(page)

    await orgcreation.clickOrg()
    await orgcreation.clickCreateOrg()
    await orgcreation.createOrganization(org.organization_name)
    await orgcreation.singout()

    })