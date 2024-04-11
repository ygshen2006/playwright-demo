import { Page } from "@playwright/test";

export class BasePage {
    constructor(public readonly page: Page) {
        
    }
    async goto(url) {
        await this.page.goto(url);
    }
    async goBack() {
        await this.page.goBack();
    }
}