# Audit changelog

## 2026-09-04 — Paket 1 + site geneli altyapı
- `src/components/Sources.astro`: resmi kaynaklar (Amazon, CBP, USITC, USPTO, CPSC, FDA, FTC, IRS, pazar yerleri) dofollow; bloglar nofollow; `sponsored: true` desteği; "Primary source / Secondary" etiketi.
- `src/layouts/Base.astro`: `seoTitle` prop (55–60 karakterlik `<title>`), makale şeması `Article` → `TechArticle`, `alternativeHeadline`.
- `src/content.config.ts`: `seoTitle` alanı (opsiyonel, max 70).
- `src/pages/guides/[...slug].astro`: seoTitle Base'e aktarılır.
- Yeniden yazılan rehberler: `low-inventory-level-fee`, `fba-storage-four-layers`, `inbound-placement-split-arithmetic`, `amazon-fba-fee-changes-2026` (ayrıntı: AUDIT-STATUS.md).
- Kaldırılan halüsinasyonlar: "1 Temmuz 2026 depolama $0.87", "yaşlı envanter eşiği 271→180", "LILF eşiği 35 gün".

## 2026-09-04 — Paket 2
- Yeniden yazılan: `fba-fuel-logistics-surcharge-2026` (Amazon'un 2 Nisan duyurusu birincil kaynak; MCF/BwP 2 Mayıs; ort. $0.17), `holiday-peak-fulfilment-fee` (7 Temmuz duyurusu; ship-date kuralı; 21 Ekim minimal-split deadline), `subscribe-and-save-economics` (sell.amazon.com birincil kaynak; "reported" dili kaldırıldı; desteksiz "%15–20 kademe" iddiası silindi).
- Emekliye ayrılan ince haber kopyaları: `aged-inventory-15-month-tier` → 301 `fba-storage-four-layers`; `peak-surcharge-2026-schedule` → 301 `holiday-peak-fulfilment-fee`. Dosyalar `draft: true` ile repoda kaldı; `public/_redirects` güncellendi.
- Kalan Nova Analytics atfı bu 5 dosyada: 0.
