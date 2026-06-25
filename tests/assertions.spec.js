import {test, expect} from '@playwright/test'
test('assertions',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logo=page.locator('.header-logo');
    await expect(logo).toBeVisible();
    const searchBox= page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();
    const genderMale=await page.locator('#gender-male');
    genderMale.click();
    await expect(genderMale).toBeChecked();
    const newscheckeBox= await page.locator('#Newsletter');
    await expect(newscheckeBox).toBeChecked();
    const registerButton= await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type','submit');
    const matchText=await page.locator('.page-title h1');
    expect(matchText).toHaveText('Register');
    expect(matchText).toContainText('Reg');
    const emailInput=await page.locator('#Email');
    await emailInput.fill("test@demo.com");
    expect(emailInput).toHaveValue('test@demo.com');









});