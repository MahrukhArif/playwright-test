import { expect,test } from "@playwright/test";
test('handle dropdown',async({page})=>{
    page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await page.locator('.product_sort_container').selectOption({value: 'lohi'});

    const alloptions=await page.locator('.product_sort_container option');
    await expect(alloptions).toHaveCount(4);

    const optionsArray=await page.$$('.product_sort_container option');
    // for(const option in optionsArray){
    //   console.log( await option.textContent());
    // }
    // console.log(optionsArray.length);

    await page.waitForTimeout(5000);

})