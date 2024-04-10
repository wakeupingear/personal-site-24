import React from "react";
import Footer from "./footer";
import Header from "./header";
import clsx from "clsx";
import { Josefin_Sans, Lato } from "next/font/google";
import { m } from "framer-motion";
import { useRouter } from "next/router";

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
    centered?: boolean;
    padSides?: boolean;
    gap?: boolean;
    className?: string;
    isSection?: boolean;
};

const Layout = ({
    children,
    centered = false,
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
                className={clsx("mt-8 grow", {
                    "px-4 md:px-16": padSides,
                    "flex flex-col items-center justify-center": centered,
                })}
            >
                <m.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={clsx("flex flex-col", {
                        "gap-8": gap,
                    })}
                >
                    {isSection ? <section>{children}</section> : children}
                </m.div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
