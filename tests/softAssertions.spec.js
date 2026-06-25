import {expect,test} from '@playwright/test'

test('soft assertions',async({page})=>{
    page.goto('https://www.saucedemo.com/');
   await expect.soft(page).toHaveURL('https://www.saucedemo.com/');
   await expect.soft(page).toHaveTitle('Swag Lbs');
   const submitBtn=await page.getByRole('button',{type:'submit'});
   await expect.soft(submitBtn).toBeVisible();



})




