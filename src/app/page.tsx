"use client";

import { Puck, type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { puckConfig } from "./puck-config";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Data as PuckData } from "@measured/puck";
import { useTheme } from "./theme-provider";
import { presetThemes, injectThemeCSS, removeThemeCSS } from "./themes";
import { ThemeCSSModal } from "./theme-css-modal";
import {
  Sun,
  Moon,
  Monitor,
  Video,
  StickyNote,
  Type,
  Layout,
  Grid,
  Box,
  Image as ImageIcon,
  Download,
  Eye,
  Plus,
  Trash2,
  FolderOpen,
  Palette,
  Check,
  ChevronsUpDown,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000/api";

interface PageState {
  id: string;
  title: string;
  route: string;
  data: Data;
}

const initialData: Data = {
  content: [],
  root: { props: {} },
  zones: {},
};

export default function Editor() {
  const [mounted, setMounted] = useState(false);
  const [openCombobox, setOpenCombobox] = useState(false);
  const [pages, setPages] = useState<PageState[]>([
    { id: "index", title: "Home", route: "/", data: initialData },
  ]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [projectName, setProjectName] = useState("My Website");
  const [isExporting, setIsExporting] = useState(false);
  const [showPagePanel, setShowPagePanel] = useState(true);
  const [selectedThemeId, setSelectedThemeId] = useState("default");
  const [customCSS, setCustomCSS] = useState("");
  const [showCSSModal, setShowCSSModal] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedPages = localStorage.getItem("puck-builder-pages");
      if (savedPages) setPages(JSON.parse(savedPages));

      const savedActivePage = localStorage.getItem("puck-builder-active-page");
      if (savedActivePage) setActivePageIndex(parseInt(savedActivePage, 10) || 0);

      const savedName = localStorage.getItem("puck-builder-project-name");
      if (savedName) setProjectName(savedName);

      const savedTheme = localStorage.getItem("puck-builder-theme-id");
      if (savedTheme) setSelectedThemeId(savedTheme);

      const savedCSS = localStorage.getItem("puck-builder-custom-css");
      if (savedCSS) setCustomCSS(savedCSS);
    } catch (e) { }
    setMounted(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("puck-builder-pages", JSON.stringify(pages));
    localStorage.setItem("puck-builder-active-page", activePageIndex.toString());
    localStorage.setItem("puck-builder-project-name", projectName);
    localStorage.setItem("puck-builder-theme-id", selectedThemeId);
    localStorage.setItem("puck-builder-custom-css", customCSS);
  }, [pages, activePageIndex, projectName, selectedThemeId, customCSS, mounted]);

  const { theme, setTheme, resolved } = useTheme();

  const activePage = pages[activePageIndex] || pages[0];

  // Theme CSS Variables (for sidebar; Puck has its own styling)
  const isDark = resolved === "dark";

  const colors = {
    sidebarBg: isDark ? "#1a1a1a" : "#fafafa",
    sidebarBorder: isDark ? "#333" : "#e5e5e5",
    text: isDark ? "#e5e5e5" : "#111",
    textMuted: isDark ? "#999" : "#888",
    textSecondary: isDark ? "#aaa" : "#555",
    activeBg: isDark ? "#2a2a2a" : "#e8e2dc",
    hoverBg: isDark ? "#252525" : "#f0ece8",
    inputBg: isDark ? "#252525" : "transparent",
    btnBg: isDark ? "#333" : "#fff",
    btnBorder: isDark ? "#444" : "#ddd",
    btnShadow: isDark ? "0 1px 3px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.1)",
    primary: "#c2410c",
    primaryHover: "#ea580c",
  };

  // Page Management
  const addPage = useCallback(() => {
    const pageName = prompt("Enter page name:");
    if (!pageName) return;
    const route = "/" + pageName.toLowerCase().replace(/\s+/g, "-");
    setPages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: pageName, route, data: initialData },
    ]);
  }, []);

  const deletePage = useCallback(
    (index: number) => {
      if (pages.length <= 1) { alert("You must have at least one page."); return; }
      if (!confirm(`Delete "${pages[index].title}"?`)) return;
      setPages((prev) => prev.filter((_, i) => i !== index));
      setActivePageIndex((prev) => Math.max(0, prev - 1));
    },
    [pages]
  );

  const renamePage = useCallback(
    (index: number) => {
      const name = prompt("Rename page:", pages[index].title);
      if (!name) return;
      setPages((prev) =>
        prev.map((p, i) =>
          i === index ? { ...p, title: name, route: "/" + name.toLowerCase().replace(/\s+/g, "-") } : p
        )
      );
    },
    [pages]
  );

  const handlePublish = useCallback(
    (data: Data) => {
      setPages((prev) => prev.map((p, i) => (i === activePageIndex ? { ...p, data } : p)));
      alert(`Page "${activePage.title}" saved!`);
    },
    [activePageIndex, activePage]
  );

  // Keep a ref to the latest editor data so preview always uses current state
  const latestDataRef = useRef<PuckData>(activePage.data);

  const handleEditorChange = useCallback((data: PuckData) => {
    latestDataRef.current = data;
    try {
      localStorage.setItem("puck-preview-data", JSON.stringify(data));
    } catch (err) { }
  }, []);

  const handlePreview = useCallback(() => {
    const latestData = latestDataRef.current;
    try {
      localStorage.setItem("puck-preview-data", JSON.stringify(latestData));
      localStorage.setItem("puck-preview-title", activePage.title);
      // Pass selected theme CSS to preview
      const activeThemeCSS = selectedThemeId === "custom"
        ? customCSS
        : presetThemes.find((t) => t.id === selectedThemeId)?.cssText ?? "";
      localStorage.setItem("puck-preview-theme", activeThemeCSS);
    } catch (err) {
      console.error("Failed to store preview data:", err);
    }
    window.open("/preview", "_blank");
  }, [activePage, selectedThemeId, customCSS]);

  // Theme injection effect
  useEffect(() => {
    if (selectedThemeId === "default") {
      removeThemeCSS();
      return;
    }
    if (selectedThemeId === "custom") {
      if (customCSS.trim()) injectThemeCSS(customCSS);
      else removeThemeCSS();
      return;
    }
    const preset = presetThemes.find((t) => t.id === selectedThemeId);
    if (preset) injectThemeCSS(preset.cssText);
  }, [selectedThemeId, customCSS]);

  const handleThemeSelect = useCallback((themeId: string) => {
    if (themeId === "custom") {
      setShowCSSModal(true);
      return;
    }
    setSelectedThemeId(themeId);
  }, []);

  const handleApplyCustomCSS = useCallback((css: string) => {
    setCustomCSS(css);
    setSelectedThemeId("custom");
  }, []);

  // Export
  const handleExport = useCallback(async () => {
    setIsExporting(true);
    try {
      // Determine the active theme CSS to send to backend
      const activeThemeCSS = selectedThemeId === "custom"
        ? customCSS
        : selectedThemeId === "default"
          ? ""
          : presetThemes.find((t) => t.id === selectedThemeId)?.cssText ?? "";

      const projectRes = await fetch(`${BACKEND_URL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: projectName, themeCSS: activeThemeCSS || undefined }),
      });
      const project = await projectRes.json();
      for (const page of pages) {
        await fetch(`${BACKEND_URL}/projects/${project.id}/pages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: page.title, route: page.route, puckData: page.data }),
        });
      }
      const exportRes = await fetch(`${BACKEND_URL}/export/${project.id}`);
      const blob = await exportRes.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${projectName.toLowerCase().replace(/\s+/g, "-")}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
      alert("Export failed. Is the backend running?");
    } finally {
      setIsExporting(false);
    }
  }, [pages, projectName, selectedThemeId, customCSS]);

  // Theme cycle helper
  const themeIcon = theme === "light" ? <Sun size={14} /> : theme === "dark" ? <Moon size={14} /> : <Monitor size={14} />;
  const themeLabel = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";
  const cycleTheme = () => {
    const order: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const next = order[(order.indexOf(theme) + 1) % 3];
    setTheme(next);
  };

  // Icon button helper
  const iconBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    borderRadius: "4px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.textMuted,
    transition: "color 150ms, background 150ms",
  };

  if (!mounted) {
    return (
      <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", background: "#fafafa" }}>
        Loading Editor...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Left Sidebar: Page Manager */}
      {showPagePanel && (
        <aside
          style={{
            width: "260px",
            background: colors.sidebarBg,
            borderRight: `1px solid ${colors.sidebarBorder}`,
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "1rem",
              borderBottom: `1px solid ${colors.sidebarBorder}`,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  background: "linear-gradient(135deg, #c2410c, #ea580c)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                }}
              >
                P
              </div>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                style={{
                  background: colors.inputBg,
                  border: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  width: "100%",
                  outline: "none",
                  color: colors.text,
                }}
              />
            </div>

            {/* Export + Theme row */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={handleExport}
                disabled={isExporting}
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  background: isExporting ? (isDark ? "#444" : "#ccc") : colors.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 600,
                  cursor: isExporting ? "not-allowed" : "pointer",
                  fontSize: "0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <Download size={14} />
                {isExporting ? "Exporting..." : "Export ZIP"}
              </button>

              <button
                onClick={cycleTheme}
                title={`Theme: ${themeLabel}`}
                style={{
                  padding: "0.5rem 0.65rem",
                  background: colors.btnBg,
                  border: `1px solid ${colors.btnBorder}`,
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  color: colors.text,
                  fontSize: "0.75rem",
                  fontWeight: 500,
                }}
              >
                {themeIcon}
              </button>
            </div>

            {/* Preview button */}
            <button
              onClick={handlePreview}
              style={{
                width: "100%",
                padding: "0.5rem",
                background: "none",
                border: `1px solid ${colors.btnBorder}`,
                borderRadius: "6px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.8rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                color: colors.text,
                transition: "background 150ms",
              }}
              title="Preview page in new tab"
            >
              <Eye size={14} /> Preview
            </button>

            {/* Theme selector (Shadcn Combobox) */}
            <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCombobox}
                  className="w-full justify-between"
                  style={{
                    background: colors.btnBg,
                    border: `1px solid ${colors.btnBorder}`,
                    color: colors.text,
                  }}
                >
                  <span className="flex items-center gap-2 truncate">
                    <Palette size={14} className="opacity-50" />
                    {selectedThemeId === "custom"
                      ? "Custom..."
                      : presetThemes.find((theme) => theme.id === selectedThemeId)?.name || "Select theme..."}
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0" side="right" align="start">
                <Command>
                  <CommandInput placeholder="Search theme..." />
                  <CommandList>
                    <CommandEmpty>No theme found.</CommandEmpty>
                    <CommandGroup heading="Preset Themes">
                      {presetThemes.map((theme) => (
                        <CommandItem
                          key={theme.id}
                          value={theme.name}
                          onSelect={() => {
                            handleThemeSelect(theme.id);
                            setOpenCombobox(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedThemeId === theme.id ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <div className="flex items-center gap-2">
                            <div
                              className="h-3 w-3 rounded-full border border-gray-300"
                              style={{ background: theme.swatch }}
                            />
                            {theme.name}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Custom">
                      <CommandItem
                        value="Custom..."
                        onSelect={() => {
                          handleThemeSelect("custom");
                          setOpenCombobox(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedThemeId === "custom" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Custom...
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Page List */}
          <div style={{ padding: "0.75rem", flex: 1, overflowY: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: colors.textMuted,
                }}
              >
                Pages
              </span>
              <button
                onClick={addPage}
                style={{
                  background: "none",
                  border: `1px solid ${colors.btnBorder}`,
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  padding: "2px 8px",
                  color: colors.textSecondary,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Plus size={12} /> Add
              </button>
            </div>

            {pages.map((page, i) => (
              <div
                key={page.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5rem 0.6rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: i === activePageIndex ? colors.activeBg : "transparent",
                  marginBottom: "2px",
                  transition: "background 150ms",
                }}
                onClick={() => setActivePageIndex(i)}
              >
                <div>
                  <div style={{ fontWeight: i === activePageIndex ? 600 : 400, fontSize: "0.85rem", color: colors.text }}>
                    {page.title}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: colors.textMuted }}>
                    {page.route}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); renamePage(i); }}
                    style={iconBtnStyle}
                    title="Rename"
                  >
                    <Pencil size={13} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); deletePage(i); }}
                    style={iconBtnStyle}
                    title="Delete"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* Toggle sidebar button */}
      <button
        onClick={() => setShowPagePanel(!showPagePanel)}
        style={{
          position: "absolute",
          top: "10px",
          left: showPagePanel ? "268px" : "8px",
          zIndex: 1000,
          background: colors.btnBg,
          border: `1px solid ${colors.btnBorder}`,
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
          fontSize: "0.8rem",
          boxShadow: colors.btnShadow,
          transition: "left 150ms",
          display: "inline-flex",
          alignItems: "center",
          color: colors.text,
        }}
      >
        {showPagePanel ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* Puck Editor */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Puck
          key={activePage.id}
          config={puckConfig}
          data={activePage.data}
          onPublish={handlePublish}
          onChange={handleEditorChange}
        />
      </div>
      {/* Custom CSS Modal */}
      <ThemeCSSModal
        isOpen={showCSSModal}
        onClose={() => setShowCSSModal(false)}
        onApply={handleApplyCustomCSS}
        initialCSS={customCSS}
      />
    </div>
  );
}
