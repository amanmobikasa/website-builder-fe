"use client";

import type { ComponentConfig } from "@measured/puck";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

// ── Layout & Navigation Blocks ──────────────────────────

export const ShadcnAccordion: ComponentConfig = {
    label: "Accordion",
    defaultProps: {
        items: [
            { title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
            { title: "Is it styled?", content: "Yes. It comes with default styles that match the other components." },
            { title: "Is it animated?", content: "Yes. It's animated by default, but you can disable it." },
        ],
        type: "single",
    },
    fields: {
        items: {
            type: "array", label: "Items",
            arrayFields: {
                title: { type: "text", label: "Title" },
                content: { type: "textarea", label: "Content" },
            },
        },
        type: {
            type: "select", label: "Type",
            options: [
                { label: "Single", value: "single" },
                { label: "Multiple", value: "multiple" },
            ],
        },
    },
    render: (props: Props) => (
        <div style={{ width: "100%" }}>
            {(props.items ?? []).map((item: { title: string; content: string }, i: number) => (
                <div key={i} style={{ borderBottom: "1px solid #e4e4e7" }}>
                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "1rem 0", fontSize: "0.9375rem", fontWeight: 500, cursor: "pointer",
                    }}>
                        {item.title}
                        <span style={{ fontSize: "0.75rem", transform: i === 0 ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>▼</span>
                    </div>
                    {i === 0 && (
                        <div style={{ paddingBottom: "1rem", fontSize: "0.875rem", color: "#71717a", lineHeight: 1.6 }}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    ),
};

export const ShadcnBreadcrumb: ComponentConfig = {
    label: "Breadcrumb",
    defaultProps: {
        items: [
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Breadcrumb", href: "" },
        ],
    },
    fields: {
        items: {
            type: "array", label: "Items",
            arrayFields: {
                label: { type: "text", label: "Label" },
                href: { type: "text", label: "URL" },
            },
        },
    },
    render: (props: Props) => (
        <nav style={{ fontSize: "0.875rem" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "0.375rem", listStyle: "none", padding: 0, margin: 0 }}>
                {(props.items ?? []).map((item: { label: string; href: string }, i: number) => (
                    <React.Fragment key={i}>
                        {i > 0 && <li style={{ color: "#a1a1aa" }}>/</li>}
                        <li>
                            {i < (props.items.length - 1) ? (
                                <a href={item.href || "#"} style={{ color: "#71717a", textDecoration: "none" }}>{item.label}</a>
                            ) : (
                                <span style={{ color: "#18181b", fontWeight: 500 }}>{item.label}</span>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    ),
};

export const ShadcnNavigationMenu: ComponentConfig = {
    label: "Navigation Menu",
    defaultProps: {
        items: [
            { label: "Getting Started", href: "#" },
            { label: "Components", href: "#" },
            { label: "Documentation", href: "#" },
        ],
    },
    fields: {
        items: {
            type: "array", label: "Items",
            arrayFields: {
                label: { type: "text", label: "Label" },
                href: { type: "text", label: "URL" },
            },
        },
    },
    render: (props: Props) => (
        <nav style={{
            display: "flex", alignItems: "center", gap: "0.25rem",
            background: "transparent", padding: "0.25rem",
        }}>
            {(props.items ?? []).map((item: { label: string; href: string }, i: number) => (
                <a key={i} href={item.href || "#"} style={{
                    padding: "0.5rem 1rem", borderRadius: "0.375rem", fontSize: "0.875rem",
                    fontWeight: 500, color: "#18181b", textDecoration: "none",
                    background: i === 0 ? "#f4f4f5" : "transparent",
                    transition: "background 150ms",
                }}>
                    {item.label}
                </a>
            ))}
        </nav>
    ),
};

export const ShadcnTabs: ComponentConfig = {
    label: "Tabs",
    defaultProps: {
        tabs: [
            { label: "Account", content: "Make changes to your account here. Click save when you're done." },
            { label: "Password", content: "Change your password here. After saving, you'll be logged out." },
        ],
        activeTab: 0,
    },
    fields: {
        tabs: {
            type: "array", label: "Tabs",
            arrayFields: {
                label: { type: "text", label: "Label" },
                content: { type: "textarea", label: "Content" },
            },
        },
        activeTab: { type: "number", label: "Active Tab Index", min: 0 },
    },
    render: (props: Props) => {
        const activeIdx = props.activeTab ?? 0;
        const tabs = props.tabs ?? [];
        return (
            <div>
                <div style={{
                    display: "inline-flex", background: "#f4f4f5", borderRadius: "0.5rem",
                    padding: "0.25rem", gap: "0.125rem",
                }}>
                    {tabs.map((tab: { label: string }, i: number) => (
                        <div key={i} style={{
                            padding: "0.375rem 0.75rem", borderRadius: "0.375rem", fontSize: "0.875rem",
                            fontWeight: 500, cursor: "pointer",
                            background: i === activeIdx ? "#fff" : "transparent",
                            color: i === activeIdx ? "#18181b" : "#71717a",
                            boxShadow: i === activeIdx ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                        }}>
                            {tab.label}
                        </div>
                    ))}
                </div>
                {tabs[activeIdx] && (
                    <div style={{
                        marginTop: "0.75rem", padding: "1.5rem", border: "1px solid #e4e4e7",
                        borderRadius: "0.5rem", fontSize: "0.875rem", color: "#71717a", lineHeight: 1.6,
                    }}>
                        {tabs[activeIdx].content}
                    </div>
                )}
            </div>
        );
    },
};

export const ShadcnSeparator: ComponentConfig = {
    label: "Separator",
    defaultProps: { orientation: "horizontal", decorative: true },
    fields: {
        orientation: {
            type: "select", label: "Orientation",
            options: [
                { label: "Horizontal", value: "horizontal" },
                { label: "Vertical", value: "vertical" },
            ],
        },
    },
    render: (props: Props) => {
        const isVertical = props.orientation === "vertical";
        return (
            <div
                role="separator"
                style={{
                    background: "#e4e4e7",
                    ...(isVertical
                        ? { width: "1px", height: "100%", minHeight: "2rem" }
                        : { height: "1px", width: "100%", margin: "0.5rem 0" }),
                }}
            />
        );
    },
};

export const ShadcnScrollArea: ComponentConfig = {
    label: "Scroll Area",
    defaultProps: {
        height: 200,
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"],
    },
    fields: {
        height: { type: "number", label: "Height (px)", min: 100, max: 600 },
        items: {
            type: "array", label: "Items",
            arrayFields: { label: { type: "text", label: "Item" } },
        },
    },
    render: (props: Props) => (
        <div style={{
            height: `${props.height ?? 200}px`, overflow: "auto", borderRadius: "0.5rem",
            border: "1px solid #e4e4e7", padding: "1rem",
        }}>
            {(props.items ?? []).map((item: string, i: number) => (
                <div key={i} style={{ padding: "0.5rem 0", borderBottom: "1px solid #f4f4f5", fontSize: "0.875rem" }}>
                    {typeof item === "string" ? item : `Item ${i + 1}`}
                </div>
            ))}
        </div>
    ),
};

export const ShadcnResizable: ComponentConfig = {
    label: "Resizable Panels",
    defaultProps: { panels: 2, direction: "horizontal" },
    fields: {
        panels: { type: "number", label: "Panels", min: 2, max: 4 },
        direction: {
            type: "select", label: "Direction",
            options: [
                { label: "Horizontal", value: "horizontal" },
                { label: "Vertical", value: "vertical" },
            ],
        },
    },
    render: (props: Props) => {
        const isVertical = props.direction === "vertical";
        const count = props.panels ?? 2;
        return (
            <div style={{
                display: "flex", flexDirection: isVertical ? "column" : "row",
                border: "1px solid #e4e4e7", borderRadius: "0.75rem", overflow: "hidden",
                minHeight: "200px",
            }}>
                {Array.from({ length: count }).map((_, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && (
                            <div style={{
                                ...(isVertical ? { height: "4px", width: "100%" } : { width: "4px", height: "auto" }),
                                background: "#e4e4e7", cursor: isVertical ? "row-resize" : "col-resize",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a1a1aa" }} />
                            </div>
                        )}
                        <div style={{
                            flex: 1, padding: "1rem", display: "flex", alignItems: "center",
                            justifyContent: "center", fontSize: "0.875rem", color: "#71717a",
                        }}>
                            Panel {i + 1}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        );
    },
};

export const ShadcnAspectRatio: ComponentConfig = {
    label: "Aspect Ratio",
    defaultProps: { ratio: "16/9", imageUrl: "https://placehold.co/800x450" },
    fields: {
        ratio: {
            type: "select", label: "Ratio",
            options: [
                { label: "16:9", value: "16/9" },
                { label: "4:3", value: "4/3" },
                { label: "1:1", value: "1/1" },
                { label: "21:9", value: "21/9" },
            ],
        },
        imageUrl: { type: "text", label: "Image URL" },
    },
    render: (props: Props) => (
        <div style={{ position: "relative", width: "100%", aspectRatio: props.ratio ?? "16/9", borderRadius: "0.75rem", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={props.imageUrl || "https://placehold.co/800x450"}
                alt="Aspect ratio content"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
