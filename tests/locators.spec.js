import { test, expect } from '@playwright/test';

test('locators test',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    // await page.locator('id=login2').click();
    // await page.locator('#loginusername').fill("abcd");
    // await page.locator('#loginpassword').fill("12345");

    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    // page.close();
    // const allLinks = await page.$$('a');
    // for(const link of allLinks)
    // {
    //     const text = await link.textContent();
    //     console.log(text);
    // }








})
