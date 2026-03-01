"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundLines = ({
    children,
    className,
    svgOptions,
}: {
    children: React.ReactNode;
    className?: string;
    svgOptions?: {
        duration?: number;
    };
}) => {
    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            {/* Dynamic or static SVG background lines */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
                <svg
                    className="absolute inset-0 h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="background-lines-pattern"
                            x="0"
                            y="0"
                            width="100"
                            height="100"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 100 0 L 0 100 0 0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-primary/30"
                            />
                            <path
                                d="M 0 100 L 100 0 100 100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-primary/30"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#background-lines-pattern)"
                    />
                </svg>
            </div>

            <div className="relative z-10 w-full h-full">{children}</div>
        </div>
    );
};
