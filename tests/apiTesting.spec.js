const { test, expect } = require('@playwright/test');
test('Get API Request', async ({ request }) => {
  const response = await request.get('https://gorest.in/public/v2/users');
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.length).toBeGreaterThan(0);
  //console.log(responseBody)
});

//post
test('Post Request', async ({ request }) => {
  const response = await request.post('https://gorest.in/public/v2/users', {
    headers: {
      'Authorization': 'Bearer demo-token',
      'Content-Type': 'application/json'
    },
    data: {
      name: 'Shaibaz Arkate',
      email: `shaibaz${Date.now()}@example.com`,
      gender: 'male',
      status: 'active'
    }
  });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
});