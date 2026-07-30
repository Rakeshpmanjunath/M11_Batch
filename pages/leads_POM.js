import { expect } from "@playwright/test";

export class LeadsPage{
    constructor(page){
        this.page = page;

        this.leadsLink = page.getByRole('link',{name:'Leads'})
        this.createnewLead = page.getByRole('img',{name:'Create Lead...'})

        this.salutation = page.locator('//select[@name="salutationtype"]')
        this.firstName = page.locator('//input[@name="firstname"]')
        this.lastName = page.locator('//input[@name="lastname"]')
        this.company = page.locator('//input[@name="company"]')
        this.saveButton = page.locator('(//input[@title="Save [Alt+S]"])[1]')
        this.verifylastname = page.locator('//span[@id="dtlview_Last Name"]')
        this.signoutrhover = page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.logout = page.locator('//a[text()="Sign Out"]')
    }
    async clickLeads() {
        await this.leadsLink.click();
    }

    async clickCreateLead() {
        await this.createnewLead.click();
    }

    async createLead(firstname, lastname, company) {

        await this.salutation.selectOption({ value: 'Ms.' });
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.company.fill(company);
        await this.saveButton.click();
        await expect(this.verifylastname).toContainText(lastname);

    }

    async signout() {
        await this.signoutrhover.hover()
        await this.logout.click()
    }
}