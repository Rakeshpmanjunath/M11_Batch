import { expect } from "@playwright/test";

export class ProductModule
{
    constructor(page){
        this.page = page
        this.productLink = page.getByRole('link',{name:'Products'})
        this.newproductButton = page.getByRole('img',{name:'Create Product...'})
        this.productname = page.locator('//input[@name="productname"]')
        this.productsave = page.locator('(//input[@title="Save [Alt+S]"])[1]')
        this.verifyproduct = page.locator('//span[@id="dtlview_Product Name"]')
        this.usericon= page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.logoutbutton = page.locator('//img[@src="themes/softed/images/user.PNG"]')
    }

    async clickproductlink()
    {
        await this.productLink.click()
    }

    async clicknewproductbutton()
    {
        await this.newproductButton.click()
    }

    async createnewproduct(prodname)
    {
        await this.productname.fill(prodname)
        await this.productsave.click()
        await expect(this.verifyproduct).toContainText(prodname)
    }

    async singout()
    {
        await this.usericon.click()
        await this.logoutbutton.click()
    }

}