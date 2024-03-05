import React from "react";
import Author from "../../../interfaces/author";
import Backlinks from "../misc/backlinks";
import PostBody from "./post-body";
import PostMeta from "./post-meta";

type Props = {
    title: string;
    content: string;
    date?: string;
    author?: Author;
    backlinks: {
        [k: string]: {
            title: string;
            excerpt: string;
        };
    };
};

function PostSingle({ title, date, author, content, backlinks }: Props) {
    return (
        <article className="flex flex-col gap-0">
            <header className="max-w-3xl">
                <h1 className="text-[5rem] leading-tight">{title}</h1>
                {(author || date) && (
                    <>
                        <PostMeta author={author} date={date} />
                        <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />
                    </>
                )}
            </header>
            <div className="flex section-box">
                <PostBody content={content} className="max-w-5xl" />
                <div className="h-full w-32 bg-black"></div>
            </div>
        </article>
    );

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto lg:max-w-none">
                    <article>
                        {/* Article header */}
                        <header className="max-w-3xl mx-auto mb-20">
                            {/* Title */}
                            <h1 className="h1 text-center mb-4 text-6xl">
                                {title}
                            </h1>
                        </header>

                        {/* Article content */}
                        <div
                            className="lg:flex lg:justify-between"
                            data-sticky-container
                        >
                            {/* Main content */}
                            <div>
                                {/* Article meta */}
                                {(author || date) && (
                                    <>
                                        <PostMeta author={author} date={date} />
                                        <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />
                                    </>
                                )}

                                {/* Article body */}
                                <PostBody content={content} />
                            </div>

                            {/* Sidebar */}
                            <hr className="my-10 border border-dashed lg:block" />
                            <aside className="relative lg:block lg:w-72 lg:ml-20 shrink-0">
                                <div className="sticky top-32">
                                    <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">
                                        Backlinks
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                        {Object.keys(backlinks).length > 0 && (
                                            <Backlinks backlinks={backlinks} />
                                        )}
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* Article footer */}
                    </article>
                </div>
            </div>
        </div>
    );
}

export default PostSingle;
