import { Locator, Page } from "playwright-core";
import { BasePage } from "../base.page.ts";

export class UserNameLoginPage extends BasePage{
    private readonly tab: Locator = this.page.locator('#tab-0');
    private readonly userNameField: Locator = this.page.locator('#pane-0 [name="username"]');
    private readonly passwordField: Locator = this.page.locator('#pane-0 [name="password"]');
    private readonly loginButton: Locator = this.page.locator('#pane-0 .el-button--primary');

    constructor(page: Page) {
        super(page);
    }
    async login(userName, password) {
        await this.tab.click();

        await this.userNameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}