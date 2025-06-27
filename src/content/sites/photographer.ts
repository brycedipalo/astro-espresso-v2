// In src/content/sites/photographer.ts

import type { SiteConfig } from '~/types/site';

const photographer: SiteConfig = {
  slug: 'photographer',
  title:       'Blessy Photography – Penticton',
  description: 'Capturing timeless moments in Penticton.',
 
  // …we’ll fill the rest below…
  navLinks:           [],
  branding:           { primaryColor: '', accentColor: '', fontFamily: '', logoSrc: '' },
  hero: {
    imageUrl:  '/assets/examples/photographer/Hero.jpg',
    heading:   'Blessy Photography',
    subheading:'Capturing the moments that matter',
    // We’ll adjust the link to point within this demo:
    ctaText:   'View Portfolio',
    ctaHref:   '#gallery',
    altText:   'Bride and groom at sunset'
  },
  about:              { heading: '', intro: '', bio: '', imageSrc: '', imageAlt: '' },
  servicesSection:    { heading: '', subheading: '', services: [] },
  testimonialsSection:{ heading: '', subheading: '', testimonials: [] },
  gallery:            [],
  ctaSection:         { heading: '', subheading: '', buttonText: '', buttonHref: '' }
};

export default photographer;
