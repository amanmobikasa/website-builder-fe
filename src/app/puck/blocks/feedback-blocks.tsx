"use client";

import type { ComponentConfig } from "@measured/puck";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

// ── Feedback & Status Blocks ────────────────────────────

export const ShadcnAlert: ComponentConfig = {
    label: "Alert",
    defaultProps: {
        title: "Heads up!",
        description: "You can add components to your app using the CLI.",
        variant: "default",
        icon: "ℹ️",
    },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        variant: {
            type: "select", label: "Variant",
            options: [
                { label: "Default", value: "default" },
                { label: "Destructive", value: "destructive" },
            ],
        },
        icon: { type: "text", label: "Icon (emoji)" },
    },
    render: (props: Props) => {
        const isDestructive = props.variant === "destructive";
        return (
            <div style={{
                padding: "1rem", borderRadius: "0.75rem",
                border: `1px solid ${isDestructive ? "#fca5a5" : "#e4e4e7"}`,
                background: isDestructive ? "#fef2f2" : "#fff",
                display: "flex", gap: "0.75rem",
            }}>
                {props.icon && <span style={{ fontSize: "1rem", flexShrink: 0 }}>{props.icon}</span>}
                <div>
                    <h5 style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem", color: isDestructive ? "#dc2626" : "#18181b" }}>
                        {props.title}
                    </h5>
                    <p style={{ fontSize: "0.875rem", color: isDestructive ? "#b91c1c" : "#71717a", lineHeight: 1.5, margin: 0 }}>
                        {props.description}
                    </p>
                </div>
            </div>
        );
    },
};

export const ShadcnBadge: ComponentConfig = {
    label: "Badge",
    defaultProps: { text: "Badge", variant: "default" },
    fields: {
        text: { type: "text", label: "Text" },
        variant: {
            type: "select", label: "Variant",
            options: [
                { label: "Default", value: "default" },
                { label: "Secondary", value: "secondary" },
                { label: "Outline", value: "outline" },
                { label: "Destructive", value: "destructive" },
            ],
        },
    },
    render: (props: Props) => {
        const variants: Record<string, React.CSSProperties> = {
            default: { background: "#18181b", color: "#fafafa", border: "1px solid transparent" },
            secondary: { background: "#f4f4f5", color: "#18181b", border: "1px solid transparent" },
            outline: { background: "transparent", color: "#18181b", border: "1px solid #d4d4d8" },
            destructive: { background: "#ef4444", color: "#fff", border: "1px solid transparent" },
        };
        return (
            <span style={{
                display: "inline-flex", alignItems: "center", borderRadius: "9999px",
                padding: "0.125rem 0.625rem", fontSize: "0.75rem", fontWeight: 600,
                lineHeight: "1.25rem", ...(variants[props.variant] ?? variants.default),
            }}>
                {props.text}
            </span>
        );
    },
};

export const ShadcnProgress: ComponentConfig = {
    label: "Progress",
    defaultProps: { value: 60, showLabel: true },
    fields: {
        value: { type: "number", label: "Value (%)", min: 0, max: 100 },
        showLabel: { type: "radio", label: "Show Label", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => (
        <div>
            {props.showLabel && (
                <div style={{ fontSize: "0.75rem", color: "#71717a", marginBottom: "0.25rem", textAlign: "right" }}>
                    {props.value}%
                </div>
            )}
            <div style={{ height: "0.5rem", borderRadius: "9999px", background: "#e4e4e7", overflow: "hidden" }}>
                <div style={{ height: "100%", borderRadius: "9999px", background: "#18181b", width: `${props.value ?? 0}%`, transition: "width 300ms" }} />
            </div>
        </div>
    ),
};

export const ShadcnSpinner: ComponentConfig = {
    label: "Spinner",
    defaultProps: { size: "default", label: "" },
    fields: {
        size: {
            type: "select", label: "Size",
            options: [
                { label: "Small", value: "sm" },
                { label: "Default", value: "default" },
                { label: "Large", value: "lg" },
            ],
        },
        label: { type: "text", label: "Label (optional)" },
    },
    render: (props: Props) => {
        const sizeMap: Record<string, string> = { sm: "1rem", default: "1.5rem", lg: "2rem" };
        const sz = sizeMap[props.size] ?? "1.5rem";
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{
                    width: sz, height: sz, borderRadius: "50%",
                    border: "2px solid #e4e4e7", borderTopColor: "#18181b",
                    animation: "spin 0.7s linear infinite",
                }} />
                {props.label && <span style={{ fontSize: "0.875rem", color: "#71717a" }}>{props.label}</span>}
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    },
};

export const ShadcnSkeleton: ComponentConfig = {
    label: "Skeleton",
    defaultProps: { variant: "card", lines: 3 },
    fields: {
        variant: {
            type: "select", label: "Variant",
            options: [
                { label: "Card", value: "card" },
                { label: "Text Lines", value: "text" },
                { label: "Avatar + Text", value: "avatar" },
                { label: "Image", value: "image" },
            ],
        },
        lines: { type: "number", label: "Lines (text variant)", min: 1, max: 10 },
    },
    render: (props: Props) => {
        const pulse: React.CSSProperties = {
            background: "linear-gradient(90deg, #f4f4f5 25%, #e4e4e7 50%, #f4f4f5 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            borderRadius: "0.5rem",
        };

        if (props.variant === "avatar") {
            return (
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ ...pulse, width: "3rem", height: "3rem", borderRadius: "50%", flexShrink: 0 }} />
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div style={{ ...pulse, height: "1rem", width: "50%" }} />
                        <div style={{ ...pulse, height: "0.75rem", width: "80%" }} />
                    </div>
                    <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
                </div>
            );
        }
        if (props.variant === "image") {
            return (
                <div>
                    <div style={{ ...pulse, height: "200px", width: "100%", marginBottom: "0.75rem" }} />
                    <div style={{ ...pulse, height: "1rem", width: "70%", marginBottom: "0.5rem" }} />
                    <div style={{ ...pulse, height: "0.75rem", width: "50%" }} />
                    <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
                </div>
            );
        }
        if (props.variant === "text") {
            return (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {Array.from({ length: props.lines ?? 3 }).map((_, i) => (
                        <div key={i} style={{ ...pulse, height: "0.875rem", width: `${100 - i * 10}%` }} />
                    ))}
                    <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
                </div>
            );
        }
        // card
        return (
            <div style={{ border: "1px solid #e4e4e7", borderRadius: "0.75rem", padding: "1.5rem" }}>
                <div style={{ ...pulse, height: "1.25rem", width: "40%", marginBottom: "0.75rem" }} />
                <div style={{ ...pulse, height: "0.875rem", width: "100%", marginBottom: "0.5rem" }} />
                <div style={{ ...pulse, height: "0.875rem", width: "80%", marginBottom: "1rem" }} />
                <div style={{ ...pulse, height: "2.5rem", width: "30%" }} />
                <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
            </div>
        );
    },
};

export const ShadcnEmpty: ComponentConfig = {
    label: "Empty State",
    defaultProps: {
        icon: "📭",
        title: "No results found",
        description: "Try adjusting your search or filter to find what you're looking for.",
        actionLabel: "Clear Filters",
    },
    fields: {
        icon: { type: "text", label: "Icon (emoji)" },
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        actionLabel: { type: "text", label: "Action Label" },
    },
    render: (props: Props) => (
        <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", padding: "3rem 2rem", textAlign: "center",
            border: "2px dashed #e4e4e7", borderRadius: "0.75rem", minHeight: "200px",
        }}>
            <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{props.icon}</span>
            <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{props.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "#71717a", maxWidth: "320px", lineHeight: 1.5, marginBottom: "1rem" }}>
                {props.description}
            </p>
            {props.actionLabel && (
                <button style={{
                    padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                    background: "transparent", fontSize: "0.875rem", cursor: "pointer",
                }}>
                    {props.actionLabel}
                </button>
            )}
        </div>
    ),
};

export const ShadcnToast: ComponentConfig = {
    label: "Toast",
    defaultProps: {
        title: "Event has been created",
        description: "Sunday, February 19, 2026 at 5:57 PM",
        variant: "default",
        actionLabel: "Undo",
    },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description" },
        variant: {
            type: "select", label: "Variant",
            options: [
                { label: "Default", value: "default" },
                { label: "Destructive", value: "destructive" },
                { label: "Success", value: "success" },
            ],
        },
        actionLabel: { type: "text", label: "Action Label" },
    },
    render: (props: Props) => {
        const bgMap: Record<string, string> = {
            default: "#fff",
            destructive: "#fef2f2",
            success: "#f0fdf4",
        };
        const borderMap: Record<string, string> = {
            default: "#e4e4e7",
            destructive: "#fca5a5",
            success: "#86efac",
        };
        return (
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
                padding: "1rem", borderRadius: "0.75rem",
                border: `1px solid ${borderMap[props.variant] ?? borderMap.default}`,
                background: bgMap[props.variant] ?? bgMap.default,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)", maxWidth: "400px",
            }}>
                <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.125rem" }}>{props.title}</div>
                    <div style={{ fontSize: "0.8rem", color: "#71717a" }}>{props.description}</div>
                </div>
                {props.actionLabel && (
                    <button style={{
                        padding: "0.375rem 0.75rem", borderRadius: "0.375rem",
                        border: "1px solid #d4d4d8", background: "transparent",
                        fontSize: "0.8rem", cursor: "pointer", whiteSpace: "nowrap",
                    }}>
                        {props.actionLabel}
                    </button>
                )}
            </div>
        );
    },
};
