import { Locator, Page } from "@playwright/test";

export default class InqueryDetailOperationBar {
    private readonly bottomContent: Locator = this.page.locator("div.bottom-btn-box");

    constructor(public readonly page: Page) {

    }

    async clickButton(text){
        await this.bottomContent.getByText(text).click();
    }
}