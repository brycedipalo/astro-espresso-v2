// src/content/examples/photographer.ts

export const photographerSite = {
  meta: {
    title: "Blessy Photography – Wedding & Event Photographer",
    description: "Capturing timeless moments for weddings, families, and events across BC.",
    ogImage: "/assets/examples/photographer/og.jpg"
  },

  hero: {
    imageUrl: "/assets/examples/photographer/Hero.jpg",
    heading: "Blessy Photography",
    subheading: "Capturing the moments that matter",
    ctaText: "View Portfolio",
    ctaHref: "/portfolio",
    altText: "Bride and groom at sunset"
  },

  about: {
    heading: "About Blessy",
    intro: "Capturing your moments with passion and creativity.",
    bio: "With over 10 years of experience in professional photography, we specialize in creating timeless images that tell your unique story. Whether it's portraits, events, or real estate, we bring dedication and artistry to every shoot.",
    imageSrc: "/assets/examples/photographer/about.jpg",
    imageAlt: "Photographer portrait"
  },

  services: {
    heading: "What We Offer",
    subheading: "Tailored photography experiences for every occasion.",
    items: [
      {
        title: "Real Estate Photography",
        description: "Showcase properties with high-quality, wide-angle shots that sell.",
        image: "/assets/examples/photographer/services/real-estate.jpg"
      },
      {
        title: "Portrait Sessions",
        description: "Professional portraits in studio or on-location for individuals or couples.",
        image: "/assets/examples/photographer/services/portraits.jpg"
      },
      {
        title: "Engagement & Couples",
        description: "Celebrate love with natural, emotion-filled couple photography.",
        image: "/assets/examples/photographer/services/engagement.jpg"
      },
      {
        title: "Social Media Content",
        description: "Consistent, branded content for creators and businesses alike.",
        image: "/assets/examples/photographer/services/social.jpg"
      }
    ]
  },

  testimonials: {
    heading: "What Clients Are Saying",
    subheading: "Real stories from happy clients who trusted us with their moments.",
    items: [
      {
        name: "Emily T.",
        role: "Mother of Two",
        quote: "Our family photos turned out beautifully — Blessy captured our personalities so well! We'll cherish these for years.",
        avatar: "/assets/examples/photographer/testimonials/emily.jpg",
        rating: 5
      },
      {
        name: "Jordan K.",
        role: "Real Estate Agent",
        quote: "The listing photos helped sell the property in 3 days. Professional and fast!",
        avatar: "/assets/examples/photographer/testimonials/jordan.jpg",
        rating: 5
      },
      {
        name: "Ava M.",
        role: "Brand Owner",
        quote: "Our social media engagement doubled thanks to the incredible product shots.",
        avatar: "/assets/examples/photographer/testimonials/ava.jpg",
        rating: 4
      }
    ]
  },

  cta: {
    heading: "Let’s Make Something Beautiful Together",
    subheading: "From concept to camera, we bring your vision to life",
    buttonText: "Get In Touch",
    buttonHref: "/contact"
  },
  gallery: [
    { src: "/assets/examples/photographer/gallery/01.jpg", alt: "Bride smiling at ceremony" },
    { src: "/assets/examples/photographer/gallery/02.jpg", alt: "Wedding ring close-up" },
    { src: "/assets/examples/photographer/gallery/03.jpg", alt: "Groom tying bowtie" },
    { src: "/assets/examples/photographer/gallery/04.jpg", alt: "Family laughing together" },
    { src: "/assets/examples/photographer/gallery/05.jpg", alt: "Wedding venue with flowers" },
    { src: "/assets/examples/photographer/gallery/06.jpg", alt: "Couple dancing at reception" },
    { src: "/assets/examples/photographer/gallery/07.jpg", alt: "Rustic outdoor ceremony setup" },
    { src: "/assets/examples/photographer/gallery/08.jpg", alt: "Kids playing at wedding" },
    { src: "/assets/examples/photographer/gallery/09.jpg", alt: "Reception decor and lights" },
    { src: "/assets/examples/photographer/gallery/10.jpg", alt: "Engagement photo in forest" },
    { src: "/assets/examples/photographer/gallery/11.jpg", alt: "Newborn baby in basket" },
    { src: "/assets/examples/photographer/gallery/12.jpg", alt: "Dog at wedding" }
  ]
};
