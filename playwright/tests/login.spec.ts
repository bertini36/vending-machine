import {test, expect} from '@playwright/test';

test('login', async ({page}) => {
    await page.goto('http://localhost:3000');
    const input = page.locator('input');
    await input.type('magic');
    const button = page.locator('#login-button');

    expect(input).toHaveAttribute('placeholder', 'Username');
    expect(await input.inputValue()).toBe('magic');
    expect(await button.textContent()).toBe('Login');

    await button.click();

    const pageTitle = page.locator('h1');
    expect(await pageTitle.textContent()).toBe('🍺 ABACUM VENDING MACHINE 🍺');
});