export type NavItem = { label: string; href: `#${string}`; id: string };
export type MailIntent = { to: string; subject: string; body: string };

export const site = {
  brand: "LeaseReel Studio",
  founderName: "Ruth",
  emails: {
    hello: "hello@leasereelstudio.com",
    founder: "ruth@leasereelstudio.com"
  },
  price: "$149",
  turnaround: "48 business hours",
  canonicalUrl: "https://www.leasereelstudio.com/",
  nav: [
    { label: "Sample", href: "#demo", id: "demo" },
    { label: "Package", href: "#package", id: "package" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Accuracy", href: "#accuracy", id: "accuracy" },
    { label: "FAQ", href: "#faq", id: "faq" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "For vacation-rental managers",
    headline: "Turn listing photos into ready-to-post property videos.",
    copy:
      "One approved photo set becomes a social Reel, Story cut, and website video—branded, manually reviewed, and delivered in 48 business hours.",
    microcopy: "One property · Three formats · One revision · $149 founding pilot"
  },
  trust: [
    "Approved photos only",
    "Three publish-ready formats",
    "48 business hours",
    "Manual accuracy review",
    "One revision included"
  ],
  demo: {
    heading: "One photo set. Three places to publish.",
    copy: "Choose a format to see how the same approved property photography is reframed for social, Stories, and a direct-booking website.",
    disclosure:
      "The property image shown is licensed concept photography, not completed client work. Client production uses only photographs the owner or manager authorizes us to process.",
    image:
      "/media/framer-port/living-room-concept.jpg",
    imageAlt: "Bright modern living room used as licensed concept photography",
    assetsReady: false,
    tabs: [
      {
        id: "social",
        label: "Social Reel",
        ratio: "Vertical 9:16",
        duration: "20–30 seconds",
        bullets: ["Property hook", "Feature captions", "Logo and booking call to action"],
        video: "/media/demo-reel.mp4",
        poster: "/media/demo-reel-poster.webp"
      },
      {
        id: "story",
        label: "Story / Ad Cut",
        ratio: "Vertical 9:16",
        duration: "8–12 seconds",
        bullets: ["Faster pacing", "Availability or booking call to action"],
        video: "/media/demo-story.mp4",
        poster: "/media/demo-story-poster.webp"
      },
      {
        id: "web",
        label: "Website Video",
        ratio: "Landscape 16:9",
        duration: "15–30 seconds",
        bullets: ["Property overview", "Direct-booking website", "Email campaigns", "Supported listing portals"],
        video: "/media/demo-web.mp4",
        poster: "/media/demo-web-poster.webp"
      }
    ]
  },
  deliverables: [
    {
      title: "Social Reel",
      copy: "A 20–30-second vertical Reel designed for Instagram, Facebook, TikTok, and YouTube Shorts."
    },
    {
      title: "Story / Ad Cut",
      copy: "A concise 8–12-second cut for Stories, availability updates, booking campaigns, and paid social creative."
    },
    {
      title: "Website Version",
      copy: "A landscape property video for direct-booking websites, email campaigns, and portals that support video uploads."
    },
    {
      title: "Copy Pack",
      copy: "A property-specific caption, concise feature highlights, and a clear guest call to action."
    }
  ],
  audience: [
    "Vacation-rental management companies",
    "Luxury short-term-rental hosts",
    "Cabin, beach, and destination portfolios",
    "Direct-booking property brands"
  ],
  process: [
    {
      title: "Send the property",
      copy: "Share 8–15 approved property photos, your logo, verified property facts, and the listing or direct-booking URL."
    },
    {
      title: "We produce and review",
      copy: "We choose the sequence, direct restrained motion, write the copy, add branding, and inspect every clip."
    },
    {
      title: "Approve and publish",
      copy: "Review a watermarked preview, request one revision, and receive ready-to-post final exports."
    }
  ],
  accuracy: [
    {
      title: "No invented features",
      copy:
        "We do not intentionally add rooms, balconies, windows, pools, appliances, views, or amenities that are not present."
    },
    {
      title: "No fake walkthrough claims",
      copy:
        "Separate photographs are not represented as a physically continuous floor-plan walkthrough unless the source material supports it."
    },
    {
      title: "Verified copy",
      copy: "Amenities, availability, booking details, and property claims come from information approved by the client."
    },
    {
      title: "Problem clips are removed",
      copy:
        "If motion distorts architecture, furniture, fixtures, or room proportions, the clip is regenerated or excluded."
    }
  ],
  pricing: {
    title: "Founding Property Video Package",
    subline: "One property. Three formats. One clear approval process.",
    included: [
      "20–30-second Social Reel",
      "8–12-second Story/ad cut",
      "Landscape website version",
      "Property-specific copy pack",
      "Logo, colors, and contact details",
      "Licensed music or appropriate audio treatment",
      "Manual accuracy review",
      "One revision",
      "Delivery within 48 business hours after approved assets and payment/deposit"
    ],
    payment: "50% to begin. Remaining balance after the watermarked preview is approved."
  },
  founder: {
    name: "Ruth",
    title: "Founder & Property Video Producer",
    credential: "Penn State Computer Science",
    copy:
      "Every founding-client pilot is handled directly—from asset review and motion direction to final quality control."
  },
  faq: [
    {
      question: "Do we need to schedule another photo or video shoot?",
      answer:
        "No. LeaseReel is built around property photography your company already owns or is authorized to reuse."
    },
    {
      question: "What photographs do you need?",
      answer:
        "Usually 8–15 clear, high-resolution images covering the strongest rooms, exterior, and relevant amenities. We recommend a sequence after reviewing them."
    },
    {
      question: "Will AI change the appearance of the property?",
      answer:
        "The goal is restrained camera motion, not redesign. Every clip is manually reviewed, and unstable or misleading output is regenerated or removed."
    },
    {
      question: "Where can we publish the videos?",
      answer:
        "Deliverables are designed for Instagram, Facebook, TikTok, YouTube Shorts, direct-booking websites, and email. Listing-portal support varies by platform, so placement should be confirmed by the client."
    },
    {
      question: "Who must own the photo rights?",
      answer:
        "The client must own the photographs or have adequate permission to authorize their use and AI-assisted processing."
    },
    {
      question: "How quickly is the first version delivered?",
      answer:
        "Within 48 business hours after approved assets, verified property information, and the initial payment are received."
    },
    {
      question: "What is included in the revision?",
      answer:
        "One consolidated revision covering text, sequencing, branding, music direction, and reasonable motion corrections."
    },
    {
      question: "Can you create videos for several properties every month?",
      answer:
        "Yes. Portfolio production is available after the first pilot establishes the visual style, approval process, and typical workload."
    },
    {
      question: "Do you handle guest inquiries or bookings?",
      answer:
        "No. LeaseReel provides property-media production only. We do not act as a booking platform, property manager, or guest-communications service."
    }
  ],
  legal: {
    photoRights:
      "Client confirms authorization to provide source photos. Client approves AI-assisted processing. LeaseReel does not claim ownership of source photographs. Portfolio use requires separate permission.",
    privacy:
      "No advertising trackers in version one. Contact is initiated through email. No personal information is sold."
  }
} as const;

export const pilotIntent: MailIntent = {
  to: site.emails.hello,
  subject: "LeaseReel pilot for [Property Name]",
  body:
    "Property name:\nListing or direct-booking URL:\nNumber of approved photos:\nWhere the video will be published:\nPreferred launch date:"
};

export const portfolioIntent: MailIntent = {
  to: site.emails.hello,
  subject: "LeaseReel portfolio production",
  body:
    "Number of properties:\nTypical new listings per month:\nExisting photography process:\nRequired publishing formats:\nBrand guidelines:"
};
