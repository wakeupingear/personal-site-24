import React from "react";
import Footer from "./footer";
import Header from "./header";
import clsx from "clsx";
import { Josefin_Sans, Lato } from "next/font/google";

const headerFont = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-header",
});
const textFont = Lato({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "300", "400", "700"],
    variable: "--font-text",
});

type Props = {
    children: React.ReactNode;
    padSides?: boolean;
    gap?: boolean;
    className?: string;
    isSection?: boolean;
};

const Layout = ({
    children,
    padSides = false,
    gap = false,
    className,
    isSection,
}: Props) => {
    return (
        <div
            className={clsx(
                "flex flex-col min-h-screen overflow-hidden",
                className,
                headerFont.variable,
                textFont.variable
            )}
        >
            <Header />
            <main
                className={clsx("grow flex flex-col", {
                    "px-4 md:px-16": padSides,
                    "gap-8": gap,
                })}
            >
                {isSection ? <section>{children}</section> : children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
