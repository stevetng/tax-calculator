import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta property="og:title" content="2024 Presidential Tax Calculator" />
      <meta property="og:description" content="Calculate your tax implications based on the 2024 presidential candidates' tax plans." />
      <meta property="og:image" content="favicon.ico" />
      <meta property="og:url" content="https://tax-calculator-gilt.vercel.app/" />
      <meta property="og:type" content="website" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
