"use client";

import { Render } from "@measured/puck";
import "@measured/puck/puck.css";
import { puckConfig } from "../puck-config";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Data } from "@measured/puck";

export default function PreviewPage() {
    const [pageData, setPageData] = useState<Data | null>(null);
    const [pageTitle, setPageTitle] = useState("Preview");

    useEffect(() => {
        const loadPreviewData = () => {
            try {
                const raw = localStorage.getItem("puck-preview-data");
                const title = localStorage.getItem("puck-preview-title");
                const themeCSS = localStorage.getItem("puck-preview-theme");
                if (raw) {
                    setPageData(JSON.parse(raw));
                }
                if (title) {
                    setPageTitle(title);
                }
                // Inject selected theme CSS into the preview page
                if (themeCSS && themeCSS.trim()) {
                    let el = document.getElementById("puck-theme-override") as HTMLStyleElement | null;
                    if (!el) {
                        el = document.createElement("style");
                        el.id = "puck-theme-override";
                        document.head.appendChild(el);
                    }
                    el.textContent = themeCSS;
                } else {
                    const el = document.getElementById("puck-theme-override");
                    if (el) el.textContent = "";
                }
            } catch (err) {
                console.error("Failed to load preview data:", err);
            }
        };

        loadPreviewData();

        window.addEventListener("storage", loadPreviewData);
        return () => window.removeEventListener("storage", loadPreviewData);
    }, []);

    if (!pageData) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    fontFamily: "'Inter', sans-serif",
                    color: "#666",
                    gap: "1rem",
                }}
            >
                <p style={{ fontSize: "1.1rem" }}>No preview data available.</p>
                <p style={{ fontSize: "0.85rem", color: "#999" }}>
                    Go back to the editor, build your page, then click &quot;Preview&quot;.
                </p>
                <a
                    href="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "0.5rem 1.25rem",
                        background: "#c2410c",
                        color: "#fff",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                    }}
                >
                    <ArrowLeft size={16} /> Back to Editor
                </a>
            </div>
        );
    }

    return (
        <div>
            {/* Floating preview bar */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    background: "rgba(26, 26, 26, 0.95)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 1.5rem",
                    fontSize: "0.85rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <a
                        href="/"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "0.35rem 0.75rem",
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "6px",
                            fontWeight: 500,
                            fontSize: "0.8rem",
                            transition: "background 150ms",
                        }}
                    >
                        <ArrowLeft size={14} /> Editor
                    </a>
                    <span style={{ fontWeight: 600 }}>Preview: {pageTitle}</span>
                </div>
                <span
                    style={{
                        padding: "0.2rem 0.6rem",
                        background: "#c2410c",
                        borderRadius: "4px",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                    }}
                >
                    Preview Mode
                </span>
            </div>

            {/* Rendered page content */}
            <div style={{ paddingTop: "48px" }}>
                <Render config={puckConfig} data={pageData} />
            </div>
        </div>
    );
}
