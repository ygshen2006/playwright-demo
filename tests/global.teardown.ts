import { test as teardown } from '@playwright/test'
teardown('tear down', async () => {
    console.log("teardown running")
});