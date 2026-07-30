import { expect } from "@playwright/test";

export class QuoteModule{
    constructor(page){
        this.page = page
        this.morelink = page.getByRole('link',{name:"More"}).first()
        this.quotelink = page.getByRole('link',{name:"Quotes"}).first()
        this.newquotebutton = page.getByRole('img',{name:"Create Quote..."})
        this.subname = page.locator('//input[@name="subject"]')
        this.selectorg = page.getByRole('img',{name:"Select"}).first()
        this.billadd = page.locator('//textarea[@name="bill_street"]')
        this.shipadd = page.locator('//textarea[@name="ship_street"]')
        this.selectitem = page.locator('//img[@id="searchIcon1"]')
        this.itemqty = page.locator('//input[@id="qty1"]')
        this.savequote = page.locator('(//input[@title="Save [Alt+S]"])[1]')
        this.verifyquote = page.locator('//span[@id="dtlview_Subject"]')
        this.userIcon = page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.logoutbutton = page.locator('//a[text()="Sign Out"]') 
    }

    async clickQuote()
    {
        await this.morelink.click()
        await this.quotelink.click()
    }

    async clickNewQuoteButton()
    {
        await this.newquotebutton.click()
    }

    async createNewQuote(subjectName,organizationName,billAddress,shipAddress,productName,itemQuantity)
    {
        await this.subname.fill(subjectName)
        const [page2] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.selectorg.click()
    ])
    page2.once("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page2.getByRole('link',{name:organizationName}).first().click()

    const [page3] =  await Promise.all([

        this.page.waitForEvent('popup'),
        this.selectitem.click()
    ])
    await this.billadd.fill(billAddress)
    await this.shipadd.fill(shipAddress)
    await page3.getByRole('link',{name:productName}).first().click()
    await this.itemqty.fill(itemQuantity)
    await this.savequote.click()
    await expect(this.verifyquote).toContainText(subjectName)
    
}

    async signOut(){
        await this.userIcon.hover()
        await this.logoutbutton.click()
    }
}

