import { expect } from "@playwright/test"

export class organization{
    constructor(page){
        this.page = page
        this.orglink = page.getByRole('link',{name:'ORGANIZATIONS'})
        this.createneworg = page.getByRole('img',{name:'Create Organization...'})
        this.orgname = page.locator('(//input[@class="detailedViewTextBox"])[1]')
        this.saveButton = page.locator('(//input[@title="Save [Alt+S]"])[1]')
        this.verifyorgname = page.locator('//span[@id="dtlview_Organization Name"]')
        this.signoutrhover = page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.logout = page.locator('//a[text()="Sign Out"]')

    }
    async clickOrg() {
        await this.orglink.click();
    }

    async clickCreateOrg() {
        await this.createneworg.click();
    } 

    async createOrganization(orgname){
            await this.orgname.fill(orgname);
            await this.saveButton.click();
            await expect(this.verifyorgname).toContainText(orgname);
    }

    async singout(){
        await this.signoutrhover.hover()
        await this.logout.click()
    }
}