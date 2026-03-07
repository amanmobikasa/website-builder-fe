// @ts-nocheck
// Auto-generated Puck components for Shadcn Blocks
import { ComponentConfig } from "@measured/puck";
import { About3 } from "@/components/blocks/about3";
import { Banner1 } from "@/components/blocks/banner1";
import { Blog7 } from "@/components/blocks/blog7";
import { Blogpost1 } from "@/components/blocks/blogpost1";
import { Careers4 } from "@/components/blocks/careers4";
import { Casestudies2 } from "@/components/blocks/casestudies2";
import { Casestudy8 } from "@/components/blocks/casestudy8";
import { Changelog1 } from "@/components/blocks/changelog1";
import { Codeexample1 } from "@/components/blocks/codeexample1";
import { Community1 } from "@/components/blocks/community1";
import { Compare7 } from "@/components/blocks/compare7";
import { Compliance1 } from "@/components/blocks/compliance1";
import { Contact7 } from "@/components/blocks/contact7";
import { Content1 } from "@/components/blocks/content1";
import { Cta10 } from "@/components/blocks/cta10";
import { Cta11 } from "@/components/blocks/cta11";
import { Download2 } from "@/components/blocks/download2";
import { Experience5 } from "@/components/blocks/experience5";
import { Faq1 } from "@/components/blocks/faq1";
import { Feature1 } from "@/components/blocks/feature1";
import { Feature13 } from "@/components/blocks/feature13";
import { Feature166 } from "@/components/blocks/feature166";
import { Feature17 } from "@/components/blocks/feature17";
import { Feature197 } from "@/components/blocks/feature197";
import { Feature2 } from "@/components/blocks/feature2";
import { Feature43 } from "@/components/blocks/feature43";
import { Feature51 } from "@/components/blocks/feature51";
import { Feature72 } from "@/components/blocks/feature72";
import { Feature73 } from "@/components/blocks/feature73";
import { Footer2 } from "@/components/blocks/footer2";
import { Gallery6 } from "@/components/blocks/gallery6";
import { Hero1 } from "@/components/blocks/hero1";
import { Hero115 } from "@/components/blocks/hero115";
import { Hero3 } from "@/components/blocks/hero3";
import { Hero45 } from "@/components/blocks/hero45";
import { Hero47 } from "@/components/blocks/hero47";
import { Hero7 } from "@/components/blocks/hero7";
import { Integration3 } from "@/components/blocks/integration3";
import { List2 } from "@/components/blocks/list2";
import { Login1 } from "@/components/blocks/login1";
import { Logos8 } from "@/components/blocks/logos8";
import { Navbar1 } from "@/components/blocks/navbar1";
import { Pricing2 } from "@/components/blocks/pricing2";
import { Pricing4 } from "@/components/blocks/pricing4";
import { Pricing6 } from "@/components/blocks/pricing6";
import { Resource1 } from "@/components/blocks/resource1";
import { Service1 } from "@/components/blocks/service1";
import { Services4 } from "@/components/blocks/services4";
import { Signup1 } from "@/components/blocks/signup1";
import { Stats8 } from "@/components/blocks/stats8";
import { Team1 } from "@/components/blocks/team1";
import { Testimonial10 } from "@/components/blocks/testimonial10";
import { Timeline9 } from "@/components/blocks/timeline9";
import { Waitlist1 } from "@/components/blocks/waitlist1";

export const shadcnBlocksConfig: Record<string, ComponentConfig<any>> = {

  About3: {
    label: "About3",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "mainImage": {
        "type": "object",
        "objectFields": {
          "src": { "type": "text" },
          "alt": { "type": "text" }
        }
      },
      "secondaryImage": {
        "type": "object",
        "objectFields": {
          "src": { "type": "text" },
          "alt": { "type": "text" }
        }
      },
      "breakout": {
        "type": "object",
        "objectFields": {
          "src": { "type": "text" },
          "alt": { "type": "text" },
          "title": { "type": "text" },
          "description": { "type": "textarea" },
          "buttonText": { "type": "text" },
          "buttonUrl": { "type": "text" }
        }
      },
      "companiesTitle": {
        "type": "text"
      },
      "companies": {
        "type": "array",
        "arrayFields": {
          "src": { "type": "text" },
          "alt": { "type": "text" }
        }
      },
      "achievementsTitle": {
        "type": "text"
      },
      "achievementsDescription": {
        "type": "textarea"
      },
      "achievements": {
        "type": "array",
        "arrayFields": {
          "label": { "type": "text" },
          "value": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "title": "About Us",
      "description": "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
      "mainImage": {
        "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        "alt": "placeholder"
      },
      "secondaryImage": {
        "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
        "alt": "placeholder"
      },
      "breakout": {
        "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
        "alt": "logo",
        "title": "Hundreds of blocks at Shadcnblocks.com",
        "description": "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
        "buttonText": "Discover more",
        "buttonUrl": "https://shadcnblocks.com"
      },
      "companiesTitle": "Valued by clients worldwide",
      "companies": [
        { "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg", "alt": "Arc" },
        { "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg", "alt": "Descript" },
        { "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg", "alt": "Mercury" },
        { "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg", "alt": "Ramp" }
      ],
      "achievementsTitle": "Our Achievements in Numbers",
      "achievementsDescription": "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
      "achievements": [
        { "label": "Companies Supported", "value": "300+" },
        { "label": "Projects Finalized", "value": "800+" },
        { "label": "Happy Customers", "value": "99%" },
        { "label": "Recognized Awards", "value": "10+" }
      ]
    },
    render: (props) => <About3 {...props} />
  },

  Banner1: {
    label: "Banner1",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "linkText": {
        "type": "text"
      },
      "linkUrl": {
        "type": "text"
      },
      "defaultVisible": {
        "type": "radio",
        "options": [
          {
            "label": "Yes",
            "value": true
          },
          {
            "label": "No",
            "value": false
          }
        ]
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "linkText": "linkText text",
      "linkUrl": "linkUrl text",
      "defaultVisible": true
    },
    render: (props) => <Banner1 {...props} />
  },

  Blog7: {
    label: "Blog7",
    fields: {
      "tagline": {
        "type": "text"
      },
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      },
      "buttonUrl": {
        "type": "text"
      },
      "posts": {
        "type": "array",
        "arrayFields": {
          "title": {
            "type": "text"
          }
        }
      }
    },
    defaultProps: {
      "tagline": "tagline text",
      "heading": "heading text",
      "description": "description text",
      "buttonText": "buttonText text",
      "buttonUrl": "buttonUrl text",
      "posts": []
    },
    render: (props) => <Blog7 {...props} />
  },

  Blogpost1: {
    label: "Blogpost1",
    fields: {},
    defaultProps: {},
    render: (props) => <Blogpost1 {...props} />
  },

  Careers4: {
    label: "Careers4",
    fields: {
      "heading": {
        "type": "text"
      },
      "jobs": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "jobs": ""
    },
    render: (props) => <Careers4 {...props} />
  },

  Casestudies2: {
    label: "Casestudies2",
    fields: {},
    defaultProps: {},
    render: (props) => <Casestudies2 {...props} />
  },

  Casestudy8: {
    label: "Casestudy8",
    fields: {},
    defaultProps: {},
    render: (props) => <Casestudy8 {...props} />
  },

  Changelog1: {
    label: "Changelog1",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "entries": {
        "type": "text"
      },
      "className": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "entries": "",
      "className": "className text"
    },
    render: (props) => <Changelog1 {...props} />
  },

  Codeexample1: {
    label: "Codeexample1",
    fields: {},
    defaultProps: {},
    render: (props) => <Codeexample1 {...props} />
  },

  Community1: {
    label: "Community1",
    fields: {},
    defaultProps: {},
    render: (props) => <Community1 {...props} />
  },

  Compare7: {
    label: "Compare7",
    fields: {},
    defaultProps: {},
    render: (props) => <Compare7 {...props} />
  },

  Compliance1: {
    label: "Compliance1",
    fields: {},
    defaultProps: {},
    render: (props) => <Compliance1 {...props} />
  },

  Contact7: {
    label: "Contact7",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "emailLabel": {
        "type": "text"
      },
      "emailDescription": {
        "type": "text"
      },
      "email": {
        "type": "text"
      },
      "officeLabel": {
        "type": "text"
      },
      "officeDescription": {
        "type": "text"
      },
      "officeAddress": {
        "type": "text"
      },
      "phoneLabel": {
        "type": "text"
      },
      "phoneDescription": {
        "type": "text"
      },
      "phone": {
        "type": "text"
      },
      "chatLabel": {
        "type": "text"
      },
      "chatDescription": {
        "type": "text"
      },
      "chatLink": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "emailLabel": "emailLabel text",
      "emailDescription": "emailDescription text",
      "email": "email text",
      "officeLabel": "officeLabel text",
      "officeDescription": "officeDescription text",
      "officeAddress": "officeAddress text",
      "phoneLabel": "phoneLabel text",
      "phoneDescription": "phoneDescription text",
      "phone": "phone text",
      "chatLabel": "chatLabel text",
      "chatDescription": "chatDescription text",
      "chatLink": "chatLink text"
    },
    render: (props) => <Contact7 {...props} />
  },

  Content1: {
    label: "Content1",
    fields: {},
    defaultProps: {},
    render: (props) => <Content1 {...props} />
  },

  Cta10: {
    label: "Cta10",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "buttons": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "buttons": "https://shadcnblocks.com/placeholder-1.svg"
    },
    render: (props) => <Cta10 {...props} />
  },

  Cta11: {
    label: "Cta11",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "imageSrc": {
        "type": "text"
      },
      "imageAlt": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      },
      "buttonHref": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "imageSrc": "https://shadcnblocks.com/placeholder-1.svg",
      "imageAlt": "https://shadcnblocks.com/placeholder-1.svg",
      "buttonText": "buttonText text",
      "buttonHref": "buttonHref text"
    },
    render: (props) => <Cta11 {...props} />
  },

  Download2: {
    label: "Download2",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "platforms": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "platforms": "https://shadcnblocks.com/placeholder-1.svg"
    },
    render: (props) => <Download2 {...props} />
  },

  Experience5: {
    label: "Experience5",
    fields: {
      "title": {
        "type": "text"
      },
      "experience": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "experience": ""
    },
    render: (props) => <Experience5 {...props} />
  },

  Faq1: {
    label: "Faq1",
    fields: {
      "heading": {
        "type": "text"
      },
      "items": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "items": ""
    },
    render: (props) => <Faq1 {...props} />
  },

  Feature1: {
    label: "Feature1",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "imageSrc": {
        "type": "text"
      },
      "imageAlt": {
        "type": "text"
      },
      "buttonPrimary": {
        "type": "text"
      },
      "buttonSecondary": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "imageSrc": "https://shadcnblocks.com/placeholder-1.svg",
      "imageAlt": "https://shadcnblocks.com/placeholder-1.svg",
      "buttonPrimary": "buttonPrimary text",
      "buttonSecondary": "buttonSecondary text"
    },
    render: (props) => <Feature1 {...props} />
  },

  Feature13: {
    label: "Feature13",
    fields: {
      "title": {
        "type": "text"
      },
      "features": {
        "type": "array",
        "arrayFields": {
          "title": {
            "type": "text"
          }
        }
      }
    },
    defaultProps: {
      "title": "title text",
      "features": []
    },
    render: (props) => <Feature13 {...props} />
  },

  Feature166: {
    label: "Feature166",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "feature1": {
        "type": "object",
        "objectFields": {
          "text": {
            "type": "text"
          }
        }
      },
      "feature2": {
        "type": "object",
        "objectFields": {
          "text": {
            "type": "text"
          }
        }
      },
      "feature3": {
        "type": "object",
        "objectFields": {
          "text": {
            "type": "text"
          }
        }
      },
      "feature4": {
        "type": "object",
        "objectFields": {
          "text": {
            "type": "text"
          }
        }
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "feature1": {},
      "feature2": {},
      "feature3": {},
      "feature4": {}
    },
    render: (props) => <Feature166 {...props} />
  },

  Feature17: {
    label: "Feature17",
    fields: {
      "label": {
        "type": "text"
      },
      "title": {
        "type": "text"
      },
      "features": {
        "type": "array",
        "arrayFields": {
          "title": {
            "type": "text"
          }
        }
      },
      "buttonText": {
        "type": "text"
      },
      "buttonUrl": {
        "type": "text"
      }
    },
    defaultProps: {
      "label": "label text",
      "title": "title text",
      "features": [],
      "buttonText": "buttonText text",
      "buttonUrl": "buttonUrl text"
    },
    render: (props) => <Feature17 {...props} />
  },

  Feature197: {
    label: "Feature197",
    fields: {
      "features": {
        "type": "array",
        "arrayFields": {
          "id": { "type": "number" },
          "title": { "type": "text" },
          "image": { "type": "text" },
          "description": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "features": [
        {
          id: 1,
          title: "Ready-to-Use UI Blocks",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          description: "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
        },
        {
          id: 2,
          title: "Tailwind CSS & TypeScript",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
          description: "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
        }
      ]
    },
    render: (props) => <Feature197 {...props} />
  },

  Feature2: {
    label: "Feature2",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "imageSrc": {
        "type": "text"
      },
      "imageAlt": {
        "type": "text"
      },
      "buttonPrimary": {
        "type": "text"
      },
      "buttonSecondary": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "imageSrc": "https://shadcnblocks.com/placeholder-1.svg",
      "imageAlt": "https://shadcnblocks.com/placeholder-1.svg",
      "buttonPrimary": "buttonPrimary text",
      "buttonSecondary": "buttonSecondary text"
    },
    render: (props) => <Feature2 {...props} />
  },

  Feature43: {
    label: "Feature43",
    fields: {
      "title": {
        "type": "text"
      },
      "features": {
        "type": "array",
        "arrayFields": {
          "heading": { "type": "text" },
          "description": { "type": "text" }
        }
      },
      "buttonText": {
        "type": "text"
      },
      "buttonUrl": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "buttonText": "buttonText text",
      "buttonUrl": "buttonUrl text"
    },
    render: (props) => <Feature43 {...props} />
  },

  Feature51: {
    label: "Feature51",
    fields: {
      "features": {
        "type": "array",
        "arrayFields": {
          "id": { "type": "text" },
          "heading": { "type": "text" },
          "description": { "type": "textarea" },
          "image": { "type": "text" },
          "url": { "type": "text" },
          "isDefault": {
            "type": "radio",
            "options": [
              { "label": "Yes", "value": true },
              { "label": "No", "value": false }
            ]
          }
        }
      }
    },
    defaultProps: {
      "features": [
        {
          "id": "feature-1",
          "heading": "Research",
          "description": "Discover the powerful features that make our platform stand out from the rest.",
          "image": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          "url": "https://shadcnblocks.com",
          "isDefault": true
        },
        {
          "id": "feature-2",
          "heading": "Refine",
          "description": "Built with the latest technology and designed for maximum productivity.",
          "image": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
          "url": "https://shadcnblocks.com",
          "isDefault": false
        },
        {
          "id": "feature-3",
          "heading": "Build",
          "description": "Create amazing experiences with our comprehensive toolkit and resources.",
          "image": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
          "url": "https://shadcnblocks.com",
          "isDefault": false
        }
      ]
    },
    render: (props) => <Feature51 {...props} />
  },

  Feature72: {
    label: "Feature72",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "buttonUrl": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      },
      "features": {
        "type": "array",
        "arrayFields": {
          "id": { "type": "text" },
          "heading": { "type": "text" },
          "description": { "type": "text" },
          "image": { "type": "text" },
          "url": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "buttonUrl": "buttonUrl text",
      "buttonText": "buttonText text"
    },
    render: (props) => <Feature72 {...props} />
  },

  Feature73: {
    label: "Feature73",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "buttonUrl": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      },
      "features": {
        "type": "array",
        "arrayFields": {
          "id": { "type": "text" },
          "heading": { "type": "text" },
          "description": { "type": "text" },
          "image": { "type": "text" },
          "url": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "buttonUrl": "buttonUrl text",
      "buttonText": "buttonText text"
    },
    render: (props) => <Feature73 {...props} />
  },

  Footer2: {
    label: "Footer2",
    fields: {
      "logo": {
        "type": "object",
        "objectFields": {
          "url": { "type": "text" },
          "src": { "type": "text" },
          "alt": { "type": "text" },
          "title": { "type": "text" }
        }
      },
      "tagline": {
        "type": "text"
      },
      "menuItems": {
        "type": "array",
        "arrayFields": {
          "title": { "type": "text" },
          "links": {
            "type": "array",
            "arrayFields": {
              "text": { "type": "text" },
              "url": { "type": "text" }
            }
          }
        }
      },
      "copyright": {
        "type": "text"
      },
      "bottomLinks": {
        "type": "array",
        "arrayFields": {
          "text": { "type": "text" },
          "url": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "logo": {
        "src": "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
        "alt": "blocks for shadcn/ui",
        "title": "Shadcnblocks.com",
        "url": "https://www.shadcnblocks.com"
      },
      "tagline": "Components made easy.",
      "menuItems": [
        {
          "title": "Product",
          "links": [
            { "text": "Overview", "url": "#" },
            { "text": "Pricing", "url": "#" },
            { "text": "Features", "url": "#" }
          ]
        },
        {
          "title": "Company",
          "links": [
            { "text": "About", "url": "#" },
            { "text": "Contact", "url": "#" }
          ]
        }
      ],
      "copyright": "© 2024 Shadcnblocks.com. All rights reserved.",
      "bottomLinks": [
        { "text": "Terms and Conditions", "url": "#" },
        { "text": "Privacy Policy", "url": "#" }
      ]
    },
    render: (props) => <Footer2 {...props} />
  },

  Gallery6: {
    label: "Gallery6",
    fields: {
      "heading": {
        "type": "text"
      },
      "demoUrl": {
        "type": "text"
      },
      "items": {
        "type": "array",
        "arrayFields": {
          "id": { "type": "text" },
          "title": { "type": "text" },
          "summary": { "type": "text" },
          "url": { "type": "text" },
          "image": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "heading": "heading text",
      "demoUrl": "demoUrl text"
    },
    render: (props) => <Gallery6 {...props} />
  },

  Hero1: {
    label: "Hero1",
    fields: {
      "badge": {
        "type": "text"
      },
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "buttons": {
        "type": "object",
        "objectFields": {
          "primary": {
            "type": "object",
            "objectFields": {
              "text": { "type": "text" },
              "url": { "type": "text" }
            }
          },
          "secondary": {
            "type": "object",
            "objectFields": {
              "text": { "type": "text" },
              "url": { "type": "text" }
            }
          }
        }
      },
      "image": {
        "type": "object",
        "objectFields": {
          "src": { "type": "text" },
          "alt": { "type": "text" }
        }
      }
    },
    defaultProps: {
      "badge": "badge text",
      "heading": "heading text",
      "description": "description text"
    },
    render: (props) => <Hero1 {...props} />
  },

  Hero115: {
    label: "Hero115",
    fields: {
      "icon": {
        "type": "text"
      },
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "button": {
        "type": "text"
      },
      "trustText": {
        "type": "text"
      },
      "imageSrc": {
        "type": "text"
      },
      "imageAlt": {
        "type": "text"
      }
    },
    defaultProps: {
      "icon": "",
      "heading": "heading text",
      "description": "description text",
      "button": "https://shadcnblocks.com/placeholder-1.svg",
      "trustText": "trustText text",
      "imageSrc": "https://shadcnblocks.com/placeholder-1.svg",
      "imageAlt": "https://shadcnblocks.com/placeholder-1.svg"
    },
    render: (props) => <Hero115 {...props} />
  },

  Hero3: {
    label: "Hero3",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "buttons": {
        "type": "object",
        "objectFields": {
          "primary": {
            "type": "object",
            "objectFields": {
              "text": { "type": "text" },
              "url": { "type": "text" }
            }
          },
          "secondary": {
            "type": "object",
            "objectFields": {
              "text": { "type": "text" },
              "url": { "type": "text" }
            }
          }
        }
      },
      "reviews": {
        "type": "object",
        "objectFields": {
          "count": { "type": "number" },
          "rating": { "type": "number" },
          "avatars": {
            "type": "array",
            "arrayFields": {
              "src": { "type": "text" },
              "alt": { "type": "text" }
            }
          }
        }
      }
    },
    defaultProps: {
      "heading": "Blocks built with Shadcn & Tailwind",
      "description": "Finely crafted components built with React, Tailwind and Shadcn UI.",
      "buttons": {
        "primary": { "text": "Sign Up", "url": "#" },
        "secondary": { "text": "Get Started", "url": "#" }
      },
      "reviews": {
        "count": 200,
        "rating": 5.0,
        "avatars": [
          { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", alt: "Avatar 1" },
          { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp", alt: "Avatar 2" },
          { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", alt: "Avatar 3" },
          { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp", alt: "Avatar 4" },
          { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp", alt: "Avatar 5" }
        ]
      }
    },
    render: (props) => <Hero3 {...props} />
  },

  Hero45: {
    label: "Hero45",
    fields: {
      "badge": {
        "type": "text"
      },
      "heading": {
        "type": "text"
      },
      "imageSrc": {
        "type": "text"
      },
      "imageAlt": {
        "type": "text"
      },
      "features": {
        "type": "array",
        "arrayFields": {
          "title": {
            "type": "text"
          },
          "description": {
            "type": "text"
          }
        }
      }
    },
    defaultProps: {
      "badge": "shadcnblocks.com",
      "heading": "Blocks built with Shadcn & Tailwind",
      "imageSrc": "https://shadcnblocks.com/placeholder-1.svg",
      "imageAlt": "placeholder",
      "features": [
        {
          title: "Flexible Support",
          description: "Benefit from around-the-clock assistance to keep your business running smoothly."
        },
        {
          title: "Collaborative Tools",
          description: "Enhance teamwork with tools designed to simplify project management and communication."
        },
        {
          title: "Lightning Fast Speed",
          description: "Experience the fastest load times with our high performance servers."
        }
      ]
    },
    render: (props) => <Hero45 {...props} />
  },

  Hero47: {
    label: "Hero47",
    fields: {
      "heading": {
        "type": "text"
      },
      "subheading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "image": {
        "type": "text"
      },
      "buttons": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "subheading": "subheading text",
      "description": "description text",
      "image": "https://shadcnblocks.com/placeholder-1.svg",
      "buttons": "https://shadcnblocks.com/placeholder-1.svg"
    },
    render: (props) => <Hero47 {...props} />
  },

  Hero7: {
    label: "Hero7",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "button": {
        "type": "text"
      },
      "reviews": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "button": "https://shadcnblocks.com/placeholder-1.svg",
      "reviews": "reviews text"
    },
    render: (props) => <Hero7 {...props} />
  },

  Integration3: {
    label: "Integration3",
    fields: {},
    defaultProps: {},
    render: (props) => <Integration3 {...props} />
  },

  List2: {
    label: "List2",
    fields: {
      "heading": {
        "type": "text"
      },
      "items": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "items": ""
    },
    render: (props) => <List2 {...props} />
  },

  Login1: {
    label: "Login1",
    fields: {
      "heading": {
        "type": "text"
      },
      "logo": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      },
      "googleText": {
        "type": "text"
      },
      "signupText": {
        "type": "text"
      },
      "signupUrl": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "logo": "https://shadcnblocks.com/placeholder-1.svg",
      "buttonText": "buttonText text",
      "googleText": "googleText text",
      "signupText": "signupText text",
      "signupUrl": "signupUrl text"
    },
    render: (props) => <Login1 {...props} />
  },

  Logos8: {
    label: "Logos8",
    fields: {
      "title": {
        "type": "text"
      },
      "subtitle": {
        "type": "text"
      },
      "logos": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "subtitle": "subtitle text",
      "logos": ""
    },
    render: (props) => <Logos8 {...props} />
  },

  Navbar1: {
    label: "Navbar1",
    fields: {
      "logo": {
        "type": "text"
      },
      "menu": {
        "type": "array",
        "arrayFields": {
          "title": { "type": "text" },
          "url": { "type": "text" },
          "description": { "type": "text" }
        }
      },
      "auth": {
        "type": "object",
        "objectFields": {
          "login": {
            "type": "object",
            "objectFields": {
              "title": { "type": "text" },
              "url": { "type": "text" }
            }
          },
          "signup": {
            "type": "object",
            "objectFields": {
              "title": { "type": "text" },
              "url": { "type": "text" }
            }
          }
        }
      }
    },
    defaultProps: {
      "logo": "https://shadcnblocks.com/placeholder-1.svg",
      "menu": [
        { title: "Home", url: "#" },
        { title: "Products", url: "#" },
        { title: "Resources", url: "#" },
        { title: "Pricing", url: "#" },
        { title: "Blog", url: "#" },
      ],
      "auth": {
        "login": { title: "Login", url: "#" },
        "signup": { title: "Sign up", url: "#" }
      }
    },
    render: (props) => <Navbar1 {...props} />
  },

  Pricing2: {
    label: "Pricing2",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "plans": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "plans": ""
    },
    render: (props) => <Pricing2 {...props} />
  },

  Pricing4: {
    label: "Pricing4",
    fields: {
      "title": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "plans": {
        "type": "text"
      },
      "className": {
        "type": "text"
      }
    },
    defaultProps: {
      "title": "title text",
      "description": "description text",
      "plans": "",
      "className": "className text"
    },
    render: (props) => <Pricing4 {...props} />
  },

  Pricing6: {
    label: "Pricing6",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "price": {
        "type": "text"
      },
      "priceSuffix": {
        "type": "text"
      },
      "features": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "price": "price text",
      "priceSuffix": "priceSuffix text",
      "features": "features text",
      "buttonText": "buttonText text"
    },
    render: (props) => <Pricing6 {...props} />
  },

  Resource1: {
    label: "Resource1",
    fields: {},
    defaultProps: {},
    render: (props) => <Resource1 {...props} />
  },

  Service1: {
    label: "Service1",
    fields: {},
    defaultProps: {},
    render: (props) => <Service1 {...props} />
  },

  Services4: {
    label: "Services4",
    fields: {},
    defaultProps: {},
    render: (props) => <Services4 {...props} />
  },

  Signup1: {
    label: "Signup1",
    fields: {
      "heading": {
        "type": "text"
      },
      "logo": {
        "type": "text"
      },
      "buttonText": {
        "type": "text"
      },
      "googleText": {
        "type": "text"
      },
      "signupText": {
        "type": "text"
      },
      "signupUrl": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "logo": "https://shadcnblocks.com/placeholder-1.svg",
      "buttonText": "buttonText text",
      "googleText": "googleText text",
      "signupText": "signupText text",
      "signupUrl": "signupUrl text"
    },
    render: (props) => <Signup1 {...props} />
  },

  Stats8: {
    label: "Stats8",
    fields: {
      "heading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "link": {
        "type": "text"
      },
      "stats": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "description": "description text",
      "link": "https://shadcnblocks.com/placeholder-1.svg",
      "stats": "stats text"
    },
    render: (props) => <Stats8 {...props} />
  },

  Team1: {
    label: "Team1",
    fields: {
      "heading": {
        "type": "text"
      },
      "subheading": {
        "type": "text"
      },
      "description": {
        "type": "text"
      },
      "members": {
        "type": "text"
      }
    },
    defaultProps: {
      "heading": "heading text",
      "subheading": "subheading text",
      "description": "description text",
      "members": ""
    },
    render: (props) => <Team1 {...props} />
  },

  Testimonial10: {
    label: "Testimonial10",
    fields: {
      "quote": {
        "type": "text"
      },
      "author": {
        "type": "text"
      }
    },
    defaultProps: {
      "quote": "quote text",
      "author": "author text"
    },
    render: (props) => <Testimonial10 {...props} />
  },

  Timeline9: {
    label: "Timeline9",
    fields: {},
    defaultProps: {},
    render: (props) => <Timeline9 {...props} />
  },

  Waitlist1: {
    label: "Waitlist1",
    fields: {},
    defaultProps: {},
    render: (props) => <Waitlist1 {...props} />
  },
};
