import {test, expect} from '@playwright/test'

test('locating multiple web elements',async({page})=>{

 await page.goto('https://www.saucedemo.com/');
 await page.locator('#user-name').fill("standard_user");
 await page.locator('#password').fill("secret_sauce");
 await page.locator('#login-button').click();
    
 const allLinks=await page.$$('a');
 for(const link of allLinks)
 {
   const text=await link.textContent();
   console.log(text);
 }
 const allProductName=page.$$("//div[@id='inventory_container']//div/a");
 for(const product of allProductName)
 {
   const text=await product.textContent();
   console.log(text);
 }
 

})

