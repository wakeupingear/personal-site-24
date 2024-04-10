import Link from "next/link";
import NotePreview from "./note-preview";
import useSWR from "swr";
import clsx from "clsx";
import DateFormatter from "./date-formatter";

const fetcher = (url) => fetch(url).then((res) => res.json());

type Props = {
    href: string;
    children?: React.ReactNode;
    containerClassName?: string;
    className?: string;
};

const PreviewLink = ({
    href,
    children,
    containerClassName,
    className,
}: Props) => {
    const { data } = useSWR(`/api/post-preview/${href}`, fetcher);
    if (!data) return null;

    return (
        <Link as={href} href="/[...slug]" className={containerClassName}>
            <div className={clsx(className)}>
                <p className="text-xl">{data.title}</p>
                <DateFormatter dateString={data.date} />
                {children}
            </div>
        </Link>
    );
};

export default PreviewLink;
