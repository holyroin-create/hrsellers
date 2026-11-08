# İÇERİK PLANI

## Yayındaki içerik (v3, 2026-11-08)
- **30 rehber + 5 pazaryeri ücret sayfası**, sayfa ve araçlarda toplam 1.186 iddia (hepsi `verified`, üretici ≠ doğrulayıcı).
- **6 araç:** margin-calculator, duty-estimator, fee-comparison, dimensional-weight, cash-flow-planner, ppc-budget-calculator.
- **Referans:** policy-log, key-dates, glossary, quiz, faq, resources, checklists, start-here.
- **Güven ve yasal sayfalar:** about, contact, editorial-standards, corrections, privacy, cookie-policy, terms, disclaimer, image-credits.

| Sütun | Sayfalar |
|---|---|
| Importing (16) | hts-classification-basics, entry-type-11-vs-01, customs-bonds, customs-holds-and-exams, de-minimis-suspension-2026, section-321-repeal-2027, merchandise-processing-fee, tariff-stack-2026, section-301-china-tariffs, antidumping-duties, country-of-origin-sourcing, origin-marking-requirements, first-sale-valuation, foreign-trade-zones, duty-drawback, prior-disclosure-protests, incoterms-who-is-importer |
| Fees (4 + 5) | amazon-referral-fees, walmart-wfs, ebay-etsy-for-amazon-sellers, etsy-offsite-ads-economics + /marketplaces/{amazon,walmart,ebay,etsy,shopify} |
| Compliance (6) | us-product-compliance, hazmat-dangerous-goods, shipping-lithium-batteries, review-manipulation-risk, brand-registry-trademark, gs1-barcodes-fnsku |
| Money (3) | form-1099-k-marketplace-sellers, sales-tax-nexus, accrual-accounting-cogs |

## Sayfa standardı (docs/CONTENT_CONTRACT.md)
1.200–2.200 kelime; açılışta key facts + özet; bir karar öğesi (Decision/Compare/Checklist); işlenmiş örnek; "How to confirm" bölümü; satır içi kaynak etiketleri; dated "Last verified"; FAQ soruları yalnızca research/faq-bank.json'dan.

## Sonraki dalga (öncelik sırası; her biri birincil kaynakla doğrulanabilirse)
| # | Konu | Talep sinyali | Birincil kaynak | Not |
|---|---|---|---|---|
| 1 | Boyutsal ağırlık ve taşıyıcı bölenleri | Kargo nişi 181 öneri | UPS/FedEx/USPS resmi fiyat kılavuzları | Araç mevcut, rehber eksik. |
| 2 | Section 232 (çelik/alüminyum/türevler) | Gümrük kuyruğu | Federal Register, CBP CSMS | tariff-stack'i besler. |
| 3 | Importer Security Filing (10+2) | Gümrük | 19 CFR 149 | |
| 4 | Gıda/FDA prior notice | Uyum | 21 CFR 1 Subpart I | |
| 5 | Ürün güvenliği: çocuk ürünleri (CPC) | Uyum | 16 CFR 1107/1109 | Mevcut sayfayı derinleştir. |
| 6 | Eyalet satış vergisi eşik tablosu (50 eyalet) | Money %68 | Eyalet vergi daireleri | Her eyalet ayrı iddia. |
| 7 | Amazon FBA lojistik ücretleri | FBA %77 | Seller Central (bu ortamda engelli) | ⚠ Kaynak okunabilir olunca. |
| 8 | Emeklilikteki 89 eski URL konusundan geri getirilecekler | URL_ENVANTERI.csv | — | Önce "landed cost", "freight modes", "supplier verification". |

## Bakım
- Haftalık: `npm run recheck` (kaynak URL erişilebilirliği + değişiklik özeti) → policy-log ve corrections.
- Her ücret değişikliğinde: iddiayı yeniden doğrula, `modified` ve `lastVerified` güncelle, düzeltme varsa corrections.json'a ekle.
