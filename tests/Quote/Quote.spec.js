import {test} from "@playwright/test"
import login from "../../testdata/login.json"
import quote from "../../testdata/quote.json"
import { QuoteModule } from "../../pages/quote_POM"
import { loginclass } from "../../pages/login";

test("Quote Module",async ({page}) => {

     //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //creating quote
    await page.getByRole('link',{name:"More"}).first().click()
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:"Quotes"}).first().click()
    await page.getByRole('img',{name:"Create Quote..."}).click()
    await page.locator('//input[@name="subject"]').fill('NewProject')
    let prjt = await page.locator('//input[@name="subject"]').inputValue()
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:"Select"}).first().click()
    ])
    page2.once("dialog", (dialog) => {
    console.log(dialog.message());
    dialog.dismiss();
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
    if(prjt===valid){
        console.log("Quote is created");      
    }else{
        console.log("Quote is not created");
    }

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test.only("Quote Module POM",async ({page}) => {

    let signin = new loginclass(page)

    await signin.launchurl(login.url)
    await signin.details(login.username,login.password)

    let newquote = new QuoteModule(page)

    await newquote.clickQuote()
    await newquote.clickNewQuoteButton()
    await newquote.createNewQuote(quote.subjectName,quote.organizationName,quote.billAddress,
        quote.shipAddress,quote.productName,quote.itemQuantity)

    await newquote.signOut()
})