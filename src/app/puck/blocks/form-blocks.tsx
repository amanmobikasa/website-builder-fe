"use client";

import type { ComponentConfig } from "@measured/puck";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

// ── Shared Styles ────────────────────────────────────
const inputBaseStyle: React.CSSProperties = {
    display: "flex",
    height: "2.5rem",
    width: "100%",
    borderRadius: "0.5rem",
    border: "1px solid #d4d4d8",
    background: "transparent",
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: "1",
};

const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    whiteSpace: "nowrap",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 150ms",
    border: "none",
    textDecoration: "none",
    fontFamily: "inherit",
};

const btnSizes: Record<string, React.CSSProperties> = {
    sm: { height: "2rem", padding: "0 0.75rem", fontSize: "0.8rem" },
    default: { height: "2.5rem", padding: "0 1rem" },
    lg: { height: "2.75rem", padding: "0 1.5rem", fontSize: "1rem" },
    icon: { height: "2.5rem", width: "2.5rem", padding: "0" },
};

const btnVariants: Record<string, React.CSSProperties> = {
    default: { background: "#18181b", color: "#fafafa" },
    destructive: { background: "#ef4444", color: "#fff" },
    outline: { background: "transparent", color: "#18181b", border: "1px solid #d4d4d8" },
    secondary: { background: "#f4f4f5", color: "#18181b" },
    ghost: { background: "transparent", color: "#18181b" },
    link: { background: "transparent", color: "#18181b", textDecoration: "underline" },
};

// ── Export Block Configs ─────────────────────────────

export const ShadcnButton: ComponentConfig = {
    label: "Button",
    defaultProps: { label: "Button", variant: "default", size: "default" },
    fields: {
        label: { type: "text", label: "Label" },
        variant: {
            type: "select", label: "Variant",
            options: [
                { label: "Default", value: "default" },
                { label: "Destructive", value: "destructive" },
                { label: "Outline", value: "outline" },
                { label: "Secondary", value: "secondary" },
                { label: "Ghost", value: "ghost" },
                { label: "Link", value: "link" },
            ],
        },
        size: {
            type: "select", label: "Size",
            options: [
                { label: "Small", value: "sm" },
                { label: "Default", value: "default" },
                { label: "Large", value: "lg" },
                { label: "Icon", value: "icon" },
            ],
        },
    },
    render: (props: Props) => (
        <button style={{ ...btnBase, ...(btnVariants[props.variant] ?? btnVariants.default), ...(btnSizes[props.size] ?? btnSizes.default) }}>
            {props.label}
        </button>
    ),
};

export const ShadcnButtonGroup: ComponentConfig = {
    label: "Button Group",
    defaultProps: {
        buttons: [
            { label: "First", variant: "outline" },
            { label: "Second", variant: "outline" },
            { label: "Third", variant: "outline" },
        ],
    },
    fields: {
        buttons: {
            type: "array", label: "Buttons",
            arrayFields: {
                label: { type: "text", label: "Label" },
                variant: {
                    type: "select", label: "Variant",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Outline", value: "outline" },
                        { label: "Secondary", value: "secondary" },
                        { label: "Ghost", value: "ghost" },
                    ],
                },
            },
        },
    },
    render: (props: Props) => (
        <div style={{ display: "inline-flex" }}>
            {(props.buttons ?? []).map((btn: { label: string; variant: string }, i: number) => (
                <button key={i} style={{
                    ...btnBase, ...(btnVariants[btn.variant] ?? btnVariants.outline), ...btnSizes.default,
                    borderRadius: i === 0 ? "0.5rem 0 0 0.5rem" : i === (props.buttons.length - 1) ? "0 0.5rem 0.5rem 0" : "0",
                    marginLeft: i > 0 ? "-1px" : "0",
                }}>
                    {btn.label}
                </button>
            ))}
        </div>
    ),
};

export const ShadcnInput: ComponentConfig = {
    label: "Input",
    defaultProps: { placeholder: "Enter text...", type: "text", disabled: false },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
        type: {
            type: "select", label: "Type",
            options: [
                { label: "Text", value: "text" },
                { label: "Email", value: "email" },
                { label: "Password", value: "password" },
                { label: "Number", value: "number" },
                { label: "URL", value: "url" },
                { label: "Search", value: "search" },
            ],
        },
        disabled: { type: "radio", label: "Disabled", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => (
        <input
            type={props.type ?? "text"}
            placeholder={props.placeholder}
            disabled={props.disabled}
            style={{ ...inputBaseStyle, opacity: props.disabled ? 0.5 : 1 }}
            readOnly
        />
    ),
};

export const ShadcnInputGroup: ComponentConfig = {
    label: "Input Group",
    defaultProps: { placeholder: "Enter amount", prefix: "$", suffix: ".00" },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
        prefix: { type: "text", label: "Prefix" },
        suffix: { type: "text", label: "Suffix" },
    },
    render: (props: Props) => (
        <div style={{ display: "flex", alignItems: "stretch", borderRadius: "0.5rem", border: "1px solid #d4d4d8", overflow: "hidden" }}>
            {props.prefix && (
                <span style={{ display: "flex", alignItems: "center", padding: "0 0.75rem", background: "#f4f4f5", borderRight: "1px solid #d4d4d8", fontSize: "0.875rem", color: "#71717a" }}>
                    {props.prefix}
                </span>
            )}
            <input placeholder={props.placeholder} style={{ ...inputBaseStyle, border: "none", borderRadius: 0, flex: 1 }} readOnly />
            {props.suffix && (
                <span style={{ display: "flex", alignItems: "center", padding: "0 0.75rem", background: "#f4f4f5", borderLeft: "1px solid #d4d4d8", fontSize: "0.875rem", color: "#71717a" }}>
                    {props.suffix}
                </span>
            )}
        </div>
    ),
};

export const ShadcnTextarea: ComponentConfig = {
    label: "Textarea",
    defaultProps: { placeholder: "Type your message here...", rows: 4 },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
        rows: { type: "number", label: "Rows", min: 2, max: 20 },
    },
    render: (props: Props) => (
        <textarea
            placeholder={props.placeholder}
            rows={props.rows ?? 4}
            style={{ ...inputBaseStyle, height: "auto", minHeight: "80px", resize: "vertical" }}
            readOnly
        />
    ),
};

export const ShadcnCheckbox: ComponentConfig = {
    label: "Checkbox",
    defaultProps: { label: "Accept terms and conditions", checked: false },
    fields: {
        label: { type: "text", label: "Label" },
        checked: { type: "radio", label: "Checked", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
                width: "1rem", height: "1rem", borderRadius: "0.25rem",
                border: props.checked ? "none" : "1px solid #d4d4d8",
                background: props.checked ? "#18181b" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: "0.65rem", flexShrink: 0,
            }}>
                {props.checked && "✓"}
            </div>
            <span style={{ fontSize: "0.875rem", lineHeight: 1.4 }}>{props.label}</span>
        </div>
    ),
};

export const ShadcnRadioGroup: ComponentConfig = {
    label: "Radio Group",
    defaultProps: {
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        selected: "option1",
    },
    fields: {
        options: {
            type: "array", label: "Options",
            arrayFields: {
                label: { type: "text", label: "Label" },
                value: { type: "text", label: "Value" },
            },
        },
        selected: { type: "text", label: "Selected Value" },
    },
    render: (props: Props) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {(props.options ?? []).map((opt: { label: string; value: string }, i: number) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{
                        width: "1rem", height: "1rem", borderRadius: "50%",
                        border: "2px solid " + (props.selected === opt.value ? "#18181b" : "#d4d4d8"),
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                        {props.selected === opt.value && (
                            <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#18181b" }} />
                        )}
                    </div>
                    <span style={{ fontSize: "0.875rem" }}>{opt.label}</span>
                </div>
            ))}
        </div>
    ),
};

export const ShadcnSelect: ComponentConfig = {
    label: "Select",
    defaultProps: {
        placeholder: "Select an option",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
    },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
        options: {
            type: "array", label: "Options",
            arrayFields: {
                label: { type: "text", label: "Label" },
                value: { type: "text", label: "Value" },
            },
        },
    },
    render: (props: Props) => (
        <div style={{
            ...inputBaseStyle,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer", color: "#71717a",
        }}>
            <span>{props.placeholder}</span>
            <span style={{ fontSize: "0.7rem" }}>▼</span>
        </div>
    ),
};

export const ShadcnSwitch: ComponentConfig = {
    label: "Switch",
    defaultProps: { label: "Airplane Mode", checked: false },
    fields: {
        label: { type: "text", label: "Label" },
        checked: { type: "radio", label: "Checked", options: [{ label: "On", value: true }, { label: "Off", value: false }] },
    },
    render: (props: Props) => (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
                width: "2.75rem", height: "1.5rem", borderRadius: "9999px",
                background: props.checked ? "#18181b" : "#e4e4e7",
                position: "relative", transition: "background 200ms", cursor: "pointer", flexShrink: 0,
            }}>
                <div style={{
                    width: "1.25rem", height: "1.25rem", borderRadius: "50%", background: "#fff",
                    position: "absolute", top: "0.125rem",
                    left: props.checked ? "1.375rem" : "0.125rem",
                    transition: "left 200ms", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }} />
            </div>
            <span style={{ fontSize: "0.875rem" }}>{props.label}</span>
        </div>
    ),
};

export const ShadcnSlider: ComponentConfig = {
    label: "Slider",
    defaultProps: { value: 50, min: 0, max: 100, showValue: true },
    fields: {
        value: { type: "number", label: "Value" },
        min: { type: "number", label: "Min" },
        max: { type: "number", label: "Max" },
        showValue: { type: "radio", label: "Show Value", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => {
        const pct = Math.max(0, Math.min(100, ((props.value - props.min) / (props.max - props.min)) * 100));
        return (
            <div style={{ width: "100%", padding: "0.25rem 0" }}>
                <div style={{ position: "relative", height: "0.5rem", borderRadius: "9999px", background: "#e4e4e7" }}>
                    <div style={{ position: "absolute", height: "100%", borderRadius: "9999px", background: "#18181b", width: `${pct}%` }} />
                    <div style={{
                        position: "absolute", top: "50%", left: `${pct}%`, transform: "translate(-50%, -50%)",
                        width: "1.25rem", height: "1.25rem", borderRadius: "50%", background: "#18181b",
                        border: "2px solid #18181b", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }} />
                </div>
                {props.showValue && <div style={{ textAlign: "center", marginTop: "0.5rem", fontSize: "0.8rem", color: "#71717a" }}>{props.value}</div>}
            </div>
        );
    },
};

export const ShadcnLabel: ComponentConfig = {
    label: "Label",
    defaultProps: { text: "Email", htmlFor: "email" },
    fields: {
        text: { type: "text", label: "Text" },
        htmlFor: { type: "text", label: "For (ID)" },
    },
    render: (props: Props) => (
        <label style={labelStyle}>{props.text}</label>
    ),
};

export const ShadcnInputOTP: ComponentConfig = {
    label: "Input OTP",
    defaultProps: { length: 6, separator: true },
    fields: {
        length: { type: "number", label: "Length", min: 4, max: 8 },
        separator: { type: "radio", label: "Show Separator", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => {
        const len = props.length ?? 6;
        const mid = Math.floor(len / 2);
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                {Array.from({ length: len }).map((_, i) => (
                    <React.Fragment key={i}>
                        {props.separator && i === mid && (
                            <span style={{ padding: "0 0.25rem", color: "#71717a" }}>—</span>
                        )}
                        <div style={{
                            width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem",
                            border: "1px solid #d4d4d8", display: "flex", alignItems: "center",
                            justifyContent: "center", fontSize: "1rem", fontWeight: 500,
                        }}>
                            {i < 3 ? "●" : ""}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        );
    },
};

export const ShadcnDatePicker: ComponentConfig = {
    label: "Date Picker",
    defaultProps: { placeholder: "Pick a date" },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
    },
    render: (props: Props) => (
        <div style={{
            ...inputBaseStyle,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer", color: "#71717a",
        }}>
            <span>{props.placeholder}</span>
            <span>📅</span>
        </div>
    ),
};

export const ShadcnCombobox: ComponentConfig = {
    label: "Combobox",
    defaultProps: { placeholder: "Search frameworks...", options: ["React", "Vue", "Angular", "Svelte", "Next.js"] },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
        options: {
            type: "array", label: "Options",
            arrayFields: { label: { type: "text", label: "Option" } },
        },
    },
    render: (props: Props) => (
        <div style={{
            ...inputBaseStyle,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer", color: "#71717a",
        }}>
            <span>{props.placeholder}</span>
            <span style={{ fontSize: "0.7rem" }}>⌕</span>
        </div>
    ),
};
