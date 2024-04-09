import { test as base } from '@playwright/test'

type Account = {
    username: string,
    password: string
}
const test = base.extend<{}, { account: Account }>({
    account: [async ({ browser }, use, workerInfo) => {
        const username = "ygshen2006";
        const password = "password";
        const page = await browser.newPage();
        await page.goto("https://mail.163.com/signup")
        await page.getByPlaceholder("邮箱账号或手机号码").fill(username);
        await page.getByPlaceholder("输入密码").fill(password);
        await page.locator("#doreg").click();

        await use({ username, password })
    }, { scope: 'worker' }],

    page: async ({ page, account }, use) => {
        await page.goto('https://mail.163.com/signin');
        await page.locator('#username').fill(account.username);
        await page.locator('#password').fill(account.password);
        await page.locator("#doreg").click();
        await use(page);
    }
});

export { test }
export { expect } from '@playwright/test'