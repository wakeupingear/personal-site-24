import React from "react";
import PreviewLink from "~components/misc/preview-link";

interface RecentPostsProps {
    hrefs: string[];
}

export default function RecentPosts({ hrefs }: RecentPostsProps) {
    return (
        <div className="flex flex-col">
            <h2>Recent Posts</h2>
            <div className="flex gap-4 overflow-x-scroll pt-4 pb-6 pr-2">
                {hrefs.map((href) => (
                    <PreviewLink
                        key={href}
                        href={href}
                        containerClassName="group"
                        className="section-box !gap-4 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:shadow-xl section-box-interactive flex shrink-0"
                    />
                ))}
            </div>
        </div>
    );
}
