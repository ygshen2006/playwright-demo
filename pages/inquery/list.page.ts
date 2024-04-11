import { Page } from "@playwright/test";
import { BasePage } from "../base.page";
import InqueryOperationBar from "../../components/inquery/list.operation.bar";

export default class CCInqueryListPage extends BasePage{
    private readonly inquery = new InqueryOperationBar(this.page);
    constructor(public readonly page: Page){
        super(page);
    }

    async createNew(){
        await this.inquery.clickCreateNew();
    }
}