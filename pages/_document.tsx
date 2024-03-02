import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-main-gradient">
                <div id="bg-grid" className="pointer-events-none" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
