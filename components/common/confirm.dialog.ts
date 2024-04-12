import { Locator, Page } from "@playwright/test";

export default class ConfirmDialog {
    private parent: Locator;
    private readonly closeButton: Locator;
    private readonly message: Locator;

    private readonly actionConfirm: Locator;
    private readonly actionCancel: Locator;

    constructor(public readonly page: Page,
        parentLocator: Locator
    ) {

        this.parent = parentLocator;
        this.closeButton = parentLocator.locator(".el-message-box__header .el-message-box__close");
        this.message = parentLocator.locator(".el-message-box__content p");
        this.actionCancel = parentLocator.locator(".el-message-box__btns").getByText("取消");
        this.actionConfirm = parentLocator.locator(".el-message-box__btns").getByText("确定");
    }

    async confirm() {
        await this.actionConfirm.click();
    }
}