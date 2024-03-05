import { parseISO, format } from "date-fns";

type Props = {
    dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
    try {
        const date = parseISO(dateString);
        return (
            <time dateTime={dateString} className="font-bold">
                {format(date, "LLL d, yyyy")}
            </time>
        );
    } catch (e) {
        return null;
    }
};

export default DateFormatter;
