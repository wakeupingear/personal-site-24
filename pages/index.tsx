import React from "react";
import ListDropdown from "~components/inputs/ListDropdown";
import Layout from "~components/misc/layout";

export default function index() {
    return (
        <Layout padSides gap className="lowercase">
            <section>
                <p>
                    I'm <b>Abby</b>
                </p>
                <p>
                    a <b>designer</b>, <b>engineer</b>, <b>entrepreneur</b>, and{" "}
                    <b>artist</b>
                </p>
                <p>
                    I build fun, pretty, and crazy things that are occasionally
                    useful
                </p>
                <p>plus some writing, speaking, acting, mixing, and sleeping</p>
                <div className="flex flex-col">
                    <p>Here's the highlights</p>
                    <ListDropdown
                        items={[
                            [
                                <>
                                    Built websites for <b>50 million+</b>{" "}
                                    Monthly Active Users
                                </>,
                                [<>bloomberg.com</>, <>thewerecleaner.co</>],
                            ],
                            <>
                                Shipped <b>10+ games</b> to Steam + Mobile + PC
                            </>,
                            <>
                                Prototyped <b>AI, ML, and XR software</b> for
                                NASA + USC ICT
                            </>,
                            <>
                                Wrote and spoke about <b>queer storytelling</b>{" "}
                                at GDC
                            </>,
                        ]}
                    />
                </div>
                <p>
                    reach me at <b>abbysfarhat at gmail</b>
                </p>
            </section>
        </Layout>
    );
}
