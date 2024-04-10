import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "~components/misc/layout";

const IMG_SIZE = 278;

export default function NotFound() {
    return (
        <Layout centered gap className="lowercase">
            <h1 className="text-5xl">Page Not Found</h1>
            <Link href="/">
                <Image
                    alt="thanus fork knife"
                    src="/assets/thanos.gif"
                    width={IMG_SIZE}
                    height={IMG_SIZE}
                    className="border z-0"
                />
            </Link>
            <p
                style={{
                    width: IMG_SIZE,
                }}
            >
                Click on Thanos to snap back to reality!!!!!1!!111!
            </p>
        </Layout>
    );
}
