# Tarih denetimi — date-auditor-D1 (9 Kasım 2026)

Kapsam: taslak olmayan tüm sayfalar (`src/content/{guides,marketplaces,reviews}`), `data/policy-log.json`, `data/key-dates.json`. Taslak (`draft: true`) olduğu için kapsam dışı kalanlar: bsa-collateral-change-2026, peak-surcharge-2026-schedule, tiktok-shop-fee-increase-2026, peak-season-cost-stack, tiktok-shop-plus-membership.
Yöntem: tarih içeren her satır tarandı (tarama betiği bugünden önceki ya da 14 gün içindeki tarihleri ve gelecek zaman ifadelerini işaretledi). İşaretlenen maddelerin kaynakları 9 Kasım 2026'da WebFetch ile yeniden açıldı.

## 1. Section 301 Çin ürün muafiyetleri (178 muafiyet, FR 2025-21671)

Yapılan aramalar (9 Kasım 2026):

| Arama | Sonuç |
|---|---|
| FR API, USTR, en yeniden eskiye: `https://www.federalregister.gov/api/v1/documents.json?conditions[agencies][]=trade-representative-office-of-united-states&order=newest&per_page=12` | En yeni belgeler: 2026-22251 "Performance Review Board Membership" (2 Kas 2026), 2026-21755 denizcilik 301 askıya alma uzatması için yorum talebi (26 Eki 2026; askıyı 9 Ocak 2027'ye kadar uzatmayı öneriyor), 2026-20511 ve 2026-20510 (7 Eki 2026). Muafiyet uzatma/sonlandırma bildirimi **yok**. |
| FR API, USTR, `publication_date >= 2026-10-27` | Tek belge: 2026-22251 (2 Kas 2026, Performance Review Board). |
| FR API, USTR, terim "exclusion", en yeni: `…conditions[term]=exclusion&order=newest` | 1. 2026-20511 (7 Eki 2026, tek muafiyette uyum değişikliği), 2. 2026-18775, 3. 2026-17925 (2 Eyl 2026, dört muafiyette uyum değişikliği) … 8. 2025-21671 (1 Ara 2025, uzatma). Daha yeni uzatma **yok**. |
| 2026-20511 tam metin (`https://www.federalregister.gov/documents/full_text/text/2026/10/07/2026-20511.txt`) | Yalnızca 1 Temmuz 2026 istatistik numarası değişikliği; bitiş tarihine dokunmuyor. |
| 2026-20510 (`https://www.federalregister.gov/documents/2026/10/07/2026-20510/…`) | 2018 eylemlerinin devamı; muafiyetlerden ya da 9 Kasım'dan söz etmiyor. |
| Public Inspection, 6 Kas 2026 listesi (9–10 Kas yayımı) `…/public-inspection-documents.json?conditions[available_on]=2026-11-06` | 103 belge; iki parça halinde okundu, USTR belgesi **yok**. |
| Public Inspection, 9 Kas 2026 listesi `…?conditions[available_on]=2026-11-09` | Sorgu anında 0 belge (liste henüz yayımlanmamış olabilir). |
| USTR basın bültenleri `https://ustr.gov/about-us/policy-offices/press-office/press-releases` | En yeni 20 bülten (2 Eki – 6 Kas 2026); muafiyetle ilgili bülten **yok**. En yenisi: "Readout of Ambassador Greer's Call with China's Vice Premier He Lifeng" (6 Kas 2026). |
| 2025-21671 yeniden okundu (govinfo HTML) | DATES ve ekler: "through 11:59 p.m. eastern daylight time on November 9, 2026"; B bölümü: "until November 10, 2026"; "The U.S. Trade Representative may continue to consider further extensions and/or additional modifications as appropriate." |

Sonuç: 9 Kasım 2026 itibarıyla Federal Register'da ve USTR basın bültenlerinde muafiyetleri uzatan, değiştiren ya da sona erdiren bir bildirim bulunamadı. Muafiyetler kaynağa göre bu gece 23:59'da sona eriyor. Not: Kaynak "eastern daylight time" diyor; ancak 9 Kasım 2026'da yaz saati (1 Kasım'da) bitmiş olacak. Sayfalarda kaynağın ifadesi korundu.

## 2. Zamana bağlı ifadeler tablosu

| # | Sayfa / dosya | İfade | Kaynak | Durum |
|---|---|---|---|---|
| 1 | guides/section-301-china-tariffs | keyFact "Exclusions extended through Nov 9, 2026"; FAQ; uyarı kutusu ("one day after this page was checked… Unless a newer USTR notice extends it"); Decision satırı "Excluded through November 9, 2026, unless further extended" | FR 2025-21671; FR API aramaları | **düzeltildi**: ifadeler "11:59 p.m. EDT, 9 Kasım 2026'dan önce girilen mallar" ve "9 Kasım 2026 aramasında daha yeni uzatma yok" olarak tarih damgalı yazıldı; yeni iddialar -38 (FR araması) ve -39 ("may continue to consider further extensions") `drafted` olarak eklendi. **Sahibin kararı bekleniyor** (bkz. §3). |
| 2 | guides/section-301-china-tariffs | Zaman çizelgesi "2026-11-09 Exclusion extension ends" | FR 2025-21671 | güncel |
| 3 | guides/section-301-china-tariffs | "The most recent USTR 'section 301 china' result … as of November 8, 2026 was an October 26, 2026 notice" (iddia -37) | FR araması | güncel (9 Kasım'da 26 Ekim'den sonraki tek USTR belgesi 2 Kasım Performance Review Board) |
| 4 | guides/section-301-china-tariffs, guides/country-of-origin-sourcing | Yarı iletken oranı 23 Haziran 2027'de artacak | FR 2025-23912 | güncel (gelecek tarih; yeniden açılmadı) |
| 5 | guides/country-of-origin-sourcing | keyFact "178 China exclusions run through 11:59 p.m. EDT, Nov 9, 2026"; FAQ "as of November 8, 2026 no further extension had been published"; gövde "As of November 8, 2026, USTR had published no further extension… unless a new notice appears, the exclusions end with that date" | FR 2025-21671; FR API aramaları | **düzeltildi**: FAQ ve gövde 9 Kasım 2026 aramasına dayandırıldı; yeni iddialar -26 ve -27 `drafted`. **Sahibin kararı bekleniyor** (§3). |
| 6 | guides/tariff-stack-2026 | Muafiyet tarihi yok (yalnızca kontrol listesi "caps, exclusions"); 24 Temmuz 2026 Section 122 bitişi geçmiş zamanla yazılmış | Proclamation 11012 | güncel |
| 7 | data/policy-log.json, data/key-dates.json | Section 301 muafiyet bitişine ait kayıt yok | — | güncel (değişiklik yapılmadı) |
| 8 | data/policy-log.json, data/key-dates.json, de-minimis-suspension-2026, section-321-repeal-2027, entry-type-11-vs-01, customs-bonds | Yorum son tarihi 7 Aralık 2026 (Low-Value Shipments, 2026-20650) | FR API 2026-20650: comments_close_on 2026-12-07, düzeltme yok | güncel |
| 9 | data/policy-log.json, data/key-dates.json | Yorum son tarihi 1 Aralık 2026 (2026-17926) | FR API 2026-17926: comments_close_on 2026-12-01, düzeltme yok | güncel |
| 10 | data/policy-log.json, key-dates, incoterms-who-is-importer, section-321-repeal-2027, entry-type-11-vs-01 | Yabancı IOR kuralı 5 Ocak 2027'de yürürlükte; yorumlar 5 Ocak 2027; aracılar 6 Mayıs 2027'ye kadar | govinfo FR-2026-11-06/2026-22735 | güncel |
| 11 | data/policy-log.json | EO 14411: "within 180 days" tüm IOR'lar iyi durumda olmalı | FR 2026-11595 | güncel (talimat dili; yeniden açılmadı) |
| 12 | data/key-dates.json, data/policy-log.json | Şubat–Ekim 2026 tarihli girişler (elektronik iade, Section 122, de minimis, FY2027 ücretleri, IOR denetimi, posta uyum tarihi 22 Eki) | ilgili FR belgeleri | güncel (geçmiş zaman / takvim başlığı; yeniden açılmadı) |
| 13 | reviews/a2x | keyFact "US$79/mo now; $85 from Nov 14, 2026"; Compare sütunu "Current price" | a2xaccounting.com/amazon/pricing; support.a2xaccounting.com fiyat listesi (yeniden açıldı: "From November 14th, 2026…", Starter 59→65, Standard 79→85, 10k 159→169, Mini 29) | **düzeltildi**: "now/Current" → "until Nov 13, 2026" (14 Kasım'da yanlış olmaması için). Diğer ifadeler zaten tarih damgalı. 14 Kasım sonrası için §3. |
| 14 | guides/amazon-fba-fee-changes-2026, fba-storage-four-layers, low-inventory-level-fee | 2027 güncellemesi 5 Kas 2026; çoğu değişiklik 15 Ocak 2027; depolama değişiklikleri 1 Şubat 2027; ortalama +$0,19 | sellingpartners.aboutamazon.com/update-to-us-referral-and-fulfillment-by-amazon-fees-for-2027 (yeniden açıldı; güncelleme notu yok) | güncel |
| 15 | guides/aged-inventory-15-month-tier (başka ajan düzenliyor — yalnızca rapor) | 1 Şubat 2027 yaşa dayalı oran; varsayımsal tablo (1 Kas 2026 satırı) | aynı Amazon duyurusu | güncel (aritmetik doğru: 1 Ağu 2026 + 181 gün = 29 Oca 2027) |
| 16 | guides/q4-deal-deadlines-2026 | Black Friday 27 Kas, Cyber Monday 30 Kas 2026; Brand Store sayfaları 18/21 Kasım'a kadar gönder; "What to do this week (from Nov 8, 2026)" | aboutamazon.com Black Friday SSS (30 Eki 2026, yeniden açıldı); advertising.amazon.com BFCM rehberi (7 gün / 48 saat / 24 saat, yeniden açıldı) | güncel; 14 gün içinde geçecek tarihler var → §3 |
| 17 | guides/title-limit-984-million (başka ajan — yalnızca rapor) | "From July 27, 2026" modüler başlık; "adopt it at any time through 2026" | developer-docs.amazon/sp-api/docs/submit-modular-titles (yeniden açıldı; "This is a gradual rollout" ek ifadesi var) | güncel (31 Aralık 2026'dan sonra "through 2026" ifadesi eskiyecek) |
| 18 | guides/holiday-peak-fulfilment-fee, mcf-off-amazon-orders, fba-fuel-logistics-surcharge-2026 (sonuncusu başka ajan — yalnızca rapor) | Zirve tabloları 15 Eki 2026–14 Oca 2027; %3,5 ek ücret; AMZL blok ücreti muafiyeti 14 Oca 2027'ye kadar | supplychain.amazon.com/docs/rate-card (yeniden açıldı) | güncel |
| 19 | guides/awd-vs-3pl-warehousing | $0,35 promosyon indirimi 31 Aralık 2026'ya kadar | sell.amazon.com/programs/warehousing (yeniden açıldı) | güncel |
| 20 | guides/hts-classification-basics | "2026 HTS Revision 22 was published on October 30, 2026" | usitc.gov/harmonized_tariff_information (yeniden açıldı; daha yeni revizyon yok) | güncel |
| 21 | guides/us-product-compliance | eFiling kuralı 8 Temmuz 2026'da yürürlükte; FTZ için 8 Ocak 2027 | CPSC kaynakları (FR) | güncel (geçmiş/gelecek ayrımı doğru; yeniden açılmadı) |
| 22 | guides/brand-registry-trademark | USPTO ortalama süreler "as of October 1, 2026" | USPTO panosu | güncel (tarih damgalı) |
| 23 | guides/authorised-reseller | Varsayımsal örnek: 180. gün 28 Kasım 2026 | — | güncel (varsayımsal, aritmetik doğru) |
| 24 | guides/supplier-verification | 3 Ağu 2026 UFLPA bildirimi (187 kuruluş) | FR 2026-15628 | güncel (tarih damgalı) |
| 25 | marketplaces/aliexpress (başka ajan — yalnızca rapor) | Üyelik sözleşmesi 26 Ağu 2026 güncellendi, 26 Eyl 2026 yürürlükte | aliexpress.com | güncel |
| 26 | marketplaces/tiktok-shop (başka ajan — yalnızca rapor) | Satıcı şartları "last updated October 15, 2026" | seller terms | güncel |
| 27 | reviews/* (amzscout, aura, getida, helium-10, jungle-scout, keepa, sellerboard, zonguru) | Fiyatlar "On/as of Nov 8, 2026" | satıcı sayfaları | güncel (tarih damgalı) |

## 3. SAHİBİN KARARI BEKLENİYOR

1. **Section 301 muafiyetleri (section-301-china-tariffs, country-of-origin-sourcing).** Muafiyetler bugün 23:59 EDT'de (kaynak ifadesi) bitiyor; 9 Kasım'daki aramalarda uzatma bildirimi yok. 9 Kasım Public Inspection listesi sorgu anında boştu. 10 Kasım'da Federal Register ve Public Inspection yeniden kontrol edilmeli: uzatma yayımlanırsa yeni bildirimden yeni iddialar; yayımlanmazsa keyFact/zaman çizelgesi "sona erdi" diliyle yeniden yazılmalı. Ayrıca kaynağın "eastern daylight time" ifadesi (yaz saati 1 Kasım'da bitti) olduğu gibi bırakıldı.
2. **A2X (reviews/a2x).** 14 Kasım 2026'dan sonra eski fiyat tablosu ("Price until Nov 13, 2026") yalnızca tarihsel bilgi olur; sayfa yeni fiyatlarla yeniden düzenlenmeli mi?
3. **Q4 tarihleri (q4-deal-deadlines-2026).** Brand Store gönderim tarihleri (18/21 Kasım) ve "What to do this week (from Nov 8, 2026)" başlığı 14 gün içinde eskiyor; 30 Kasım sonrası sayfa geçmiş zamana çevrilmeli ya da taslağa alınmalı.

## 4. Değiştirilen dosyalar

- `src/content/guides/section-301-china-tariffs.mdx` (modified/lastVerified 2026-11-09), `data/claims/section-301-china-tariffs.json` (+ -38, -39 `drafted`, produced_by `date-auditor-D1`)
- `src/content/guides/country-of-origin-sourcing.mdx` (modified/lastVerified 2026-11-09), `data/claims/country-of-origin-sourcing.json` (+ -26, -27 `drafted`)
- `src/content/reviews/a2x.mdx` (modified/lastVerified 2026-11-09; yalnızca ifade değişikliği, yeni iddia yok)

`node tools/check-page.mjs guides/section-301-china-tariffs guides/country-of-origin-sourcing reviews/a2x` → ERROR yok (country-of-origin-sourcing'deki SSS uyarısı önceden vardı).
