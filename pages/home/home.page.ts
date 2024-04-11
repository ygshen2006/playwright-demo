import { Page } from "@playwright/test";
import TopBar from "../../components/home/top.bar.ts";
import { BasePage } from "../base.page.ts";
import { SearchText } from "../../settings/search.constants.ts";

export default class HomePage extends BasePage{
    private readonly topBar: TopBar = new TopBar(this.page);
    constructor(page: Page){
        super(page);
    }

    async search(search: SearchText){
        const text = search.split(" > ")[1];
        await this.topBar.search(text, search);
    }
}