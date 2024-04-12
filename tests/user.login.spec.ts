import { test, expect } from '../fixtures/user/user.login.ts';
import CCInqueryListPage from '../pages/inquery/list.page.ts';
import HomePage from '../pages/home/home.page.ts';
import { SearchText } from '../settings/search.constants.ts';
import InqueryDetailPage from '../pages/inquery/detail.page.js';

test.describe("test login", () => {

    // test.beforeEach(async ({UserLoginPage})=>{

    // });
    test("Search parts", async ({ page, UserLoginPage }) => {
        // Login cc account
        const ccUserName = process.env.CC_USER_NAME ? process.env.CC_USER_NAME : "jcshen";
        const ccUserPassword = process.env.CC_USER_NAME ? process.env.CC_USER_NAME : "User@123";

        await UserLoginPage.login(ccUserName, ccUserPassword)

        const homePage = new HomePage(page);
        await homePage.search(SearchText.IQUERY_TICKET);

        const inqueryListPage = new CCInqueryListPage(page);
        await inqueryListPage.createNew();

        // customer detail
        const inqueryDetailPage = new InqueryDetailPage(page);
        await inqueryDetailPage.setCustomerInformation("18621276983", "John", "男");

        // product
        await inqueryDetailPage.chooseProduct("381503-04");

        // contract info
        await inqueryDetailPage.inputContractInfo({
            category: { first: "售后咨询（购买到产品）", second: "进度查询", third: "取件进度" },
            serviceType: "维修",
            channel: "电话",
            description: "描述",
            comment: "備注",
            related: "12"
        });

        // click next
        await inqueryDetailPage.next("下一步");

        // Click Ok
        await inqueryDetailPage.confirm();
    });
});