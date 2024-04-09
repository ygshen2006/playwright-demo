import { Locator, Page } from "playwright-core";

export class ToDoPage {
    private readonly toDoItemTextLocator: Locator;
    private readonly toDoListLocator: Locator;

    constructor(public readonly page: Page) {
        this.toDoItemTextLocator = page.locator(".new-todo");
        this.toDoListLocator = page.locator("ul.todo-list li");
    }

    async goto(url) {
        await this.page.goto(url);
    }
    async addItem(title: string) {
        await this.toDoItemTextLocator.fill(title);
        await this.toDoItemTextLocator.press("Enter");
    }

    async removeItem(title: string) {
        const toRemovedItems: Locator = this.toDoListLocator.filter({ hasText: title });
        let locators = await toRemovedItems.all();
        while (locators.length > 0) {
            locators[0].hover();
            await locators[0].locator('.destroy').click();
            locators = await toRemovedItems.all()
        }
    }

    async removeAllItems() {
        let count = await this.toDoListLocator.count();
        while (count > 0) {
            await this.toDoListLocator.first().hover();
            await this.toDoListLocator.locator('.destroy').first().click();
            count = await this.toDoListLocator.count();
        }
    }
}