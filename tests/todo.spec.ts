import { test, expect } from '../fixtures/todo-page-test'
import { ToDoPage } from '../pages/ToDoPage';
import { todo } from 'node:test';
test.describe.skip("BVT test cases", () => {
    test.beforeAll(async () => {
        console.log("test");
    })
    test("basic test", { tag: "@BVT" },
        async ({ toDoPage, page }, testInfo) => {
            await toDoPage.addItem("test");
            await toDoPage.addItem("test");
            await toDoPage.removeAllItems();
            console.log("test")
        });

    test("basic test2", { tag: "@BVT" },
        async ({ toDoPage, page }, testInfo) => {
            await toDoPage.addItem("test2");
            await toDoPage.addItem("test2");
            await toDoPage.removeAllItems();
            console.log("test")
        });
});

test.describe("github test cases", ()=>{

    test("test login", async ({page})=>{
        await page.goto("https://github.com");
        console.log("test")
    })
});