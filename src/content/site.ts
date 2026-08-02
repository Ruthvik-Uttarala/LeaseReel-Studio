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
    { label: "Demo", href: "#demo", id: "demo" },
    { label: "Package", href: "#package", id: "package" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Accuracy", href: "#accuracy", id: "accuracy" },
    { label: "FAQ", href: "#faq", id: "faq" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "For rental property managers",
    headline: "Turn listing photos into leasing videos in 48 hours.",
    copy:
      "LeaseReel Studio creates ready-to-publish Reels, Story cuts, and website videos from property photography your team already owns-without another shoot or another tool to learn.",
    microcopy: "One property · Three ready-to-use formats · One revision"
  },
  trust: [
    "No new property shoot",
    "Uses approved photography",
    "Three publishing formats",
    "Manual accuracy review",
    "48-hour turnaround"
  ],
  demo: {
    heading: "See one listing become three ready-to-use assets.",
    copy: "One approved photo set becomes content for social, Stories, and your property website.",
    disclosure:
      "Demo imagery is licensed for portfolio presentation. Client work uses only photographs the property owner or manager authorizes us to use.",
    assetsReady: false,
    tabs: [
      {
        id: "social",
        label: "Social Reel",
        ratio: "Vertical 9:16",
        duration: "20-30 seconds",
        bullets: ["Property hook", "Feature captions", "Logo and CTA"],
        video: "/media/demo-reel.mp4",
        poster: "/media/demo-reel-poster.webp"
      },
      {
        id: "story",
        label: "Story / Ad Cut",
        ratio: "Vertical 9:16",
        duration: "8-12 seconds",
        bullets: ["Faster pacing", "Leasing-special or availability CTA"],
        video: "/media/demo-story.mp4",
        poster: "/media/demo-story-poster.webp"
      },
      {
        id: "web",
        label: "Website Video",
        ratio: "Landscape 16:9",
        duration: "Property overview",
        bullets: ["Website", "Email", "Supported listing portal use"],
        video: "/media/demo-web.mp4",
        poster: "/media/demo-web-poster.webp"
      }
    ]
  },
  deliverables: [
    {
      title: "Social Reel",
      copy: "A 20-30-second vertical Reel designed for Instagram, Facebook, TikTok, and YouTube Shorts."
    },
    {
      title: "Story / Ad Cut",
      copy: "A concise 8-12-second cut for Stories, availability updates, leasing specials, and paid social creative."
    },
    {
      title: "Website Version",
      copy: "A landscape property video for websites, email campaigns, and portals that support video uploads."
    },
    {
      title: "Copy Pack",
      copy: "A property-specific caption, concise feature highlights, and a clear renter call to action."
    }
  ],
  audience: [
    "Local and regional property managers",
    "Apartment and multifamily communities",
    "Student-housing leasing teams",
    "Short-term-rental portfolio managers"
  ],
  process: [
    {
      title: "Send the property",
      copy: "Share 8-15 approved property photos, your logo, verified property facts, and the listing or website URL."
    },
    {
      title: "We produce and review",
      copy: "We select the sequence, create restrained motion, write the property copy, add branding, and manually inspect every clip."
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
      copy: "Rental terms, amenities, availability, and property claims come from information approved by the client."
    },
    {
      title: "Problem clips are removed",
      copy:
        "If motion distorts architecture, furniture, fixtures, or room proportions, the clip is regenerated or excluded."
    }
  ],
  pricing: {
    title: "Founding Property Campaign",
    subline: "One property. Three formats. One clear approval process.",
    included: [
      "20-30-second Social Reel",
      "8-12-second Story/ad cut",
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
      "LeaseReel Studio is led by Ruth, a Penn State Computer Science graduate and property-video producer. Every founding-client pilot is handled directly-from asset review and motion direction to final quality control."
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
        "Usually 8-15 clear, high-resolution images covering the strongest rooms, exterior, and relevant amenities. We will recommend a sequence after reviewing them."
    },
    {
      question: "Will AI change the appearance of the property?",
      answer:
        "The goal is restrained camera motion, not redesign. Every clip is manually reviewed, and unstable or misleading output is regenerated or removed."
    },
    {
      question: "Where can we publish the videos?",
      answer:
        "Deliverables are designed for Instagram, Facebook, TikTok, YouTube Shorts, property websites, and email. Listing-portal support varies by platform and subscription, so platform placement should be confirmed by the client."
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
      question: "Do you handle inquiries, applications, or tenant screening?",
      answer:
        "No. LeaseReel provides property-media production only. We do not act as a leasing agent, broker, tenant screener, or property manager."
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
    "Property or community:\nProperty URL:\nNumber of available photos:\nWhere we want to use the video:\nPreferred launch date:"
};

export const portfolioIntent: MailIntent = {
  to: site.emails.hello,
  subject: "LeaseReel portfolio production",
  body:
    "Number of properties:\nTypical new listings per month:\nExisting photography process:\nRequired publishing formats:\nBrand guidelines:"
};
