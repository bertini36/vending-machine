import {test, expect} from '@playwright/test';

test('vending-machine', async ({page}) => {
    await page.goto('http://localhost:3000');
    const input = page.locator('input');
    await input.type('magic');
    const button = page.locator('#login-button');
    await button.click();

    const pageTitle = page.locator('h1');
    expect(await pageTitle.textContent()).toBe('🍺 ABACUM VENDING MACHINE 🍺');

    const p = page.locator('#welcome-message');
    expect(await p.textContent()).toBe('Hey Fernando Alonso! Let\'s drink something!');
});