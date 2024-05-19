import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
      <title>2024 Presidential Tax Calculator</title>
      <meta property="og:title" content="2024 Presidential Tax Calculator" />
      <meta property="og:description" content="Which president will tax me more?" />
      <meta property="description" content="Which president will tax me more?" />
      <meta property="og:image" content="https://tax-calculator-gilt.vercel.app/preview.png" />
      <meta property="og:url" content="https://tax-calculator-gilt.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="twitter:image" content="https://tax-calculator-gilt.vercel.app/preview.png"></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:title" content="2024 Presidential Tax Calculator"></meta>
      <meta property="twitter:description" content="Which president will tax me more?"></meta>
      </head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
