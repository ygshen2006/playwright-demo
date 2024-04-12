import { Locator, Page } from "@playwright/test";

export default class InqueryOperationBarComponent{
    private readonly toolbar: Locator = this.page.locator(".el-main .el-row");
    private readonly createNew: Locator = this.toolbar.getByText("新建新版本");

    constructor(public readonly page: Page){
    }

    async clickCreateNew(){
        await this.createNew.click();
    }
}