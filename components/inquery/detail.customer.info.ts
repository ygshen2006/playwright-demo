import { Locator, Page } from "@playwright/test";

export default class InqueryDetailCustomerInfo {
    // .consult-form-box .el-form-item__content
    //  .el-input__inner // the phone input
    // 查询

    private readonly content: Locator = this.page.locator(".consult-form-box .el-form-item__content");
    private readonly telephone: Locator = this.content.locator(".el-input__inner");
    private readonly searchButton: Locator = this.content.getByText("查询");

    constructor(public readonly page: Page){

    }

    async searchCustomer(phone){
        await this.telephone.fill(phone);
        await this.searchButton.click();
    }
}