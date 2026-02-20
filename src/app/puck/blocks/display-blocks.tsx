"use client";

import type { ComponentConfig } from "@measured/puck";
import React from "react";

type Props = Record<string, any>;

export const ShadcnAvatar: ComponentConfig = {
    label: "Avatar",
    defaultProps: { src: "", fallback: "CN", size: "default" },
    fields: {
        src: { type: "text", label: "Image URL" },
        fallback: { type: "text", label: "Fallback Text" },
        size: {
            type: "select", label: "Size",
            options: [
                { label: "Small", value: "sm" },
                { label: "Default", value: "default" },
                { label: "Large", value: "lg" },
            ],
        },
    },
    render: (props: Props) => {
        const sizeMap: Record<string, string> = { sm: "2rem", default: "2.5rem", lg: "4rem" };
        const sz = sizeMap[props.size] ?? "2.5rem";
        return (
            <div style={{
                width: sz, height: sz, borderRadius: "50%", overflow: "hidden",
                background: "#f4f4f5", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "0.75rem", fontWeight: 600, color: "#71717a",
            }}>
                {props.src ? (
                    <img src={props.src} alt={props.fallback} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (props.fallback)}
            </div>
        );
    },
};

export const ShadcnCard: ComponentConfig = {
    label: "Card",
    defaultProps: { title: "Card Title", description: "Card Description", content: "Card content goes here.", footer: "" },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description" },
        content: { type: "textarea", label: "Content" },
        footer: { type: "text", label: "Footer" },
    },
    render: (props: Props) => (
        <div style={{ borderRadius: "0.75rem", border: "1px solid #e4e4e7", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
            <div style={{ padding: "1.5rem 1.5rem 0" }}>
                <h3 style={{ fontWeight: 600, fontSize: "1.125rem" }}>{props.title}</h3>
                {props.description && <p style={{ fontSize: "0.875rem", color: "#71717a", marginTop: "0.25rem" }}>{props.description}</p>}
            </div>
            <div style={{ padding: "1.5rem" }}>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#3f3f46" }}>{props.content}</p>
            </div>
            {props.footer && (
                <div style={{ padding: "0 1.5rem 1.5rem", borderTop: "1px solid #f4f4f5", paddingTop: "1rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#a1a1aa" }}>{props.footer}</span>
                </div>
            )}
        </div>
    ),
};

export const ShadcnTable: ComponentConfig = {
    label: "Table",
    defaultProps: {
        headers: ["Invoice", "Status", "Method", "Amount"],
        rows: [["INV001", "Paid", "Credit Card", "$250.00"], ["INV002", "Pending", "PayPal", "$150.00"], ["INV003", "Unpaid", "Bank Transfer", "$350.00"]],
    },
    fields: {
        headers: { type: "array", label: "Headers", arrayFields: { label: { type: "text", label: "Header" } } },
        rows: { type: "array", label: "Rows", arrayFields: { cols: { type: "array", label: "Columns", arrayFields: { label: { type: "text", label: "Cell" } } } } },
    },
    render: (props: Props) => (
        <div style={{ border: "1px solid #e4e4e7", borderRadius: "0.75rem", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid #e4e4e7", background: "#fafafa" }}>
                        {(props.headers ?? []).map((h: string, i: number) => (
                            <th key={i} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500, fontSize: "0.8rem", color: "#71717a" }}>
                                {typeof h === "string" ? h : `Col ${i + 1}`}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {(props.rows ?? []).map((row: string[], ri: number) => (
                        <tr key={ri} style={{ borderBottom: "1px solid #f4f4f5" }}>
                            {(Array.isArray(row) ? row : []).map((cell: string, ci: number) => (
                                <td key={ci} style={{ padding: "0.75rem 1rem" }}>{typeof cell === "string" ? cell : ""}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ),
};

export const ShadcnCarousel: ComponentConfig = {
    label: "Carousel",
    defaultProps: { items: [{ content: "Slide 1", bg: "#f4f4f5" }, { content: "Slide 2", bg: "#e4e4e7" }, { content: "Slide 3", bg: "#d4d4d8" }] },
    fields: {
        items: { type: "array", label: "Slides", arrayFields: { content: { type: "text", label: "Content" }, bg: { type: "text", label: "Background" } } },
    },
    render: (props: Props) => (
        <div>
            <div style={{ display: "flex", gap: "1rem", overflow: "hidden", borderRadius: "0.75rem" }}>
                {(props.items ?? []).map((item: { content: string; bg: string }, i: number) => (
                    <div key={i} style={{ minWidth: "100%", height: "200px", background: item.bg || "#f4f4f5", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.75rem", fontSize: "1.125rem", fontWeight: 500 }}>
                        {item.content}
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.75rem" }}>
                <button style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "1px solid #e4e4e7", background: "#fff", cursor: "pointer" }}>←</button>
                {(props.items ?? []).map((_: unknown, i: number) => (
                    <div key={i} style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: i === 0 ? "#18181b" : "#d4d4d8", alignSelf: "center" }} />
                ))}
                <button style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "1px solid #e4e4e7", background: "#fff", cursor: "pointer" }}>→</button>
            </div>
        </div>
    ),
};

export const ShadcnTypography: ComponentConfig = {
    label: "Typography",
    defaultProps: { variant: "h1", text: "The Joke Tax Chronicles" },
    fields: {
        variant: {
            type: "select", label: "Variant",
            options: [
                { label: "H1", value: "h1" }, { label: "H2", value: "h2" }, { label: "H3", value: "h3" }, { label: "H4", value: "h4" },
                { label: "Paragraph", value: "p" }, { label: "Blockquote", value: "blockquote" }, { label: "Lead", value: "lead" },
                { label: "Large", value: "large" }, { label: "Small", value: "small" }, { label: "Muted", value: "muted" },
            ],
        },
        text: { type: "textarea", label: "Text" },
    },
    render: (props: Props) => {
        const styles: Record<string, React.CSSProperties> = {
            h1: { fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.1 },
            h2: { fontSize: "1.875rem", fontWeight: 600, lineHeight: 1.2, borderBottom: "1px solid #e4e4e7", paddingBottom: "0.5rem" },
            h3: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
            h4: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.4 },
            p: { fontSize: "1rem", lineHeight: 1.7, color: "#3f3f46" },
            blockquote: { fontSize: "1rem", lineHeight: 1.7, fontStyle: "italic", borderLeft: "3px solid #e4e4e7", paddingLeft: "1rem", color: "#52525b" },
            lead: { fontSize: "1.25rem", lineHeight: 1.6, color: "#71717a" },
            large: { fontSize: "1.125rem", fontWeight: 600 },
            small: { fontSize: "0.875rem", lineHeight: 1.4 },
            muted: { fontSize: "0.875rem", color: "#a1a1aa" },
        };
        const tagMap: Record<string, string> = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", p: "p", blockquote: "blockquote", lead: "p", large: "div", small: "small", muted: "p" };
        return React.createElement(tagMap[props.variant] ?? "p", { style: styles[props.variant] ?? styles.p }, props.text);
    },
};

export const ShadcnKbd: ComponentConfig = {
    label: "Keyboard Shortcut",
    defaultProps: { keys: ["⌘", "K"] },
    fields: { keys: { type: "array", label: "Keys", arrayFields: { label: { type: "text", label: "Key" } } } },
    render: (props: Props) => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.125rem" }}>
            {(props.keys ?? []).map((key: string, i: number) => (
                <React.Fragment key={i}>
                    {i > 0 && <span style={{ fontSize: "0.7rem", color: "#a1a1aa", margin: "0 0.125rem" }}>+</span>}
                    <kbd style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "1.25rem", height: "1.25rem", padding: "0 0.375rem", borderRadius: "0.25rem", border: "1px solid #d4d4d8", background: "#fafafa", fontSize: "0.7rem", fontWeight: 500, fontFamily: "inherit", boxShadow: "0 1px 0 0 #d4d4d8" }}>
                        {typeof key === "string" ? key : ""}
                    </kbd>
                </React.Fragment>
            ))}
        </span>
    ),
};

export const ShadcnItem: ComponentConfig = {
    label: "Item",
    defaultProps: { icon: "📄", title: "Item Title", description: "Item description text." },
    fields: {
        icon: { type: "text", label: "Icon" },
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description" },
    },
    render: (props: Props) => (
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid #f4f4f5" }}>
            {props.icon && <span style={{ fontSize: "1.25rem" }}>{props.icon}</span>}
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: "0.875rem" }}>{props.title}</div>
                {props.description && <div style={{ fontSize: "0.8rem", color: "#71717a" }}>{props.description}</div>}
            </div>
        </div>
    ),
};
