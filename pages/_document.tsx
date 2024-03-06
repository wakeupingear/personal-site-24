import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-main-gradient">
                <div className="bg-main-gradient fixed top-0 left-0 w-screen h-screen -z-10" />
                <div id="bg-grid" className="pointer-events-none" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
