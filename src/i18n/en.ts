import type { CaseSlug, ExperienceId, MapLine, MapNodeId, ProductId, ProjectCategory, ProjectId, StackGroupId } from "@/content/data";

export interface CaseSection {
  paragraphs?: string[];
  points?: string[];
  groups?: { title: string; points: string[] }[];
  metrics?: { value: string; label: string }[];
  quote?: { text: string; author: string };
}

export interface CaseCopy {
  title: string;
  kind: string;
  description: string;
  lead: string;
  role: string;
  period: string;
  context: string;
  format: string;
  task: CaseSection;
  built: CaseSection;
  outcome: CaseSection;
  extra?: CaseSection & { title: string };
  /** Before / after block, shown when the case has screens of the old site */
  compare?: { title: string; before: string; after: string; points: string[] };
}

export interface Dictionary {
  meta: { title: string; description: string; ogAlt: string };
  skip: string;
  nav: {
    label: string;
    about: string;
    experience: string;
    products: string;
    projects: string;
    activity: string;
    stack: string;
    contact: string;
    cv: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    focus: string;
    location: string;
    languages: string[];
    intro: string;
    now: string;
    nowText: string;
    ctaEmail: string;
    ctaCv: string;
    cvFrontend: string;
    cvWordpress: string;
  };
  stats: { value: number; from: number; label: string; suffix?: string }[];
  map: {
    label: string;
    lead: string;
    lines: Record<MapLine, string>;
    nodes: Record<MapNodeId, string>;
    now: string;
    legend: { done: string; ongoing: string; scale: string };
  };
  sections: {
    about: { title: string; note: string };
    experience: { title: string; note: string };
    products: { title: string; note: string };
    projects: { title: string; note: string };
    activity: { title: string; note: string };
    stack: { title: string; note: string };
    recommendation: { title: string; note: string };
    contact: { title: string; note: string };
  };
  experience: {
    current: string;
    items: Record<
      ExperienceId,
      { role: string; dates: string; place: string; format: string; summary: string; points: string[]; extra?: string }
    >;
  };
  products: {
    badge: string;
    visit: string;
    code: string;
    codePrivate: string;
    caseStudy: string;
    items: Record<ProductId, { kind: string; summary: string; points: string[]; metrics: { value: string; label: string }[] }>;
  };
  projects: {
    visit: string;
    offline: string;
    offlineNote: string;
    privateState: string;
    privateNote: string;
    devNote: string;
    caseStudy: string;
    openLive: (domain: string) => string;
    filter: { label: string; all: string; groups: Record<ProjectCategory, string>; status: (n: number) => string };
    items: Record<ProjectId, { title: string; kind: string; summary: string }>;
  };
  cases: {
    ui: {
      home: string;
      projects: string;
      label: string;
      role: string;
      period: string;
      context: string;
      format: string;
      stack: string;
      live: string;
      offline: string;
      code: string;
      codeTheme: string;
      codeRequest: string;
      codeNone: string;
      related: string;
      task: string;
      built: string;
      outcome: string;
      next: string;
      desktopAlt: (name: string) => string;
      mobileAlt: (name: string) => string;
      videoAlt: (name: string) => string;
      placeholder: string;
      placeholderPrivate: string;
      inDevelopment: string;
      metaTitle: (title: string) => string;
    };
    items: Record<CaseSlug, CaseCopy>;
  };
  activity: {
    contributions: string;
    lastYear: string;
    activeDays: string;
    less: string;
    more: string;
    heatmapLabel: (total: number) => string;
    dayTitle: (count: number, date: string) => string;
    repos: string;
    languages: string;
    learning: string;
    unavailableTitle: string;
    unavailableText: string;
    profile: string;
    updated: string;
    months: string[];
    weekdays: string[];
  };
  stack: { groups: Record<StackGroupId, string>; practices: string[]; education: { label: string; text: string } };
  about: { paragraphs: string[]; outsideLabel: string; outside: string; photoAlt: string };
  recommendations: { quote: string[]; name: string; title: string; note?: string }[];
  contact: { heading: string; text: string; email: string; elsewhere: string; downloads: string };
  footer: { built: string; data: string; top: string };
}

export const en: Dictionary = {
  meta: {
    title: "Daniil Karataev · Middle Front-end / Full-stack Developer",
    description:
      "Front-end / full-stack developer in Chișinău, Moldova. React, TypeScript, Next.js, WordPress. 2 full-time employers, freelance work and 8 commercial websites since 2024, two of them my own products.",
    ogAlt: "Daniil Karataev · Middle Front-end / Full-stack Developer",
  },
  skip: "Skip to content",
  nav: {
    label: "Main",
    about: "About",
    experience: "Experience",
    products: "Products",
    projects: "Projects",
    activity: "Activity",
    stack: "Stack",
    contact: "Contact",
    cv: "CV",
  },
  hero: {
    eyebrow: "Portfolio",
    role: "Middle Front-end / Full-stack Developer",
    focus: "React · TypeScript · Next.js · WordPress",
    location: "Chișinău, Moldova",
    languages: ["English · B1–B2", "Russian · native"],
    intro:
      "I build fast multilingual online stores, landing page platforms and custom WordPress themes. I usually do a feature on my own, from the API integration to the technical SEO.",
    now: "Now",
    nowText: "Building my own products Dinastia and GoodAntShop, and taking freelance work: right now chinolog.md, fci.md and the Flower2Go shop.",
    ctaEmail: "Message me on Telegram",
    ctaCv: "Download CV",
    cvFrontend: "Front-end CV",
    cvWordpress: "WordPress CV",
  },
  stats: [
    { value: 2024, from: 2016, label: "in production since" },
    { value: 2, from: 0, label: "full-time employers" },
    { value: 8, from: 0, label: "commercial websites" },
    { value: 2, from: 0, label: "of them my own products" },
  ],
  map: {
    label: "Career route since 2024",
    lead: "The route since 2024",
    lines: { work: "Work", own: "Own projects" },
    nodes: {
      aroundwire: "Full-stack · office, Chișinău",
      freelance2025: "Freelance · Samozanyatye.rf and Webcost",
      goodantshop: "Ant-farm store",
      rocketseo: "Middle Front-end · web agency",
      dinastia: "Pedigree-pet marketplace",
      freelance: "Freelance · own clients",
    },
    now: "now",
    legend: { done: "Finished", ongoing: "Still going", scale: "Not to scale: stations follow the order they started in" },
  },
  sections: {
    about: { title: "About", note: "a bit about me" },
    experience: { title: "Experience", note: "commercial work" },
    products: { title: "Own products", note: "idea → brand → code → traffic" },
    projects: { title: "Selected projects", note: "client and employer projects" },
    activity: { title: "GitHub activity", note: "updated daily" },
    stack: { title: "Stack", note: "what I use every week" },
    recommendation: { title: "Recommendations", note: "AroundWire · Samozanyatye.rf" },
    contact: { title: "Contact", note: "say hello" },
  },
  experience: {
    current: "now",
    items: {
      freelance: {
        role: "Full-stack Developer · freelance",
        dates: "since 2026",
        place: "Chișinău",
        format: "remote and on-site meetings",
        summary: "I take projects straight from clients and run them myself: audit, proposal, design, development, launch and support.",
        points: [
          "Demolator: a bilingual site for a concrete cutting and demolition contractor, replacing their Tilda site, with prices, a cost calculator and photo leads sent to Telegram.",
          "chinolog.md: a new kennel portal for Moldova in three languages, with registries, dog document checks and an admin where the client runs the site.",
          "fci.md: a new site for the Kennel Union of Moldova in three languages, with a show calendar, registries of judges and kennels and the FCI breed catalogue.",
          "Flower2Go: moving a Haifa flower shop from OpenCart to Next.js, in Hebrew, Russian and English.",
        ],
      },
      rocketseo: {
        role: "Middle Front-end Developer",
        dates: "Mar 2026 – Nov 2026",
        place: "Chișinău",
        format: "hybrid",
        summary: "Front-end development at a web agency. The agency’s projects and clients are under a non-disclosure agreement, so I can only give a number.",
        points: [
          "12 projects during my time there",
        ],
      },
      freelance2025: {
        role: "Full-stack Developer · freelance",
        dates: "Mar 2025 – Dec 2025",
        place: "Chișinău",
        format: "remote",
        summary: "I worked remotely for two clients: the Russian service Samozanyatye.rf and the Polish web agency Webcost.",
        points: [
          "Samozanyatye.rf: merged React landing pages and an old blog into one WordPress platform with a custom theme, built a block landing page builder for marketing and sent leads to Bitrix24 CRM.",
          "Webcost, gonutz.pl: a “build your mix” configurator with a 500 g cap and automatic pricing. The mix is one line in the cart and on invoices.",
          "Webcost, interpolska.pl: new page builder blocks and a nearest-facility finder on a Google map.",
        ],
      },
      aroundwire: {
        role: "Full-stack Developer",
        dates: "Feb 2024 – Apr 2025",
        place: "Chișinău",
        format: "office",
        summary: "Including ForceWind and Skilful Web Developers. Rebuilt pro.aroundwire.com into a modular custom platform.",
        points: [
          "Built 40+ pixel-perfect landing pages. With the admin page builder, marketing shipped 5+ landing pages a day.",
          "Each block loads only its own CSS/JS, which keeps mobile PageSpeed at 70–80+. Leads go to the call center.",
          "Built the company website aroundwire.com on Next.js + TypeScript with SSR.",
        ],
      },
    },
  },
  products: {
    badge: "own product",
    visit: "Open site",
    code: "Source on GitHub",
    codePrivate: "Code available on request",
    caseStudy: "Read case study",
    items: {
      dinastia: {
        kind: "Pedigree-pet marketplace for Moldova · RO/RU",
        summary:
          "I designed the brand and logo, then built the platform. It has breed and city catalogs, breeder accounts with moderation and import from 999.md, paid kennel showcases, a pet services section and a Telegram bot for breeders and buyers.",
        points: [
          "298 URLs in the sitemap across two languages, 23 breeds with their own landing pages",
          "Plans for kennels and service providers, a “Verified kennel” badge, complaints and an Android app",
        ],
        metrics: [
          { value: "3000+", label: "organic Google clicks since the launch in August 2026 (Search Console)" },
          { value: "Top 3–4", label: "in Google for “buy pedigree cat / pet” in Moldova (Oct 2026)" },
        ],
      },
      goodantshop: {
        kind: "Ant-farm store · RU/RO/EN",
        summary:
          "My own store for ants and formicaria. There’s a catalog and a cart, a starter kit with free extras, a serverless order API with email notifications, a blog and an interactive species map.",
        points: ["React, Vite and TypeScript with SSR prerendering and hydration", "Generated sitemap and per-route structured data"],
        metrics: [
          { value: "Top 1–2", label: "in Google for “buy ants” in Moldova (Oct 2026)" },
          { value: "19%", label: "Google CTR in Moldova (Jun–Oct 2026)" },
        ],
      },
    },
  },
  projects: {
    visit: "Open site",
    offline: "offline",
    offlineNote: "Site is currently offline",
    privateState: "not public",
    privateNote: "No public link",
    devNote: "Not launched yet",
    caseStudy: "Read case study",
    openLive: (domain) => `Open ${domain} in a new tab`,
    filter: {
      label: "Filter projects by stack",
      all: "All",
      groups: { react: "Next.js & React", wordpress: "WordPress" },
      status: (n) => `Showing ${n} project${n === 1 ? "" : "s"}`,
    },
    items: {
      demolator: {
        title: "Demolator",
        kind: "Contractor website · freelance",
        summary: "A new site for a diamond concrete cutting and demolition company, replacing their Tilda site: 48 pages in two languages, “from” prices, a cost calculator and photo leads sent straight to Telegram.",
      },
      chinolog: {
        title: "chinolog.md",
        kind: "Moldova’s kennel portal · redesign",
        summary: "A new portal in three languages: registries of handlers, kennels and judges, a dog check by microchip or pedigree number, shows, news and an admin for the client.",
      },
      fci: {
        title: "fci.md",
        kind: "Kennel Union of Moldova website",
        summary: "A new site for the Kennel Union, Moldova’s only FCI member, in three languages: a show calendar with day-by-day programmes, registries of judges and kennels, show results, the FCI breed catalogue and news.",
      },
      flower2go: {
        title: "Flower2Go",
        kind: "Haifa flower shop",
        summary: "Moving the shop from OpenCart to Next.js: right-to-left Hebrew, Russian and English, 237 products, a delivery area map and checkout.",
      },
      aroundwire: {
        title: "AroundWire",
        kind: "Company website",
        summary: "The main company website, built on Next.js with server rendering and typed React components.",
      },
      aroundwirePro: {
        title: "AroundWire PRO",
        kind: "Landing platform",
        summary: "40+ landing pages on a modular custom theme, admin page builder, per-block asset loading, 70–80+ mobile PageSpeed.",
      },
      samozanyatye: {
        title: "Samozanyatye.rf",
        kind: "Platform connecting businesses with the self-employed",
        summary: "Merged React landing pages and a legacy blog into one platform. Added a landing page builder for marketing and the Bitrix24 CRM integration.",
      },
      interpolska: {
        title: "INTER Polska",
        kind: "Insurance company",
        summary: "New page-builder blocks, plus a nearest-facility finder with a map that stays in sync with the sidebar list.",
      },
      gonutz: {
        title: "GoNutz",
        kind: "Nut shop",
        summary: "A “build your mix” configurator with a 500\u00a0g cap and automatic pricing. Each mix takes one combined line in the cart and on invoices.",
      },
    },
  },
  cases: {
    ui: {
      home: "Home",
      projects: "Projects",
      label: "Case study",
      role: "Role",
      period: "Period",
      context: "Context",
      format: "Format",
      stack: "Stack",
      live: "Open site",
      offline: "offline",
      code: "Source on GitHub",
      codeTheme: "WordPress theme on GitHub",
      codeRequest: "Code available on request",
      codeNone: "Client code, not public",
      related: "Related public code",
      task: "The task",
      built: "What I built",
      outcome: "Outcome",
      next: "Next project",
      desktopAlt: (name) => `${name} home page on a desktop screen`,
      mobileAlt: (name) => `${name} home page on a phone`,
      videoAlt: (name) => `${name} gameplay recording`,
      placeholder: "The site is offline, so there is no current screenshot",
      placeholderPrivate: "A client site without a public link, so there is no screenshot here",
      inDevelopment: "not launched yet",
      metaTitle: (title) => `${title} · Case study · Daniil Karataev`,
    },
    items: {
      dinastia: {
        title: "Dinastia",
        kind: "Pedigree-pet marketplace for Moldova · RO/RU",
        description:
          "How I built Dinastia, a pedigree-pet marketplace for Moldova, on my own: breed and city catalog, kennel showcases with paid plans, pet services, document checks, complaints and a Telegram bot.",
        lead: "My own product. I made everything from the name and logo to the database. It’s a bilingual catalog where breeders and owners list pedigree dogs and cats, and buyers call or message the seller straight from the pet’s page.",
        role: "Founder · design and full-stack",
        period: "Aug 2026 – present",
        context: "Own product",
        format: "Solo · Chișinău",
        task: {
          paragraphs: [
            "Pedigree puppies and kittens in Moldova are mostly sold through scattered classifieds and social media, where documents and sellers are hard to check. I wanted a catalog people can trust. It had to rank in Google for breed and city searches and work in Romanian and Russian. Breeders had to manage their own listings, but without a way to skip moderation.",
          ],
          points: [
            "Fast, indexable pages for every breed and city",
            "Self-service breeder accounts, with moderation before anything goes public",
            "A quick way for buyers to reach the seller, because the market runs on phone calls",
            "Pedigree and vet-passport scans seen only by the moderator",
          ],
        },
        built: {
          groups: [
            {
              title: "Kennel showcases",
              points: [
                "A verified kennel gets its own page: about, sires and dams with titles and health tests, litters, listings, terms, gallery, videos, reviews, graduates and contacts. The kennel picks the order of the blocks; only contacts can’t be hidden.",
                "The showcase can be run from a phone. Editor sections are named after the blocks the buyer sees. Every edit goes through a moderator, who sees what it was and what it became.",
                "“Graduates” are stories of puppies and kittens in their new families, kept apart from buyer reviews. Videos and reviews are added by a YouTube or Instagram link.",
                "A showcase link shared in a messenger shows the kennel banner, the FCI and Kennel Union logos and a line saying which documents the moderator checked.",
                "The seller box on a listing leads to the kennel showcase. After payment the kennel gets an email with the plan, the term and the refund terms.",
              ],
            },
            {
              title: "Plans",
              points: [
                "Breeders get three levels: free listings, “Showcase” and “Showcase + promotion”, paid yearly.",
                "Promotion adds up to two ad slots on the breed page with daily rotation, 4 extra bumps a month, 2 social posts, the top spot in the kennel list and twice the videos and graduates on the showcase.",
                "Plans renew once a year, with a reminder 30 days before the term ends.",
              ],
            },
            {
              title: "Pet services",
              points: [
                "A section for grooming, vets, boarding, training and dog walking. Each service has a landing page with Chișinău prices, and while a category has no providers it offers a matching request instead of a catalog.",
                "Providers get their own dashboard and three paid levels: a catalog line, a page with a price list and requests to their Telegram, and a showcase with before-and-after work, the team and an FAQ.",
                "Paid places are labelled as ads. When a term ends, the provider drops back to a plain catalog line by itself.",
              ],
            },
            {
              title: "For buyers and sellers",
              points: [
                "I rebuilt the catalog filters for buyers: a price slider, confirmed breed, titled parents, kennels only and “hide sold”. Each option shows how many listings will remain.",
                "The order is the same everywhere, in the catalog, on the home page and in posts: promoted listings first, then those with a confirmed breed, then the rest.",
                "Sellers can price in lei, euros or dollars. The card shows the price as entered, and the listing page adds a conversion at the National Bank rate.",
                "An edited listing stays on the site: the approved version shows while the moderator looks at the edit.",
              ],
            },
            {
              title: "Trust and complaints",
              points: [
                "The site has one trust badge, “Verified kennel”. The seller uploads the kennel name certificate and club membership (FCI, WCF, FIFe, TICA, CFA), a moderator checks them against a checklist, and the badge comes off by itself when it expires.",
                "Buyers see at once who is selling: a verified kennel, a breeder or an owner whose pet had a litter.",
                "For dogs, moderation checks the pet against the Kennel Union registry. If the dog isn’t there, the breed is marked unconfirmed.",
                "A listing can be reported for one of six reasons, from prepayment fraud to stolen photos and cruelty, with details and files. The moderator answers within 5 working days.",
              ],
            },
            {
              title: "App, video and social",
              points: [
                "I built an Android app for Google Play. It opens in the phone’s language and shows its own page when offline.",
                "New listings are published to the Telegram channel and Instagram. Wednesdays and Fridays are video days, with reels queued in the admin.",
                "I build the promo videos in code, without a video editor. The frames are real dinastia.md screens: Chrome captures them frame by frame, Gemini TTS reads the voice-over, and ffmpeg puts frames, voice, music and subtitles together. To change a line, I edit the script and rebuild the video with one command.",
                "Stats skip bots and count each device once a day. Separate tabs show views and contacts for services and showcases.",
              ],
            },
            {
              title: "Catalog and search",
              points: [
                "Pages for 15 dog breeds, 8 cat breeds, Chișinău and Tiraspol, in Romanian and Russian. Buyers land from Google right on the breed in their city.",
                "A breed’s title shows the lowest price and the number of listings, and a pet’s Google result shows its price and seller.",
                "A breed with no listings doesn’t promise a purchase: it points to similar breeds and offers a subscription or a request.",
                "Listings without photos or with a short description stay out of search. A renamed listing redirects to its new address and a removed one to its breed page, so old links keep working.",
                "Catalog filters live in the URL and survive the back button. Blog posts go out on a schedule.",
                "A sellers directory with filters by species, seller type and city. A seller card shows a mosaic of pets for sale, the lowest price and the breeds.",
                "I made the site lighter on phones. Lighthouse went from 83 to 94, and the first screen now loads in 3.0 s instead of 4.5.",
              ],
            },
            {
              title: "Breeder dashboard",
              points: [
                "Import from 999.md: paste a listing link and the form fills in photos, price, breed, city and text. A whole profile can move too, with ownership confirmed by phone number.",
                "A listing goes live after moderation, and rejection reasons show right in the dashboard.",
                "“Another from the litter” copies the breed, parents and documents, so the next puppy from a litter takes a minute.",
                "Photos are compressed on the phone, so they upload fast even on mobile data.",
                "A listing can be bumped once every 7 days. If a breed is missing, the breeder requests it and the moderator sees which breeds are asked for most.",
                "The dashboard is in Russian and Romanian. Sign-in works by phone, email or Google.",
              ],
            },
            {
              title: "Moderation and stats",
              points: [
                "The moderator sees what the seller changed since their last decision and reviews only the edit.",
                "Only the moderator sees pet documents, and they never reach the public page. The admin also has a sold tab, sellers and site settings.",
                "Stats: views by day, contacts by channel and traffic sources, separately for listings and the blog. Breeders can be given access with a switch.",
              ],
            },
            {
              title: "Contacts",
              points: [
                "In the first month the request form on the pet card was opened 5 times and never sent, while the phone brought two thirds of all contacts. So I removed the form and put the seller’s phone, Viber, WhatsApp and Telegram in its place.",
                "The request form stays on breed, city, contact and listing-info pages, and requests arrive in Telegram.",
              ],
            },
            {
              title: "Telegram bot and notifications",
              points: [
                "“Tell me when this breed appears” by Telegram or email. The message goes out when the first listing of that breed is published.",
                "Once a week the bot asks breeders whether a pet is still available, up to 8 listings per message. A button reply changes the status on the site at once.",
                "The bot is offered right after sign-up. Moderation results arrive by email.",
              ],
            },
            {
              title: "Price estimate",
              points: [
                "A listing without a price can go live with a guide price: the median of live listings of the same breed, or the middle of the usual range when there are too few.",
                "That price shows with a “≈” sign and a note, and doesn’t move the breed’s price range.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "3000+", label: "organic Google clicks since the launch in August 2026 (Search Console)" },
            { value: "33,000+", label: "Google search impressions over the same period" },
            { value: "Top 3–4", label: "in Google for “buy pedigree cat / pet” in Moldova (Oct 2026)" },
            { value: "298", label: "URLs in the sitemap across two languages" },
            { value: "326", label: "node:test checks, all passing" },
          ],
          paragraphs: [
            "I also made the brand, logo, copy and design. Most of the product’s traffic comes from Google search.",
          ],
        },
      },
      goodantshop: {
        title: "GoodAntShop",
        kind: "Ant-farm store · RU/RO/EN",
        description:
          "GoodAntShop is my store for ants and formicaria, built on React, Vite and TypeScript. I wrote a custom SSR prerender and set up SEO in three languages, structured data and serverless orders.",
        lead: "This is my own small business, and I built the site that sells for it. I sell ant colonies, formicaria and accessories, and the site also has a blog and an atlas of the ant species found in Moldova.",
        role: "Owner · design and full-stack",
        period: "May 2026 – present",
        context: "Own product",
        format: "Solo · Chișinău",
        task: {
          paragraphs: [
            "A shop for a niche product depends on search. A client-only React app gives Google empty HTML, and moving to a full framework would have been too much for 11 products and a blog. So I wanted to keep the simple React + Vite stack and still serve complete, indexable HTML in three languages.",
          ],
          points: [
            "Real HTML on every route, with its own title, canonical, hreflang and Open Graph",
            "Orders without running a backend server or a database",
            "Content that answers beginners’ questions about care, species and which formicarium to choose",
          ],
        },
        built: {
          groups: [
            {
              title: "Prerender pipeline",
              points: [
                "The build runs in four steps: a type check, then the client bundle, the SSR bundle and scripts/prerender.mjs.",
                "Each of the 72 routes (24 pages × 3 languages) is rendered with renderToString and StaticRouter and written to its own index.html. The build fails if a route renders empty.",
                "Each route gets its own title, description, canonical, hreflang (ru / ro / en + x-default) and og:* tags with the right locale.",
                "Open Graph images are generated with sharp at 1200×630. sitemap.xml with hreflang alternates is built from the same route list, and there is a static 404 in three languages.",
                "On the client, hydrateRoot takes over the prerendered markup. The cart is read only after mount, so the first render matches the server HTML.",
              ],
            },
            {
              title: "Store",
              points: [
                "Catalog of ants, formicaria and accessories with options. The cart is kept in localStorage.",
                "A starter kit page: the Terra formicarium and a Messor structor colony for 2250 lei. The price comes from the catalog, stock follows the scarcer of the two items, and the page has its own Product and FAQPage markup.",
                "When an order has both a colony and a formicarium, the cart adds tools and food for that species’ diet and makes delivery in Chișinău free.",
                "Orders go through a serverless function on Vercel. It validates and HTML-escapes the order, then sends an email notification through the Resend API.",
                "The species map runs on Leaflet and loads on demand. It shows 10 species across 6 zones of Moldova, has a per-species view and an all-species view, and links to the species in the catalog.",
              ],
            },
            {
              title: "Redesign",
              points: [
                "A new design system in the colors of straw, black soil and the red from the logo. The colors are tokens, and the Unbounded and Onest fonts are self-hosted. I rebuilt the home page, header and footer and moved the other pages onto the system.",
                "An animated SVG “pheromone trail”: eight ants walk it with a tripod gait, some carrying grain. They move along a CSS offset-path at a constant speed, and the trail rebuilds on resize, pauses off screen and turns off with prefers-reduced-motion.",
                "I moved the whole project to TypeScript in strict mode (strict and noUncheckedIndexedAccess), with no .js files left.",
              ],
            },
            {
              title: "Blog",
              points: [
                "Articles and an FAQ for beginners, and a starter kit guide with annotated photos. After ordering the kit, the buyer gets a link to it right away.",
                "Pinned posts and scheduled publishing. A post dated in the future stays out of the build, the sitemap and “Read also”, and its direct link returns 404.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "Top 1–2", label: "in Google for “buy ants” in Moldova (Oct 2026)" },
            { value: "72", label: "prerendered routes" },
            { value: "19%", label: "Google CTR in Moldova (Jun–Oct 2026)" },
          ],
          paragraphs: [
            "The niche is small and few people in Moldova search for ants, so the click count is modest. But 19% of impressions in Moldova turn into a visit, at an average position of 4.8.",
            "I run the store myself as a working business.",
          ],
        },
        extra: {
          title: "SEO architecture",
          points: [
            "One route list drives the prerender, the sitemap and hreflang, so they can’t drift apart.",
            "Every page has a JSON-LD @graph with Organization, WebSite, BreadcrumbList, ItemList, Product with Offer, shipping details and return policy, FAQPage and BlogPosting.",
            "AggregateRating and Review appear only where a product has its own reviews.",
            "Meta tags exist only in the prerendered HTML, so hydration never duplicates them.",
            "Cart pages are noindex and blocked in robots.txt. Static assets are cached for a year as immutable.",
            "The Russian home page lives on the bare domain, the URL that brand searches and outside links land on. /ru redirects there permanently, and inner pages keep their addresses.",
            "A build plugin writes 160–1280 px WebP copies of every image, srcset gives a phone the size it needs, and the main image loads first. A Lighthouse pass fixed contrast, link names and heading order.",
          ],
        },
      },
      demolator: {
        title: "Demolator",
        kind: "Cutting and demolition contractor · freelance",
        description: "How I signed Demolator as my own freelance client and built them a bilingual Next.js site: 48 pages with prices, a cost calculator and photo leads in Telegram, live on demolator.md in place of an old Tilda site.",
        lead: "Demolator cuts concrete with diamond tools and demolishes buildings with heavy machinery in Chișinău. This is my own freelance project, not an agency one. I audited the old site, proposed a new one with a clear scope and monthly SEO support, showed the owner a working demo, agreed on scope and price and made the agreed revisions. The site is live on demolator.md.",
        role: "Freelance · development and project lead",
        period: "Oct 2026 – present",
        context: "Freelance · own client",
        format: "Remote and meetings · Chișinău",
        task: {
          paragraphs: [
            "The old Tilda site answered every search with three general pages per language. On a phone it scored 36–40 out of 100 and took 11–12 seconds to show the first screen. No page had an H1, the Romanian and Russian versions were not linked to each other, and the lead form could be sent without a phone number."
          ],
          points: [
            "A page for every service that clients search for",
            "Starting prices and a calculator, so a client sees the rough cost right away",
            "A lead form with photos of the site that arrives in Telegram at once",
            "Keep the current Google positions through the move"
          ]
        },
        built: {
          groups: [
            {
              title: "The deal and the project",
              points: [
                "Audited the old site: speed, SEO errors, texts and positions for 40 searches in Romanian and Russian.",
                "Prepared a proposal with a fixed scope, monthly SEO support and a 4–5 week launch plan.",
                "Showed the owner a working demo at a meeting, agreed on scope and price and made the agreed revisions.",
                "Before launch, checked every claim against the old site and the state register. The site says only what the old site or the owner stands behind."
              ]
            },
            {
              title: "The site",
              points: [
                "48 static pages, 24 each in Romanian and Russian: sections, two lines of work and 16 services with a price, specs, steps and FAQ.",
                "A calculator for a wall opening, a slab opening and demolition. Demolition is priced per floor with debris removal always included, and the price range in lei shows right away.",
                "The lead form takes up to six photos and sends them to Telegram in one message. A hidden field and a rate limit keep spam out.",
                "Leads go to everyone who starts the bot and shares their own number, if it is on the allowed list. Taking a number off the list stops its leads at once. The message is in Russian, one fact per line, with the language to call back in.",
                "Drilling and robot demolition, which the company doesn’t offer for now, are switched off by one list, not deleted. Their pages, menu items, prices and calculator tab disappear, and their addresses lead to the closest live service."
              ]
            },
            {
              title: "SEO and speed",
              points: [
                "Romanian at the root and Russian under /ru, hreflang pairs and a language switch that opens the same service.",
                "Structured data for the business, priced services, FAQ and breadcrumbs, alt text on every photo and a sitemap for both languages.",
                "301 redirects from every address the domain has served: the Tilda pages by name and by their /pageNNN.html addresses, plus the two older sites found in the Wayback Machine.",
                "Only the production build of demolator.md is open to search engines. Every other build answers noindex in the meta tag, the X-Robots-Tag header and robots.txt."
              ]
            },
            {
              title: "Code and hosting",
              points: [
                "Next.js 15 with the App Router, React 19 and strict TypeScript, styles in CSS Modules, no UI kits and no extra runtime dependencies.",
                "Pages, texts and prices come from one registry. A new service is one entry, and routes, the sitemap, hreflang and menus pick it up on their own.",
                "Hosted on Cloudflare Workers through OpenNext, on the free plan, which allows commercial use. Pages are prerendered and served as static files, and the Worker runs only the middleware, redirects, two API routes and image resizing. Every push to main deploys."
              ]
            }
          ]
        },
        outcome: {
          metrics: [
            {
              value: "48",
              label: "pages in two languages"
            },
            {
              value: "77–81",
              label: "mobile Lighthouse speed on the live site, the old one had 36–40"
            },
            {
              value: "100",
              label: "Lighthouse accessibility and SEO on mobile"
            },
            {
              value: "537 KB",
              label: "home page weight, was 1.4 MB"
            }
          ],
          paragraphs: [
            "The site is live on demolator.md. Its photos are temporary stock pictures until the company’s own arrive, and the works page shows the two real jobs from the old site’s blog. The code is private and available on request."
          ]
        }
      },
      chinolog: {
        title: "chinolog.md",
        kind: "Moldova’s single kennel portal · redesign",
        description: "How I built the new chinolog.md, Moldova’s kennel portal: searchable registries, dog document checks, shows and news in three languages, and an admin where the client runs the site.",
        lead: "chinolog.md is the portal of Moldova’s Educational Cynology Centre, which works with the Kennel Union, an FCI member. I built a new site for it from scratch and keep refining it with the client’s notes. For now the new site is shown as a prototype, and the domain still runs the old Tilda version.",
        role: "Design and full-stack",
        period: "Nov 2026 – present",
        context: "Freelance · client",
        format: "Remote · Chișinău",
        compare: {
          title: "Before and after",
          before: "Before · chinolog.md today, on Tilda",
          after: "After · the new site",
          points: [
            "The home page is 50 times lighter. All before-and-after measurements are below, under “Optimisation”.",
            "The first screen has one check field instead of four link cards: a microchip or pedigree number, or a handler or kennel name.",
            "The Russian version is fully in Russian, and every page has its Romanian and English pair.",
          ],
        },
        task: {
          paragraphs: ["The old home page weighed 32 MB and made 97 requests. Pages had two canonical URLs and two H1s, language versions weren’t linked, and the Russian version kept a Romanian menu and cookie banner. First-aid articles were published as images, so search couldn’t see them."],
          points: [
            "One field to check a dog, a handler or a kennel",
            "Registries you can search and filter",
            "Three languages with the same set of pages",
            "The client publishes news, shows and registry entries on their own",
          ],
        },
        built: {
          groups: [
            {
              title: "The portal",
              points: [
                "The first screen is a single check field. The portal works out what was typed: a microchip number, a pedigree number, a handler or a kennel name. Each number draws its own paw print.",
                "Six registries with search and filters: handlers, kennels, rescue dogs and three registries of judges, 112 entries in all.",
                "Shows and events with a countdown and “in 4 days”, “on now” and “finished” states. A feed of 74 news posts with categories and authors.",
                "Site-wide search on Ctrl+K, document and certificate checks, a QR code made right in the browser, the Voluntary Dog Registry and a “I found a dog” section.",
                "Sign-up forms for courses, the registries, a vet and show organisers.",
              ],
            },
            {
              title: "For visitors",
              points: [
                "The design looks like a secure certificate, with paper, indigo from the seal on the logo and gold like foil.",
                "Three languages: Romanian, Russian and English. The switcher opens the same page in the other language.",
                "An accessibility panel with large text and high contrast. Analytics loads only after cookie consent.",
                "Photos open in a viewer with zoom and paging, with pinch on phones.",
              ],
            },
            {
              title: "Admin",
              points: [
                "The client runs news, pages, events, registries, partners, texts and files. A registry application turns into an entry with one button.",
                "Every edit has a version history with rollback. The “Publish” button rebuilds the site.",
                "Old Tilda addresses lead to the new pages, so the site keeps its search traffic after the move.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "100", label: "Lighthouse on mobile for performance, SEO and accessibility (was 87, 85 and 86)" },
            { value: "0.64 MB", label: "home page weight, down from 32.2 MB" },
            { value: "23", label: "requests on the home page instead of 97" },
            { value: "1.1 s", label: "LCP on mobile, down from 2.3 s" },
          ],
          paragraphs: ["The new site was checked against the old one: 41 pages from the sitemap, 112 registry entries and 72 news posts. The client is reviewing it as a prototype, and I’m working through their notes."],
        },
        extra: {
          title: "Optimisation: before and after",
          paragraphs: [
            "Home page, Google Lighthouse runs from 11.11.2026. I counted images separately: what the browser downloads as soon as the page opens.",
          ],
          points: [
            "Home page weight: 32.2 MB → 0.64 MB on mobile and 32.3 MB → 0.67 MB on desktop.",
            "Images on first load: 57 files, 32.5 MB → 3 files, 10 KB on mobile and 5 files, 68 KB on desktop. Images are cut into AVIF and WebP for the screen width, and the rest load on scroll.",
            "Requests: 97 → 23 on mobile and 97 → 26 on desktop. Instead of 48 page-builder scripts, the page arrives as ready HTML.",
            "Largest Contentful Paint: 2.3 s → 1.1 s on mobile and 0.9 s → 0.3 s on desktop. Cumulative Layout Shift: 0.18 → 0.",
            "Lighthouse on mobile: performance 87 → 100, SEO 85 → 100, accessibility 86 → 100. On desktop: 97, 85 and 80 → 100.",
          ],
        },
      },
      aroundwire: {
        title: "AroundWire",
        kind: "Company website + landing platform",
        description:
          "40+ pixel-perfect landing pages for AroundWire on a modular WordPress theme with a page builder, 70–80+ mobile PageSpeed, plus a Next.js company site.",
        lead: "AroundWire is a US marketplace for small businesses and service providers. As an in-house developer I rebuilt the pro.aroundwire.com landing platform as a modular custom theme, and built the company website aroundwire.com on Next.js.",
        role: "Full-stack Developer",
        period: "Feb 2024 – Apr 2025",
        context: "In-house · including ForceWind and Skilful Web Developers",
        format: "Office · Chișinău",
        task: {
          paragraphs: [
            "Marketing needed a steady flow of landing pages for different trades and cities to attract service providers, and every page had to be fast on mobile. Building each landing page by hand didn’t scale, and a plugin-heavy page builder would have hurt performance.",
          ],
          points: [
            "Many landing pages built from a shared set of sections, assembled by marketing",
            "Pixel-perfect to the designs and fast on mobile",
            "Leads from every landing page passed on to the call center",
            "A separate company website",
          ],
        },
        built: {
          groups: [
            {
              title: "Landing platform on WordPress (pro.aroundwire.com)",
              points: [
                "Custom theme with 9 section types, each in several design variants, 54 variants in total.",
                "In the admin page builder, a side panel picks the variant for each section. Presets save a whole combination to reuse on the next landing page.",
                "Assets load per block. A page gets only the CSS and JS of the variants it uses, and scripts go in the footer.",
                "Contact Form 7 lead forms in popups, with GTM events for form start and submit, and lead integration with the call center.",
                "A blog with trade tags that lists related landing pages under each post, and per-city landing pages for regional targeting.",
                "ZIP export and import of pages with all their ACF fields, so landing pages move between environments.",
              ],
            },
            {
              title: "Company website (aroundwire.com)",
              points: [
                "Built on Next.js and TypeScript with server-side rendering.",
                "React components, all typed.",
              ],
            },
            {
              title: "Team",
              points: ["Office Scrum team working in Jira and Bitbucket."],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "40+", label: "pixel-perfect landing pages" },
            { value: "5+", label: "landing pages a day shipped by marketing with the builder" },
            { value: "70–80+", label: "mobile PageSpeed on landing pages" },
          ],
          quote: {
            text: "Daniil develops both frontend and backend without relying on ready-made plugins.",
            author: "Sergiu Butucea, Team Lead, Development Department · AroundWire",
          },
        },
        extra: {
          title: "How the pages stay fast",
          points: [
            "Each section variant has its own CSS file, plus JS only if it needs it. Nothing loads for sections that aren’t on the page.",
            "Assets are versioned by file modification time, so browsers pick up new styles after every deploy.",
            "There’s no page-builder plugin. Sections are plain PHP templates with BEM markup.",
            "On the home template, images are lazy-loaded and have explicit dimensions.",
          ],
        },
      },
      samozanyatye: {
        title: "Samozanyatye.rf",
        kind: "Platform connecting businesses with the self-employed",
        description:
          "How I merged the React landing pages and legacy blog of Samozanyatye.rf into one custom WordPress platform with a block builder and Bitrix24 CRM.",
        lead: "A service that connects businesses with self-employed contractors. Working remotely, I merged its separate React landing pages and an old, plugin-heavy blog into one custom WordPress platform with a new design.",
        role: "Full-stack Developer · freelance",
        period: "Mar – Dec 2025",
        context: "Freelance",
        format: "Remote · Moscow",
        task: {
          paragraphs: [
            "The site lived in two places. The landing pages were in React, and the legacy WordPress blog was full of heavy plugins. Every new page needed a developer, leads came in through different paths, and the blog was hard to edit.",
          ],
          points: [
            "One platform and one design for the landing pages and the blog",
            "Marketing launches pages without developers",
            "Every form lead ends up in the CRM",
            "Fewer heavy plugins and more control over the code",
          ],
        },
        built: {
          groups: [
            {
              title: "Platform",
              points: [
                "A custom WordPress theme in the new design, with the React landing pages moved into it.",
                "A block-based landing builder, so marketing assembles pages from ready-made blocks.",
                "A three-level menu manager for the business, contractor and partner sections.",
                "A blog (the “Journal”) that can be edited from the admin, with sections for businesses and contractors, and case studies.",
              ],
            },
            {
              title: "Integrations and cleanup",
              points: [
                "Leads from Contact Form 7 go to Bitrix24 CRM.",
                "Replaced heavy plugins with my own code.",
                "Handled the whole project myself, from architecture to support.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "3", label: "menu levels managed from the admin" },
          ],
          paragraphs: [
            "Marketing now builds pages from ready-made blocks without a developer.",
            "You can still see this structure on the live site. It has separate sections for businesses, contractors and partners, a journal with case studies, and callback forms.",
          ],
        },
      },
      gonutz: {
        title: "GoNutz",
        kind: "Nut shop · WooCommerce “build your mix” configurator",
        description:
          "A custom WooCommerce “build your mix” configurator for GoNutz with a 500\u00a0g cap, automatic pricing and one mix line in the cart and invoices.",
        lead: "A Polish online nut shop. Through the Webcost agency I built a configurator that lets customers put together their own mix from the shop’s catalog.",
        role: "Full-stack Developer · freelance",
        period: "2025",
        context: "Freelance · via the Webcost agency",
        format: "Remote · Warsaw",
        task: {
          paragraphs: [
            "The shop wanted customers to build their own mix of nuts instead of buying fixed packs. WooCommerce has no such product type, and the mix still had to behave like a single product in the cart, at checkout and on the invoice.",
          ],
          points: [
            "Ingredients come from the existing catalog, with no duplicate products",
            "A hard weight limit for each mix",
            "Correct price and quantities without manual work",
          ],
        },
        built: {
          points: [
            "A custom WooCommerce configurator that pulls products from the shop’s own catalog.",
            "A 500\u00a0g cap on the mix weight.",
            "Price and quantities recalculated automatically as the customer adds ingredients.",
            "The whole mix appears as one line in the cart and on invoices.",
          ],
        },
        outcome: {
          metrics: [
            { value: "500\u00a0g", label: "weight cap per mix" },
            { value: "1", label: "cart and invoice line per mix" },
          ],
        },
        extra: {
          title: "Related public code",
          paragraphs: [
            "This is a separate test task and not part of GoNutz. It’s a WooCommerce plugin that imports purchase prices from CSV or Excel and recalculates them for each variation weight (1\u00a0kg, 500\u00a0g, 250\u00a0g). The source is on GitHub.",
          ],
        },
      },
      interpolska: {
        title: "INTER Polska",
        kind: "Insurance company · facility finder and page-builder blocks",
        description: "For the INTER Polska insurance company I built page-builder blocks and a nearest-facility finder with a Google Map that stays in sync with the list of locations.",
        lead: "INTER Polska is a Polish insurance company. Through the Webcost agency I added new blocks to its custom page builder and built the finder that shows the nearest medical facilities and branches on a map.",
        role: "Full-stack Developer · freelance",
        period: "2025",
        context: "Freelance · via the Webcost agency",
        format: "Remote · Warsaw",
        task: {
          paragraphs: [
            "Clients of the insurer need to find the nearest partner clinic or branch quickly, often from a phone. The map and the list of addresses had to work together, so a click in one place shows the same location in the other.",
          ],
          points: [
            "Find the nearest facility by city or by location",
            "A map and a list that stay in sync",
            "New blocks the marketing team can place on any page",
          ],
        },
        built: {
          groups: [
            {
              title: "Facility finder",
              points: [
                "A custom template for WP Store Locator with quick buttons for the main cities, a search field and a “find my location” button.",
                "A Google Map with marker clustering. Locations load over AJAX, so the page stays light.",
                "A click on a marker scrolls the side list to the matching address and highlights it.",
                "The same finder works for medical facilities and for branches.",
                "GTM events for clicks on locations and for search terms.",
              ],
            },
            {
              title: "Page builder",
              points: [
                "New blocks for the theme’s own page builder.",
                "The larger blocks have their own CSS, split into the part above the fold and the part that loads after it.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            {
              value: "2",
              label: "finders, facilities and branches",
            },
            {
              value: "1",
              label: "click links the map and the list",
            },
          ],
        },
      },
    },
  },
  activity: {
    contributions: "contributions",
    lastYear: "in the last year",
    activeDays: "days with activity",
    less: "Less",
    more: "More",
    heatmapLabel: (total) => `GitHub contribution calendar, ${total} contributions in the last year`,
    dayTitle: (count, date) => `${count === 0 ? "No" : count} contribution${count === 1 ? "" : "s"} on ${date}`,
    repos: "Public repositories",
    languages: "Code by language in public repos",
    learning: "learning",
    unavailableTitle: "Activity is unavailable right now",
    unavailableText: "The last build couldn’t load data from GitHub. You can still open the profile on GitHub.",
    profile: "Open GitHub profile",
    updated: "Data from GitHub, refreshed daily",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    weekdays: ["Mon", "Wed", "Fri"],
  },
  stack: {
    groups: {
      frontend: "Front-end",
      backend: "Back-end & data",
      cms: "CMS",
      practices: "Practices",
      tools: "Tools",
    },
    practices: ["Technical SEO", "Structured data", "Core Web Vitals", "i18n", "Accessibility"],
    education: { label: "Education", text: "Self-taught, structured study since\u00a02023." },
  },
  about: {
    paragraphs: [
      "I’m from Chișinău and I’ve been building websites since 2024. I taught myself, mostly by shipping real projects. I started with WordPress and PHP, then moved to React, Next.js and TypeScript. React is my favorite, but I’ll use whatever stack fits the problem.",
      "I like taking a site all the way to a product that actually works. That’s how my two businesses started. The first, GoodAntShop, is an ant-farm store where I run the site, SEO and sales myself. The second, Dinastia, is a marketplace for pedigree-pet breeders.",
      "I want code that is easy to read and sites that bring results. Before I add something new, I try to improve what’s already there. I cover the risky parts with tests and write decisions down in the project docs, so another developer can pick the code up.",
    ],
    outsideLabel: "Outside work",
    outside: "ants and myrmecology, volleyball and football, sci-fi films, cars, board games with friends.",
    photoAlt: "Daniil Karataev",
  },
  recommendations: [
    {
      quote: [
        "Daniil develops both frontend and backend without relying on ready-made plugins, highlighting his high level of professionalism.",
        "His colleagues greatly appreciated his ability to deliver complex projects within tight deadlines.",
      ],
      name: "Sergiu Butucea",
      title: "Team Lead, Development Department · AroundWire",
    },
    {
      quote: [
        "Danil and I worked on the Samozanyatye.rf website from March to December 2025. He took on all of the development: he merged scattered React landing pages and the old blog into a single WordPress platform with a new design.",
        "For marketing, the most valuable part was the landing page builder made of ready-made blocks. We could launch new pages ourselves, without a developer. Danil also set up form leads going to Bitrix24 and removed heavy plugins, replacing them with his own solutions.",
        "He ran the project from architecture to support, quickly got into marketing’s tasks and proposed solutions on his own. I recommend him as a responsible and self-driven developer.",
      ],
      name: "Evgenia Demir",
      title: "Marketing Director · Samozanyatye.rf",
      note: "Translated from Russian",
    },
    {
      quote: [
        "Danil demonstrates exceptional attention to detail, which is especially crucial in implementing design solutions. All his work adhered to the principles of “pixel perfect,” ensuring precise compliance with all design aspects.",
        "Danil consistently took the initiative to update and enhance design solutions.",
      ],
      name: "Vasile Milescu",
      title: "Lead UI/UX Designer · AroundWire",
    },
  ],
  contact: {
    heading: "Write to me.",
    text: "I’m looking for a front-end or full-stack role and take freelance projects. Telegram is the quickest way to reach me.",
    email: "Email",
    elsewhere: "Elsewhere",
    downloads: "Resume (PDF)",
  },
  footer: {
    built: "Built with Next.js, TypeScript and CSS Modules.",
    data: "GitHub data refreshes daily.",
    top: "Back to top",
  },
};
