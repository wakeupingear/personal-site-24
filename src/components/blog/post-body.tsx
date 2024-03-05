import clsx from "clsx";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
    content: string;
    className?: string;
};

const PostBody = ({ content, className }: Props) => {
    return (
        <div
            className={clsx(markdownStyles["markdown-body"], className)}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default PostBody;
