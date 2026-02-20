"use client";

import type { ComponentConfig } from "@measured/puck";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

// ── Overlay & Dialog Blocks (Static Previews) ───────────

export const ShadcnDialog: ComponentConfig = {
    label: "Dialog",
    defaultProps: {
        title: "Edit Profile",
        description: "Make changes to your profile here. Click save when you're done.",
        triggerLabel: "Open Dialog",
        showFooter: true,
    },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        triggerLabel: { type: "text", label: "Trigger Label" },
        showFooter: { type: "radio", label: "Show Footer", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    },
    render: (props: Props) => (
        <div style={{ position: "relative" }}>
            {/* Trigger */}
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none",
                background: "#18181b", color: "#fafafa", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer",
            }}>
                {props.triggerLabel}
            </button>
            {/* Preview overlay */}
            <div style={{
                marginTop: "0.75rem", border: "1px solid #e4e4e7", borderRadius: "0.75rem",
                background: "#fff", padding: "1.5rem", maxWidth: "425px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)", position: "relative",
            }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.5rem" }}>{props.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#71717a", lineHeight: 1.5, marginBottom: "1rem" }}>{props.description}</p>
                {props.showFooter && (
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                        <button style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8", background: "transparent", fontSize: "0.875rem", cursor: "pointer" }}>Cancel</button>
                        <button style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none", background: "#18181b", color: "#fafafa", fontSize: "0.875rem", cursor: "pointer" }}>Save</button>
                    </div>
                )}
            </div>
        </div>
    ),
};

export const ShadcnAlertDialog: ComponentConfig = {
    label: "Alert Dialog",
    defaultProps: {
        title: "Are you absolutely sure?",
        description: "This action cannot be undone. This will permanently delete your account.",
        triggerLabel: "Delete Account",
        confirmLabel: "Continue",
        cancelLabel: "Cancel",
    },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        triggerLabel: { type: "text", label: "Trigger Label" },
        confirmLabel: { type: "text", label: "Confirm Label" },
        cancelLabel: { type: "text", label: "Cancel Label" },
    },
    render: (props: Props) => (
        <div>
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                background: "transparent", fontSize: "0.875rem", cursor: "pointer",
            }}>
                {props.triggerLabel}
            </button>
            <div style={{
                marginTop: "0.75rem", border: "1px solid #e4e4e7", borderRadius: "0.75rem",
                background: "#fff", padding: "1.5rem", maxWidth: "425px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.5rem" }}>{props.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#71717a", lineHeight: 1.5, marginBottom: "1.25rem" }}>{props.description}</p>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                    <button style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8", background: "transparent", fontSize: "0.875rem", cursor: "pointer" }}>{props.cancelLabel}</button>
                    <button style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none", background: "#ef4444", color: "#fff", fontSize: "0.875rem", cursor: "pointer" }}>{props.confirmLabel}</button>
                </div>
            </div>
        </div>
    ),
};

export const ShadcnSheet: ComponentConfig = {
    label: "Sheet",
    defaultProps: {
        title: "Edit Profile",
        description: "Make changes to your profile. Click save when done.",
        triggerLabel: "Open Sheet",
        side: "right",
    },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        triggerLabel: { type: "text", label: "Trigger Label" },
        side: {
            type: "select", label: "Side",
            options: [
                { label: "Right", value: "right" },
                { label: "Left", value: "left" },
                { label: "Top", value: "top" },
                { label: "Bottom", value: "bottom" },
            ],
        },
    },
    render: (props: Props) => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                background: "transparent", fontSize: "0.875rem", cursor: "pointer",
            }}>
                {props.triggerLabel}
            </button>
            <div style={{
                width: "320px", border: "1px solid #e4e4e7", borderRadius: "0.75rem",
                background: "#fff", padding: "1.5rem", boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>{props.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#71717a", lineHeight: 1.5, marginBottom: "1rem" }}>{props.description}</p>
                <div style={{ fontSize: "0.75rem", color: "#a1a1aa", fontStyle: "italic" }}>Side: {props.side}</div>
            </div>
        </div>
    ),
};

export const ShadcnPopover: ComponentConfig = {
    label: "Popover",
    defaultProps: {
        triggerLabel: "Open Popover",
        content: "Place content for the popover here.",
        width: 280,
    },
    fields: {
        triggerLabel: { type: "text", label: "Trigger Label" },
        content: { type: "textarea", label: "Content" },
        width: { type: "number", label: "Width (px)", min: 150, max: 500 },
    },
    render: (props: Props) => (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                background: "transparent", fontSize: "0.875rem", cursor: "pointer",
            }}>
                {props.triggerLabel}
            </button>
            <div style={{
                marginTop: "0.5rem", width: `${props.width}px`, padding: "1rem",
                border: "1px solid #e4e4e7", borderRadius: "0.75rem", background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)", fontSize: "0.875rem", lineHeight: 1.5,
            }}>
                {props.content}
            </div>
        </div>
    ),
};

export const ShadcnTooltip: ComponentConfig = {
    label: "Tooltip",
    defaultProps: { triggerLabel: "Hover me", tooltip: "This is a tooltip" },
    fields: {
        triggerLabel: { type: "text", label: "Trigger" },
        tooltip: { type: "text", label: "Tooltip Text" },
    },
    render: (props: Props) => (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                background: "transparent", fontSize: "0.875rem", cursor: "pointer",
            }}>
                {props.triggerLabel}
            </button>
            <div style={{
                marginTop: "0.375rem", padding: "0.375rem 0.75rem", background: "#18181b",
                color: "#fafafa", borderRadius: "0.375rem", fontSize: "0.75rem",
                whiteSpace: "nowrap",
            }}>
                {props.tooltip}
            </div>
        </div>
    ),
};

export const ShadcnDropdownMenu: ComponentConfig = {
    label: "Dropdown Menu",
    defaultProps: {
        triggerLabel: "Open Menu",
        items: [
            { label: "Profile", shortcut: "⇧⌘P" },
            { label: "Settings", shortcut: "⌘S" },
            { label: "Keyboard shortcuts", shortcut: "⌘K" },
            { label: "---", shortcut: "" },
            { label: "Log out", shortcut: "" },
        ],
    },
    fields: {
        triggerLabel: { type: "text", label: "Trigger Label" },
        items: {
            type: "array", label: "Items",
            arrayFields: {
                label: { type: "text", label: "Label (use --- for separator)" },
                shortcut: { type: "text", label: "Shortcut" },
            },
        },
    },
    render: (props: Props) => (
        <div style={{ display: "inline-block" }}>
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                background: "transparent", fontSize: "0.875rem", cursor: "pointer",
            }}>
                {props.triggerLabel} ▼
            </button>
            <div style={{
                marginTop: "0.25rem", minWidth: "200px", border: "1px solid #e4e4e7",
                borderRadius: "0.5rem", background: "#fff", padding: "0.25rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}>
                {(props.items ?? []).map((item: { label: string; shortcut: string }, i: number) =>
                    item.label === "---" ? (
                        <div key={i} style={{ height: "1px", background: "#e4e4e7", margin: "0.25rem 0" }} />
                    ) : (
                        <div key={i} style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "0.375rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.875rem",
                            cursor: "pointer",
                        }}>
                            <span>{item.label}</span>
                            {item.shortcut && <span style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>{item.shortcut}</span>}
                        </div>
                    )
                )}
            </div>
        </div>
    ),
};

export const ShadcnContextMenu: ComponentConfig = {
    label: "Context Menu",
    defaultProps: {
        triggerText: "Right click here",
        items: ["Back", "Forward", "Reload", "---", "Save As...", "Print...", "---", "View Source"],
    },
    fields: {
        triggerText: { type: "text", label: "Trigger Text" },
        items: {
            type: "array", label: "Items",
            arrayFields: { label: { type: "text", label: "Item (--- for separator)" } },
        },
    },
    render: (props: Props) => (
        <div>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                height: "150px", width: "300px", border: "2px dashed #d4d4d8",
                borderRadius: "0.75rem", color: "#71717a", fontSize: "0.875rem",
            }}>
                {props.triggerText}
            </div>
        </div>
    ),
};

export const ShadcnMenubar: ComponentConfig = {
    label: "Menubar",
    defaultProps: {
        menus: [
            { label: "File" },
            { label: "Edit" },
            { label: "View" },
            { label: "Help" },
        ],
    },
    fields: {
        menus: {
            type: "array", label: "Menus",
            arrayFields: { label: { type: "text", label: "Label" } },
        },
    },
    render: (props: Props) => (
        <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.125rem",
            border: "1px solid #e4e4e7", borderRadius: "0.5rem", padding: "0.25rem",
            background: "#fff",
        }}>
            {(props.menus ?? []).map((menu: { label: string }, i: number) => (
                <div key={i} style={{
                    padding: "0.375rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.875rem",
                    fontWeight: 500, cursor: "pointer", color: "#18181b",
                }}>
                    {menu.label}
                </div>
            ))}
        </div>
    ),
};

export const ShadcnCommand: ComponentConfig = {
    label: "Command Palette",
    defaultProps: {
        placeholder: "Type a command or search...",
        groups: [
            {
                label: "Suggestions",
                items: ["Calendar", "Search Emoji", "Calculator"],
            },
            {
                label: "Settings",
                items: ["Profile", "Billing", "Settings"],
            },
        ],
    },
    fields: {
        placeholder: { type: "text", label: "Placeholder" },
        groups: {
            type: "array", label: "Groups",
            arrayFields: {
                label: { type: "text", label: "Group Label" },
                items: {
                    type: "array", label: "Items",
                    arrayFields: { label: { type: "text", label: "Item" } },
                },
            },
        },
    },
    render: (props: Props) => (
        <div style={{
            border: "1px solid #e4e4e7", borderRadius: "0.75rem", overflow: "hidden",
            background: "#fff", maxWidth: "400px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
            <div style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.75rem 1rem", borderBottom: "1px solid #e4e4e7",
            }}>
                <span style={{ color: "#a1a1aa" }}>⌕</span>
                <span style={{ fontSize: "0.875rem", color: "#a1a1aa" }}>{props.placeholder}</span>
            </div>
            {(props.groups ?? []).map((group: { label: string; items: string[] }, gi: number) => (
                <div key={gi}>
                    <div style={{ padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: 500, color: "#a1a1aa" }}>{group.label}</div>
                    {(group.items ?? []).map((item: string, ii: number) => (
                        <div key={ii} style={{
                            padding: "0.5rem 1rem", fontSize: "0.875rem", cursor: "pointer",
                            display: "flex", alignItems: "center", gap: "0.5rem",
                        }}>
                            <span style={{ color: "#71717a" }}>○</span>
                            {typeof item === "string" ? item : "Item"}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    ),
};

export const ShadcnHoverCard: ComponentConfig = {
    label: "Hover Card",
    defaultProps: {
        triggerLabel: "@nextjs",
        title: "Next.js",
        description: "The React Framework for Production – by Vercel.",
        footer: "Joined December 2021",
    },
    fields: {
        triggerLabel: { type: "text", label: "Trigger Label" },
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        footer: { type: "text", label: "Footer" },
    },
    render: (props: Props) => (
        <div style={{ display: "inline-block" }}>
            <span style={{ color: "#2563eb", textDecoration: "underline", cursor: "pointer", fontSize: "0.875rem" }}>
                {props.triggerLabel}
            </span>
            <div style={{
                marginTop: "0.5rem", width: "320px", padding: "1rem",
                border: "1px solid #e4e4e7", borderRadius: "0.75rem", background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}>
                <h4 style={{ fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{props.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#71717a", lineHeight: 1.5, marginBottom: "0.5rem" }}>{props.description}</p>
                <span style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>{props.footer}</span>
            </div>
        </div>
    ),
};

export const ShadcnDrawer: ComponentConfig = {
    label: "Drawer",
    defaultProps: {
        title: "Move Goal",
        description: "Set your daily activity goal.",
        triggerLabel: "Open Drawer",
    },
    fields: {
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
        triggerLabel: { type: "text", label: "Trigger Label" },
    },
    render: (props: Props) => (
        <div>
            <button style={{
                padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d4d4d8",
                background: "transparent", fontSize: "0.875rem", cursor: "pointer",
            }}>
                {props.triggerLabel}
            </button>
            <div style={{
                marginTop: "0.75rem", border: "1px solid #e4e4e7", borderRadius: "0.75rem 0.75rem 0 0",
                background: "#fff", padding: "1.5rem", maxWidth: "400px",
                boxShadow: "0 -4px 12px rgba(0,0,0,0.08)",
            }}>
                <div style={{ width: "3rem", height: "0.25rem", background: "#d4d4d8", borderRadius: "9999px", margin: "0 auto 1rem" }} />
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, textAlign: "center", marginBottom: "0.25rem" }}>{props.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#71717a", textAlign: "center", lineHeight: 1.5 }}>{props.description}</p>
            </div>
        </div>
    ),
};
