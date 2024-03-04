import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const { asPath } = useRouter();
    const isHome = asPath === "/";

    return (
        <footer className="mt-8 flex justify-end gap-4 md:mx-12 p-4 items-center text-2xl">
            {!isHome && (
                <Link href="/">
                    <FontAwesomeIcon icon={faBackward} />
                </Link>
            )}
            <SocialLinks />
        </footer>
    );
};

export default Footer;
