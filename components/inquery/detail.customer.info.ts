import { Locator, Page, expect } from "@playwright/test";

export default class InqueryDetailCustomerInfoComponent {
    // .consult-form-box .el-form-item__content
    //  .el-input__inner // the phone input
    // 查询

    private readonly content: Locator = this.page.locator(".consult-form-box .el-form-item__content");
    private readonly displayContent: Locator = this.page.locator(".el-card .content-box");
    private readonly telephone: Locator = this.content.locator(".el-input__inner");
    private readonly searchButton: Locator = this.content.getByText("查询");
    private phoneLabel: Locator;
    private nameLabel: Locator;
    private genderLabel: Locator;

    constructor(public readonly page: Page) {

    }

    async searchCustomer(phone, name, gender) {
        await this.telephone.fill(phone);
        await this.searchButton.click();

        // do assert
        this.phoneLabel = this.displayContent.getByText(phone);
        await expect(this.phoneLabel).toBeVisible();

        this.nameLabel = this.displayContent.getByText(name);
        await expect(this.nameLabel).toBeVisible();


        this.genderLabel = this.displayContent.getByText(gender);
        await expect(this.genderLabel).toBeVisible();
    }
}