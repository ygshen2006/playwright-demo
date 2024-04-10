import { test as setup } from '@playwright/test'
const authFile = 'playwright/.auth/csrm.json';
setup('auth', async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 60000);
    await page.goto('https://xs/#/login?redirect=%2Fdashboard');
    await page.locator('#tab-0').click();
    await page.locator('#pane-0 [name="username"]').fill("jcshen");
    await page.locator('#pane-0 [name="password"]').fill("@123");
    await page.locator('#pane-0 .el-button--primary').click();
    
    await page.waitForURL('https://xs/#/dashboard');
    await page.context().storageState({ path: authFile });
});