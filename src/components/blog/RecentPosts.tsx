import React from "react";
import PreviewLink from "~components/misc/preview-link";

interface RecentPostsProps {
    hrefs: string[];
}

export default function RecentPosts({ hrefs }: RecentPostsProps) {
    return (
        <div className="flex flex-col overflow-visible">
            <h2>Recent Posts</h2>
            <div className="flex gap-4 overflow-x-scroll pt-4 pb-12 pr-2 overflow-visible">
                {hrefs.map((href) => (
                    <PreviewLink
                        key={href}
                        href={href}
                        className="section-box !gap-4 hover:-translate-y-2 hover:translate-x-2 hover:shadow-xl section-box-interactive flex shrink-0"
                    />
                ))}
            </div>
        </div>
    );
}
