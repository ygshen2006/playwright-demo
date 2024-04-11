import {UserNameLoginPage} from "../../pages/user/user.name.login"
import { test as base } from "@playwright/test"

type Login = {
    UserLoginPage: UserNameLoginPage
};


const test = base.extend<Login>({
    UserLoginPage: async ({ baseURL, page }, use) => {
        const loginPage = new UserNameLoginPage(page);
        await loginPage.goto(baseURL);
        await use(loginPage);
    }
});
test.use({ baseURL: "https://cncsrmsit.dyson.cn/" });
export { test }
export { expect } from '@playwright/test';