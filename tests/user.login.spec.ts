import { test, expect } from '../fixtures/user/user.login';
import CCInqueryListPage from '../pages/ccinquery/list.page';
import HomePage from '../pages/home/home.page';
import { SearchText } from '../settings/search.constants';

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