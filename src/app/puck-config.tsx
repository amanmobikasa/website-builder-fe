"use client";

import type { Config } from "@measured/puck";
import React from "react";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// ── Import all Shadcn block categories ──────────────────
import {
    ShadcnButton, ShadcnButtonGroup, ShadcnInput, ShadcnInputGroup,
    ShadcnTextarea, ShadcnCheckbox, ShadcnRadioGroup, ShadcnSelect,
    ShadcnSwitch, ShadcnSlider, ShadcnLabel, ShadcnInputOTP,
    ShadcnDatePicker, ShadcnCombobox,
} from "./puck/blocks/form-blocks";

import {
    ShadcnAccordion, ShadcnBreadcrumb, ShadcnNavigationMenu,
    ShadcnTabs, ShadcnSeparator, ShadcnScrollArea,
    ShadcnResizable, ShadcnAspectRatio,
} from "./puck/blocks/layout-blocks";

import {
    ShadcnDialog, ShadcnAlertDialog, ShadcnSheet, ShadcnPopover,
    ShadcnTooltip, ShadcnDropdownMenu, ShadcnContextMenu,
    ShadcnMenubar, ShadcnCommand, ShadcnHoverCard, ShadcnDrawer,
} from "./puck/blocks/overlay-blocks";

import {
    ShadcnAlert, ShadcnBadge, ShadcnProgress, ShadcnSpinner,
    ShadcnSkeleton, ShadcnEmpty, ShadcnToast,
} from "./puck/blocks/feedback-blocks";

import {
    ShadcnAvatar, ShadcnCard, ShadcnTable, ShadcnCarousel,
    ShadcnTypography, ShadcnKbd, ShadcnItem,
} from "./puck/blocks/display-blocks";

import {
    ShadcnCollapsible, ShadcnToggle, ShadcnToggleGroup,
    ShadcnPagination, ShadcnCalendar,
} from "./puck/blocks/misc-blocks";

import { shadcnBlocksConfig } from "./puck/blocks/shadcn-blocks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

export const puckConfig: Config = {
    root: {
        render: ({ children }: { children: React.ReactNode }) => {
            return (
                <div className="container mx-auto px-4 max-w-7xl">
                    {children}
                </div>
            );
        }
    },
    categories: {
        // Original categories
        layout: {
            title: "Layout",
            components: ["Container", "Columns", "Spacer"],
        },
        typography: {
            title: "Typography",
            components: ["Heading", "Paragraph"],
        },
        interactive: {
            title: "Interactive",
            components: ["ButtonBlock"],
        },
        blocks: {
            title: "Blocks",
            components: ["Hero", "CarouselBlock", "CardBlock", "Navbar", "Footer", "ImageBlock"],
        },

        // ── Shadcn Categories ──────────────────────────
        shadcnFormInput: {
            title: "Shadcn: Form & Input",
            components: [
                "ShadcnButton", "ShadcnButtonGroup", "ShadcnInput", "ShadcnInputGroup",
                "ShadcnTextarea", "ShadcnCheckbox", "ShadcnRadioGroup", "ShadcnSelect",
                "ShadcnSwitch", "ShadcnSlider", "ShadcnLabel", "ShadcnInputOTP",
                "ShadcnDatePicker", "ShadcnCombobox",
            ],
        },
        shadcnLayout: {
            title: "Shadcn: Layout & Nav",
            components: [
                "ShadcnAccordion", "ShadcnBreadcrumb", "ShadcnNavigationMenu",
                "ShadcnTabs", "ShadcnSeparator", "ShadcnScrollArea",
                "ShadcnResizable", "ShadcnAspectRatio",
            ],
        },
        shadcnOverlay: {
            title: "Shadcn: Overlays",
            components: [
                "ShadcnDialog", "ShadcnAlertDialog", "ShadcnSheet", "ShadcnPopover",
                "ShadcnTooltip", "ShadcnDropdownMenu", "ShadcnContextMenu",
                "ShadcnMenubar", "ShadcnCommand", "ShadcnHoverCard", "ShadcnDrawer",
            ],
        },
        shadcnFeedback: {
            title: "Shadcn: Feedback",
            components: [
                "ShadcnAlert", "ShadcnBadge", "ShadcnProgress", "ShadcnSpinner",
                "ShadcnSkeleton", "ShadcnEmpty", "ShadcnToast",
            ],
        },
        shadcnDisplay: {
            title: "Shadcn: Display",
            components: [
                "ShadcnAvatar", "ShadcnCard", "ShadcnTable", "ShadcnCarousel",
                "ShadcnTypography", "ShadcnKbd", "ShadcnItem",
            ],
        },
        shadcnMisc: {
            title: "Shadcn: Misc",
            components: [
                "ShadcnCollapsible", "ShadcnToggle", "ShadcnToggleGroup",
                "ShadcnPagination", "ShadcnCalendar",
            ],
        },
        shadcnBlocks: {
            title: "Shadcn Blocks",
            components: Object.keys(shadcnBlocksConfig),
        },
    },

    components: {
        // ── Original Layout ──────────────────────────────
        Container: {
            label: "Container",
            defaultProps: { maxWidth: "lg", padding: "md", content: [] },
            fields: {
                maxWidth: {
                    type: "select", label: "Max Width",
                    options: [
                        { label: "Small", value: "sm" }, { label: "Medium", value: "md" },
                        { label: "Large", value: "lg" }, { label: "XL", value: "xl" },
                        { label: "Full", value: "full" },
                    ],
                },
                padding: {
                    type: "select", label: "Padding",
                    options: [
                        { label: "None", value: "none" }, { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" }, { label: "Large", value: "lg" },
                    ],
                },
                content: {
                    type: "slot",
                    label: "Content",
                },
            },
            render: (props: Props) => {
                const maxWidthMap: Record<string, string> = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", full: "100%" };
                const paddingMap: Record<string, string> = { none: "0", sm: "1rem", md: "2rem", lg: "3rem" };
                return (
                    <div style={{ maxWidth: maxWidthMap[props.maxWidth] ?? "1024px", margin: "0 auto", padding: paddingMap[props.padding] ?? "2rem", minHeight: "60px" }}>
                        {props.content}
                    </div>
                );
            },
        },

        Columns: {
            label: "Columns",
            defaultProps: { columns: "2", gap: "md", column1: [], column2: [], column3: [], column4: [] },
            fields: {
                columns: { type: "select", label: "Columns", options: [{ label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }] },
                gap: { type: "select", label: "Gap", options: [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }] },
                column1: { type: "slot", label: "Column 1" },
                column2: { type: "slot", label: "Column 2" },
                column3: { type: "slot", label: "Column 3" },
                column4: { type: "slot", label: "Column 4" },
            },
            render: (props: Props) => {
                const gapMap: Record<string, string> = { sm: "0.5rem", md: "1rem", lg: "2rem" };
                const colCount = parseInt(props.columns) || 2;
                const slots = [props.column1, props.column2, props.column3, props.column4];
                return (
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${colCount}, 1fr)`, gap: gapMap[props.gap] ?? "1rem", padding: "1rem", minHeight: "100px" }}>
                        {Array.from({ length: colCount }).map((_, i) => (
                            <div key={i} style={{ minHeight: "60px" }}>
                                {slots[i]}
                            </div>
                        ))}
                    </div>
                );
            },
        },

        Spacer: {
            label: "Spacer",
            defaultProps: { height: 40 },
            fields: { height: { type: "number", label: "Height (px)", min: 8, max: 200 } },
            render: (props: Props) => <div style={{ height: `${props.height ?? 40}px`, width: "100%" }} />,
        },

        Heading: {
            label: "Heading",
            defaultProps: { text: "Heading Text", level: "h2", align: "left" },
            fields: {
                text: { type: "text", label: "Text" },
                level: { type: "select", label: "Level", options: [{ label: "H1", value: "h1" }, { label: "H2", value: "h2" }, { label: "H3", value: "h3" }, { label: "H4", value: "h4" }] },
                align: { type: "select", label: "Alignment", options: [{ label: "Left", value: "left" }, { label: "Center", value: "center" }, { label: "Right", value: "right" }] },
            },
            render: (props: Props) => {
                const sizeMap: Record<string, string> = { h1: "text-4xl", h2: "text-3xl", h3: "text-2xl", h4: "text-xl" };
                return React.createElement(
                    props.level ?? "h2",
                    {
                        className: cn("scroll-m-20 font-bold tracking-tight mb-2", sizeMap[props.level ?? "h2"]),
                        style: { textAlign: props.align ?? "left" }
                    },
                    props.text ?? "Heading"
                );
            },
        },

        Paragraph: {
            label: "Paragraph",
            defaultProps: { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", align: "left" },
            fields: {
                text: { type: "textarea", label: "Text" },
                align: { type: "select", label: "Alignment", options: [{ label: "Left", value: "left" }, { label: "Center", value: "center" }, { label: "Right", value: "right" }] },
            },
            render: (props: Props) => (
                <p style={{ textAlign: props.align ?? "left" }} className="leading-7 text-muted-foreground margin-y-2">
                    {props.text}
                </p>
            ),
        },

        ButtonBlock: {
            label: "Button",
            defaultProps: { label: "Click Me", variant: "default", size: "default", href: "#" },
            fields: {
                label: { type: "text", label: "Label" },
                variant: { type: "select", label: "Variant", options: [{ label: "Default", value: "default" }, { label: "Secondary", value: "secondary" }, { label: "Outline", value: "outline" }, { label: "Destructive", value: "destructive" }, { label: "Ghost", value: "ghost" }] },
                size: { type: "select", label: "Size", options: [{ label: "Small", value: "sm" }, { label: "Default", value: "default" }, { label: "Large", value: "lg" }] },
                href: { type: "text", label: "Link URL" },
            },
            render: (props: Props) => {
                return (
                    <a
                        href={props.href ?? "#"}
                        className={cn(
                            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                            {
                                "bg-primary text-primary-foreground shadow hover:bg-primary/90": props.variant === "default",
                                "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80": props.variant === "secondary",
                                "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground": props.variant === "outline",
                                "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90": props.variant === "destructive",
                                "hover:bg-accent hover:text-accent-foreground": props.variant === "ghost",
                                "h-9 px-4 py-2 text-sm": props.size === "default",
                                "h-8 px-3 text-xs": props.size === "sm",
                                "h-10 px-8": props.size === "lg",
                            }
                        )}
                    >
                        {props.label ?? "Button"}
                    </a>
                );
            },
        },

        Hero: {
            label: "Hero Section",
            defaultProps: { title: "Build Stunning Websites", subtitle: "Drag-and-drop your way to a production-ready Next.js application.", ctaLabel: "Get Started", ctaHref: "#", backgroundImage: "" },
            fields: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                ctaLabel: { type: "text", label: "CTA Label" },
                ctaHref: { type: "text", label: "CTA Link" },
                backgroundImage: { type: "text", label: "Background Image URL" },
            },
            render: (props: Props) => (
                <section
                    className="relative flex flex-col items-center justify-center min-h-[480px] p-16 text-center rounded-xl overflow-hidden bg-cover bg-center text-primary-foreground"
                    style={{
                        backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : undefined,
                    }}
                >
                    {!props.backgroundImage && (
                        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/80 z-0" />
                    )}
                    <div className="relative z-10 flex flex-col items-center">
                        <h1 className="text-5xl font-extrabold mb-4 leading-tight">{props.title}</h1>
                        <p className="text-xl max-w-2xl opacity-90 mb-8 leading-relaxed">{props.subtitle}</p>
                        <a
                            href={props.ctaHref ?? "#"}
                            className="inline-flex h-12 items-center justify-center rounded-md bg-background text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            {props.ctaLabel}
                        </a>
                    </div>
                </section>
            ),
        },

        CardBlock: {
            label: "Card",
            defaultProps: { title: "Card Title", description: "A brief description of this card content.", imageUrl: "" },
            fields: { title: { type: "text", label: "Title" }, description: { type: "textarea", label: "Description" }, imageUrl: { type: "text", label: "Image URL" } },
            render: (props: Props) => (
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                    {props.imageUrl && <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${props.imageUrl})` }} />}
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight mb-2">{props.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{props.description}</p>
                    </div>
                </div>
            ),
        },

        Navbar: {
            label: "Navbar",
            defaultProps: { brand: "My Site", links: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
            fields: {
                brand: { type: "text", label: "Brand Name" },
                links: { type: "array", label: "Links", arrayFields: { label: { type: "text", label: "Label" }, href: { type: "text", label: "URL" } } },
            },
            render: (props: Props) => (
                <nav className="flex items-center justify-between p-4 md:p-6 bg-background border-b border-border">
                    <span className="font-bold text-lg">{props.brand}</span>
                    <div className="flex gap-6">
                        {(props.links ?? []).map((link: { label: string; href: string }, i: number) => (
                            <a key={i} href={link.href} className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">{link.label}</a>
                        ))}
                    </div>
                </nav>
            ),
        },

        Footer: {
            label: "Footer",
            defaultProps: { text: "© 2026 My Site. All rights reserved.", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
            fields: {
                text: { type: "text", label: "Copyright Text" },
                links: { type: "array", label: "Links", arrayFields: { label: { type: "text", label: "Label" }, href: { type: "text", label: "URL" } } },
            },
            render: (props: Props) => (
                <footer className="flex flex-col md:flex-row items-center justify-between p-8 bg-muted text-muted-foreground text-sm">
                    <span>{props.text}</span>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {(props.links ?? []).map((link: { label: string; href: string }, i: number) => (
                            <a key={i} href={link.href} className="hover:text-foreground transition-colors">{link.label}</a>
                        ))}
                    </div>
                </footer>
            ),
        },

        CarouselBlock: {
            label: "Carousel",
            defaultProps: {
                items: [
                    {
                        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
                        heading: "Beautiful Landscapes",
                        description: "Explore the most stunning views from around the world.",
                        primaryCta: "Explore", primaryCtaLink: "#",
                        align: "center", overlay: true
                    },
                    {
                        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200",
                        heading: "Nature's Wonders",
                        description: "Experience the beauty of nature like never before.",
                        primaryCta: "Learn More", primaryCtaLink: "#",
                        align: "left", overlay: true
                    },
                    {
                        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200",
                        heading: "Serene Mountains",
                        description: "Find peace and tranquility in the high mountains.",
                        primaryCta: "View Gallery", primaryCtaLink: "#",
                        align: "right", overlay: true
                    }
                ],
                height: "500px",
                autoPlay: false,
            },
            fields: {
                items: {
                    type: "array",
                    label: "Slides",
                    getItemSummary: (item: any) => item.heading || "Slide",
                    arrayFields: {
                        image: { type: "text", label: "Image URL" },
                        heading: { type: "text", label: "Heading" },
                        description: { type: "textarea", label: "Description" },
                        align: {
                            type: "radio", label: "Alignment",
                            options: [{ label: "Left", value: "left" }, { label: "Center", value: "center" }, { label: "Right", value: "right" }]
                        },
                        overlay: { type: "radio", label: "Show Overlay", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
                        primaryCta: { type: "text", label: "Primary CTA Label" },
                        primaryCtaLink: { type: "text", label: "Primary CTA Link" },
                        secondaryCta: { type: "text", label: "Secondary CTA Label" },
                        secondaryCtaLink: { type: "text", label: "Secondary CTA Link" },
                    }
                },
                height: {
                    type: "select", label: "Height",
                    options: [
                        { label: "Small (400px)", value: "400px" },
                        { label: "Medium (500px)", value: "500px" },
                        { label: "Large (600px)", value: "600px" },
                        { label: "Full Screen", value: "100vh" }
                    ]
                },
            },
            render: (props: Props) => (
                <Carousel className="w-full relative group" opts={{ loop: true }}>
                    <CarouselContent>
                        {(props.items ?? []).map((item: any, i: number) => (
                            <CarouselItem key={i} className="relative w-full">
                                <div
                                    className="relative overflow-hidden bg-cover bg-center"
                                    style={{ height: props.height ?? "500px", backgroundImage: `url(${item.image})` }}
                                >
                                    {/* Overlay */}
                                    {item.overlay && (
                                        <div className="absolute inset-0 bg-black/40 transition-opacity" />
                                    )}

                                    {/* Content */}
                                    <div className={cn(
                                        "absolute inset-0 flex flex-col justify-center p-12 text-white",
                                        {
                                            "items-start text-left": item.align === "left",
                                            "items-center text-center": item.align === "center",
                                            "items-end text-right": item.align === "right",
                                        }
                                    )}>
                                        <div className="max-w-3xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                            {item.heading && (
                                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
                                                    {item.heading}
                                                </h2>
                                            )}
                                            {item.description && (
                                                <p className="text-lg md:text-xl text-gray-100 max-w-xl mb-8 drop-shadow-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                            <div className="flex flex-wrap gap-4">
                                                {item.primaryCta && (
                                                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                                                        <a href={item.primaryCtaLink ?? "#"}>{item.primaryCta}</a>
                                                    </Button>
                                                )}
                                                {item.secondaryCta && (
                                                    <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg">
                                                        <a href={item.secondaryCtaLink ?? "#"}>{item.secondaryCta}</a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-background/50 hover:bg-background/80 border-none text-white backdrop-blur-sm" />
                    <CarouselNext className="right-4 bg-background/50 hover:bg-background/80 border-none text-white backdrop-blur-sm" />
                </Carousel>
            ),
        },

        ImageBlock: {
            label: "Image",
            defaultProps: { src: "https://placehold.co/800x400", alt: "Image", width: "100%", height: "auto", rounded: true },
            fields: {
                src: { type: "text", label: "Image URL" }, alt: { type: "text", label: "Alt Text" },
                width: { type: "text", label: "Width" }, height: { type: "text", label: "Height" },
                rounded: { type: "radio", label: "Rounded Corners", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
            },
            render: (props: Props) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={props.src ?? "https://placehold.co/800x400"} alt={props.alt ?? "Image"} style={{ width: props.width ?? "100%", height: props.height ?? "auto", borderRadius: props.rounded ? "0.75rem" : "0", objectFit: "cover", display: "block" }} />
            ),
        },

        // ── Shadcn Form & Input ─────────────────────────────
        ShadcnButton, ShadcnButtonGroup, ShadcnInput, ShadcnInputGroup,
        ShadcnTextarea, ShadcnCheckbox, ShadcnRadioGroup, ShadcnSelect,
        ShadcnSwitch, ShadcnSlider, ShadcnLabel, ShadcnInputOTP,
        ShadcnDatePicker, ShadcnCombobox,

        // ── Shadcn Layout & Navigation ──────────────────────
        ShadcnAccordion, ShadcnBreadcrumb, ShadcnNavigationMenu,
        ShadcnTabs, ShadcnSeparator, ShadcnScrollArea,
        ShadcnResizable, ShadcnAspectRatio,

        // ── Shadcn Overlays & Dialogs ───────────────────────
        ShadcnDialog, ShadcnAlertDialog, ShadcnSheet, ShadcnPopover,
        ShadcnTooltip, ShadcnDropdownMenu, ShadcnContextMenu,
        ShadcnMenubar, ShadcnCommand, ShadcnHoverCard, ShadcnDrawer,

        // ── Shadcn Feedback & Status ────────────────────────
        ShadcnAlert, ShadcnBadge, ShadcnProgress, ShadcnSpinner,
        ShadcnSkeleton, ShadcnEmpty, ShadcnToast,

        // ── Shadcn Display & Media ──────────────────────────
        ShadcnAvatar, ShadcnCard, ShadcnTable, ShadcnCarousel,
        ShadcnTypography, ShadcnKbd, ShadcnItem,

        // ── Shadcn Misc ─────────────────────────────────────
        ShadcnCollapsible, ShadcnToggle, ShadcnToggleGroup,
        ShadcnPagination, ShadcnCalendar,

        // ── Generated Shadcn Blocks ─────────────────────────
        ...shadcnBlocksConfig,
    },
};
