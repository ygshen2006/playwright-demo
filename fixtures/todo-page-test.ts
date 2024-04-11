import { test as base } from "@playwright/test"
import { ToDoPage } from "../pages/ToDoPage.ts"

type MyFixture = {
    toDoPage: ToDoPage
}
const test = base.extend<MyFixture>({
    toDoPage: async ({ baseURL, page }, use) => {
        const todoPage = new ToDoPage(page);
        await todoPage.goto(baseURL);

        await use(todoPage);
    }
});
test.use({ baseURL: "https://demo.playwright.dev/todomvc/#/" });
export { test }
export { expect } from '@playwright/test';