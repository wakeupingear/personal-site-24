import React from "react";
import Footer from "./footer";
import Header from "./header";
import clsx from "clsx";

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
                className
            )}
        >
            <Header />
            <main
                className={clsx("grow flex flex-col", {
                    "px-16": padSides,
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
