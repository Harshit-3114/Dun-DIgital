export interface Service {
  slug: string;
  number: string;
  category: string;
  title: string;
  detail: string;
  intro: string;
  deliverables: string[];
  outcome: string;
  deliveredFor: string;
  image: string;
}

export interface CaseBenchmark {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  type: string;
  name: string;
  text: string;
  tags: string;
  image?: string;
  stageLabel: string;
  challenge: string;
  approach: string[];
  outcome: string;
  benchmarks?: CaseBenchmark[];
  benchmarkNote?: string;
}

export const services: Service[] = [
  { slug: 'branding-collaterals', image: '/gallery/ragam/image0.jpeg', number: '01', category: 'Brand', title: 'Branding & collaterals', detail: 'Identity, print & digital creatives.', intro: 'We audit the brand you have \u2014 even an informal one \u2014 and build an identity that flexes cleanly across print, digital and physical spaces, so every asset plugs into the wider campaign.', deliverables: ['Logo & identity systems', 'Brochures & flyers', 'Emailers', 'Sponsorship decks', 'Store & event branding'], outcome: 'A recognizable, usable system your team can carry into every channel.', deliveredFor: 'Delivered for clients across Manufacturing and Government Initiatives, including ongoing collateral support for Raagam Polymound.' },
  { slug: 'social-media-marketing', image: '/gallery/guntupalli/image0.jpeg', number: '02', category: 'Growth', title: 'Social media marketing', detail: 'Content, reels & community.', intro: 'Turn an always-on channel into a steady rhythm of ideas, conversation and proof.', deliverables: ['Content strategy and calendars', 'Reels, memes and GIFs', 'Community management', 'Monthly performance reporting'], outcome: 'A social presence that sounds like the brand and earns attention repeatedly.', deliveredFor: 'Delivered for clients across Retail, Jewelry, Real Estate and Health Care, including an always-on retainer for Guntupalli Marbles.' },
  { slug: 'advertising', image: '/gallery/ragam/image3.jpeg', number: '03', category: 'Growth', title: 'Advertising', detail: 'Meta & LinkedIn performance.', intro: 'Put the right message in front of the right audience, then learn from every rupee.', deliverables: ['Campaign architecture', 'Audience and creative testing', 'Budget pacing', 'Performance dashboards'], outcome: 'Clearer acquisition signals and media decisions tied to real benchmarks.', deliveredFor: 'Delivered for clients across Manufacturing and Real Estate, including boosted-post campaigns for Raagam Polymound.' },
  { slug: 'website-ecommerce', image: '/gallery/iplas/PHOTO-2026-03-17-10-48-27.jpg', number: '04', category: 'Experience', title: 'Website & e-commerce', detail: 'Corporate & Shopify builds.', intro: 'Make the website the clearest expression of what the brand does next.', deliverables: ['Information architecture', 'Editorial web design', 'Shopify and catalogue flows', 'Conversion and enquiry journeys'], outcome: 'A useful digital front door that makes action feel obvious.', deliveredFor: 'Delivered for clients in AI & Technology and Retail, including the corporate website build for Reverge.' },
  { slug: 'pr-hampers', image: '/gallery/comfort-point/image0.jpeg', number: '05', category: 'Reputation', title: 'PR & hampers', detail: 'Press outreach & gifting.', intro: 'Give a story the context, packaging and relationships it needs to travel.', deliverables: ['Press kits and gifting concepts', 'Media lists and outreach', 'Launch coordination', 'Coverage tracking'], outcome: 'Attention that arrives with context instead of noise.', deliveredFor: 'Delivered for clients across Retail and Government Initiatives, including hamper campaigns for Comfort Point and Meendum Manjappai.' },
  { slug: 'influencer-marketing', image: '/gallery/igs/image0.jpeg', number: '06', category: 'Growth', title: 'Influencer marketing', detail: 'Creator partnerships.', intro: 'Pair the idea with voices that can make it feel native to the audience.', deliverables: ['Creator mapping', 'Briefs and usage rights', 'Campaign coordination', 'Creator performance reporting'], outcome: 'More credible reach with a cleaner connection between creator and brand.', deliveredFor: 'Delivered for Government Initiatives, including the creator program for Meendum Manjappai.' },
  { slug: 'brand-shoots', image: '/gallery/guntupalli/image5.jpeg', number: '07', category: 'Experience', title: 'Brand shoots', detail: 'Photography & video.', intro: 'Capture a library of useful visual moments before the next campaign asks for them.', deliverables: ['Shoot direction and production', 'Product and venue photography', 'Short-form capture', 'Editing and content banking'], outcome: 'A flexible visual bank that keeps the brand moving after shoot day.', deliveredFor: 'Delivered for clients in Venue & Spaces, including the on-site shoot for GPN Palace.' },
  { slug: 'live-event-coverage', image: '/gallery/textile-summit/PHOTO-2026-01-02-17-00-15.jpg', number: '08', category: 'Experience', title: 'Live event coverage', detail: 'On-ground activation & updates.', intro: 'Carry the energy of the room into the feed, the press cycle and the next invite.', deliverables: ['Pre-event promotion', 'Delegate lead generation', 'LED and venue branding', 'Live updates and speaker bytes', 'Post-event reporting'], outcome: 'An event story that lasts beyond the room.', deliveredFor: 'Delivered for CII & industry-body summits and exhibitions, including full-suite coverage of CII EduTech Expo, CII IndEx and Bengaluru Space Expo.' }
];

export const cases: CaseStudy[] = [
  { slug: 'raagam-polymound', type: 'Manufacturing', name: 'Raagam Polymound', text: 'Category authority for a B2B polymer maker \u2014 always-on content with boosted posts aimed squarely at buyers and distributors.', tags: 'Social media / Advertising / Ongoing engagement', image: '/gallery/ragam/image2.jpeg', stageLabel: 'Campaign visual', challenge: 'Make a technical manufacturing brand feel visible and relevant to the people who influence purchase decisions.', approach: ['Build a repeatable content rhythm around product utility and category knowledge.', 'Use paid amplification to put the strongest proof in front of distributors and buyers.', 'Read performance month by month and keep the system improving.'], outcome: 'A more consistent category presence with content and media working as one system, on an ongoing monthly retainer.' },
  { slug: 'meendum-manjappai', type: 'Government initiative', name: 'Meendum Manjappai \u2014 TNPCB', text: 'A statewide push to bring back the cloth bag, carried by press, creators and always-on social.', tags: 'PR & hampers / Influencer / Social media', stageLabel: 'Statewide campaign', challenge: 'Move a public-awareness message from an official initiative into everyday cultural conversation.', approach: ['Translate the behaviour change into clear, shareable social stories.', 'Bring creators and press into a coordinated campaign rhythm.', 'Use repeated amplification to make the cloth bag visible beyond launch day.'], outcome: 'A statewide public-awareness campaign spanning press, creators and digital amplification for the Tamil Nadu Pollution Control Board.' },
  { slug: 'duggar-housing', type: 'Real estate', name: 'Duggar Housing', text: 'Project-led storytelling wired into a lead-capture funnel, so every post had a next step for a serious buyer.', tags: 'Social media / Advertising / Lead generation', stageLabel: 'Content-to-funnel', challenge: 'Turn project information into a clear, persuasive journey for people actively evaluating a home.', approach: ['Build project-led stories around place, product and proof.', 'Connect paid media to a dedicated enquiry path.', 'Use lead quality and campaign performance to refine the funnel.'], outcome: 'A more dependable connection between project storytelling, media and sales conversations.' },
  { slug: 'tamil-diaspora-day', type: 'Industry events', name: 'Tamil Diaspora Day', text: 'A 45-post content calendar paired with Meta lead-generation ads, driving delegate and exhibitor enquiries toward a three-day expo.', tags: 'Social media / Advertising / Lead generation', stageLabel: 'Lead-gen sprint', challenge: 'Drive delegate and exhibitor leads across regional manufacturing, education, government and student audiences in the run-up to a fixed event date.', approach: ['Run a 45-post calendar across Instagram and LinkedIn, mixing announcements with feature stories.', 'Pair the calendar with Meta boosting and lead-generation ads focused on Puducherry, surrounding cities and Chennai\u2019s manufacturing base.', 'Pace spend against a target cost-per-lead so every rupee maps to a benchmark.'], outcome: 'A content-to-enquiry sprint built to fill a fixed-date event with qualified delegates and exhibitors.', benchmarks: [{ value: '\u20B9150', label: 'Target cost per lead' }, { value: '130\u2013135', label: 'Target leads' }, { value: '2,000\u20133,300', label: 'Target new followers' }], benchmarkNote: 'Figures are proposal benchmarks for the event, not yet-realised results.' },
  { slug: 'cii-summits-expos', type: 'Industry events', name: 'CII Summits & Expos', text: 'Delegate and exhibitor campaigns, venue branding and live coverage for summits across India.', tags: 'Events / Social / Lead generation', image: '/gallery/textile-summit/PHOTO-2026-01-20-08-10-39.jpg', stageLabel: 'Event footage', challenge: 'Fill delegate seats and exhibitor pipelines for fixed-date summits across India.', approach: ['Run pre-event promotion with delegate lead generation.', 'Brand the venue and LED inventory as one system.', 'Cover the event live with updates and speaker bytes.'], outcome: 'Full-suite event coverage trusted across CII summits and expos, from EduTech and IndEx to the Bengaluru Space Expo.' }
];

export const industries = ['Manufacturing', 'Retail', 'Venue & spaces', 'Jewelry', 'Real estate', 'Health care', 'Exhibitions', 'AI & technology', 'Government initiatives', 'Government', 'Event Management', 'Export & trade'];