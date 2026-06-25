import { expect,test } from "@playwright/test";

// test('input box',async({page})=>{
//  await page.goto('https://demoqa.com/automation-practice-form', {
//     waitUntil: 'domcontentloaded'


//   });
//  await expect.soft( await page.locator("//input[@id='firstName']")).toBeVisible();

//  await expect.soft( await page.locator("//input[@id='firstName']")).toBeEmpty();
//  await expect.soft( await page.locator("//input[@id='firstName']")).toBeEditable();
//  await expect.soft( await page.locator("//input[@id='firstName']")).toBeEnabled();

//  await page.locator('//input[@id="firstName"]').fill("JOHN");


// })

test ('handle radio box',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/', {
  waitUntil: 'networkidle',
  timeout: 90000 // 60 seconds
});

//   await page.locator("//input[@id='gender-radio-1']").check();
  await page.locator('//input[@type="radio" and @value="male"]').check();

  await expect(page.locator('//input[@type="radio" and @value="male"]')).toBeChecked();

})