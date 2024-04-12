import { Page } from "@playwright/test";
import InqueryDetailCustomerInfoComponent from "../../components/inquery/detail.customer.info";
import { BasePage } from "../base.page";
import InqueryDetailProductListComponent from "../../components/inquery/detail.product.list";
import InqueryDetailContractComponent, { InqueryServiceDetail } from "../../components/inquery/detail.contract.detail";
import InqueryOperationBarComponent from "../../components/inquery/list.operation.bar";
import InqueryDetailOperationBar from "../../components/inquery/detail.operation.bar";
import ConfirmDialog from "../../components/common/confirm.dialog";

export default class InqueryDetailPage extends BasePage {
    private readonly customerDetailPanel: InqueryDetailCustomerInfoComponent = new InqueryDetailCustomerInfoComponent(this.page);
    private readonly productList: InqueryDetailProductListComponent = new InqueryDetailProductListComponent(this.page);
    private readonly contractDetail: InqueryDetailContractComponent = new InqueryDetailContractComponent(this.page);
    private readonly actionBar: InqueryDetailOperationBar = new InqueryDetailOperationBar(this.page);

    private confirmDialog: ConfirmDialog;
    constructor(public readonly page: Page) {
        super(page);
    }

    async setCustomerInformation(phone, name, gender) {
        await this.customerDetailPanel.searchCustomer(phone, name, gender);
    }

    async chooseProduct(skuCode) {
        await this.productList.chooseItem(skuCode);
    }

    async inputContractInfo(service: InqueryServiceDetail) {
        await this.contractDetail.createNewRepairService(service);
    }

    async next(text) {
        await this.actionBar.clickButton(text);
    }
    async confirm() {
        const parent = this.page.locator("div.el-message-box__wrapper >> visible=true");
        this.confirmDialog = new ConfirmDialog(this.page, parent);
        await this.confirmDialog.confirm();
    }
}