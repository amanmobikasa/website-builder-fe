"use client";

import React, { useState } from "react";
import { X, ClipboardPaste, Check } from "lucide-react";

interface ThemeCSSModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (cssText: string) => void;
    initialCSS?: string;
}

export function ThemeCSSModal({ isOpen, onClose, onApply, initialCSS = "" }: ThemeCSSModalProps) {
    const [css, setCSS] = useState(initialCSS);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 99999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
            }}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "#1a1d2e",
                    borderRadius: "12px",
                    width: "min(640px, 90vw)",
                    maxHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 1.25rem",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "#fff" }}>
                        Theme Code
                    </h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#888",
                            cursor: "pointer",
                            padding: "4px",
                            borderRadius: "4px",
                            display: "flex",
                        }}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Hint */}
                <div
                    style={{
                        padding: "0.75rem 1.25rem",
                        fontSize: "0.8rem",
                        color: "#94a3b8",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(255,255,255,0.03)",
                    }}
                >
                    <ClipboardPaste size={14} />
                    Paste your CSS from{" "}
                    <a
                        href="https://tweakcn.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#818cf8", textDecoration: "none", fontWeight: 600 }}
                    >
                        tweakcn.com
                    </a>
                    {" "}— only <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 5px", borderRadius: "3px", fontSize: "0.75rem" }}>:root</code> and{" "}
                    <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 5px", borderRadius: "3px", fontSize: "0.75rem" }}>.dark</code> blocks are needed.
                </div>

                {/* Textarea */}
                <div style={{ padding: "0 1.25rem", flex: 1, overflow: "auto" }}>
                    <div
                        style={{
                            position: "relative",
                            borderRadius: "8px",
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.06)",
                            marginTop: "0.5rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0.5rem 0.75rem",
                                background: "rgba(255,255,255,0.04)",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    color: "#94a3b8",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                index.css
                            </span>
                        </div>
                        <textarea
                            value={css}
                            onChange={(e) => setCSS(e.target.value)}
                            placeholder={`:root {\n    --background: oklch(...);\n    --foreground: oklch(...);\n    --primary: oklch(...);\n    /* ... */\n}\n\n.dark {\n    --background: oklch(...);\n    /* ... */\n}`}
                            style={{
                                width: "100%",
                                minHeight: "320px",
                                background: "#0d1117",
                                color: "#c9d1d9",
                                border: "none",
                                outline: "none",
                                padding: "1rem",
                                fontSize: "0.8rem",
                                fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
                                lineHeight: 1.65,
                                resize: "vertical",
                                tabSize: 4,
                            }}
                            spellCheck={false}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "0.5rem",
                        padding: "1rem 1.25rem",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            padding: "0.45rem 1rem",
                            borderRadius: "6px",
                            border: "1px solid rgba(255,255,255,0.12)",
                            background: "transparent",
                            color: "#94a3b8",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onApply(css);
                            onClose();
                        }}
                        disabled={!css.trim()}
                        style={{
                            padding: "0.45rem 1rem",
                            borderRadius: "6px",
                            border: "none",
                            background: css.trim() ? "#6366f1" : "#333",
                            color: css.trim() ? "#fff" : "#666",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            cursor: css.trim() ? "pointer" : "not-allowed",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <Check size={14} /> Apply Theme
                    </button>
                </div>
            </div>
        </div>
    );
}
