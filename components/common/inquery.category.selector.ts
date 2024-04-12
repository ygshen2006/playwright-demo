import { Locator, Page } from "@playwright/test";

// todo: to do refact
export default class InqueryCategorySelector {
    private readonly content: Locator = this.page.locator("div .el-cascader-panel");
    private readonly menus: Locator = this.content.getByRole("menu");



    constructor(public readonly page: Page) {

    }

    async chooseMenu(index, text) {
        const selector = this.menus.nth(index).getByText(text);
        const l = await selector.all();
        if (l.length > 1) {
            await selector.nth(1).click();
        } else {
            await selector.nth(0).click();
        }
    }
}