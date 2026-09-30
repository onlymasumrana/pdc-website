# PDC Website SEO & Content Plan

As of 30 Sep 2026 · Masum Rana

> Living version (editable, with diagrams): https://claude.ai/code/artifact/7d49699a-95fb-4ad2-a7ff-5d27f63d2ace
> This file is a snapshot kept in the repo. Update both when the plan changes.

## Summary

The goal is steady organic leads from Google, Bing and AI assistants within 6 months, measured as enquiries from organic search, not raw visits. The site is fast and cleanly built, but search engines and AI tools have too little to read: 2 blog posts, 1 service detail page, and every project links away to Coroflot.

Four moves matter most, in this order:

1. **Fix the foundation (week 1–2).** A proper homepage title, structured data, a share image, and Search Console. These are small code changes with outsized effect.
2. **Give every service its own page.** Five of the six services have no page to rank. Each one becomes a page targeting what buyers actually search.
3. **Publish useful content on a fixed rhythm.** 2 posts a month, built around 4 topic pillars, each post written from real project experience.
4. **Earn trust off the site.** Case studies on our own domain, Clutch/GoodFirms/Google Business profiles, and a few quality backlinks a month.

AI search (ChatGPT, Perplexity, Google AI Overviews) rewards the same things Google does, plus clear facts it can quote. The "Ranking in AI search" section covers what to add for that.

## Where the site stands today

The basics are in place (sitemap, robots.txt, canonical URLs, meta descriptions, Google Analytics), but there are 10 gaps that hold rankings back. Findings come from the code on the `preview` branch as of 30 Sep 2026.

**Already good:** Astro builds static HTML, which is fast and easy for search engines to read. Every page has a unique title and description. Thank-you and 404 pages are correctly set to noindex.

| # | Finding | Why it matters | Fix |
| --- | --- | --- | --- |
| 1 | Homepage uses the fallback title "Premium Design Company — UI/UX Design & Frontend Development" and never mentions AI, though the H1 does | The homepage is the strongest page; its title should match what we now sell | Pass a title and description in `index.astro` |
| 2 | `/og-image.png` is referenced but does not exist in `public/` | Links shared on LinkedIn, X or Slack show no image, which cuts clicks | Design a 1200×630 share image |
| 3 | No structured data (JSON-LD) anywhere | Google and AI tools cannot confirm who we are, where we are, or what we offer | Add Organization, Service, Article, FAQ and Breadcrumb schema |
| 4 | Only 1 of 6 services has its own page (AI Integration) | Web Design, Web Development, No-Code, MVP and Branding have nothing to rank | Build 5 service pages |
| 5 | All 6 projects link out to Coroflot | Visitors and link value leave the site; Google sees no proof of work on our domain | Write case study pages on our site |
| 6 | 2 blog posts, both published 21 Jul 2026, about 600 words each | Too thin to show topical authority | Publish on a schedule (see Blog plan) |
| 7 | The design-systems post cites "a study across multiple engineering teams" with no source | Unsourced claims hurt trust with Google and get skipped by AI tools | Link the source or rewrite as our own experience |
| 8 | No author page for Masum Rana | Google's quality guidelines weigh who wrote the content | Add an author bio page and link it from each post |
| 9 | Blog has no featured images, categories, RSS feed or related posts | Fewer ways in, fewer internal links, no image search traffic | Add all four to the blog template |
| 10 | Testimonials show first names and "Upwork Client" only | Hard to verify; weak trust signal | Ask clients for full name, company and photo, or link the Upwork profile |

## Goals and how we measure them

The one number that matters is **qualified enquiries from organic search per month**; everything else is a leading indicator. We have no baseline yet, so month 1 sets it, and the targets below should be revisited once 4 weeks of Search Console data exist.

| Metric | Where to see it | 6-month target (proposed) |
| --- | --- | --- |
| Organic enquiries (contact, quote, consultation forms) | GA4, key events on the `/contact/success` and `/quote/success` pages | 4–6 per month |
| Organic clicks | Google Search Console | 1,000 per month |
| Keywords ranking in the top 10 | Search Console, Performance report | 30 |
| Indexed pages | Search Console, Pages report | 40+ (from 17 today) |
| Referring domains | Ahrefs Webmaster Tools (free) | 25 |
| AI mentions | Monthly manual check of 10 buyer questions in ChatGPT, Perplexity and Google | Cited or named in 3 of 10 |

SEO is slow: new sites usually see little movement for the first 3 months, then gains compound. Judge progress on the leading metrics until then.

### Tools to set up (all free)

- [ ] **Google Search Console:** verify the domain, submit `sitemap-index.xml`
- [ ] **Bing Webmaster Tools:** import from Search Console. Bing's index also feeds ChatGPT search and Microsoft Copilot, so this matters for AI visibility.
- [ ] **GA4 key events:** the tag `G-CMG1RLHZQL` is already on every page; mark visits to the two success pages as conversions
- [ ] **Ahrefs Webmaster Tools:** free site audit and backlink tracking once the domain is verified
- [ ] **Google Business Profile:** for the Gothenburg studio, so we appear in local and map results
- [ ] **A simple tracking sheet:** one row per month with the six metrics above

## Technical SEO foundation

All of these are code changes in this repo, roughly 2–3 days of work, and should ship before any new content. Items are in priority order.

### Must do first

- [ ] **Homepage title and description.** Suggested title: "AI Integration, Web Design & Development Studio | Premium Design Company" (under 60 characters before the brand). Description should name who we serve and the outcome.
- [ ] **Share image.** Create `public/og-image.png` at 1200×630. Later, give each blog post and service page its own.
- [ ] **Organization schema** in `BaseLayout.astro`: name, logo, URL, Gothenburg address, email, and `sameAs` links to LinkedIn, Upwork, Coroflot, Clutch. This is how Google and AI tools connect our brand across the web.
- [ ] **Keep noindex pages out of the sitemap.** The sitemap plugin currently lists `/page-template`, `/contact/success` and `/quote/success`, which tell Google "index me" and "don't index me" at once. Add a `filter` to the `sitemap()` call in `astro.config.mjs`.
- [ ] **Remove or noindex `/page-template`.** It is a development page and should not be public.

### Structured data per page type

| Page type | Schema to add | What it can earn |
| --- | --- | --- |
| Every page | Organization, WebSite, BreadcrumbList | Brand panel, breadcrumb trail in results |
| Service pages | Service (with `provider` and `areaServed`) | Clear signals about what we sell |
| Pricing | Offer inside each Service | Price shown to AI tools answering "how much does…" |
| Blog posts | BlogPosting with `author` as a Person, `datePublished`, `dateModified`, `image` | Article details in results, author credit |
| FAQ sections | FAQPage | Answers AI tools can quote directly |
| Case studies | CreativeWork or Article | Proof of work tied to our brand |

### Blog template upgrades

- [ ] Featured image per post (add the `image` field to each post; it already exists in the schema), with descriptive alt text
- [ ] "Last updated" date: add `updatedDate` to the content schema and show it
- [ ] Author box linking to an `/about/masum-rana` page
- [ ] Related posts (3 by shared tag) at the end of each post
- [ ] Table of contents for posts over 1,500 words
- [ ] RSS feed with `@astrojs/rss`
- [ ] Tag or category pages, for example `/blogs/tag/ai-integration`

### Ongoing hygiene

- [ ] Check Core Web Vitals monthly in Search Console. Astro starts fast; keep images in `src/assets` so Astro optimises them.
- [ ] Every image gets alt text that describes it. Client logos should say the company name.
- [ ] One H1 per page, and headings in order (H2 under H1, H3 under H2).
- [ ] No broken links: run the Ahrefs audit monthly.
- [ ] Keep URLs short, lowercase and hyphenated. Never change a live URL without a 301 redirect in `firebase.json`.

## On-page optimization

Each money page should target one main search phrase and answer the buyer's questions on the page itself. The keywords below are starting candidates; confirm each one's volume in Google Keyword Planner or Ahrefs before writing.

### Existing pages

| Page | Main target phrase | What to change |
| --- | --- | --- |
| `/` Home | AI integration and web design studio | New title (see technical section); add a 2-line answer of who we are and where, plus links to every service page |
| `/services` | web design and development services | Turn each card into a link to its own service page |
| `/services/ai-integration` | AI integration services for small business | Add an FAQ block and 1 case study; title is already strong |
| `/pricing` | web design retainer pricing, monthly design subscription | Explain what $1,750 / $3,500 / $9,000 a month includes in hours or deliverables; add FAQ schema |
| `/projects` | UI/UX design portfolio | Link each card to an on-site case study instead of Coroflot |
| `/about` | design studio Gothenburg | Add team photos, founding year, and named people with LinkedIn links |
| `/blogs` | (hub page) | Add categories, featured post, and a short intro saying what we write about |

### New service pages to build

One page per service, each 800–1,200 words, following the AI Integration page's structure.

| New URL | Target phrase (to confirm) | Must include |
| --- | --- | --- |
| `/services/web-design` | web design agency for startups | Process, 2 case studies, price range, FAQ |
| `/services/web-development` | Astro / React web development | Tech stack, speed results, FAQ |
| `/services/mvp-development` | MVP development for startups | Timeline, what's included, fixed-price option |
| `/services/no-code` | Webflow / Framer development | Which tools and when to pick each |
| `/services/branding` | brand identity design | Deliverables, a before/after |

### The page template every money page follows

1. **H1 with the target phrase** in natural words
2. **A 2–3 sentence answer up top:** what it is, who it's for, the outcome
3. **Proof:** a case study, numbers, client logo or quote
4. **Process:** 3–5 steps
5. **Pricing signal:** a range or "from" price. Buyers and AI tools both look for it.
6. **FAQ:** 4–6 real questions clients have asked, with FAQPage schema
7. **One clear call to action:** book a call
8. **Internal links:** to 2–3 related blog posts and 1 related service

## Ranking in AI search

AI assistants like ChatGPT, Perplexity, Google AI Overviews and Copilot search the web, then quote pages that answer the question clearly and that other sites vouch for. So they mostly reward good SEO, with three extras: answers they can lift in one piece, facts stated plainly, and our brand being mentioned on other sites.

### What to do

1. **Let AI crawlers in.** `robots.txt` already allows everything, so GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot and Google-Extended can read the site. Keep it that way.
2. **Get into Bing.** ChatGPT search and Copilot lean on Bing's index. Submit the sitemap in Bing Webmaster Tools.
3. **Answer first.** Start every page and every H2 section with a 1–2 sentence direct answer, then explain. AI tools quote that opening sentence.
4. **Use question headings.** Phrase H2s the way people ask, such as "How much does an AI chatbot for a small business cost?"
5. **State facts plainly.** Prices, timelines, locations, team size, tools used. "From $1,750 a month" gets quoted; "affordable plans" does not.
6. **Publish something original.** Our own numbers from real projects, like hours saved by an agent or load time before and after, give AI tools a reason to cite us instead of a bigger site.
7. **Describe the brand the same way everywhere.** Use one short description ("Premium Design Company is a Gothenburg-based studio for AI integration, web design and development") on the site, LinkedIn, Clutch, Upwork and Google Business Profile. AI tools connect these, and the Organization schema's `sameAs` links make it explicit.
8. **Get mentioned on other sites.** AI tools lean on "best agencies for X" lists, directories, Reddit and LinkedIn discussions. See the backlinks section.
9. **Keep pages fresh.** Show a visible "last updated" date and actually update key posts every 6–12 months.
10. **Optional: add `/llms.txt`.** It is a short plain-text summary of the site for AI tools. Adoption is unproven, but it takes 20 minutes.

### Monthly AI visibility check

Ask these questions in ChatGPT, Perplexity and Google (AI Overview) on the first Monday of each month and log whether we are named or cited:

- Best AI integration agency for small businesses in Sweden
- Who can build a WhatsApp AI agent for my business?
- Web design agency for SaaS startups in Europe
- How much does a design and development retainer cost?
- Astro vs Next.js for a marketing website
- How much does it cost to build an MVP?
- Premium Design Company reviews
- Design subscription services compared
- How to add AI customer support to a Shopify store
- UI/UX design studio in Gothenburg

## Keyword and topic strategy

All content sits in 4 pillars that match what we sell. Each service page is the hub, and every blog post in that pillar links up to it. This shows Google and AI tools we are an authority on each topic, instead of writing about everything once.

**Goal: steady enquiries from Google, Bing and AI search**

| AI integration | Web design | Web development | MVP and product |
| --- | --- | --- | --- |
| *service page hub* | *service page hub* | *service page hub* | *service page hub* |
| AI integration cost | Redesign checklist | Astro vs Next.js | MVP cost |
| WhatsApp AI agents | Design subscriptions | Webflow vs Framer | Design systems ROI |
| Support agents (RAG) | SaaS landing pages | Core Web Vitals | |
| EU AI Act and GDPR | Micro-interactions | | |
| Our AI agent data | | | |

*Foundation under all four: technical SEO, schema, backlinks, AI visibility.*

AI integration gets the most posts: it is our clearest difference and the least crowded topic. Micro-interactions and Design systems ROI are the 2 posts already live.

### How to pick keywords

1. **Start from real buyer questions.** List every question from sales calls, emails and Upwork messages. These are the best keywords we have.
2. **Expand with free tools:** Google autocomplete, the "People also ask" box, Google Keyword Planner, AnswerThePublic, and, from month 2, the Search Console queries report.
3. **Go long-tail first.** A new site cannot win "web design agency". It can win "AI chatbot for a Shopify store" or "Astro website developer Sweden": fewer searches, but far easier to rank for and closer to a sale.
4. **Tag the intent.** Buying (cost, pricing, hire), comparing (vs, best, alternatives), researching (how to, what is). Write buying and comparing posts first; they are closest to revenue.
5. **One phrase per page.** Two pages chasing the same phrase compete with each other. Keep a simple keyword-to-URL list.

### Later: Swedish-language pages

We are based in Gothenburg, and Swedish searches like "AI-integration för småföretag" or "webbyrå Göteborg" have far less competition than English ones. Once the English plan runs smoothly (month 4+), consider Swedish versions of the AI and web design service pages.

## Blog plan

Publish **2 posts a month**, every month, for the next 6 months: 12 new posts plus fixes to the 2 existing ones. A steady rhythm beats bursts, because Google rewards sites that keep adding useful pages and AI tools favour fresh ones.

Each post should be 1,500–2,500 words, answer one question completely, and link to at least one service page. The mix is deliberate: cost and comparison posts bring buyers close to a decision; guides build authority; one original-data post gives others a reason to link to us.

### First, fix the 2 existing posts

- [ ] Design systems ROI: link the source for the "40%" claim, or reframe it as our own experience with numbers from a real project
- [ ] Both posts: add a featured image, an author box, 3 internal links (to `/services/web-design`, `/pricing`, and each other), and expand to 1,200+ words
- [ ] Give them different publish dates, or an "updated" date when revised

### The next 12 posts

| Month | Working title | Pillar | Search intent | Status |
| --- | --- | --- | --- | --- |
| Oct 2026 | How much does AI integration cost for a small business? | AI integration | Buying | Not started |
| Oct 2026 | WhatsApp AI agents for small business: what they do and how to set one up | AI integration | Researching | Not started |
| Nov 2026 | Astro vs Next.js for a marketing website | Web development | Comparing | Not started |
| Nov 2026 | Website redesign checklist: 25 steps that protect your SEO | Web design | Researching | Not started |
| Dec 2026 | How much does an MVP cost to build? Real ranges and what drives them | MVP & product | Buying | Not started |
| Dec 2026 | Design subscription vs agency vs freelancer: which fits your startup? | Web design | Comparing | Not started |
| Jan 2027 | AI support agents grounded in your own docs: how they work and when they fail | AI integration | Researching | Not started |
| Jan 2027 | 12 landing page elements that lift SaaS conversions | Web design | Researching | Not started |
| Feb 2027 | EU AI Act and GDPR: what small businesses must check before adding AI | AI integration | Researching | Not started |
| Feb 2027 | Webflow vs Framer vs custom code | Web development | Comparing | Not started |
| Mar 2027 | Core Web Vitals for founders: why a fast site ranks and sells | Web development | Researching | Not started |
| Mar 2027 | What we learned building AI agents for small businesses: hours saved, costs, pitfalls | AI integration | Original data | Not started |

The last post is the most important one for backlinks and AI citations: real numbers from our own client work that nobody else has. Start collecting the data now.

### After month 6

Keep 2 posts a month, and add a quarterly refresh: pick the 3 posts with the most impressions in Search Console, update facts and examples, and change the "last updated" date.

## Blog writing strategy

Every post is written for one named reader, in a format people already search for, and contains at least one thing a competitor couldn't copy. A backlog of 100 ideas sorted this way is in [blog-post-ideas.md](blog-post-ideas.md).

### Who each post is for

Traffic isn't the same as leads. A post like "10 Figma tips" can get lots of visits from designers and bring zero clients. Decide the reader before writing.

| Reader | Example | What it brings | Share of posts |
| --- | --- | --- | --- |
| Buyers (founders, small business owners) | How much does a website redesign cost? | Leads | About 60% |
| Peers (designers, developers) | How to name design tokens so they scale | Backlinks, since peers link to resources | About 25% |
| Both (original data, case studies, opinion) | What we learned building AI agents for small businesses | AI citations and trust | About 15% |

### Formats and what each is good for

| Format | Title pattern | Best for |
| --- | --- | --- |
| How-to | How to [do X] (without [pain]) | Peers, and buyers doing it themselves |
| Why | Why [X happens] / Why [you should X] | Buyers with a problem |
| Signs / reasons | [N] signs you need [X] | Buyers close to deciding |
| Numbered list | [N] [things] for [goal] | Both |
| Cost | How much does [X] cost in 2026? | Buyers: the highest intent, and few agencies publish prices |
| X vs Y | [X] vs [Y]: which should you choose? | Buyers comparing options |
| What is | What is [term]? A plain-English guide | Being quoted by AI tools |
| Checklist / template | The [X] checklist (free template) | Backlinks and email sign-ups |
| Case study | How we [result] for [client type] | Trust and AI citations; needs a real project |

Write Cost and X vs Y posts first. Buyers searching those are close to a decision, and there's little competition.

### The one rule: include something only we have

Generic posts like "10 reasons why good design matters" rarely get clicks now. Thousands exist, and Google's AI Overview answers them before anyone clicks. Every post must include at least one of these:

- **Our numbers:** load times, hours saved, conversion changes from real projects
- **Our examples:** screenshots and before/after from client work
- **Our opinion:** a clear, argued stance, such as "most startups don't need a design system yet"
- **Something to take away:** a checklist, template or calculator

### The structure of every post

1. **One question per post**, matching one search phrase
2. **The answer in the first 2 sentences.** Google snippets and AI tools quote that part.
3. **H2 headings phrased as the questions people ask**, each opening with a direct answer
4. **Proof:** an example, number or screenshot from our own work
5. **Something to take away:** a checklist, table or template
6. **A matching next step:** "Book a free AI audit" on an AI post, not a generic "Contact us"
7. **Links:** one up to the related service page, and two to related posts

### About the domain name

premiumdesigncompany.com is an exact-match domain. Google stopped giving these a ranking boost in 2012, but the name still helps: it's easy to remember, it looks like a real business, and links that use our name carry the words "design company". The catch is that the name is also a generic phrase. Search engines and AI tools need consistent signals (the same description, address and profiles everywhere, plus Organization schema) to know it means us. The content still has to earn the rankings.

## Content writing standards

Every post passes this checklist before it goes live. Google's quality guidelines call this E-E-A-T: Experience, Expertise, Authoritativeness, Trust. In plain terms: show you've done it, show who you are, and back up what you say.

### Before writing

- [ ] One main question the post answers, and the search phrase that matches it
- [ ] Google the phrase and read the top 5 results. Our post must be more useful: more specific, more current, or with real examples they lack
- [ ] Collect 2–3 things only we can say: a client example, a screenshot, a number from our own work

### While writing

- [ ] **Title** under 60 characters, main phrase near the start
- [ ] **Meta description** of 140–155 characters that promises the answer
- [ ] **Answer in the first 2 sentences.** No long warm-up.
- [ ] **H2s phrased as questions or clear topics**, each opening with a direct answer
- [ ] **Real experience:** "When we built X for a client, Y happened"
- [ ] **Every statistic links to its source**, or is labelled as our own data
- [ ] **A table, checklist or diagram** where it helps. These get picked up by Google snippets and AI answers.
- [ ] **Short paragraphs** of 2–4 sentences; plain English

### Before publishing

- [ ] 3–5 internal links: 1 to a service page, 2+ to related posts, using descriptive link text rather than "click here"
- [ ] 1–3 outbound links to authoritative sources such as official docs or research
- [ ] Featured image (1200×630) with alt text; compressed, stored in `src/assets`
- [ ] Author set, publish date set, tags from the agreed list
- [ ] A call to action matched to the topic ("Book a free AI audit" on AI posts, not a generic "Contact us")
- [ ] Read it aloud once. Cut anything that sounds like filler.
- [ ] After deploy, request indexing in Search Console, then share on LinkedIn

### On using AI to write

Using AI for outlines and first drafts is fine; Google judges quality, not the tool. But a post that is only AI output adds nothing new and won't rank or get cited. The parts that make a post worth ranking are the ones AI can't supply: our examples, our numbers, our opinions. Always add those, and always fact-check.

## Backlinks and off-site authority

Aim for **4–6 quality links a month**. A backlink is another website linking to ours; Google and AI tools treat it as a vote of trust. One link from a relevant, real site is worth more than 50 from directories nobody visits.

### Stage 1: profiles we control (month 1–2)

Easy wins. Each one is a link plus a place AI tools check to confirm who we are. Use the same name, description, address and logo everywhere.

- [ ] Google Business Profile (Gothenburg address)
- [ ] Bing Places
- [ ] LinkedIn company page, and link it from each team member's profile
- [ ] Clutch, the most-cited agency review site; ask 3 past Upwork clients for reviews there
- [ ] GoodFirms, DesignRush, Sortlist (strong in Europe)
- [ ] Dribbble and Behance, with the site link in the profile and each shot
- [ ] Upwork and Coroflot profiles linking back to the site
- [ ] Swedish listings: Hitta.se and Eniro
- [ ] [Astro showcase](https://astro.build/showcase/), since the site is built with Astro

### Stage 2: earned links (month 2 onward)

- **Client credits.** Ask clients to add "Designed by Premium Design Company" in their footer or on their about page, and to share the case study we write about them.
- **Partner directories.** Once qualified, list in Webflow Experts, Framer Experts, Shopify Partners, and the Make, Zapier or n8n partner directories. These fit the AI and no-code services.
- **Design galleries.** Submit strong launches to Awwwards, CSS Design Awards and Land-book.
- **Guest posts.** 1 a month on design, SaaS or AI blogs whose readers are our buyers. Write something genuinely useful and link to one relevant post of ours.
- **Expert quotes.** Answer journalist requests on Qwoted or Featured.com about AI adoption, web design and startups.
- **Communities.** Give useful answers in relevant Reddit, LinkedIn and Indie Hackers threads. Only link when it truly helps; the main value is being named, which AI tools pick up.
- **Podcasts.** Guest on small-business, SaaS or Swedish startup podcasts; each episode page links back.

### Stage 3: things worth linking to (month 3 onward)

People link to resources, not sales pages. Build 1–2 of these:

- The original-data post (the blog plan's March post)
- A free tool, such as an "AI integration cost estimator" or a "website speed grader"
- A free template: a Figma UI kit, a design system starter, or a website redesign checklist PDF

### Never do

Buying links, link exchanges, private blog networks, or bulk directory submissions. Google penalises these, and a penalty can wipe out months of work.

## Roadmap

The next 6 months run in 3 phases: fix the foundation in October, build the missing pages by December, then grow content and links through March 2027.

| Phase | When | Work | Gate before moving on |
| --- | --- | --- | --- |
| 1. Foundation | October 2026 | Homepage title, share image · Schema and sitemap fixes · Search Console, Bing, GA4 · Directory and review profiles | Tracking live, sitemap indexed |
| 2. Build | November to December 2026 | 5 new service pages · 3 on-site case studies · Blog template upgrades · 4 blog posts | Every service has a page |
| 3. Grow | January to March 2027 | 6 blog posts · Guest posts, expert quotes · Original data post and tool · First content refresh | Month-6 review of targets |

Don't start phase 2 until tracking is live, or there is no way to tell what worked.

### Month by month

**October 2026**

- [ ] Ship every item under "Must do first" in the technical section
- [ ] Set up Search Console, Bing Webmaster Tools and GA4 key events
- [ ] Claim Google Business Profile, LinkedIn, Clutch, GoodFirms and Sortlist
- [ ] Fix the 2 existing blog posts
- [ ] Publish 2 posts

**November 2026**

- [ ] Build `/services/web-design` and `/services/web-development`
- [ ] Write the first case study on our own site
- [ ] Blog template: featured images, author box, related posts, RSS
- [ ] Publish 2 posts; ask 3 clients for Clutch reviews

**December 2026**

- [ ] Build `/services/mvp-development`, `/services/no-code` and `/services/branding`
- [ ] Write 2 more case studies; link every project card to its case study
- [ ] Publish 2 posts; first monthly AI visibility check

**January 2027**

- [ ] Publish 2 posts; pitch 2 guest posts
- [ ] Apply to relevant partner directories (Webflow, Framer, Shopify, Make or n8n)

**February 2027**

- [ ] Publish 2 posts; land the first guest post
- [ ] Build one free tool or template

**March 2027**

- [ ] Publish the original-data post and pitch it to newsletters and journalists
- [ ] Refresh the 3 best-performing posts
- [ ] Month-6 review: compare against the targets in the goals section and set the next 6 months

### Time needed

Roughly 6–8 hours a week: 4–5 for writing 2 posts a month, 1–2 for pages and links, and 1 for tracking.

**Open question:** who writes the posts and who handles code changes? Owners haven't been set yet.
