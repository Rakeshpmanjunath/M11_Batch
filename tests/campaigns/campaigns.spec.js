import { expect, test} from "@playwright/test";
import login from '../../testdata/login.json'
import org from '../../testdata/org.json'

test('campaigns module',async ({page}) => {
    //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! creating the campaigns
    await page.getByRole('link',{name:"More"}).first().click()
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:'Campaigns'}).click()
    await page.getByRole('img',{name:'Create Campaign...'}).click()
    await page.locator('//input[@name="campaignname"]').fill("Qspider_Playwright")
    let camp = await page.locator('//input[@name="campaignname"]').inputValue()
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    //!validation
    let valid = await page.locator('//span[@id="dtlview_Campaign Name"]').textContent()
    if(camp===valid){
        console.log('campaigns is created');
    }else{
        console.log('campaigns is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

    })