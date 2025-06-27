// src/types/site.ts

/**  
 * The complete “shape” of one demo site’s data, matching your components’ props  
 */
export interface SiteConfig {
  // → /<slug>
  slug: string;

  // Page meta
  title: string;
  description: string;
  /** OG image for social previews (optional) */
  ogImage?: string;

  // Header navigation
  navLinks: Array<{ text: string; href: string }>;

  // Branding tokens (colors, fonts, logo)
  branding: {
    primaryColor: string;
    accentColor: string;
    fontFamily: string;
    logoSrc: string;    // e.g. "/assets/logo.png"
  };

  // Hero section (matches HeroProps)
  hero: {
    imageUrl: string;
    heading: string;
    subheading?: string;
    ctaText?: string;
    ctaHref?: string;
    altText?: string;
  };

  // About section (matches AboutProps)
  about: {
    heading: string;
    intro: string;
    bio: string;
    imageSrc: string;
    imageAlt?: string;
  };

  // Services section (matches ServicesProps)
  servicesSection: {
    heading: string;
    subheading?: string;
    services: Array<{
      title: string;
      description: string;
      image?: string;
    }>;
  };

  // Testimonials section (matches TestimonialsProps)
  testimonialsSection: {
    heading: string;
    subheading?: string;
    testimonials: Array<{
      name: string;
      quote: string;
      role?: string;
      avatar?: string;
      rating?: number;
    }>;
  };

  // Gallery (matches GalleryProps)
  gallery: Array<{
    src: string;
    alt: string;
  }>;

  // Bottom call-to-action (matches CtaProps)
  ctaSection: {
    heading: string;
    subheading?: string;
    buttonText: string;
    buttonHref: string;
  };
}
