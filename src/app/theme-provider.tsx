"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
    theme: Theme;
    resolved: "light" | "dark";
    setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: "system",
    resolved: "light",
    setTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

function getSystemPref(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolved, setResolved] = useState<"light" | "dark">("light");

    // Read saved preference on mount
    useEffect(() => {
        const saved = localStorage.getItem("puck-theme") as Theme | null;
        if (saved && ["light", "dark", "system"].includes(saved)) {
            setThemeState(saved);
        }
    }, []);

    // Resolve and apply the theme
    useEffect(() => {
        const apply = () => {
            const res = theme === "system" ? getSystemPref() : theme;
            setResolved(res);
            document.documentElement.classList.toggle("dark", res === "dark");
        };

        apply();

        // Listen for OS preference changes when in system mode
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => { if (theme === "system") apply(); };
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme]);

    const setTheme = useCallback((t: Theme) => {
        setThemeState(t);
        localStorage.setItem("puck-theme", t);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, resolved, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
