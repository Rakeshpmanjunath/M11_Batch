import {test} from "@playwright/test"

test("Invoice Module",async ({page}) => {

     //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //creating Sales Order
    await page.getByRole('link',{name:"More"}).first().click()
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:"Invoice"}).first().click()
    await page.getByRole('img',{name:"Create Invoice..."}).click()
    await page.locator('//input[@name="subject"]').fill('NewProject1')
    let Inv = await page.locator('//input[@name="subject"]').inputValue()
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@title="Select"])[3]').click()
        // page.getByRole('img',{name:"Select"}).nth(3).click()
    ])
    page2.once('dialog',async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
    });
    await page2.getByRole('link',{name:"Qspider_Playwright"}).first().click()
    await page.locator('//textarea[@name="bill_street"]').fill("Bengaluru")
    await page.locator('//textarea[@name="ship_street"]').fill("Bengaluru")

    const [page3] =  await Promise.all([

        page.waitForEvent('popup'),
        page.locator('//img[@id="searchIcon1"]').click()
    ])
    await page3.getByRole('link',{name:"vtiger_CRM"}).first().click()
    await page.locator('//input[@id="qty1"]').fill("1")
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    //validation 
    let valid = await page.locator('//span[@id="dtlview_Subject"]').textContent()
    if(Inv===valid){
        console.log("Invoice is created");      
    }else{
        console.log("Invoice is not created");
    }

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})