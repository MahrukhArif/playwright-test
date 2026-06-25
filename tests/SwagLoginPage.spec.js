import {test,expect} from '@playwright/test'
test('login with valid credentials',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);


    

})


test('login with invalid username',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("invalid_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');

    await page.waitForTimeout(5000);  

})
test('login with valid username and invalid password',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("valid_user");
    await page.locator('#password').fill("invalid_password");
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');

    await page.waitForTimeout(5000);  

})

test('login with empty username and empty password',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("");
    await page.locator('#password').fill("");
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');

    await page.waitForTimeout(5000);  

})

test('login with valid username and empty password',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("");
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');

    await page.waitForTimeout(5000);  

})


