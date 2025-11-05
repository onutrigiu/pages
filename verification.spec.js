const { test, expect } = require('@playwright/test');

test('homepage', async ({ page }) => {
  await page.goto('file:///app/index.html');
  await page.screenshot({ path: '/home/jules/verification/index.png' });
});

test('quizexp', async ({ page }) => {
  await page.goto('file:///app/QuizExp.html');
  await page.screenshot({ path: '/home/jules/verification/QuizExp.png' });
});

test('quiznuthosp', async ({ page }) => {
  await page.goto('file:///app/QuizNutHosp.html');
  await page.screenshot({ path: '/home/jules/verification/QuizNutHosp.png' });
});
