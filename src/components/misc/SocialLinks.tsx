import {
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import {
    GITHUB_PROFILE,
    INSTAGRAM_PROFILE,
    LINKEDIN_PROFILE,
} from "src/constants";

export default function SocialLinks() {
    return (
        <>
            <Link href={INSTAGRAM_PROFILE} target="_blank" rel="author">
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href={GITHUB_PROFILE} target="_blank" rel="author">
                <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href={LINKEDIN_PROFILE} target="_blank" rel="author">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
        </>
    );
}
