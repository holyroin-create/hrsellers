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

## 2026-09-04 — Gün sonu gözden geçirme (37 dosya)
- Kalan İngiliz yazımı (S&S: enrolment), "reporting describes" kalıntıları (tariff-stack, supplier-payment-terms, SFP) temizlendi.
- Doğrulanmamış üç ifade yumuşatıldı: aged-inventory rehberinde removal ücret aralığı ("düşük tek haneli dolar; kesin rakam sipariş ekranında"), depolama rehberinde var olduğundan emin olunmayan rapor adı (Manage Inventory Health'e yönlendirildi), peak rehberinde $0.19–$2.81 kademe örnekleri "Eightx'in aktarımıyla" olarak etiketlendi.
- Kalan Nova Analytics atıfları (5 dosya): yalnızca ikincil/çelişen-kaynak tablolarında veya "satıcı iddiası" bağlamında; hiçbir rakam Nova'ya dayanarak gerçek gibi sunulmuyor.

## 2026-09-04 — Editoryal kapı (tools/audit-guide.mjs) ve geriye dönük düzeltme
- Yeni script `tools/audit-guide.mjs`: hedge kalıpları, İngiliz yazımı, şüpheli yayıncı (Nova Analytics) atfı, kaynak erişim tarihi < güncelleme tarihi, Figure/Split kaynak metninde eski "accessed August" / "reported" ifadeleri, seoTitle eksik/uzun, geçersiz href, kaynak bloğunda birincil kaynak yokluğu, SSS öncesi kapanış cümlesi. `npm run check` artık bu kapıyı da çalıştırır; DONE işaretli bir rehber hata verirse build başarısız sayılır.
- İlk çalıştırma 37 dosyada 23 hatalı dosya buldu (hepsi kalıntı: 9 "one source states/puts" hedge'i, 5 İngiliz yazımı, 14 eski "accessed August" Figure kaynağı, 3 dosyada birincil kaynak yokluğu — PPC/Rufus/SQP için Amazon Ads Help, About Amazon ve Brand Analytics yardım sayfaları URL'siz eklendi). Hepsi düzeltildi; ikinci çalıştırma: 0 hata.
- Kalan uyarılar (hata değil): 5 dosyada Nova Analytics atfı yalnızca "satıcı iddiası / çelişen kaynak" bağlamında; 3 dosyada description 320 karakterden uzun (arama snippet'i kısaltır; Kademe B geçişinde kısaltılacak).

## 2026-09-05 — Paket 9 (envanter silosu) — protokolle
İddia listesi: 31 sayısal/politika iddiası tarandı. Birincil: 9 · İkincil ×2+: 17 · Silinen/yumuşatılan: 5.
- `gs1-barcodes-fnsku`: 31 Mart 2026 commingling bitişi DOĞRULANDI (Accelerate 17 Eylül 2025 duyurusu; PPC Land Amazon duyurusunu alıntılıyor; 6 bağımsız kaynak). 16 hedge temizlendi; Amazon duyurusu + PPC Land + AMZ Prep kaynağa eklendi.
- `ipi-restock-limits`: **Ledger "400 · 450 · 500" hatalıydı** — Amazon'un eşiği 400 (Seller Labs, Canopy, Feedvisor, AMZ Prep, Nova); 450/500 ajans güvenlik marjı. Doğrulanamayan "6 aydan 5 aya kapasite" ve "ASIN-level restock limits yeniden aktif" iddiaları "tek ajans gözlemi" olarak etiketlendi; doğrulanmış "550+ skorda %75 kesinti (Mayıs 2025)" eklendi; $10/cu ft overage eklendi. Nova atfı silindi.
- `demand-forecasting-reorder`: 28 gün eşiği Amazon'a bağlandı ("sources split" ifadesi kaldırıldı); 45 gün "IPI pratiği" etiketli.
- `awd-vs-3pl-warehousing`: rate aralığı $0.43–$0.78'e güncellendi; AWD program sayfası + AMZ Prep kaynağa eklendi. [Olası] 15 Ocak 2026 AWD Batı bölge zammı ikincil kaynaklı.
- `removal-vs-hold-decision`: **Nova'nın çürütülmüş "1 Temmuz 2026'da 271→180" iddiası yayındaydı** — düzeltildi (181 gün 2023'ten beri); Nova atfı silindi; removal ücreti "rate card ~$1–2, kesin rakam sipariş ekranında".
- Kapı: 5/5 → 0 hata (ilk çalıştırmada 3 dosyada 5 hata: 2 İngiliz yazımı, 2 eski Figure tarihi, 1 hedge). Build 158, 0 kırık link.

## 2026-09-05 — Paket 10 (gümrük silosu, kalan) — protokolle
İddia listesi: 27 iddia. Birincil (kanun/CFR/Federal Register): 13 · İkincil ×2+: 11 · Silinen/düzeltilen: 3.
- `entry-type-11-vs-01`: **Yayında süresi dolmuş kural** — $80/$160/$200 sabit posta ücreti hâlâ geçerli anlatılıyordu (28 Şubat 2026'da bitti). 24 Temmuz 2026 posta informal entry süreci ve 22 Eylül Entry Type 13 testi eklendi; Federal Register IFR, 19 CFR 143 kaynak; BorderBuddy atfı silindi.
- `hts-classification-basics`: **Yanlış ceza oranı** — ihmal (negligence) cezası "4× vergi" yazılmıştı; 19 U.S.C. §1592(c) ihmal için 2×, ağır ihmal için 4×, sahtecilik için tam iç değer. Düzeltildi; PSC (300 gün) ve protesto (§1514, 180 gün) pencereleri netleştirildi; kanun maddeleri kaynağa eklendi.
- `customs-bonds`: continuous bond formülü CBP kuralına bağlandı (max($50.000, önceki 12 ay vergi+harç %10'u)); posta informal entry'de bond zorunluluğu IFR'ye bağlandı; 10 hedge temizlendi.
- `customs-holds-and-exams`: 19 U.S.C. §1467 ve 19 CFR 151.7 kaynağa eklendi; muayene maliyetleri ikincil (etiketli).
- `incoterms-who-is-importer`: ICC Incoterms 2020 birincil; DDP/IOR ilişkisi "CBP yalnızca girişte beyan edileni tanır" notuyla hassaslaştırıldı.
- Kapı: ilk çalıştırma 1 hata (Figure kaynak ifadesi) → 0. 47/47 temiz. Build 158, 0 kırık link. Hafızadan yazılan iddia: 0 (§1592 oranları kanun metnine atıfla; kanun maddesi sayfası konuşmada olmadığı için URL'siz).

## 2026-09-05 — Paket 11 (geri ödeme ve nakit silosu) — protokolle
İddia listesi: 24 iddia. Birincil (Amazon duyuruları/sayfaları): 12 · İkincil ×2+: 9 · Silinen/düzeltilen: 3.
- `shipment-discrepancy-claims`: **"60 gün mü 9 ay mı, kaynaklar çelişiyor"** — çelişki yok: Amazon 5 Eylül 2024'te sevkiyat taleplerini teslimden 15–60 güne çekti; 9 ay eski kural. Amazon'un talep pencereleri tablosu (sevkiyat 15–60, depo 60, removal 15–75, iade 60–120 gün) Amazon forum duyurusuna bağlandı. "%20 sevkiyat eksik" vendor tahmini olarak etiketlendi. Nova ve Refunzo atıfları silindi.
- `amazon-stopped-prepping`: **Doğrulanamayan "$0.32–$5.72 inbound defect" aralığı** Amazon'un 2026 özetindeki "konsolide ~$0.60/birim" ile değiştirildi; kaynak silindi, Amazon özeti eklendi.
- `fba-reimbursement-sourcing-cost`: tarihler (10 Mart → 31 Mart 2025) Amazon duyurusuna bağlandı; Figure kaynağı güncellendi.
- `dd7-payout-reserve`: 12 Mart 2026 tarihi ikincil kaynakla (eFulfillment) ve Amazon yardım sayfasıyla; "AB Eylül 2025" [Olası] ikincil.
- `currency-conversion-payouts`: Amazon sayfası zaten birincil; stil geçişi.
- Kapı: ilk çalıştırma 2 hata → 0. 52/52 temiz. Build 158, 0 kırık link. Hafızadan yazılan iddia: 0.

## 2026-09-05 — Paket 12 (diğer pazar yerleri) — protokolle
İddia listesi: 29 iddia. Birincil (platform ücret sayfaları/AB mevzuatı): 10 · İkincil ×2+: 15 · Silinen/düzeltilen: 4.
- `walmart-wfs`: **Amazon depolama "$0.87"** (Nova kaynaklı hata) → $0.78; "Walmart'ta yaşlı envanter ücreti yok" → "4 bantlı merdiven yok; tek peak oranı + 365 gün üstü tek uzun vadeli ücret" (WFS ücret çizelgesi); 14 hedge temizlendi.
- `tiktok-shop-fee-increase-2026`: 4 Ağustos 2026 %6→%8 iki ticari yayınla (Delzonic, Moras/Ecommerce Times) teyitli; TikTok basın bülteni yok — metinde açıkça belirtildi; Seller Center Fees sayfası kaynak.
- `ebay-etsy-for-amazon-sellers`: eBay ücreti tek rakama indirildi: %13.6 + $0.30/$0.40 (2026, 6 kaynak); Etsy Offsite Ads %15/%12 + $10K + $100 tavan Etsy politikasına bağlandı; ledger düzeltildi.
- `amazon-business-b2b`: 3×/74%/42% rakamları "vendor, yöntem belirtilmemiş" olarak Figure kaynağında etiketlendi; Amazon sayfası kaynağa eklendi.
- `expanding-eu-uk-compliance`: PPWR (Reg. 2025/40, 12 Ağustos 2026) ve HMRC £90K birincil; Pan-EU "5 ülke" [Olası] ikincil (Amazon program sayfası URL'siz).
- Kapı: ilk çalıştırma 3 dosyada 4 hata → 0. Build: bir kaynak başlığında kesme işareti yine build'i kırdı → düzeltildi → 158 sayfa, 0 kırık link. 57/57 temiz.

## 2026-09-05 — Paket 13 (veri ve kurumsal dosyalar, Faz 2) — protokolle
İddia listesi: 41 iddia (policy.ts 19 giriş, marketplaces.ts Amazon/Walmart/TikTok/Etsy satırları). Birincil: 24 · İkincil ×2+: 13 · Silinen/düzeltilen: 4.
- `src/data/policy.ts` (ana sayfa ticker + politika günlüğü): **9 doğrulanmış 2026 olayı eksikti** — eklendi: 17 Nis %3.5 sürşarj, 12 Mar DD+7, 31 Mar commingling sonu, 28 Şub posta sabit ücret bitişi, 6 Tem SFP eşikleri, 24 Tem posta informal entry, 27 Tem 75 karakter başlık, 30 Tem New Selection, 15 Eki peak ücreti. 1 Ocak girişine prep hizmetinin bitişi eklendi. Doğrulanamayan SCOTUS günü (20 Şubat) ay hassasiyetine çekildi. Girişler tarihe göre sıralandı; `NEXT_UPCOMING` en yakın tarihi seçecek şekilde düzeltildi. Ticker artık en güncel yürürlükteki değişikliği (4 Ağustos TikTok) gösteriyor.
- `src/data/marketplaces.ts` (6 pazar yeri sayfası): Amazon depolama "$0.78–$0.87 çelişkili" → $0.78; LILF "$0.89–$1.10" → $0.32–$1.11 (standart) + 28 gün kuralı; sürşarj "doğrulayın" → Amazon duyurusuna bağlı; "çelişkili rakamlar" bloğu Nova kaynaklı iki kalemden (0.87 ve 35 gün) arındırıldı; TikTok ödeme işlemi ve Etsy $100 tavanı netleştirildi; kontrol tarihi 2026-09-05. Build kırılması: veri anahtarı `fulfilment` yanlışlıkla çevrilmişti → geri alındı.
- `src/pages/corrections.astro`: **boş düzeltme günlüğü doldu** — bu denetimde bulunan 8 doğrulanmış hata, eski/yeni/neden formatında, tarihli.
- `src/pages/editorial-standards.astro`: "çelişkiler kaydedilir, çözülmez" ilkesi değiştirildi ("birincil kaynakta çözülür; yayımlanmayan rakamlar tahmin olarak etiketlenir"); Eylül 2026 denetimi paragrafı eklendi.
- `src/pages/about.astro`: Amerikan yazımı.
- Kapı (rehberler): 57/57. Build 158, 0 kırık link. Hafızadan yazılan iddia: 0.

## 2026-09-05 — Paket 14 (Faz 2 sonu) — protokolle
İddia listesi: 26 iddia (timeline girişleri). Birincil: 14 · İkincil ×2+: 9 · Silinen/etiketlenen: 3.
- `changes-timeline-2026`: **uydurma "1 Temmuz depolama $0.87 / 180 gün" girişi silindi**; 8 doğrulanmış olay eklendi (28 Şub posta, 6 Tem SFP, 24 Tem posta entry, 27 Tem başlık, 30 Tem New Selection, 4 Ağu TikTok, 15 Eki peak, MCF 2 May); doğrulanamayan iki giriş (12 Şub review pooling, 30 Nis hazmat PCP) "ajans kaynaklı, Amazon duyurusuyla doğrulanmadı" etiketiyle bırakıldı; 5 birincil kaynak eklendi; ledger 11→20.
- `annual-operating-calendar`: "180 gün eşiği" → 181; 21 Ekim minimal-split deadline eklendi; Nova atfı silindi; Amazon tatil duyurusu ve 2026 ücret özeti kaynağa eklendi.
- `src/pages/how-we-test.astro`: 4. ilke ("çelişki yayımlanır, çözülmez") editorial-standards ile hizalandı; Amerikan yazımı.
- `src/pages/tools/margin-calculator.astro`: sınırlamalar listesine %3.5 sürşarj notu (Fee Preview zaten içeriyor; rate card rakamı ×1.035).
- Kapı: 59/59. Build 158, 0 kırık link. Hafızadan yazılan iddia: 0.

## 2026-09-05 — Paket 15 (global Amerikan İngilizcesi geçişi + doğrulanmış düzeltmelerin yayılması)
- 53 denetlenmemiş rehber + 24 site geneli dosya (sayfalar, bileşenler, glossary, veri) Amerikan İngilizcesine çevrildi; tarih formatı Amerikan. Kod tanımlayıcıları, slug'lar ve href'ler korundu (glossary'de 4 link yanlışlıkla çevrildi → geri alındı, verify 0 kırık).
- Paket 1–14'te ÇÜRÜTÜLMÜŞ rakamlar denetlenmemiş dosyalarda da düzeltildi (yeni doğrulama değil, bilinen düzeltmenin uygulanması): "$0.87 depolama" (peak-season-cost-stack, cross-channel-price-parity, second-marketplace-decision, removal tablosu), "180 gün eşiği" (launch-sequence, peak-season-cost-stack, seller-central-reports). Removal rehberindeki oran tablosu yeniden hesaplandı (2.9 → 3.2 ay).
- Nova Analytics'in çürütülmüş "1 Temmuz depolama değişikliği" kaynak satırı tüm dosyalardan silindi; Nova'ya dayanan iki Figure "vendor, doğrulanmadı" olarak etiketlendi. Diğer Nova atıfları Kademe B denetiminde tek tek ele alınacak.
- Denetlenmemiş dosyaların "accessed August" tarihleri bilerek KORUNDU: o kaynaklar Eylül'de kontrol edilmedi, tarih dürüst kalmalı.
- Kapı: 59/59 DONE rehber temiz. Build 158, 0 kırık link.

## 2026-09-05 — Paket 16 (Kademe C haberler, ilk 5) — protokolle
İddia listesi: 21 iddia. Birincil (SEC/IR/Amazon): 11 · İkincil ×2+: 8 · Etiketlenen: 2.
- `amazon-200-billion-quarter`: $200.6B / +%20 / reklam $19.8B +%26 SEC 8-K Exhibit 99.1 ile doğrulandı; online store +%15 ve 3P hizmetleri +%16 eklendi; SEC + EcomCrew kaynak.
- `ebay-depop-etsy-layoffs`: Depop kapanışı 30 Temmuz 2026, ~$1.4B ($1.2B + $200M düzeltme) Etsy 8-K ile; 200 işten çıkarma (~%12) 5 Ağustos CNBC + EcommerceBytes; Q2 zararı ve 87M aktif alıcı eklendi.
- `title-limit-984-million`: 984M Amazon'un 13 Ağustos SSS'sine bağlandı (Amazon duyurusu URL'siz + ClearAds); hedge temizlendi.
- `walmart-new-seller-savings-2026`: Walmart program sayfası zaten kaynaktı; yazım hatası (realiztic) düzeltildi; opt-in tuzağı öne çekildi.
- `tiktok-shop-plus-membership`: **Tek kaynaklı, TikTok tarafından doğrulanmamış söylenti** — metinde açıkça "unconfirmed, single trade-press report" olarak etiketlendi; TikTok Seller Center ücret sayfası (mevcut %8 tabanı için) kaynağa eklendi. [Olası] Bu parçanın gerçekleşmezse güncellenmesi gerekir.
- Kapı: `audit-guide.mjs` birincil alan adı listesine sec.gov ve yatırımcı ilişkileri siteleri eklendi. 64/64 temiz.

## 2026-09-05 — Paket 17 (Kademe C kalanı + Kademe B ilk 8) — protokolle
İddia listesi: 44 iddia. Birincil: 19 · İkincil ×2+: 20 · Etiketlenen/düzeltilen: 5.
- `variations-review-pooling`: 12 Şubat 2026 DOĞRULANDI — Amazon forum duyurusu (7 Ocak 2026), kategori bazlı 31 Mayıs'a kadar; kaynak eklendi. `changes-timeline-2026`'daki "doğrulanmadı" etiketi kaldırılmalı → bir sonraki pakette.
- `hazmat-dangerous-goods`: "30 Nisan 2026 tüm tehlikeli mallar PCP'ye uygun" TEK KAYNAK (SellerEssentials), Amazon duyurusu bulunamadı → metinde açıkça etiketlendi; Amazon Dangerous Goods yardım sayfası kaynağa eklendi.
- `landed-cost-fee-stack`: MPF/HMF rakamları CBP kullanıcı ücreti bildirimine bağlandı (FY2026 min $33.58 / max $651.50).
- `price-tier-repricing-trap`: "reported" dili (16) Amazon'un yayımladığı (bantlar, $0.86 Low-Price, %3.5) ile üçüncü taraf okuması ($0.31, $0.51) arasında ayrıştırıldı; Amazon 2026 fulfillment fee sayfası + sürşarj duyurusu kaynak.
- `second-marketplace-decision`, `cross-channel-price-parity`, `peak-season-cost-stack`, `launch-sequence`, `seller-central-reports`, `product-research-cost-errors`: hedge temizliği; Walmart/Amazon politika sayfaları ve Amazon duyuruları kaynağa eklendi; CPC %60–80 "ajans verisi" etiketli; kapanış adımları.
- Kapı: 74/74 temiz. Build 158, 0 kırık link (release.sh). Hafızadan iddia: 0.

## 2026-09-05 — Paket 18 (Kademe B, 10 dosya: marka ve uyumluluk) — protokolle
İddia listesi: 38 iddia. Birincil: 16 · İkincil ×2+: 18 · Düzeltilen/etiketlenen: 4.
- `brand-registry-trademark`: **Eski USPTO ücreti yayındaydı** — "$250–$350/sınıf" TEAS Plus/Standard dönemine ait; 18 Ocak 2025'ten beri tek $350 taban + $100/$200 ek ücretler (USPTO sayfası, 7 kaynak). Ledger, tablo, SSS düzeltildi; "%68 ret" vendor tahmini olarak etiketlendi (yöntem yok).
- `us-product-compliance`: 8 Temmuz 2026 CPSC eFiling tarihi [Olası] — CPSC final rule metni aramada çıkmadı, ikincil kaynaklar tutarlı; CPSC kaynağa URL'siz eklendi.
- `ungating-restricted-categories`: "90/180 gün, kaynaklar karışık" → Amazon yardım sayfası 180 gün; ajanslar 90 tavsiye eder — ayrıştırıldı.
- `aplus-content-brand-tools` (%3–10 lift vendor verisi etiketli), `authorised-reseller`, `the-supplier-invoice`, `bundles-and-multipacks`, `vendor-central-vs-seller-central` (%18/35 marj oranları vendor, doğrulanmadı etiketi korundu), `narf-canada-mexico`, `duty-drawback` (19 CFR 190 birincil): hedge temizliği, birincil kaynak, kapanış adımları.
- Kapı: ilk çalıştırma 2 dosyada yazım kalıntısı (kaynak başlıklarında) → 0. 84/84 temiz.

## 2026-09-05 — Paket 19 (Kademe B, 10 dosya: finans, gümrük, navlun) — protokolle
İddia listesi: 36 iddia. Birincil: 14 · İkincil ×2+: 19 · Etiketlenen/düzeltilen: 3.
- `bsa-collateral-change-2026`: 29 Mayıs duyuru / 24 Ağustos 2026 yürürlük DOĞRULANDI (Velocity Sellers, Mr. Jeff, AMZScout; Amazon BSA metni URL'siz). Rehin yasağının kapsamı ("Amazon receivables" teminatı) eklendi.
- `ai-image-tagging-rule`: 27 Temmuz 2026 Seller News duyurusu, `contains-synthetic-performer` dc:subject etiketi DOĞRULANDI (Goat, Ecomclips, Mr. Jeff, isjdesigns). **Dönüşüm artefaktı düzeltildi:** "realistic" → "realiztic" hatası 7 dosyada oluşmuştu (İngiliz→Amerikan 'realis' kuralı); ayrıca çoğul "analyses" 6 dosyada "analyzes"e dönüşmüştü — geri alındı.
- `first-sale-valuation`: Last Sale Valuation Act (11 Şubat 2026) "ticari basın; congress.gov'da durumunu kontrol edin" etiketiyle; 19 U.S.C. §1401a ve Nissho Iwai kararı kaynağa eklendi.
- `country-of-origin-sourcing`: 17 hedge temizlendi; "$500K eşik" sourcing danışmanlığı tahmini olarak etiketlendi; 19 CFR 134 / EAPA kaynak.
- `antidumping-duties` (ITA/CBP), `foreign-trade-zones` (19 CFR 146), `accrual-accounting-cogs` (IRS Pub 538), `choosing-a-freight-forwarder` (ICC), `freight-modes` (Freightos FBX), `labor-day-inbound-week` (Amazon tatil duyurusu): birincil kaynak, hedge temizliği, kapanış adımları.
- Kapı: birincil yayıncı tanıma listesi genişletildi (IRS, ITA, ICC, USPTO, CPSC, Freightos, HMRC, Official Journal). 94/94 temiz.

## 2026-09-05 — Paket 20 (Kademe B, 10 dosya) — protokolle
İddia listesi: 33 iddia. Birincil: 13 · İkincil ×2+: 17 · Düzeltilen: 3.
- `q4-deal-deadlines-2026`: BF/CM 20 Ekim ve $50 erken-teslim pencereleri (5 Ağustos PBDD, 5 Eylül BF/CM) Amazon'un 7 Temmuz duyurusuna bağlandı; "erken pencere 5 Eylül'e kadar açık" → "kapandı" (bugün 5 Eylül). PBDD 8 Eylül kapanışı ticari basın etiketli (Amazon duyurusunda açık tarih yok).
- `origin-marking-requirements`: %10 ceza 19 U.S.C. §1304(i) kaynağına bağlandı.
- `prior-disclosure-protests`: §1592(c)(4) / 19 CFR 162.74 / §1514 kaynak.
- `sales-tax-nexus`: "reportedly" tablo hücresi netleştirildi; Streamlined Sales Tax + eyalet DOR kaynağı.
- `off-amazon-diversification`, `packaging-design-fba`, `product-inserts`, `q4-freight-booking-window`, `qc-inspections` (ISO 2859-1), `review-manipulation-risk`: kaynak, hedge temizliği, kapanış adımları.
- Kapı: 104/104 temiz.

## 2026-09-05 — Paket 21 (son 8 dosya) + site geneli sözlük taraması — protokolle
İddia listesi: 31 iddia. Birincil: 12 · İkincil ×2+: 15 · Düzeltilen/etiketlenen: 4.
- `tiktok-shop-fees`: **Başlıktaki "kaynaklar hâlâ anlaşamıyor" çözüldü** — TikTok Seller Shipping'i bitirme planını 17 Şubat 2026'da geri çekti (sözcü teyidi; CedCommerce, Easyship, ClearAds, 7 kaynak). "31 Mart'ta bitti" diyen makaleler geri çekilmeden önce yazılmış. Referral %6 → %8 (4 Ağustos) güncellendi; "%7.02 birleşik" yapısının ABD dışı pazarlara ait olduğu netleştirildi; 20 hedge temizlendi; başlık, açıklama, ledger yeniden yazıldı. [Olası] 9 Şubat sonrası kayıt olan yeni satıcılar için TikTok lojistiği zorunluluğu — tek kaynak, metinde etiketli.
- `seller-insurance-coi` (BSA §9), `seller-financing` (Reg Z APR; BSA 24 Ağustos rehin yasağı), `selling-your-fba-business` (çarpanlar "broker verisi" etiketli; BSA devir kuralı), `sipp-packaging-program`, `sourcing-agents`, `supplier-verification` (Alibaba Verified Supplier kapsamı), `tariff-engineering-design` (Merritt v. Welsh, Heartland, §1592): kaynak, hedge temizliği, kapanış.
- **Site geneli sözlük taraması** (pyspellchecker): Paket 15 dönüşümünün üçüncü artefaktı bulundu — "specialist" → "specializt" (10 dosya), "specialism" → "specializm"; ayrıca kalan "authorise/authorised/authorisation" (slug hariç) ve "normalise" düzeltildi. 15 dosya.
- Kapı: **112/112 rehber temiz.** Faz 4 (Kademe B/C) tamam.
