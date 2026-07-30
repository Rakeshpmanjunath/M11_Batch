import {test} from "@playwright/test"
import login from "../../testdata/login.json"
import salesorder from "../../testdata/salesorder.json"
import { loginclass } from "../../pages/login"
import { SalesOrderModule } from "../../pages/salesorder_POM"

test("Sales Order Module",async ({page}) => {

     //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //creating Sales Order
    await page.getByRole('link',{name:"More"}).first().click()
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:"Sales Order"}).first().click()
    await page.getByRole('img',{name:"Create Sales Order..."}).click()
    await page.locator('//input[@name="subject"]').fill('NewProject')
    let slod = await page.locator('//input[@name="subject"]').inputValue()
    let [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:"Select"}).first().click()
    ])
    page2.once('dialog', dialog => {
    console.log(dialog.message());
    dialog.dismiss();
    });
    await page2.getByRole('link',{name:"Qspider_Playwright"}).first().click()
    await page.locator('//textarea[@name="bill_street"]').fill("Bengaluru")
    await page.locator('//textarea[@name="ship_street"]').fill("Bengaluru")

    let [page3] =  await Promise.all([

        page.waitForEvent('popup'),
        page.locator('//img[@id="searchIcon1"]').click()
    ])
    await page3.getByRole('link',{name:"vtiger_CRM"}).first().click()
    await page.locator('//input[@id="qty1"]').fill("1")
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    //validation 
    let valid = await page.locator('//span[@id="dtlview_Subject"]').textContent()
    if(slod===valid){
        console.log("Sales Order is created");      
    }else{
        console.log("Sales Order is not created");
    }

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test.only("Quote Module POM",async ({page}) => {

    let signin = new loginclass(page)

    await signin.launchurl(login.url)
    await signin.details(login.username,login.password)

    let newSO = new SalesOrderModule(page)

    await newSO.clickSalesOrder()
    await newSO.clickNewSalesOrder()
    await newSO.createNewSalesOrder(salesorder.subjectName,salesorder.organizationName,salesorder.billAddress,
        salesorder.shipAddress,salesorder.productName,salesorder.itemQuantity)

    await newSO.signOut()
})