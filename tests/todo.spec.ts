import { test, expect } from '../fixtures/todo-page-test.ts'
test.describe("BVT test cases", () => {
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


});

test.describe.skip("github test cases", ()=>{
    test("test login", async ({page})=>{
        await page.goto("https://github.com");
        console.log("test")
    })
});

test.describe.skip("CSRM test",()=>{
    test("test login",async ({page}) => {
        await page.goto("https://cncsrmsit.dyson.cn/#/dashboard");
    })
});