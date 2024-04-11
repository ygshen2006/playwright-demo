import { Locator, Page } from "@playwright/test";

export default class TopBar{
    // collapse .fixed-header .hamburger-container
    // search button: .fixed-header #header-search
    // input text: .fixed-header .el-input__inner
    // dropdown items: .el-select-dropdown ul

    private readonly toggleButton: Locator = this.page.locator(".fixed-header .hamburger-container");
    private readonly searchButton: Locator = this.page.locator(".fixed-header #header-search");
    private readonly inputTextBox: Locator = this.page.locator(".fixed-header .el-input__inner");
    private readonly dropDownLists: Locator = this.page.locator(".el-select-dropdown ul");

    constructor(public readonly page: Page){
        
    }

    async search(text){
        await this.toggleButton.click();
        await this.searchButton.click();
        await this.inputTextBox.fill(text);
        debugger
    }
}