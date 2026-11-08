# Photo contract (photo editor + license auditor)

## PRIMARY SOURCE (use this): Unsplash, free photos only
- Search with the **WebFetch tool**: `https://unsplash.com/s/photos/<terms-with-hyphens>` — ask for photo page URL, alt, photographer, whether it is Unsplash+/premium, and the images.unsplash.com URL.
- **Never use Unsplash+ / premium photos** (plus.unsplash.com or marked Unsplash+): they are under a different, paid license.
- Confirm the license on the photo page with WebFetch (`https://unsplash.com/photos/<slug>`): it must say the photo is free to use under the Unsplash License (not Unsplash+). Record photographer name and the photo page URL.
- License record: `"license":"Unsplash License"`, `"license_url":"https://unsplash.com/license"`, `"library":"Unsplash"`. Credit is given even though the license does not require it.
- Download in the shell from images.unsplash.com only: `curl -sL -A "fbatactics-photo-editor/1.0 (https://fbatactics.com; acar@parkgreenenergy.com)" "https://images.unsplash.com/photo-XXXX?w=2000&q=85&fm=jpg" -o assets/images-src/<image_id>.jpg` (≥2 s between downloads). Do not change the User-Agent, do not scrape other hosts.
- Wikimedia Commons (below) is a secondary source only; it is currently rate-limiting this machine (HTTP 429) — skip it unless a Unsplash search has nothing usable.

## Source
Wikimedia Commons. IMPORTANT (rate limits): the shell's IP is currently rate-limited on commons.wikimedia.org/w/api.php.
Do ALL searching and metadata reading with the **WebFetch tool** on the API URL below (ask it to return, for each result: title, LicenseShortName, Artist, UsageTerms, Restrictions, width, height, thumburl). Use the **shell only to download chosen files from upload.wikimedia.org**, one at a time, ≥3 s apart, with this honest User-Agent:
`-A "fbatactics-photo-editor/1.0 (https://fbatactics.com; acar@parkgreenenergy.com)"`
- Search: `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=<terms>&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=1600`
- Download only `thumburl` (≤1600 px wide) or the original from upload.wikimedia.org. Be polite: ≤1 request/second, back off on HTTP 429.
- Do NOT use other photo sites, do not change the User-Agent to imitate a browser, do not scrape HTML.

## License filter (from `extmetadata.LicenseShortName` / `License` / `UsageTerms`)
- Allowed: Public domain (PD, PD-USGov, PD-self, "Public domain"), CC0, CC BY 2.0 / 2.5 / 3.0 / 4.0 (attribution required).
- Rejected: any SA (share-alike), NC, ND, GFDL-only, "Fair use", unknown/blank license, `Restrictions` field non-empty, watermarked images.
- Prefer PD/CC0 over CC BY.

## Content filter (look at every chosen image with the Read tool)
- Real photograph, editorial/documentary quality, sharp, good light, landscape, ≥1600 px wide original.
- No recognizable faces (people may appear only small, from behind, or blurred by distance), no children.
- No legible commercial brand logos or trademarks as a subject (no Amazon/Walmart/eBay/Etsy/TikTok/Shopify marks, no carrier logos as focal point). Small incidental text on containers is acceptable only if not legible as a brand at display size; when in doubt, reject.
- No dashboards/screenshots, no AI-generated images, no heavily filtered images, no military/weapons, no disasters.
- Must fit the brief literally (the photo illustrates the topic; it is not evidence of a claim).

## Processing (shell, sharp is installed in /home/claude/fbatactics-v3/node_modules)
- Save the original download to `assets/images-src/<image_id>.<ext>` (kept for license evidence).
- Produce `public/photos/<image_id>-1600.webp`, `-960.webp`, `-480.webp` (quality 72–78), EXIF/GPS stripped (sharp drops metadata by default — do not call withMetadata), sRGB.
- Each 1600 file ≤ 230 KB, 960 ≤ 120 KB, 480 ≤ 50 KB (lower quality if needed).
- Crop to 3:2 (or as asked) with attention to the subject (`position: 'attention'`).

## Manifest: your OWN file `data/images-<your-agent-name>.json` (valid JSON array; the lead merges files into data/images.json)
If no Commons photo fits a brief closely, choose the closest truthful documentary photo for the page's topic (port, containers, warehouse, parcels, paperwork, calculator, lab bench, scanner, ceramics workshop…) and write the `alt`/`caption` to describe what the photo actually shows. Never reuse one photo for two pages.
```json
{"image_id":"port-terminal-01","file":"photos/port-terminal-01","width":1600,"height":1067,
 "pages":["/"],"library":"Wikimedia Commons","source_url":"https://commons.wikimedia.org/wiki/File:…",
 "original_url":"https://upload.wikimedia.org/…","author":"<Artist, plain text>","license":"CC BY 4.0",
 "license_url":"https://creativecommons.org/licenses/by/4.0/","attribution":"Photo: <author>, CC BY 4.0, via Wikimedia Commons",
 "accessed":"2026-11-08","archive_url":"","no_faces_or_marks_confirmed":true,
 "alt":"<specific, describes what is shown>","caption":"Illustrative photo: <what it shows>",
 "selected_by":"<agent>","license_verified_by":"","status":"selected"}
```
`license_verified_by` is filled only by the independent license auditor, who re-queries the API for the file, re-reads the license fields, views the image, and sets `status:"verified"` or `"rejected"` (+ `audit_note`).
