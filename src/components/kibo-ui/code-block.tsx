import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    code: string;
    language?: string;
    className?: string;
}

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
    ({ code, language = "plaintext", className, ...props }, ref) => {
        return (
            <pre
                ref={ref}
                className={cn("p-4 rounded-md bg-muted text-foreground overflow-x-auto text-sm font-mono", className)}
                {...props}
            >
                <code>{code}</code>
            </pre>
        );
    }
);
CodeBlock.displayName = "CodeBlock";
