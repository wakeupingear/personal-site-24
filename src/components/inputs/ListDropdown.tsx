import clsx from "clsx";
import React, { ReactNode, useState } from "react";

type Items = (ReactNode | [ReactNode, Items])[];

type Props = {
    items: Items;
    className?: string;
};

export default function ListDropdown({ items, className }: Props) {
    const [openInds, setOpenInds] = useState<boolean[]>(
        Array(items.length).fill(false)
    );

    return (
        <ul className={clsx("hover:cursor-auto", className)}>
            {items.map((item, i) => {
                const hasSublist =
                    Array.isArray(item) &&
                    Array.isArray(item[1]) &&
                    item[1].length;
                const open = Boolean(openInds[i]);

                return (
                    <li
                        key={i}
                        className={clsx({
                            "list-sub hover:cursor-pointer": hasSublist,
                            "list-sub-open": hasSublist && open,
                            "list-sub-closed": hasSublist && !open,
                            "list-single": !hasSublist,
                        })}
                        onClick={
                            hasSublist
                                ? () =>
                                      setOpenInds((prev) => [
                                          ...prev.slice(0, i),
                                          !open,
                                          ...prev.slice(i + 1),
                                      ])
                                : undefined
                        }
                    >
                        {hasSublist ? (
                            <>
                                {item[0]}
                                <div
                                    className={clsx(
                                        "grid transition-all duration-300",
                                        {
                                            "grid-rows-[1fr]": open,
                                            "grid-rows-[0fr] opacity-0": !open,
                                        }
                                    )}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <ListDropdown items={item[1]} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            item
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
