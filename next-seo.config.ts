import { DefaultSeoProps } from "next-seo";

const description =
    "Hey! I'm Abby, a Designer, Engineer, Entrepreneur, and Artist. I build fun, pretty, and crazy things.";

const config: DefaultSeoProps = {
    titleTemplate: "%s | Abby Farhat",
    defaultTitle: "Abby Farhat",
    description,

    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Abby Farhat",
        description,
    },
    additionalLinkTags: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon/favicon-32x32.png",
            sizes: "32x32",
        },
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon/favicon-16x16.png",
            sizes: "16x16",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/favicon/apple-touch-icon.png",
        },
        {
            rel: "shortcut icon",
            type: "image/png",
            href: "/favicon/favicon.ico",
        },
        {
            rel: "manifest",
            href: "/favicon/site.webmanifest",
        },
    ],
};

export default config;
