import { test as setup } from '@playwright/test'
const authFile = 'playwright/.auth/user.json';
setup('auth', async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 60000);
    await page.goto('https://github.com/login');
    await page.getByLabel('Username or email address').fill('ygshen2006@163.com');
    await page.getByLabel('Password').fill('LoveSlx@123');
    await page.locator('input[name="commit"]').click();
    await page.waitForURL('https://github.com/');
    await page.context().storageState({ path: authFile });
});