import { Locator, Page } from "@playwright/test";

export default class InqueryDetailProductListComponent{
    private readonly productContents: Locator = this.page.locator(".product-content-box")
    constructor(public readonly page: Page){

    }
    async chooseItem(skuCode){
        const item = this.productContents.locator(`.item-box:has-text("${skuCode}")`);
        await item.locator("input").click({force:true});
        // assert the details   
    }
}