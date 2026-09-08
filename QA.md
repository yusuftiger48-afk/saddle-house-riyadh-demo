# Saddle House Riyadh — Sales Demo QA

**Preview URL (primary):** https://temporary-instant-drizzle-wbifda7.vercel.app  
**Claim (keep alive):** https://vercel.com/claim-deployment?code=236968d0-b420-4533-8b74-89fc5709bf44  
**Note:** Vercel anonymous temporary deploy — expires ~60 minutes from first create unless claimed.  
**Backup public tunnel:** https://desire-condo-historical-aspect.trycloudflare.com (session tunnel; not permanent)

**Checked at:** 2026-09-08 ~17:25 Africa/Cairo (UTC+3)  
**Method:** Live HTTPS fetch of HTML/CSS/assets + source review of mobile-first CSS

| Check | Result | Notes |
|-------|--------|-------|
| Single page | **Pass** | One `index.html`; sections via in-page anchors (`#hero` `#menu` `#gallery` `#visit`) |
| Arabic / RTL | **Pass** | `lang="ar"` `dir="rtl"`; Cairo font; Arabic copy throughout |
| Mobile layout | **Pass** | Mobile-first CSS; sticky header; stacked menu grid → 2-col → 4-col; touch-friendly CTAs; floating WA |
| Sections present | **Pass** | Hero, Menu Highlights (4), Gallery, Visit/CTAs+map, Footer |
| WhatsApp links | **Pass** | Floating + buttons → `https://wa.me/966561008550`; Book uses URL-encoded Arabic prefill |
| Maps embed | **Pass** | Responsive Google Maps iframe (`Saddle House Diplomatic Quarter Riyadh`) |
| Meta | **Pass** | Arabic `<title>` + `meta description`; `noindex`; theme-color |
| Disclaimer | **Pass** | Footer: «نموذج عرض مبيعات — ليس الموقع الرسمي» |
| Images load | **Pass** | All WebP assets HTTP 200 on Preview (`logo`, 4 dishes, `interior`); PNG fallbacks present |

## Extra checks
- Instagram + Linktree footer links: Pass  
- Hours يومياً ٨ص–١٢م (8AM–12AM): Pass  
- © 2026 سادل هاوس الرياض: Pass  
- No custom / production agency domain used: Pass  

## Deploy notes
1. `npx vercel@latest deploy --yes --temporary` succeeded (no stored Vercel credentials).  
2. Netlify anonymous: daily limit reached.  
3. Surge: interactive auth required (aborted).  
4. Cloudflare Pages / Wrangler: needs API token / Node 22.  
