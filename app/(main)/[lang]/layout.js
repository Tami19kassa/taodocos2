// app/(main)/[lang]/layout.js - NEW, SIMPLIFIED VERSION

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'am' }];
}

// This layout no longer deals with fonts directly.
// It just creates the main html/body tags with the correct language.
export default async function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}