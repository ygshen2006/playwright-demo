import { Locator, Page } from "@playwright/test";
import InqueryCategorySelector from "../common/inquery.category.selector";
import DropListSelector from "../common/drop.list.selector";
import { type } from "os";

type categoryType = {
    first: string,
    second: string, 
    third: string
}
export type InqueryServiceDetail = {
    category: categoryType,
    serviceType: string,
    channel:string,
    description: string,
    comment: string,
    related: string
}
export default class InqueryDetailContractComponent{
    private readonly category: Locator = this.page.locator(".hk-consult-card form input[placeholder='请选择咨询分类']");
    private readonly description: Locator = this.page.locator(".hk-consult-card form textarea[placeholder='请输入客户描述']");
    private readonly comments: Locator = this.page.locator(".hk-consult-card form textarea[placeholder='请输入咨询备注']");
    private readonly realatedInquery: Locator = this.page.locator(".hk-consult-card form input[placeholder='请输入关联相关服务单']");
    private readonly bussinessType: Locator = this.page.locator(".hk-consult-card form input[placeholder='请选择业务类型']");
    private readonly channel: Locator = this.page.locator(".hk-consult-card form input[placeholder='请选择接入渠道']");
    
    private readonly categorySelector = new InqueryCategorySelector(this.page);
    private readonly dropListSelector = new DropListSelector(this.page);

    private readonly visibleDropDownSelectors = this.page.locator(".el-select-dropdown >> visible=true");
    constructor(public readonly page: Page){

    }

    async createNewRepairService(detail:InqueryServiceDetail){
        await this.category.click({force: true});

        await this.categorySelector.chooseMenu(0, detail.category.first);
        await this.categorySelector.chooseMenu(1, detail.category.second);
        await this.categorySelector.chooseMenu(2, detail.category.third);

        await this.bussinessType.click();
        await this.dropListSelector.select(this.visibleDropDownSelectors, detail.serviceType);
        await this.channel.click();
        await this.dropListSelector.select(this.visibleDropDownSelectors, detail.channel);

        await this.description.fill(detail.description);
        await this.comments.fill(detail.comment);
        await this.realatedInquery.fill(detail.related);
    }
}