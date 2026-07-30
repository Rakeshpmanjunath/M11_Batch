import { expect } from "@playwright/test";

export class Opportunity {

    constructor(page) {

        this.page = page;

        this.opportunityLink = page.getByRole('link', { name: 'Opportunities' });
        this.newOpportunityButton = page.getByRole('img', { name: 'Create Opportunity...' });
        this.opportunityName = page.locator('(//input[@class="detailedViewTextBox"])[1]');
        this.selectOrganization = page.getByRole('img', { name: 'Select' }).first();
        this.saveButton = page.locator('(//input[@title="Save [Alt+S]"])[1]');
        this.verifyOpportunity = page.locator('//span[@id="dtlview_Opportunity Name"]');
        this.userIcon = page.locator('//img[@src="themes/softed/images/user.PNG"]');
        this.signOutLink = page.locator('//a[text()="Sign Out"]');
    }

    async clickOpportunity() {
        await this.opportunityLink.click();
    }

    async clickCreateOpportunity() {
        await this.newOpportunityButton.click();
    }

    async createOpportunity(opportunityName, organizationName) {

        await this.opportunityName.fill(opportunityName);

        let [page2] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.selectOrganization.click()
        ]);

        await page2.getByRole('link', { name: organizationName }).click();

        await this.saveButton.click();

        await expect(this.verifyOpportunity).toContainText(opportunityName);
    }

    async signOut() {
        await this.userIcon.hover();
        await this.signOutLink.click();
    }
}