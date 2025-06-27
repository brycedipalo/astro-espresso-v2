// src/content/config/site.ts

export const site = {
  brand: {
    name: "Blessy Photography",
    logo: "/assets/examples/photographer/logo.svg",
    tagline: "Capturing the moments that matter"
  },

  meta: {
    title: "Blessy Photography – Vancouver Wedding Photographer",
    description: "Professional wedding, portrait, and lifestyle photography in British Columbia.",
    ogImage: "/assets/examples/photographer/og.jpg",
    twitterHandle: "@blessyphoto"
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/contact" }
  ],

  footer: {
    copyright: "© 2025 Blessy Photography. All rights reserved.",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Instagram", href: "https://instagram.com/blessyphoto" },
      { name: "Email", href: "mailto:hello@blessyphoto.com" }
    ]
  }
};
