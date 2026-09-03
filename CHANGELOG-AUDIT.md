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

## 2026-09-04 — Paket 3
- Paket 2'deki iki 301 GERİ ALINDI (editör kararı: hiçbir sayfa askıya alınmaz). `aged-inventory-15-month-tier` → "her kademede sat/tasfiye/geri çek karar hesabı" olarak; `peak-surcharge-2026-schedule` → "Q4 birim maliyet çalışma sayfası" olarak, depolama/peak rehberleriyle çakışmayacak niyetle yeniden yazıldı. `_redirects` eski haline döndü.
- `de-minimis-suspension-2026`: Federal Register IFR (24 Haz 2026, 91 FR 37789 / 37801), EO 14256/14324/14388 birincil kaynak eklendi. **Hata düzeltildi:** $80/$160/$200 sabit posta ücreti seçeneği 28 Şubat 2026'da sona erdi; rehber hâlâ geçerliymiş gibi anlatıyordu. 24 Temmuz 2026 posta informal entry süreci eklendi.
- `section-321-repeal-2027`: OBBBA §70531 (P.L. 119-21) ve Entry Type 13 FR bildirimi birincil kaynak; "reported" dili kaldırıldı; posta sabit ücret hatası burada da düzeltildi.
- `tariff-stack-2026`: USITC HTS, USTR 301, CBP 232 birincil kaynak; "reported" salatası temizlendi; 20–30% rakamı "trade-press tahmini" olarak açıkça etiketlendi.

## 2026-09-04 — Stil geçişi (Paket 1–3 dosyaları) + GSC düzeltmeleri
- 12 rehber Amerikan İngilizcesine çevrildi (fulfillment, optimized, program, catalog, utilization; tarih formatı "October 15, 2026"). Yazım kılavuzu uygulandı: klişesiz giriş, edilgen çatıdan kaçınma, doğrudan hitap, asimetrik yapı, sonuç paragrafı yerine somut sonraki adım / açık soru; "In conclusion", "It is worth noting", "crucial", "leverage" vb. kalıplar sıfırlandı.
- Siteye `public/_headers` eklendi: `/downloads/*` ve `/rss.xml` için `X-Robots-Tag: noindex` (GSC "Tarandı – dizine eklenmedi" listesindeki iki içerik-dışı URL).
- GSC listesindeki 4 rehberden 2'si zaten yeniden yazıldı (`peak-surcharge-2026-schedule`, `subscribe-and-save-economics`); `new-asin-referral-incentive` ve `etsy-offsite-ads-economics` Paket 4'e alındı.
- Sitenin geri kalanı hâlâ İngiliz İngilizcesi; her paketle dönüştürülür, sonunda global geçiş yapılır.

## 2026-09-04 — Paket 4 (GSC'nin işaretlediği sayfalar)
- `new-asin-referral-incentive`: **Yayında yanlış program.** "Yeni ASIN başına ilk $25.000 gelirde referral indirimi" iddiası iki ayrı Amazon programının karıştırılmasıydı (tek kaynak: AMZScout haber özeti). Doğrusu: FBA New Selection (2026), 30 Temmuz 2026 — ilk 100 birimde %10, sonraki 100 birimde %5 referral tavanı; 120 gün depolama/iade/tasfiye muafiyeti; 31 Ekim 2026 kayıt sınırı. $50.000/$950.000 kademeleri New Seller Incentives'a ait. Baştan yazıldı; hata açıkça belirtildi.
- `etsy-offsite-ads-economics`: Etsy politikası zaten birincil kaynaktı; hedge dili temizlendi, giriş/kapanış yeniden yazıldı, Amerikan İngilizcesi.
- `amazon-renewed`: sell.amazon.com program sayfası birincil kaynak; tek kaynaklı Samsung eşikleri "Amazon yayımlamıyor" notuyla planlama rakamı olmaktan çıkarıldı; hedge dili temizlendi.
- `reimbursement-recovery-services`: Amazon'un resmi politika duyurusu eklendi; yürürlük tarihi düzeltildi (10 Mart 2025 duyuru / 31 Mart uygulama, "31 Mart" tek tarih değil).
- `supplier-payment-terms`: hedge dili temizlendi; Trade Assurance atfı; stil kılavuzu uygulandı.
- Tümü: Amerikan İngilizcesi, klişesiz giriş, somut kapanış adımı, seoTitle.

## 2026-09-04 — Paket 5 (reklam ve teşvik silosu)
- `deal-and-coupon-fees`: **Yayında yapısal hata.** Peak-dışı ücret yapısı ($70/gün + %1, tavan $2.000; 2 Haziran 2025) "eski düzenleme" diye anlatılıyordu — o güncel yapı. Etkinlik yapısı ($100 + %1.5, tavan $5.000) ayrıldı; iki sütunlu tablo; PBDD fiyatlarının BFCM lookback'inden muaf tutulması (7 Temmuz 2026 duyurusu) eklendi. İki Amazon duyurusu birincil kaynak.
- `vine-and-early-reviews`: kademe tablosu netleştirildi ($0 / $75 / $200 = 1–2 / 3–10 / 11–30 birim); "2026'da iki kez değişti" iddiası doğrulanamadı, kaldırıldı; Amazon Vine sayfası kaynak.
- `brand-referral-bonus`: Amazon program sayfası birincil kaynak; 10 hedge temizlendi.
- `amazon-ppc-benchmarks`, `ppc-campaign-structure-launch`: ajans verisi olduğu açıkça etiketlendi; hedge dili temizlendi; stil kılavuzu.
- Tümü: Amerikan İngilizcesi, seoTitle, klişesiz giriş, somut kapanış.

## 2026-09-04 — Paket 6 (listeleme ve algoritma silosu)
- `listing-optimisation-a10`: **Eski kural yayındaydı.** "Başlık sınırı 200 mü 75 mi, kaynaklar çelişiyor" — ikisi de doğru, farklı tarihlerde: 21 Ocak 2025 → 200 karakter; 27 Temmuz 2026 → medya hariç 75 karakter + 125 karakterlik Item Highlights alanı, AI yeniden yazımı, marka sahiplerine 14 gün inceleme. İki Amazon duyurusu kaynak. Ledger güncellendi.
- `buy-box-featured-offer`: "%5 tolerans" ve "Ekim 2025 0-gün handling" iddiaları Amazon'un yayımlamadığı rakamlar; "repricer/ajans tahmini" olarak etiketlendi, tarih "yaklaşık" olarak işaretlendi. Amazon Featured Offer/Fair Pricing yardım sayfası kaynağa eklendi.
- `main-image-compliance`: Amazon görsel gereksinimleri sayfası birincil kaynak; hedge temizliği.
- `rufus-listing-optimization`, `sqp-rufus-free-research`: rakamlar açıkça "tahmin" etiketli; COSMO'nun Amazon tarafından doğrulanmadığı notu korundu.
- Tümü: Amerikan İngilizcesi, seoTitle, klişesiz giriş, somut kapanış.

## 2026-09-04 — Paket 7 (hesap sağlığı silosu)
- `order-defect-rate`: "A-to-z talepleri kazanılsa da sayılır (tek kaynak)" iddiası — Amazon'un ODR sayfası hangi sonuçların sayıldığını tanımlıyor, ajanslar çelişiyor; okuyucu kendi Account Health sayfasına yönlendirildi, kesin ifade kaldırıldı. %0.8/%0.3 rakamları "Feedvisor tahmini, Amazon rakamı değil" olarak etiketlendi. Amazon ODR ve AHR yardım sayfaları kaynağa eklendi.
- `account-suspension-appeal`: "90 gün fon tutma" Amazon BSA §2'ye ("up to 90 days") bağlandı; "90 gün itiraz penceresi" reinstatement firmalarının pratiği olarak etiketlendi, bildirimdeki tarih esas alındı.
- `buyer-seller-messaging`: "alıcı adı yasak" iddiası Amazon Communication Guidelines'ta yok — "ajans gözlemi, güvenli varsayılan" olarak yeniden çerçevelendi; kılavuz kaynağa eklendi.
- `listing-disappeared`, `ip-complaints-retractions`: birincil kaynak eklendi; "240+ retraction" firmanın kendi iddiası olarak etiketlendi.
- Tümü: Amerikan İngilizcesi, seoTitle, klişesiz giriş, somut kapanış.

## 2026-09-04 — Paket 8 (fulfillment modeli silosu)
- `seller-fulfilled-prime`: 6 Temmuz 2026 hız eşikleri doğrulandı (standart: %40 1-gün, %75 2-gün, %90 5-gün; oversize %15/%80; extra large %25/%60; hafta sonu sayfa görüntülemeleri 17 Ekim'e kadar hariç; Eylül'de posta kodu bazlı teslimat aracı). Amazon duyurusu (26 Mayıs 2026) kaynağa eklendi.
- `fba-vs-fbm-breakeven`: doğrulanamayan "Ekim 2025 0-gün handling" iddiası, doğrulanmış iki değişiklikle değiştirildi: 29 Haziran 2026 handling-time politikası ve 6 Temmuz SFP eşikleri. Amazon ücret ve sürşarj duyuruları kaynağa eklendi.
- `mcf-off-amazon-orders`: 2 Mayıs MCF sürşarjı Amazon duyurusuna bağlandı; 18 hedge temizlendi.
- `returns-cost-and-badge`: kategori eşikleri "Amazon'un yayımladığı" olarak; kırılma noktası rakamları "seller-tool tahmini" etiketli; iade işleme ücreti sayfası kaynağa eklendi.
- `fbt-fixed-dollar-problem`: FBT rakamları "seller-tool tahmini" etiketi; TikTok Shop Seller Center kaynağa eklendi.
- Tümü: Amerikan İngilizcesi, seoTitle, klişesiz giriş, somut kapanış.
