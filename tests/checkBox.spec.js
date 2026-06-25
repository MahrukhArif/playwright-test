import { expect, test } from "@playwright/test";
test('handle checkboxes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/', {
    waitUntil: 'networkidle',
    timeout: 90000 // 60 seconds
    });
await page.locator('//input[@type="checkbox" and @id="sunday"]').check();
await expect(page.locator('//input[@type="checkbox" and @id="sunday"]')).toBeChecked();

const checkboxLocators=['//input[@type="checkbox" and @id="sunday"]',
 '//input[@type="checkbox" and @id="monday"]',
 '//input[@type="checkbox" and @id="tuesday"]'];
 for(const checkBoxLocator of checkboxLocators )
 {
    await page.locator(checkBoxLocator).check();
 }
  for(const checkBoxLocator of checkboxLocators )

 {
    if(await page.locator(checkBoxLocator).isChecked())
    await page.locator(checkBoxLocator).uncheck();
 }
 await page.waitForTimeout(5000);

})