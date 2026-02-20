"use client";

import type { ComponentConfig } from "@measured/puck";
import React from "react";

type Props = Record<string, any>;

export const ShadcnCollapsible: ComponentConfig = {
    label: "Collapsible",
    defaultProps: { triggerLabel: "@peduarte starred 3 repositories", items: ["@radix-ui/primitives", "@radix-ui/colors", "@stitches/react"], open: true },
    fields: {
        triggerLabel: { type: "text", label: "Trigger Label" },
        items: { type: "array", label: "Items", arrayFields: { label: { type: "text", label: "Item" } } },
        open: { type: "radio", label: "Open", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => (
        <div style={{ width: "100%", maxWidth: "350px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0", cursor: "pointer" }}>
                <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{props.triggerLabel}</span>
                <span style={{ fontSize: "0.75rem", transform: props.open ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>▼</span>
            </div>
            {props.open && (props.items ?? []).map((item: string, i: number) => (
                <div key={i} style={{ padding: "0.5rem 0.75rem", borderRadius: "0.375rem", border: "1px solid #e4e4e7", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    {typeof item === "string" ? item : `Item ${i + 1}`}
                </div>
            ))}
        </div>
    ),
};

export const ShadcnToggle: ComponentConfig = {
    label: "Toggle",
    defaultProps: { label: "Bold", pressed: false, variant: "default" },
    fields: {
        label: { type: "text", label: "Label" },
        pressed: { type: "radio", label: "Pressed", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
        variant: { type: "select", label: "Variant", options: [{ label: "Default", value: "default" }, { label: "Outline", value: "outline" }] },
    },
    render: (props: Props) => (
        <button style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            height: "2.5rem", padding: "0 0.625rem", borderRadius: "0.5rem",
            fontSize: "0.875rem", fontWeight: 500, cursor: "pointer",
            border: props.variant === "outline" ? "1px solid #d4d4d8" : "none",
            background: props.pressed ? "#f4f4f5" : "transparent",
            color: props.pressed ? "#18181b" : "#71717a",
        }}>
            {props.label}
        </button>
    ),
};

export const ShadcnToggleGroup: ComponentConfig = {
    label: "Toggle Group",
    defaultProps: { items: [{ label: "B", value: "bold" }, { label: "I", value: "italic" }, { label: "U", value: "underline" }], activeValue: "bold", type: "single" },
    fields: {
        items: { type: "array", label: "Items", arrayFields: { label: { type: "text", label: "Label" }, value: { type: "text", label: "Value" } } },
        activeValue: { type: "text", label: "Active Value" },
        type: { type: "select", label: "Type", options: [{ label: "Single", value: "single" }, { label: "Multiple", value: "multiple" }] },
    },
    render: (props: Props) => (
        <div style={{ display: "inline-flex", border: "1px solid #e4e4e7", borderRadius: "0.5rem", overflow: "hidden" }}>
            {(props.items ?? []).map((item: { label: string; value: string }, i: number) => (
                <button key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    height: "2.5rem", padding: "0 0.75rem", fontSize: "0.875rem", fontWeight: 500,
                    border: "none", borderRight: i < (props.items.length - 1) ? "1px solid #e4e4e7" : "none",
                    background: props.activeValue === item.value ? "#f4f4f5" : "transparent",
                    color: props.activeValue === item.value ? "#18181b" : "#71717a",
                    cursor: "pointer",
                }}>
                    {item.label}
                </button>
            ))}
        </div>
    ),
};

export const ShadcnPagination: ComponentConfig = {
    label: "Pagination",
    defaultProps: { totalPages: 10, currentPage: 3, showEllipsis: true },
    fields: {
        totalPages: { type: "number", label: "Total Pages", min: 1 },
        currentPage: { type: "number", label: "Current Page", min: 1 },
        showEllipsis: { type: "radio", label: "Show Ellipsis", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => {
        const cur = props.currentPage ?? 1;
        const total = props.totalPages ?? 10;
        const pages: (number | string)[] = [];
        if (total <= 7) { for (let i = 1; i <= total; i++) pages.push(i); }
        else {
            pages.push(1);
            if (cur > 3 && props.showEllipsis) pages.push("...");
            for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i);
            if (cur < total - 2 && props.showEllipsis) pages.push("...");
            pages.push(total);
        }
        const btnStyle: React.CSSProperties = { width: "2.25rem", height: "2.25rem", borderRadius: "0.375rem", border: "1px solid #e4e4e7", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", cursor: "pointer" };
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <button style={{ ...btnStyle, fontSize: "0.75rem" }}>← Prev</button>
                {pages.map((p, i) => (
                    <button key={i} style={{ ...btnStyle, background: p === cur ? "#18181b" : "transparent", color: p === cur ? "#fafafa" : "#18181b", border: p === cur ? "none" : btnStyle.border, cursor: p === "..." ? "default" : "pointer" }}>
                        {p}
                    </button>
                ))}
                <button style={{ ...btnStyle, fontSize: "0.75rem" }}>Next →</button>
            </div>
        );
    },
};

export const ShadcnCalendar: ComponentConfig = {
    label: "Calendar",
    defaultProps: { month: "February", year: 2026, selectedDay: 19 },
    fields: {
        month: { type: "text", label: "Month" },
        year: { type: "number", label: "Year" },
        selectedDay: { type: "number", label: "Selected Day", min: 1, max: 31 },
    },
    render: (props: Props) => {
        const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        return (
            <div style={{ border: "1px solid #e4e4e7", borderRadius: "0.75rem", padding: "1rem", display: "inline-block", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <button style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "1rem" }}>‹</button>
                    <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{props.month} {props.year}</span>
                    <button style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "1rem" }}>›</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 2.25rem)", gap: "0.125rem", textAlign: "center" }}>
                    {days.map((d) => (
                        <div key={d} style={{ fontSize: "0.75rem", color: "#a1a1aa", fontWeight: 500, padding: "0.25rem" }}>{d}</div>
                    ))}
                    {Array.from({ length: 3 }).map((_, i) => <div key={`e${i}`} />)}
                    {Array.from({ length: 28 }).map((_, i) => {
                        const day = i + 1;
                        const isSelected = day === props.selectedDay;
                        return (
                            <div key={day} style={{
                                width: "2.25rem", height: "2.25rem", display: "flex", alignItems: "center", justifyContent: "center",
                                borderRadius: "0.375rem", fontSize: "0.875rem", cursor: "pointer",
                                background: isSelected ? "#18181b" : "transparent",
                                color: isSelected ? "#fafafa" : "#18181b",
                                fontWeight: isSelected ? 600 : 400,
                            }}>
                                {day}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    },
};
