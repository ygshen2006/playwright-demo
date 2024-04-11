import { test, expect } from '../fixtures/user/user.login.ts';
import CCInqueryListPage from '../pages/inquery/list.page.ts';
import HomePage from '../pages/home/home.page.ts';
import { SearchText } from '../settings/search.constants.ts';

test.describe("test login", () => {

    test.beforeEach(async ({UserLoginPage})=>{
        await UserLoginPage.login("jcshen", "User@123")
    });
    test("Search parts", async ({ page }) => {
       const homePage = new HomePage(page);
       await homePage.search(SearchText.IQUERY_TICKET);

       const inqueryListPage = new CCInqueryListPage(page);
       await inqueryListPage.createNew();

    });
});