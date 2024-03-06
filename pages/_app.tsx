import "../src/styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <LazyMotion features={domAnimation} strict>
                <AnimatePresence
                    mode="wait"
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
            </LazyMotion>
        </>
    );
}
