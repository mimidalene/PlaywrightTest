const {test} = require('@playwright/test');



test.only('Browser Context Playwright test', async ({browser}) =>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.kreditafrica.com/");

});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    
    
});
