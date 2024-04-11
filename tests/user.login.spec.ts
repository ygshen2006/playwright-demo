import { test, expect } from '../fixtures/user/user.login';
test.describe("test login", () => {

    test("login with username and password", async ({ UserLoginPage }) => {
        await UserLoginPage.login("jcshen", "User@123")
    });
});