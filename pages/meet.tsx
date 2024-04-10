import React from "react";
import { InlineWidget } from "react-calendly";
import Layout from "~components/misc/layout";

export default function meet() {
    return (
        <Layout padSides>
            <div className="rounded-xl overflow-hidden">
                <InlineWidget
                    url="https://calendly.com/abbysfarhat"
                    iframeTitle="Schedule a meeting with Abby Farhat"
                />
            </div>
        </Layout>
    );
}
