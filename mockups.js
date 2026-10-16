const DOWNLOAD_PACKS = [
  {
    name: 'Brand Starter Pack',
    description: 'A quick download of logo, business card, and presentation mockups for client-ready previews.',
    format: 'ZIP',
    size: '24.5 MB',
    href: 'https://drive.google.com/uc?export=download&id=1example'
  },
  {
    name: 'Social Bundle',
    description: 'A curated set of social, app and campaign visuals for digital-first brand storytelling.',
    format: 'ZIP',
    size: '18.2 MB',
    href: 'https://drive.google.com/uc?export=download&id=1example'
  },
  {
    name: 'Product Mockup Kit',
    description: 'Packaging, mug, signage and retail visuals designed for launch presentation and pitch decks.',
    format: 'ZIP',
    size: '21.8 MB',
    href: 'https://drive.google.com/uc?export=download&id=1example'
  }
];

const MOCKUP_CATEGORIES = [
  {
    id: 'logo',
    label: 'Logo',
    items: [
      {
        id: 'logo-primary',
        name: 'Primary Logo',
        category: 'Logo',
        format: 'ZIP',
        size: '12.5 MB',
        description: 'Clean, premium logo presentation in a modern brand environment.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/logo-mockup-main.svg',
        images: ['images/mockups/logo-mockup-main.svg', 'images/mockups/logo-mockup-main.svg', 'images/mockups/logo-mockup-main.svg']
      },
      {
        id: 'logo-stack',
        name: 'Logo Stack',
        category: 'Logo',
        format: 'ZIP',
        size: '11.8 MB',
        description: 'Applied logo set with alternate lockups for digital and print use.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/logo-mockup-main.svg',
        images: ['images/mockups/logo-mockup-main.svg', 'images/mockups/logo-mockup-main.svg', 'images/mockups/logo-mockup-main.svg']
      },
      {
        id: 'logo-badge',
        name: 'Logo Badge',
        category: 'Logo',
        format: 'ZIP',
        size: '10.7 MB',
        description: 'A strong badge-style logo presentation for premium brand storytelling.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/logo-mockup-main.svg',
        images: ['images/mockups/logo-mockup-main.svg', 'images/mockups/logo-mockup-main.svg', 'images/mockups/logo-mockup-main.svg']
      }
    ]
  },
  {
    id: 'business-card',
    label: 'Business Card',
    items: [
      {
        id: 'business-card-classic',
        name: 'Classic Business Card',
        category: 'Business Card',
        format: 'ZIP',
        size: '9.8 MB',
        description: 'Elegant card mockup for high-end client and founder presentations.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/business-card-main.svg',
        images: ['images/mockups/business-card-main.svg', 'images/mockups/business-card-main.svg', 'images/mockups/business-card-main.svg']
      },
      {
        id: 'business-card-modern',
        name: 'Modern Business Card',
        category: 'Business Card',
        format: 'ZIP',
        size: '8.6 MB',
        description: 'Minimal card presentation for personal and studio brand identities.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/business-card-main.svg',
        images: ['images/mockups/business-card-main.svg', 'images/mockups/business-card-main.svg', 'images/mockups/business-card-main.svg']
      },
      {
        id: 'business-card-premium',
        name: 'Premium Business Card',
        category: 'Business Card',
        format: 'ZIP',
        size: '9.4 MB',
        description: 'Luxury business card presentation designed for premium client-facing use.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/business-card-main.svg',
        images: ['images/mockups/business-card-main.svg', 'images/mockups/business-card-main.svg', 'images/mockups/business-card-main.svg']
      }
    ]
  },
  {
    id: 'id-card',
    label: 'ID Card',
    items: [
      {
        id: 'id-card-plain',
        name: 'ID Card Plain',
        category: 'ID Card',
        format: 'ZIP',
        size: '7.4 MB',
        description: 'Professional ID card layout for teams, agencies and events.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/id-card-main.svg',
        images: ['images/mockups/id-card-main.svg', 'images/mockups/id-card-main.svg', 'images/mockups/id-card-main.svg']
      },
      {
        id: 'id-card-staff',
        name: 'Staff ID Card',
        category: 'ID Card',
        format: 'ZIP',
        size: '7.9 MB',
        description: 'Staff and membership card mockup built for brand consistency.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/id-card-main.svg',
        images: ['images/mockups/id-card-main.svg', 'images/mockups/id-card-main.svg', 'images/mockups/id-card-main.svg']
      },
      {
        id: 'id-card-team',
        name: 'Team ID Card',
        category: 'ID Card',
        format: 'ZIP',
        size: '8.1 MB',
        description: 'A polished ID card option for agencies, teams and event staff.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/id-card-main.svg',
        images: ['images/mockups/id-card-main.svg', 'images/mockups/id-card-main.svg', 'images/mockups/id-card-main.svg']
      }
    ]
  },
  {
    id: 'letterhead',
    label: 'Letterhead',
    items: [
      {
        id: 'letterhead-standard',
        name: 'Letterhead Standard',
        category: 'Letterhead',
        format: 'ZIP',
        size: '10.2 MB',
        description: 'Corporate document presentation for brand proposals and letters.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/letterhead-main.svg',
        images: ['images/mockups/letterhead-main.svg', 'images/mockups/letterhead-main.svg', 'images/mockups/letterhead-main.svg']
      },
      {
        id: 'letterhead-brief',
        name: 'Letterhead Brief',
        category: 'Letterhead',
        format: 'ZIP',
        size: '10.5 MB',
        description: 'A cleaner letterhead set optimized for proposals and communication.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/letterhead-main.svg',
        images: ['images/mockups/letterhead-main.svg', 'images/mockups/letterhead-main.svg', 'images/mockups/letterhead-main.svg']
      },
      {
        id: 'letterhead-brand',
        name: 'Brand Letterhead',
        category: 'Letterhead',
        format: 'ZIP',
        size: '11.2 MB',
        description: 'A refined letterhead variation for premium business documentation.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/letterhead-main.svg',
        images: ['images/mockups/letterhead-main.svg', 'images/mockups/letterhead-main.svg', 'images/mockups/letterhead-main.svg']
      }
    ]
  },
  {
    id: 'packaging',
    label: 'Packaging',
    items: [
      {
        id: 'packaging-box',
        name: 'Packaging Box',
        category: 'Packaging',
        format: 'ZIP',
        size: '11.7 MB',
        description: 'Premium packaging presentation for product labels and retail launches.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/packaging-main.svg',
        images: ['images/mockups/packaging-main.svg', 'images/mockups/packaging-main.svg', 'images/mockups/packaging-main.svg']
      },
      {
        id: 'packaging-bag',
        name: 'Packaging Bag',
        category: 'Packaging',
        format: 'ZIP',
        size: '9.9 MB',
        description: 'Retail bag and pouch presentation built for lifestyle brands.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/packaging-main.svg',
        images: ['images/mockups/packaging-main.svg', 'images/mockups/packaging-main.svg', 'images/mockups/packaging-main.svg']
      },
      {
        id: 'packaging-mini',
        name: 'Packaging Mini',
        category: 'Packaging',
        format: 'ZIP',
        size: '8.8 MB',
        description: 'Compact product packaging mockup designed for concise brand storytelling.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/packaging-main.svg',
        images: ['images/mockups/packaging-main.svg', 'images/mockups/packaging-main.svg', 'images/mockups/packaging-main.svg']
      }
    ]
  },
  {
    id: 'mug',
    label: 'Mug',
    items: [
      {
        id: 'mug-classic',
        name: 'Classic Mug',
        category: 'Mug',
        format: 'ZIP',
        size: '6.8 MB',
        description: 'Coffee and lifestyle brand mug mockup with elevated presentation.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/mug-main.svg',
        images: ['images/mockups/mug-main.svg', 'images/mockups/mug-main.svg', 'images/mockups/mug-main.svg']
      },
      {
        id: 'mug-hero',
        name: 'Hero Mug',
        category: 'Mug',
        format: 'ZIP',
        size: '6.3 MB',
        description: 'Strong product mockup suited for e-commerce and launch visuals.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/mug-main.svg',
        images: ['images/mockups/mug-main.svg', 'images/mockups/mug-main.svg', 'images/mockups/mug-main.svg']
      },
      {
        id: 'mug-lifestyle',
        name: 'Lifestyle Mug',
        category: 'Mug',
        format: 'ZIP',
        size: '6.9 MB',
        description: 'Lifestyle-oriented mug display for warm, approachable brand scenes.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/mug-main.svg',
        images: ['images/mockups/mug-main.svg', 'images/mockups/mug-main.svg', 'images/mockups/mug-main.svg']
      }
    ]
  },
  {
    id: 't-shirt',
    label: 'T-Shirt',
    items: [
      {
        id: 'tshirt-oversized',
        name: 'Oversized T-Shirt',
        category: 'T-Shirt',
        format: 'ZIP',
        size: '9.4 MB',
        description: 'Streetwear and lifestyle apparel presentation with minimal styling.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/tshirt-main.svg',
        images: ['images/mockups/tshirt-main.svg', 'images/mockups/tshirt-main.svg', 'images/mockups/tshirt-main.svg']
      },
      {
        id: 'tshirt-print',
        name: 'Print T-Shirt',
        category: 'T-Shirt',
        format: 'ZIP',
        size: '8.7 MB',
        description: 'A crisp and brand-ready apparel preview for launch materials.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/tshirt-main.svg',
        images: ['images/mockups/tshirt-main.svg', 'images/mockups/tshirt-main.svg', 'images/mockups/tshirt-main.svg']
      },
      {
        id: 'tshirt-brand',
        name: 'Brand T-Shirt',
        category: 'T-Shirt',
        format: 'ZIP',
        size: '9.2 MB',
        description: 'Premium apparel mockup built for branded capsule collections.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/tshirt-main.svg',
        images: ['images/mockups/tshirt-main.svg', 'images/mockups/tshirt-main.svg', 'images/mockups/tshirt-main.svg']
      }
    ]
  },
  {
    id: 'stationery',
    label: 'Stationery',
    items: [
      {
        id: 'stationery-set',
        name: 'Stationery Set',
        category: 'Stationery',
        format: 'ZIP',
        size: '9.1 MB',
        description: 'Branded stationery pack combining letterhead, card and note layouts.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/letterhead-main.svg',
        images: ['images/mockups/letterhead-main.svg', 'images/mockups/business-card-main.svg', 'images/mockups/logo-mockup-main.svg']
      },
      {
        id: 'stationery-brand',
        name: 'Brand Stationery',
        category: 'Stationery',
        format: 'ZIP',
        size: '8.9 MB',
        description: 'Premium stationery layout for professional brand presentation.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/business-card-main.svg',
        images: ['images/mockups/business-card-main.svg', 'images/mockups/letterhead-main.svg', 'images/mockups/logo-mockup-main.svg']
      },
      {
        id: 'stationery-note',
        name: 'Note Stationery',
        category: 'Stationery',
        format: 'ZIP',
        size: '8.3 MB',
        description: 'Compact stationery pack for minimal business communication and proposals.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/letterhead-main.svg',
        images: ['images/mockups/letterhead-main.svg', 'images/mockups/business-card-main.svg', 'images/mockups/logo-mockup-main.svg']
      }
    ]
  },
  {
    id: 'signage',
    label: 'Signage',
    items: [
      {
        id: 'signage-storefront',
        name: 'Storefront Signage',
        category: 'Signage',
        format: 'ZIP',
        size: '8.5 MB',
        description: 'Clean exterior signage mockup for storefront and retail branding.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/signage-main.svg',
        images: ['images/mockups/signage-main.svg', 'images/mockups/signage-main.svg', 'images/mockups/signage-main.svg']
      },
      {
        id: 'signage-window',
        name: 'Window Signage',
        category: 'Signage',
        format: 'ZIP',
        size: '8.1 MB',
        description: 'Window signage concept for storefronts and office branding.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/signage-main.svg',
        images: ['images/mockups/signage-main.svg', 'images/mockups/signage-main.svg', 'images/mockups/signage-main.svg']
      },
      {
        id: 'signage-flag',
        name: 'Store Signage',
        category: 'Signage',
        format: 'ZIP',
        size: '8.7 MB',
        description: 'Flag and storefront signage mockup built for stronger retail visibility.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/signage-main.svg',
        images: ['images/mockups/signage-main.svg', 'images/mockups/signage-main.svg', 'images/mockups/signage-main.svg']
      }
    ]
  },
  {
    id: 'laptop',
    label: 'Laptop',
    items: [
      {
        id: 'laptop-brand',
        name: 'Laptop Brand',
        category: 'Laptop',
        format: 'ZIP',
        size: '7.1 MB',
        description: 'Website and brand presentation shown on a premium laptop screen.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/laptop-main.svg',
        images: ['images/mockups/laptop-main.svg', 'images/mockups/laptop-main.svg', 'images/mockups/laptop-main.svg']
      },
      {
        id: 'laptop-portfolio',
        name: 'Portfolio Laptop',
        category: 'Laptop',
        format: 'ZIP',
        size: '7.5 MB',
        description: 'Portfolio-focused laptop presentation for digital brand showcases.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/laptop-main.svg',
        images: ['images/mockups/laptop-main.svg', 'images/mockups/laptop-main.svg', 'images/mockups/laptop-main.svg']
      },
      {
        id: 'laptop-creative',
        name: 'Creative Laptop',
        category: 'Laptop',
        format: 'ZIP',
        size: '7.8 MB',
        description: 'Creative studio laptop mockup for polished brand presentations and decks.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/laptop-main.svg',
        images: ['images/mockups/laptop-main.svg', 'images/mockups/laptop-main.svg', 'images/mockups/laptop-main.svg']
      }
    ]
  },
  {
    id: 'phone',
    label: 'Phone',
    items: [
      {
        id: 'phone-screen',
        name: 'Phone Screen',
        category: 'Phone',
        format: 'ZIP',
        size: '6.5 MB',
        description: 'Mobile-first brand preview for apps, landing pages and campaigns.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/phone-main.svg',
        images: ['images/mockups/phone-main.svg', 'images/mockups/phone-main.svg', 'images/mockups/phone-main.svg']
      },
      {
        id: 'phone-brand',
        name: 'Brand Phone',
        category: 'Phone',
        format: 'ZIP',
        size: '6.8 MB',
        description: 'Upmarket mobile design presentation for brand launch timing.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/phone-main.svg',
        images: ['images/mockups/phone-main.svg', 'images/mockups/phone-main.svg', 'images/mockups/phone-main.svg']
      },
      {
        id: 'phone-concept',
        name: 'Concept Phone',
        category: 'Phone',
        format: 'ZIP',
        size: '7.0 MB',
        description: 'A brand concept preview presented elegantly for app and mobile use.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/phone-main.svg',
        images: ['images/mockups/phone-main.svg', 'images/mockups/phone-main.svg', 'images/mockups/phone-main.svg']
      }
    ]
  },
  {
    id: 'social-media',
    label: 'Social Media',
    items: [
      {
        id: 'social-media-post',
        name: 'Social Post',
        category: 'Social Media',
        format: 'ZIP',
        size: '8.7 MB',
        description: 'Social campaign visuals aligned to a refined brand personality.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/social-media-main.svg',
        images: ['images/mockups/social-media-main.svg', 'images/mockups/social-media-main.svg', 'images/mockups/social-media-main.svg']
      },
      {
        id: 'social-media-grid',
        name: 'Social Grid',
        category: 'Social Media',
        format: 'ZIP',
        size: '8.2 MB',
        description: 'Social media story and grid context for brand storytelling.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/social-media-main.svg',
        images: ['images/mockups/social-media-main.svg', 'images/mockups/social-media-main.svg', 'images/mockups/social-media-main.svg']
      },
      {
        id: 'social-media-campaign',
        name: 'Campaign Social',
        category: 'Social Media',
        format: 'ZIP',
        size: '8.9 MB',
        description: 'Campaign-ready social mockup set for brand launches and content planning.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/social-media-main.svg',
        images: ['images/mockups/social-media-main.svg', 'images/mockups/social-media-main.svg', 'images/mockups/social-media-main.svg']
      }
    ]
  },
  {
    id: 'brand-identity',
    label: 'Brand Identity',
    items: [
      {
        id: 'brand-identity-kit',
        name: 'Brand Identity Kit',
        category: 'Brand Identity',
        format: 'ZIP',
        size: '13.0 MB',
        description: 'A complete identity system preview for a premium brand reveal.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/logo-mockup-main.svg',
        images: ['images/mockups/logo-mockup-main.svg', 'images/mockups/business-card-main.svg', 'images/mockups/packaging-main.svg']
      },
      {
        id: 'brand-identity-board',
        name: 'Identity Board',
        category: 'Brand Identity',
        format: 'ZIP',
        size: '12.4 MB',
        description: 'Brand board used to present the full visual direction and system.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/brand-presentation-kit.svg',
        images: ['images/mockups/brand-presentation-kit.svg', 'images/mockups/logo-mockup-main.svg', 'images/mockups/packaging-main.svg']
      },
      {
        id: 'brand-identity-pack',
        name: 'Identity Pack',
        category: 'Brand Identity',
        format: 'ZIP',
        size: '13.3 MB',
        description: 'An all-in-one identity presentation pack for premium brand pitches.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/brand-presentation-kit.svg',
        images: ['images/mockups/brand-presentation-kit.svg', 'images/mockups/logo-mockup-main.svg', 'images/mockups/business-card-main.svg']
      }
    ]
  },
  {
    id: 'billboard',
    label: 'Billboard',
    items: [
      {
        id: 'billboard-city',
        name: 'City Billboard',
        category: 'Billboard',
        format: 'ZIP',
        size: '10.9 MB',
        description: 'Large-format outdoor display for bold, high-impact brand visibility.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/billboard-main.svg',
        images: ['images/mockups/billboard-main.svg', 'images/mockups/billboard-main.svg', 'images/mockups/billboard-main.svg']
      },
      {
        id: 'billboard-road',
        name: 'Road Billboard',
        category: 'Billboard',
        format: 'ZIP',
        size: '11.4 MB',
        description: 'Roadside branding preview for premium location-based campaigns.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/billboard-main.svg',
        images: ['images/mockups/billboard-main.svg', 'images/mockups/billboard-main.svg', 'images/mockups/billboard-main.svg']
      },
      {
        id: 'billboard-retail',
        name: 'Retail Billboard',
        category: 'Billboard',
        format: 'ZIP',
        size: '10.7 MB',
        description: 'Retailscape billboard mockup for storefront and campaign impact.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/billboard-main.svg',
        images: ['images/mockups/billboard-main.svg', 'images/mockups/billboard-main.svg', 'images/mockups/billboard-main.svg']
      }
    ]
  },
  {
    id: 'book-cover',
    label: 'Book Cover',
    items: [
      {
        id: 'book-cover-brand',
        name: 'Brand Book Cover',
        category: 'Book Cover',
        format: 'ZIP',
        size: '7.9 MB',
        description: 'Editorial cover presentation for brand books and premium guides.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/book-cover-main.svg',
        images: ['images/mockups/book-cover-main.svg', 'images/mockups/book-cover-main.svg', 'images/mockups/book-cover-main.svg']
      },
      {
        id: 'book-cover-magazine',
        name: 'Magazine Cover',
        category: 'Book Cover',
        format: 'ZIP',
        size: '8.4 MB',
        description: 'Magazine-style cover mockup for editorial identity presentation.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/book-cover-main.svg',
        images: ['images/mockups/book-cover-main.svg', 'images/mockups/book-cover-main.svg', 'images/mockups/book-cover-main.svg']
      },
      {
        id: 'book-cover-editorial',
        name: 'Editorial Cover',
        category: 'Book Cover',
        format: 'ZIP',
        size: '8.1 MB',
        description: 'Elegant editorial cover concept suited to culture and publishing brands.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/book-cover-main.svg',
        images: ['images/mockups/book-cover-main.svg', 'images/mockups/book-cover-main.svg', 'images/mockups/book-cover-main.svg']
      }
    ]
  },
  {
    id: 'poster',
    label: 'Poster',
    items: [
      {
        id: 'poster-event',
        name: 'Event Poster',
        category: 'Poster',
        format: 'ZIP',
        size: '8.3 MB',
        description: 'Poster-ready mockup built for launches, events and campaigns.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/poster-main.svg',
        images: ['images/mockups/poster-main.svg', 'images/mockups/poster-main.svg', 'images/mockups/poster-main.svg']
      },
      {
        id: 'poster-launch',
        name: 'Launch Poster',
        category: 'Poster',
        format: 'ZIP',
        size: '8.8 MB',
        description: 'Modern launch poster presentation for brand and product reveals.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/poster-main.svg',
        images: ['images/mockups/poster-main.svg', 'images/mockups/poster-main.svg', 'images/mockups/poster-main.svg']
      },
      {
        id: 'poster-brand',
        name: 'Brand Poster',
        category: 'Poster',
        format: 'ZIP',
        size: '7.7 MB',
        description: 'Minimal poster mockup with premium composition and presentation.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/poster-main.svg',
        images: ['images/mockups/poster-main.svg', 'images/mockups/poster-main.svg', 'images/mockups/poster-main.svg']
      }
    ]
  },
  {
    id: 'presentation',
    label: 'Presentation',
    items: [
      {
        id: 'presentation-deck',
        name: 'Brand Deck',
        category: 'Presentation',
        format: 'ZIP',
        size: '8.9 MB',
        description: 'Premium presentation mockup for client pitch and proposal decks.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/presentation-main.svg',
        images: ['images/mockups/presentation-main.svg', 'images/mockups/presentation-main.svg', 'images/mockups/presentation-main.svg']
      },
      {
        id: 'presentation-brand',
        name: 'Brand Presentation',
        category: 'Presentation',
        format: 'ZIP',
        size: '9.1 MB',
        description: 'A polished deck layout to present your brand in a narrative format.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/presentation-main.svg',
        images: ['images/mockups/presentation-main.svg', 'images/mockups/presentation-main.svg', 'images/mockups/presentation-main.svg']
      },
      {
        id: 'presentation-portfolio',
        name: 'Portfolio Presentation',
        category: 'Presentation',
        format: 'ZIP',
        size: '9.6 MB',
        description: 'Portfolio-ready deck mockup for featuring brand work and case studies.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1example',
        preview: 'images/mockups/presentation-main.svg',
        images: ['images/mockups/presentation-main.svg', 'images/mockups/presentation-main.svg', 'images/mockups/presentation-main.svg']
      }
    ]
  }
];

const searchInput = document.getElementById('mockup-search');
const sectionsContainer = document.getElementById('mockup-sections');
const modal = document.getElementById('mockup-modal');
const modalBody = document.getElementById('mockup-modal-body');

const ALL_ITEMS = MOCKUP_CATEGORIES.flatMap((section) =>
  section.items.map((item) => ({ ...item, sectionLabel: section.label }))
);

function getVisibleSections() {
  const searchValue = (searchInput?.value || '').trim().toLowerCase();

  return MOCKUP_CATEGORIES.map((section) => {
    const items = section.items.filter((item) => {
      if (!searchValue) return true;
      const haystack = [item.name, item.category, item.description, section.label].join(' ').toLowerCase();
      return haystack.includes(searchValue);
    });

    return { ...section, items };
  }).filter((section) => section.items.length > 0);
}

function renderDownloadPacks() {
  const downloadGrid = document.getElementById('download-pack-grid');
  if (!downloadGrid) return;

  downloadGrid.innerHTML = DOWNLOAD_PACKS.map((pack) => `
    <article class="download-card" aria-label="${pack.name}">
      <div class="download-card-top">
        <strong>${pack.name}</strong>
        <span class="download-badge">${pack.format}</span>
      </div>
      <p>${pack.description}</p>
      <div class="download-card-meta">
        <span>${pack.size}</span>
        <span>Ready to use</span>
      </div>
      <a href="${pack.href}" target="_blank" rel="noopener noreferrer">Download</a>
    </article>
  `).join('');
}

function readItemFromPreviewButton(button) {
  const card = button.closest('.mockup-card');
  const title = card?.querySelector('.mockup-topline h3')?.textContent?.trim() || 'Mockup Preview';
  const category = card?.querySelector('.mockup-category')?.textContent?.trim() || 'Mockup';
  const previewImage = card?.querySelector('.mockup-preview img')?.getAttribute('src') || button.getAttribute('href') || '';
  const downloadLink = card?.querySelector('.mockup-download')?.getAttribute('href') || button.getAttribute('href') || '';

  return {
    id: (title || 'mockup').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name: title,
    category,
    sectionLabel: category,
    format: 'Preview',
    size: 'Ready to view',
    description: card?.querySelector('.mockup-description')?.textContent?.trim() || 'Preview of the mockup.',
    downloadUrl: downloadLink,
    preview: previewImage,
    images: [previewImage]
  };
}

function bindPreviewButtons() {
  document.querySelectorAll('.mockup-preview-btn').forEach((button) => {
    button.onclick = null;
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const itemId = button.dataset.id;
      const item = itemId ? ALL_ITEMS.find((entry) => entry.id === itemId) : null;

      if (item) {
        openMockupModal(item);
        return;
      }

      openMockupModal(readItemFromPreviewButton(button));
    });
  });
}

function renderMockups() {
  if (!sectionsContainer) return;

  if (sectionsContainer.dataset.static === 'true') {
    bindPreviewButtons();
    return;
  }

  renderDownloadPacks();

  const visible = getVisibleSections();

  if (!visible.length) {
    sectionsContainer.innerHTML = '<div class="mockup-empty">No mockups match your search.</div>';
    return;
  }

  sectionsContainer.innerHTML = visible.map((section) => `
    <section class="mockup-category-section" data-section-id="${section.id}">
      <div class="mockup-section-heading">
        <h2>${section.label}</h2>
        <span>${section.items.length} items</span>
      </div>
      <div class="mockup-grid">
        ${section.items.map((item) => `
          <article class="mockup-card" aria-label="${item.name}">
            <div class="mockup-preview">
              <img src="${item.preview}" alt="${item.name} preview" loading="lazy">
            </div>
            <div class="mockup-body">
              <div class="mockup-topline">
                <h3>${item.name}</h3>
                <span class="mockup-category">${item.category}</span>
              </div>
              <p class="mockup-description">${item.description}</p>
              <div class="mockup-card-actions">
                <button class="mockup-preview-btn" type="button" data-id="${item.id}">Preview</button>
                <a class="mockup-download" href="${item.downloadUrl}" target="_blank" rel="noopener noreferrer">Download</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');

  bindPreviewButtons();
}

function openMockupModal(item) {
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="mockup-modal-shell">
      <div class="mockup-modal-header">
        <div>
          <p class="mockup-modal-kicker">${item.sectionLabel || item.category}</p>
          <h3>${item.name}</h3>
        </div>
        <button type="button" class="mockup-modal-close" aria-label="Close preview">×</button>
      </div>

      <div class="mockup-preview-gallery">
        ${(item.images || [item.preview]).map((image, index) => `
          <figure class="mockup-gallery-item">
            <img src="${image}" alt="${item.name} preview ${index + 1}" loading="lazy">
          </figure>
        `).join('')}
      </div>

      <div class="mockup-modal-details">
        <div class="mockup-modal-meta">
          <span>Format: ${item.format}</span>
          <span>Size: ${item.size}</span>
        </div>
        <div class="mockup-modal-actions">
          <button type="button" class="mockup-modal-back" aria-label="Back to mockups">Back</button>
          <a class="btn-primary mockup-download-inline" href="${item.downloadUrl}" target="_blank" rel="noopener noreferrer">Download Mockup</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  const closeButton = modalBody.querySelector('.mockup-modal-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => closeMockupModal());
  }

  const backButton = modalBody.querySelector('.mockup-modal-back');
  if (backButton) {
    backButton.addEventListener('click', () => closeMockupModal());
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeMockupModal();
    }
  }, { once: true });
}

function closeMockupModal() {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

if (searchInput) {
  searchInput.addEventListener('input', renderMockups);
}

renderMockups();
