import { NextResponse } from 'next/server'

const locales = ['en', 'am']

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
    // You can implement your own logic here to determine the locale.
    // For example, you can use a library like `accept-language`
    // to parse the `Accept-Language` header.
    // For this example, we'll just use the first locale in the list.
    return 'en'
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return Response.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}