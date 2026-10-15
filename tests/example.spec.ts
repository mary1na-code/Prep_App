import { expect, test } from '@playwright/test'

test('landing page links to signup and login', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: /make every study session count/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '/signup')
    await expect(page.getByRole('link', { name: /log in/i }).first()).toHaveAttribute('href', '/login')
})

test('signup page is reachable from the landing page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /get started/i }).click()

    await expect(page).toHaveURL(/\/signup$/)
    await expect(page.getByRole('heading', { name: /create your account/i })).toBeVisible()
})

test('unauthenticated visitors are redirected away from the quiz', async ({ page }) => {
    await page.goto('/app')

    await expect(page).toHaveURL(/\/login$/)
    await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible()
})

test('recovery callback at the home path opens password creation', async ({ page }) => {
    await page.route('**/auth/v1/user', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                id: '020b5a2e-8b69-47dd-b505-d628e49c939d',
                aud: 'authenticated',
                role: 'authenticated',
                email: 'reset@example.com',
                app_metadata: { provider: 'email', providers: ['email'] },
                user_metadata: {},
                created_at: '2026-01-01T00:00:00.000Z',
            }),
        })
    })

    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url')
    const payload = Buffer.from(JSON.stringify({
        sub: '020b5a2e-8b69-47dd-b505-d628e49c939d',
        aud: 'authenticated',
        exp: Math.floor(Date.now() / 1000) + 3600,
    })).toString('base64url')
    const recoveryHash = new URLSearchParams({
        access_token: `${header}.${payload}.test-signature`,
        refresh_token: 'test-refresh-token',
        expires_in: '3600',
        token_type: 'bearer',
        type: 'recovery',
    })

    await page.goto(`/#${recoveryHash.toString()}`)

    await expect(page).toHaveURL(/\/forgot-password$/)
    await expect(page.getByRole('heading', { name: /create a new password/i })).toBeVisible()
    await expect(page.getByLabel('New password')).toBeVisible()
    await expect(page.getByLabel('Confirm password')).toBeVisible()
})