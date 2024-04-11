import HomePage from "../../pages/home/home.page";
import { test as base } from "@playwright/test"

type Home = {
    HomePage: HomePage
};


const test = base.extend<Home>({
    HomePage: async ({ baseURL, page }, use) => {
        const loginPage = new HomePage(page);
        await use(loginPage);
    }
});
export { test }
export { expect } from '@playwright/test';