import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    imageClassName?: string;
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
    ({ className, imageClassName, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex items-center gap-2 font-bold text-xl", className)}
                {...props}
            >
                <div className={cn("size-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground", imageClassName)}>
                    L
                </div>
                <span>Logo</span>
            </div>
        );
    }
);
Logo.displayName = "Logo";
