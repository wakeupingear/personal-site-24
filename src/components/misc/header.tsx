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
        <header
            className={clsx(
                "w-fit z-30 pt-8 px-4 md:px-16 relative child:duration-300"
            )}
        >
            <h3
                className={clsx("transition-all mb-0 leading-normal", {
                    "md:-mb-5 text-[5rem]": isHome,
                    "text-2xl": !isHome,
                })}
            >
                abby farhat
            </h3>
            <div
                className={clsx(
                    "flex gap-4 items-center lowercase transition-all",
                    {
                        "text-3xl": isHome,
                        "text-sm": !isHome,
                    }
                )}
            >
                <SocialLinks />
                <Link
                    href={RESUME_SWE}
                    target="_blank"
                    rel="noreferrer"
                    className={clsx("transition-all duration-500 sm:ml-auto", {
                        "text-2xl": isHome,
                    })}
                >
                    Resume
                </Link>
            </div>
        </header>
    );
};

export default Header;
