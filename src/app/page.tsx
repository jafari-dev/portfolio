// Redirect the bare root "/" to the default locale
export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <title>Ahmad Jafari</title>
      </head>
      <body>
        <a href="/en/">Click here if not redirected automatically.</a>
      </body>
    </html>
  );
}
