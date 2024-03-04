import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RESUME_SWE } from "src/constants";
import SocialLinks from "./SocialLinks";

const Header = () => {
    const { asPath } = useRouter();
    const isHome = asPath === "/";

    const [top, setTop] = useState(true);
    const [searching, setSearching] = useState(false);
    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header className={clsx("w-fit z-30 py-8 px-4 md:px-16 relative")}>
            <h1
                className={clsx("md:-mb-5", {
                    "text-[5rem]": isHome,
                    "text-4xl": !isHome,
                })}
            >
                abby farhat
            </h1>
            <div className="flex gap-4 items-center text-3xl">
                <SocialLinks />
                <Link
                    href={RESUME_SWE}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl sm:ml-auto"
                >
                    Resume
                </Link>
            </div>
        </header>
    );
};

export default Header;
