import { Locator, Page } from "@playwright/test";

export default class DropListSelector{

    constructor(public readonly page: Page){

    }
    async select(parent:Locator, item: string){
        await parent.locator("ul").getByText(item).click();
    }
}