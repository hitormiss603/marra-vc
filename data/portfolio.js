// Portfolio list for marra.vc. Edit this file to add, remove or update companies.
//
// Fields:
//   name     Company name (required)
//   url      Company website (or acquisition article for acquired companies), or "" if none
//   sector   Short label, e.g. "B2B SaaS", "Robotics"
//   status   "active" | "ipo" | "acquired" | "exited" | "closed"
//            exited = Matt sold his position (e.g. in a secondary)
//   role     Optional extra badge, e.g. "Founder"
//   note     Optional short line, e.g. "Acquired by Acme, 2024"
//   logo     Optional path to a logo image, e.g. "assets/logos/padsplit.png" (no logo shows if blank)
//   show     false hides the company without deleting the entry
//
//   status "" shows no badge (used for entries not yet confirmed)
//
// DRAFT: merged from the Drive logo folders and /mnt/project-files/current-site/portfolio-status-draft.md.
// Only high-confidence public findings have a status; Matt confirms the rest.
window.PORTFOLIO = [
  { name: "Uber",                url: "https://www.uber.com", sector: "Mobility", status: "ipo", note: "NYSE: UBER\nOperations & Strategic Finance employee", logo: "assets/logos/uber.png" },
  { name: "ABL Space Systems",  url: "https://ablspacesystems.com", sector: "Space & defense",  status: "active",   note: "Now Long Wall (2025)", logo: "assets/logos/abl.png" },
  { name: "Propensity",          url: "https://www.propensity.com", sector: "AI martech", status: "active", note: "Formerly Addapptation", logo: "assets/logos/propensity.png" },
  { name: "Aescape",            url: "https://www.aescape.com", sector: "Robotics", status: "active", note: "Robotic massage that 3D-maps your body and adapts in real time", logo: "assets/logos/aescape.png" },
  { name: "Any Question",       url: "https://www.whoop.com", sector: "AI / Expert knowledge", status: "acquired", note: "Living library of expert insights. Acquired by WHOOP", logo: "assets/logos/any-question.png" },
  { name: "Bandit Coffee",      url: "https://www.gopuff.com", sector: "Food delivery", status: "acquired", note: "App-only coffee shop. Acquired by Gopuff, 2021 to launch Gopuff Kitchen", logo: "assets/logos/bandit.png" },
  { name: "Camber",             url: "https://privatejetcardcomparisons.com/2022/12/07/vista-global-acquires-online-private-jet-charter-broker-camber", sector: "Private aviation", status: "acquired", note: "Acquired by XOJet", logo: "assets/logos/camber.png" },
  { name: "Datanomix",          url: "https://datanomix.io", sector: "Industrial AI",    status: "active",   note: "", logo: "assets/logos/datanomix.png" },
  { name: "Dyno",               url: "https://joindyno.com", sector: "Healthcare",       status: "active", note: "", logo: "assets/logos/dyno.png" },
  { name: "Further",            url: "https://withfurther.com", sector: "Real estate / Fintech",                 status: "active",   note: "", logo: "assets/logos/further.png" },
  { name: "Health Haven Rx",    url: "https://www.healthhavenrx.com", sector: "Healthcare",       status: "active",         note: "", logo: "assets/logos/health-haven-rx.png" },
  { name: "High Time Foods",    url: "https://hightimefoods.com", sector: "Disruptive food",         status: "active",         note: "", logo: "assets/logos/high-time-foods.png" },
  { name: "Hostfully",          url: "https://www.hostfully.com", sector: "B2B SaaS", status: "active", note: "", logo: "assets/logos/hostfully.png" },
  { name: "Knox Financial",     url: "https://www.doorstead.com", sector: "Proptech / Fintech",         status: "acquired", note: "Acquired by Doorstead, 2023", logo: "assets/logos/knox.png" },
  { name: "SFR3",               url: "https://www.sfr3.com", sector: "Proptech / Fintech", status: "active", note: "", logo: "assets/logos/sfr3.png" },
  { name: "Spry",                url: "https://spry.so", sector: "B2B SaaS / College athletics", status: "active", note: "Athletic department ops & NIL compliance", logo: "assets/logos/spry.png" },
  { name: "SunDay",             url: "https://drinkasunday.com", sector: "Disruptive beverage", status: "active", role: "Founder", note: "Disrupting the alcohol market with DTC & retail hemp RTDs. Co-founded with industry experts.", logo: "assets/logos/sunday.png" },
  { name: "Standard AI",        url: "https://standard.ai", sector: "Computer vision",  status: "active",   note: "Formerly Standard Cognition", logo: "assets/logos/standard-ai.png" },
  // Added from the "Website Logos" Drive folders. Statuses follow the draft; blanks are unconfirmed.
  { name: "Lime",                url: "https://www.li.me", sector: "Mobility", status: "ipo", note: "Nasdaq: LIME", logo: "assets/logos/lime.png" },
  { name: "WEVEN",               url: "https://www.theknot.com", sector: "Events marketplace", status: "acquired", note: "Formerly Mayflower Venues. Acquired by The Knot Worldwide", logo: "assets/logos/weven.png" },
  { name: "Metrobi",             url: "https://metrobi.com", sector: "B2B mobility", status: "active", note: "", logo: "assets/logos/metrobi.png" },
  { name: "Machinery Partner",   url: "https://www.machinerypartner.com", sector: "Heavy machinery marketplace", status: "acquired", note: "Acquired by Phoenix Tailings, 2026", logo: "assets/logos/machinery-partner.png" },
  { name: "PadSplit",            url: "https://www.padsplit.com", sector: "Proptech / Fintech", status: "active", note: "", logo: "assets/logos/padsplit.png" },
  { name: "Replicated",          url: "https://www.replicated.com", sector: "B2B SaaS / Infrastructure", status: "active", note: "", logo: "assets/logos/replicated.png" },
  { name: "Salido",              url: "https://www.businesswire.com/news/home/20200910005577/en/Restaurant-Operating-System-SALIDO-Announces-Sale-to-North-American-Bancard", sector: "Restaurant tech", status: "acquired", note: "Acquired by North American Bancard, 2020", logo: "assets/logos/salido.png" },
  { name: "Scoot Science",       url: "https://www.scootscience.com", sector: "B2B SaaS / Aquaculture data", status: "active", note: "", logo: "assets/logos/scoot-science.png" },
  { name: "SVRF",                url: "https://www.auganix.org/creative-augmented-reality-platform-provider-poplar-acquires-svrf-inc/", sector: "Augmented reality", status: "acquired", note: "AR face filter and 3D content marketplace. Acquired by Poplar Studio", logo: "assets/logos/svrf.png" },
  { name: "Torre",               url: "https://torre.ai", sector: "AI recruiting", status: "active", note: "", logo: "assets/logos/torre.png" },
  { name: "TruckMap",            url: "https://www.tenstreet.com/blog/about-tenstreet/tenstreet-announces-acquisition-of-truckmap-launch-of-new-rewards-true-fuel-programs", sector: "Logistics", status: "acquired", note: "Acquired by Tenstreet", logo: "assets/logos/truckmap.png" },
  { name: "UptimeHealth",        url: "https://www.uptimehealth.com", sector: "B2B SaaS / Medical equipment", status: "active", note: "", logo: "assets/logos/uptimehealth.png" },
  { name: "WEVO",                url: "https://wevo.ai", sector: "AI martech", status: "exited", note: "", logo: "assets/logos/wevo.png" },
];
