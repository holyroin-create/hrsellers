# DENETİM RAPORU V5 — fbatactics.com (dist/ derlemesi, 2026-11-09 zenginleştirme sonrası)

Denetçi: audit-AS3. Siteyi kuran ekipte yer almadım. Tarih: 2026-11-09. Kontrol listesi: `docs/POLITIKA_KONTROL_LISTESI.md` (P-xx / S-xx kimlikleri). Web'e çıkılmadı; olguların doğruluğu kaynaklarına karşı yeniden doğrulanmadı. Dosyalarda değişiklik yapılmadı, yalnızca bu rapor yazıldı.

**Yöntem.** `http://localhost:8790` üzerinden dist/ incelendi: 170 HTML dosyası, bunların 19'u yönlendirme stub'ı. Yapılan taramalar şunlar:
- Bağlantı ve çapa kontrolü; yönlendirme köküne giden iç bağlantılar
- Yinelenen id, title ve description
- JSON-LD ayrıştırma (tür ve zorunlu alanlar)
- robots meta etiketi ve site haritası (lastmod ile noindex/draft dışlaması)
- 117 içerik sayfasında: kelime sayısı, kahraman fotoğrafı ve altyazı tekrarı, H2 iskeleti, şablon bileşen sayımı, sayfalar arası TF-IDF benzerliği, siteler arası yinelenen cümle, tırnak içi alıntı oranı, tarihe bağlı ifadeler, "Selling Partner API" yoğunluğu
- `data/claims/*.json` (4.023 iddia), `data/images.json` (123 görsel), `data/editor-reviews.json`

**Tam metin okunan sayfalar.**
- Ana sayfa, `/guides/`, `/reviews/`, `/marketplaces/`, `/faq/`
- Rehberler: order-defect-rate, seller-central-reports, dd7-payout-reserve, amazon-business-b2b, section-301-china-tariffs, title-limit-984-million (bu altısı zenginleştirilmiş), q4-deal-deadlines-2026, amazon-200-billion-quarter
- Pazaryeri: aliexpress, tiktok-shop
- Yazılım: zonguru, a2x, keepa
- About, author, contact, privacy, cookie-policy, terms, disclaimer, affiliate-disclosure, editorial-standards, corrections

**Başlık, keyFacts ve otomatik metrik düzeyinde incelenenler.** 117 sayfanın tamamı. Rastgele örneklem: 12 zenginleştirilmiş rehber (packaging-design-fba, aged-inventory-15-month-tier, subscribe-and-save-economics, narf-canada-mexico, seller-financing, returns-cost-and-badge, variations-review-pooling, buy-box-featured-offer, ip-complaints-retractions vb.) ve 9 zenginleştirilmemiş rehber (sourcing-agents, form-1099-k, product-research-cost-errors, buyer-seller-messaging, hts-classification-basics, cross-channel-price-parity, accrual-accounting-cogs, ppc-campaign-structure-launch, tariff-stack-2026). 7 pazaryeri sayfasının hepsi H2 iskeleti ve metrik düzeyinde incelendi.

**Diğer kontroller.**
- Ekran görüntüleri: 1440 px'te `/`; 390 px'te `/guides/order-defect-rate/`, `/marketplaces/tiktok-shop/`, `/reviews/a2x/`
- Yönlendirme stub'ları: `/news/`, `/how-we-test/`, `/guides/peak-season-cost-stack/`, `/guides/tiktok-shop-fee-increase-2026/`
- `/404.html`, `robots.txt`, `ads.txt`, `sitemap-index.xml`, `sitemap-0.xml`
- JSON-LD: ana sayfa, order-defect-rate, a2x, author, margin-calculator, tiktok-shop

**Güven etiketleri.** [Kesin]: dosyada veya çıktıda doğrudan görüldü. [Olası]: politika yorumu ya da dolaylı kanıt. [Varsayım]: doğrulanamayan çıkarım.

---

## 1. Karar

**Bugün başvurulursa onay olasılığı düşük. [Olası]**

### Ne düzeldi

Teknik ve şablon tarafı V4'e göre belirgin biçimde düzeldi [Kesin]:
- Kırık iç bağlantı veya çapa 0, yönlendirmeye giden iç bağlantı 0, JSON-LD hatası 0.
- Yinelenen title/description 0.
- Site haritasında 148 URL var; taslak ve yönlendirme adresleri dışlanmış; 117 içerik URL'sinde `lastmod` bulunuyor.
- 117 sayfada 113 farklı kahraman fotoğrafı kullanılıyor (V4'te 45'ti). Konu dışı altyazı taşınması kalmadı.
- Peak kümesi birleştirildi. Sayfalar arası en yüksek benzerlik 0,60 (V4'te 0,76).
- Politika metinleri (vendor kaynağı, otomatik doğrulama) gerçeğe uyduruldu.

### Başvuruyu engelleyen sorunlar

1. **İnsan incelemesi hâlâ sıfır (K-1, Kritik).** `data/editor-reviews.json` boş. 117 sayfanın 117'si kendi alt kutusunda şunu söylüyor: "drafted with AI writing tools… checked… in a separate, automated verification pass… this page has not yet had a logged human review".
   - Dürüst bir beyan, ama AdSense'in "manuel incelenmemiş otomatik üretilmiş içerik" (P-16, PP-NOCONT) ve Search'ün ölçekli içerik (S-01, GS-GENAI) ölçütlerine karşı sitenin kendi ağzından bir kabul.
   - Bu beyanın yanında şu veriler duruyor: 117 sayfanın hepsinde `published: 2026-11-08`, 38'inde ertesi gün `modified`. 4.023 iddianın hepsi `writer-*` / `enricher-*` ajanları tarafından yazılmış, `verifier-*` ajanları tarafından doğrulanmış.
   - Bir inceleyici için en güçlü olumsuz sinyal bu.
2. **Yazılım sayfaları (Y-6, yeni).** 9 `/reviews/*` sayfası, satıcının kendi fiyat ve SSS sayfalarının yeniden düzenlenmiş hali. Metnin %17–27'si tırnak içi satıcı alıntısı. Birinci elden değer yok ve sayfalar eski affiliate yolunda (`/reviews/`) duruyor.
3. **Zenginleştirmenin biçimi (Y-7, yeni).** 35 sayfanın "zenginleştirmesi" ağırlıkla SP-API şema ve rapor kodu tablolarından oluşuyor (`GET_V2_SELLER_PERFORMANCE_REPORT`, `targetCondition`…). 45 sayfada SP-API atfı var.
   - Sayfaların çoğu bu kodların yalnızca API erişimiyle kullanılabildiğini söylemiyor. Seller Central kullanıcısına "request the report" gibi uygulanamayan adımlar veriyor.
   - Okuyucu yerine "kaynağı bol görünen" sayfa izlenimi doğuruyor.
4. **Bugün eskiyen tarihli içerik (Y-8 / eski O-3).** Section 301 sayfasının keyFact'i "Exclusion extension runs through 11:59 p.m. EDT, Nov 9, 2026" bu gece geçersiz kalıyor. A2X fiyat değişikliği 14 Kasım'da. Başvurunun inceleme süresi içinde ikisi de bayatlıyor.

### Öneri

Başvuruyu şu dört adım tamamlanınca yapın:
- (a) Editör en az 30–40 sayfayı fiilen inceleyip `log-review.mjs` ile kaydetsin. İncelenmeyen sayfalar ya `noindex` yapılsın ya da taslağa alınsın (Bölüm 4'teki listeyle birlikte).
- (b) 9 yazılım sayfası ve 3 düşük değerli sayfa `noindex` yapılsın.
- (c) Section 301 ve A2X sayfaları güncellensin.
- (d) SP-API tablolarına "bu adlar API/geliştirici içindir; Seller Central'daki karşılığı…" açıklaması eklensin.

---

## 2. V4 bulgularının durumu

| V4 ID | Önem (V4) | Durum (V5) | Kanıt |
|---|---|---|---|
| K-1 | Kritik | ❌ **Açık** (beyan düzeltildi, inceleme yok) | [Kesin] `data/editor-reviews.json` = `[]`. 117/117 sayfada "this page has not yet had a logged human review". Byline "Editor: Muhammet Ali TÜRK" (eylem iddiası kaldırılmış). İnceleme sistemi kuruldu (`Article.astro` log'u okuyor, `docs/EDITOR_INCELEME_SISTEMI.md`). `published` 117/117 = 2026-11-08. İddialar: 4.023, hepsi ajan kimlikli (`verifier-V4-*` 2.272, `verifier-V5-*` 565 …). Release kapısında `reviewedBy` zorunluluğu yok. |
| Y-1 | Yüksek | ✅ Kapandı | [Kesin] Editorial md. 1 ve About artık şunu söylüyor: "software vendors are cited only … in the seller software section". Sources bloğu metni vendor durumunu içeriyor. |
| Y-2 | Yüksek | ✅ Kapandı | [Kesin] Corrections metni "separate, automated verification pass" diyor. Md. 3: "It is an automated check, not a human fact-checker." |
| Y-3 | Yüksek | ✅ Kapandı (D-6 kalıntısı var) | [Kesin] 113 farklı kahraman görseli. 4 görsel 2'şer sayfada, ikinci sayfada nötr altyazıyla ("Illustrative photo: <alt>"). Gövdede ek görsel yok. |
| Y-4 | Yüksek | ✅ Kapandı | [Kesin] 2 peak sayfası `holiday-peak-fulfilment-fee`'ye yönleniyor. Benzerlik > 0,45 olan çiftler yalnızca etsy-offsite-ads ↔ /marketplaces/etsy/ (0,60), amazon-referral-fees ↔ /marketplaces/amazon/ (0,51) ve amazon ↔ walmart pazaryeri (0,48). Yinelenen cümle neredeyse yok. |
| Y-5 | Yüksek | ⚠ **Kısmen** (Orta'ya indi) | [Kesin] **SSS:** ham sorgu biçimi büyük ölçüde düzeltilmiş; 385 sorudan yalnızca "IP complaint Amazon meaning?" kalmış. **Başlıklar:** H2'ler konuya özgü hale gelmiş ("How to confirm" yalnızca 13 sayfada). **İskelet:** şablon büyük ölçüde duruyor. "Decision table: FBA Tactics, built from the cited sources…" 112/117, "Worked example (hypothetical)" 110/117, yazdırılabilir checklist ("Ticks stay in this page only") 85/117, Key points + "Questions sellers ask" 117/117. `/faq/` hâlâ 386 sorguyu listeleyen bir dizin. |
| O-1 | Orta | ✅ Kapandı | Genel not: "Check the linked source for your own situation." |
| O-2 | Orta | ⚠ Kısmen | [Kesin] Menü ve footer güncellenmiş. Kalanlar: (1) About "fee tables for Amazon, Walmart, eBay, Etsy and Shopify" diyor. (2) AliExpress, "Marketplace fee references" hub'ında ücret içermeden listeleniyor (komisyon "As announced by AliExpress"). (3) TikTok ve AliExpress breadcrumb'ı "Fee reference", pillar çipi "Selling operations". |
| O-3 | Orta | ❌ **Açık → Yüksek'e yükseltildi** (Y-8) | Aşağıya bakın. |
| O-4 | Orta | ❌ Açık | [Kesin] Slug hâlâ `/guides/title-limit-984-million/`. Başlıkta "984" yok. |
| O-5 | Orta | ❌ Açık (Y-6 ile birleşti) | `/reviews/` yolu korunuyor. |
| O-6 | Orta | ✅ Kapandı | [Kesin] Yönlendirme köküne iç bağlantı 0. |
| D-1 | Düşük | ❌ Açık | [Kesin] Reklam kapalıyken (`data-ads="0"`) bant herkese çıkıyor ve "Accept all" seçeneği sunuyor. 390 px'te ekranın ~%20'sini kaplıyor. Odak yönetimi yok. |
| D-2 | Düşük | ✅ Kapandı | `<title>Page moved \| FBA Tactics</title>` |
| D-3 | Düşük | ✅ Kapandı (kısmen) | 117 içerik URL'sinde `lastmod` var; 31 statik sayfada yok (kabul edilebilir). |
| D-4 | Düşük | ✅ Kapandı | Ana sayfada FAQPage yok. `reviewedBy` şeması inceleme yapılınca eklenmeli. |
| D-5 | Düşük | ❌ Açık | [Kesin] Footer sütun başlıkları 151 sayfada `h2`. `/reviews/` ve `/marketplaces/` hub'larında h1→h3 atlaması var. |
| D-6 | Düşük | ❌ Açık | [Kesin] `images.json` `pages` alanı yeniden kullanılan 4 görselde yalnızca ilk sayfayı gösteriyor (ör. `accrual-accounting-cogs` → `/guides/amazon-business-b2b/` eksik). |
| D-7 | Düşük | ⚠ Kısmen | `PROJE_DURUMU.md` sayıları güncellenmiş, ama satır 17'de hâlâ "45 farklı fotoğraf" yazıyor. |
| D-8 | Düşük | ❌ Açık | [Kesin] 203 bağlantı `developer-docs.amazon/…`, 99 bağlantı `developer-docs.amazon.com/…` hostuna gidiyor. Çevrimdışı doğrulanamadı. |
| (S-07 kontrol listesi) | — | ✅ Kapandı | `robots.txt` artık `/search/`'ü engellemiyor; sayfa `noindex` taşıyor. |

---

## 3. Yeni ve süren bulgular

| ID | Önem | URL / dosya | Bulgu | Somut düzeltme | Kod mu / sahip mi |
|---|---|---|---|---|---|
| K-1 | **Kritik** | 117 makale; `data/editor-reviews.json`; `src/layouts/Article.astro` (byline-box); `tools/gate-policy.mjs` | [Kesin] **Durum:** hiçbir sayfa insan tarafından incelenmemiş ve 117 sayfa bunu kendisi beyan ediyor. **Üretim izi:** tüm sayfaların yayın tarihi aynı gün; 38 sayfa ertesi gün toplu güncellenmiş; 4.023 iddianın tamamı ajan kimlikli. **Politika:** AdSense, manuel incelenmemiş otomatik içeriği reklam için uygun saymıyor (P-16/PP-NOCONT, P-18/PP-REPL). Search, AI içeriğinde yayından önce manuel doğrulamayı "critical" sayıyor (S-01/GS-GENAI). [Olası] | 1) Editör, `EDITOR_INCELEME_SISTEMI.md`'deki 35 sayfalık çekirdek listeyi gerçekten okusun ve `node tools/log-review.mjs` ile kaydetsin. 2) Kaydı olmayan sayfalar başvuru süresince `noindex: true` olsun (mekanizma hazır) ya da `draft`a alınsın. 3) RELEASE kapısına kural eklensin: "indekslenebilir sayfa sayısı ≤ incelenmiş sayfa sayısı" veya "log kaydı yoksa noindex zorunlu". 4) Kalan sayfalar haftalık 5–10'luk partilerle, inceleme kaydıyla açılsın. | **Sahip** (inceleme) + kod (kapı kuralı) |
| Y-6 | **Yüksek** | `/reviews/` + 9 sayfa (a2x, amzscout, aura, getida, helium-10, jungle-scout, keepa, sellerboard, zonguru) | [Kesin] **İçerik:** sayfalar yalnızca satıcının kendi fiyat, SSS ve şart sayfalarını yeniden düzenliyor. **Alıntı oranı:** tırnak içi satıcı metni zonguru'da %26,9, getida'da %24,5, aura'da %20,5, amzscout'ta %16,9. Örnek: ZonGuru sayfası "AI listing engineering for Amazon. Helix scores, fixes, and future-proofs…" pazarlama cümlesini aynen aktarıyor. **Şablon:** başlıkların hepsi aynı kalıpta ("X: features and pricing from the vendor's own pages"). **Değer:** sayfalar test yapmadıklarını açıkça söylüyor; birinci elden değerlendirme yok. Fiyatlar zaten satıcı sayfasında var. **Yol:** URL `/reviews/` ve eski sitede affiliate inceleme yoluydu. **Etki:** replicated/low-value (PP-REPL), Search'ün inceleme sayfalarından beklediği birinci elden deneyim yok (GS-HELP). Değer katmayan affiliate'e benzer görünüm (S-06; affiliate link olmasa da). [Olası] | Önerilen: 9 sayfanın hepsi ve `/reviews/` hub'ı başvuru süresince `noindex: true` olsun, makale içi reklam kapalı kalsın (mevcut mantık zaten öyle). Orta vade: ya kaldırılıp ilgili rehberlere (ör. reimbursement-recovery-services, repricing) yönlendirilsin, ya da `/software/` altında satıcıdan bağımsız karşılaştırma değeriyle yeniden yazılsın. Bu değer şunlardan oluşabilir: Amazon'un ücretsiz araçlarıyla karşılaştırma, SP-API rol/izin gereksinimleri, toplam maliyet hesabı. Satıcı alıntısı %5'in altına insin. | Kod (frontmatter) + sahip kararı |
| Y-7 | **Yüksek** | 35 zenginleştirilmiş sayfa, özellikle `/guides/order-defect-rate/`, `/guides/seller-central-reports/`, `/guides/dd7-payout-reserve/`, `/guides/vendor-central-vs-seller-central/`, `/guides/amazon-business-b2b/`, `/guides/listing-optimisation-a10/`, `/guides/returns-cost-and-badge/`. Toplam 45 sayfada SP-API atfı var. | [Kesin] **Ne eklendi:** zenginleştirme ağırlıkla SP-API model dosyalarından alan adları ve rapor kodları (`GET_V2_SELLER_PERFORMANCE_REPORT`, `orderWithDefects`, `targetCondition`, `DEFERRED_RELEASED`…). **Uygulanamayan talimat:** ODR sayfası "Request the Seller Performance Report — GET_V2_… can only be requested, not scheduled" diyor. Bu, SP-API'ye özgü bir kavram ve Seller Central kullanan bir satıcı için uygulanabilir adım değil. **Eksik açıklama:** API erişiminin geliştirici kaydı veya bağlı uygulama gerektirdiğini yalnızca ~3 sayfa (ipi-restock-limits, low-inventory-level-fee, reimbursement-recovery-services) söylüyor. **Eksik çekirdek bilgi:** ODR sayfası metriğin en çok aranan bilgisini (hedef eşik ve pencere) vermiyor, okuru kendi raporuna yönlendiriyor. Buna karşılık keyFacts'e konu dışı bir "90 days — Default report retention" kutusu konmuş. **Etki:** okuyucu yerine "kaynak yoğun" görünmek için yazılmış, API belgesinin özeti izlenimi (GS-HELP "search-engine-first", S-01). Bir satıcının yanlış yerde rapor araması gibi pratik yanıltma riski de var. [Olası] | 1) Her SP-API tablosunun üstüne tek cümle eklensin: "These are the API names your developer or connected software uses; in Seller Central the same data is under <menü adı / 'Account Health'>". Menü adı bilinmiyorsa yalnızca "API names" etiketi yeterli. 2) Rapor kodları ikinci sütuna taşınsın; ilk sütunda insan okunur rapor adı dursun. 3) KeyFacts'ten konu dışı kutular çıkarılsın ("Default report retention" gibi). 4) "request/schedule" talimatları yalnızca API bağlamında kalsın. 5) İnceleme (K-1) sırasında editörün bu sayfaları Seller Central deneyimine göre okuması öncelikli olsun. | Kod/içerik (yazım) + sahip (inceleme) |
| Y-8 | **Yüksek** | `/guides/section-301-china-tariffs/` (keyFact "11:59 p.m. EDT, Nov 9, 2026", metinde 5 yer); `/guides/country-of-origin-sourcing/`; `/reviews/a2x/` ("before/from November 14, 2026" 7 yer); `/guides/q4-deal-deadlines-2026/` (30 Kasım'dan sonra değersiz) | [Kesin] **Section 301:** "Exclusion extension runs through 11:59 p.m. EDT, Nov 9, 2026" bugün (2026-11-09) gece sona eriyor. Yarından itibaren keyFacts'te geçmiş bir tarih "runs through" olarak duracak. **A2X:** 5 gün sonra tablo ters dönüyor. **Etki:** inceleme süresi içinde bayat, YMYL (gümrük vergisi) bilgisi. Bu, güncellik ve güven sinyali bakımından olumsuz. [Olası] | 10 Kasım: Federal Register'da uzatma var mı bakılsın; metin "expired on Nov 9, 2026 unless extended; as of <tarih> no extension was published" diye güncellensin ve corrections/policy-log'a işlensin. 15 Kasım: A2X tablosu tek fiyat sütununa indirilsin. q4-deal-deadlines-2026 için Bölüm 4'e bakın. | Sahip (takvim) + içerik |
| O-7 | Orta | `/corrections/` (`data/corrections.json`, 2026-11-09 satırı) | [Kesin] Kamuya açık sayfada iç dosyaya atıf var: "35 guides … (list in docs/DEGISIKLIK_KAYDI_V5.md)". Dosya repoda yok ve kamuya da açık değil. Okur hangi sayfaların değiştiğini göremiyor. | Satırda değişen 35 URL listelensin veya her sayfa için ayrı satır açılsın; iç dosya adı kaldırılsın. | Kod (veri) |
| O-8 | Orta | Tüm makaleler, mobil 390 px (`/guides/order-defect-rate/`, `/marketplaces/tiktok-shop/`, `/reviews/a2x/`) | [Kesin] Ekran görüntülerinde başlık, meta, fotoğraf, 5 keyFact kartı ve "On this page" listesi alt alta diziliyor. İlk gövde paragrafı ~1.600–1.800 px aşağıda başlıyor. İlk ekranın altında da rıza bandı açılıyor. İçerikten önce gelen bu blok ilk izlenimde "şablon kartları" etkisi yapıyor. | Mobilde keyFacts 2 sütunlu kompakt ızgara veya yatay kaydırma olsun; TOC `<details>` içinde kapalı gelsin; bant D-1'e göre gizlensin. | Kod |
| O-9 | Orta | Y-5 kalıntısı: 112 sayfa "Decision table: FBA Tactics…", 110 sayfa "Worked example (hypothetical)", 85 sayfa yazdırılabilir checklist; `/faq/` | [Kesin] İskelet sayfa başına neredeyse aynı. Örnekler: yazılım sayfalarında "Plan or credits" karar tablosu, ODR sayfasında hem decision table hem checklist. Bir inceleyicinin 3–4 sayfa açınca fark edeceği şablon izi bu. [Olası] | Bileşen yalnızca sayfaya bilgi katıyorsa kalsın. Hedef: decision table ≤ %50, checklist ≤ %40 sayfada. Kalan "IP complaint Amazon meaning?" sorusu dilbilgisel hale getirilsin. | İçerik |
| O-10 | Orta | `/marketplaces/` hub, `/marketplaces/aliexpress/`, `/marketplaces/tiktok-shop/`, `/about/` | [Kesin] Eski O-2 kalıntısı: hub "Marketplace fee references" diyor ama AliExpress'te ücret yok. Pillar çipi "Selling operations", breadcrumb "Fee reference". About hâlâ 5 platform sayıyor. | AliExpress hub'da "contract guide" etiketiyle ayrı listelensin; çip ile breadcrumb tutarlı olsun; About'taki platform listesi güncellensin. | Kod/içerik |
| O-11 | Orta | `/guides/title-limit-984-million/` | [Kesin] Eski O-4: slug kaynaksız bir sorguyu hedefliyor. | `/guides/amazon-title-limits/` + `redirects.json`. | Kod |
| D-9 | Düşük | Sources bloğu (`src/components/Sources.astro`), ör. `/guides/order-defect-rate/` | [Kesin] Aynı yayıncı ayrı satırlarda tekrarlanıyor: "Amazon (sell.amazon.com)" 7 kez, "Selling Partner API documentation" 3 kez. Sayfa başlığı yerine host adı gösteriliyor. Kaynak listesi şişkin ve otomatik görünüyor. | Kaynaklar URL'ye göre gruplansın ve her satırda kaynak sayfanın başlığı gösterilsin. | Kod |
| D-10 | Düşük | Ana sayfa hero ("4023 facts checked against official sources") | [Kesin] Metin, kontrolün otomatik yapıldığını belirtmiyor; editorial md. 3 ise belirtiyor. Küçük bir P-12 tutarlılık sorunu. | "4,023 sourced facts, each machine-checked against its source" veya benzeri bir ifade. Binlik ayırıcı da eklensin. | Kod |
| D-11 | Düşük | 19 yönlendirme stub'ı (`tools/postbuild.mjs`) | [Kesin] Stub'larda `noindex, follow`, `canonical → hedef` ve `refresh 0` birlikte kullanılıyor. Google meta refresh 0'ı yönlendirme sayar; `noindex` karışık sinyal veriyor (zararsız, gereksiz). | `noindex` kaldırılsın; canonical ve refresh kalsın. | Kod |
| D-12 | Düşük | Zenginleştirilmiş 38 sayfa | [Kesin] Hero çipinde "Verified Nov 9, 2026" yazıyor, oysa kaynak satırlarının çoğu "checked November 8". Çip sayfanın tamamı 9 Kasım'da kontrol edilmiş izlenimi veriyor. | Çip "Last checked Nov 8–9, 2026" olsun veya kaynakların en eski tarihini göstersin. | Kod |
| D-13 | Düşük | Rıza bandı (D-1 sürüyor) | [Kesin] Reklam yokken "Accept all" sunmak, olmayan bir izni istemek demek. | `ADS_ON=false` iken bant gösterilmesin; footer'daki "Cookie settings" kalsın. | Kod |

**Olumlu ve temiz bulunanlar [Kesin].**
- **Teknik:** kırık bağlantı ve çapa 0; JSON-LD 400+ blokta hata 0 (Article: tarihler, var olan görsel, editor Person; FAQPage: soru–cevap tam; ProfilePage, WebApplication, Organization geçerli); 404 ve /search/ /sitemap/ sayfaları `noindex`.
- **Tarama ve reklam dosyaları:** robots.txt temiz; ads.txt yayıncı kimliğiyle eşleşiyor.
- **Görseller ve erişilebilirlik:** 123 görselin hepsi Unsplash, lisans alanları dolu, "photo pending" yok. Alt metni olmayan görseller yalnızca dekoratif hub fotoğrafları (`alt=""`). Skip-link 151 sayfada var.
- **Yasal ve kurumsal sayfalar:** tutarlı (yayıncı Muhammet Ali TÜRK, Ankara; Türkiye hukuku; AdSense'in zorunlu üç maddesi; partner-sites bağlantısı).
- **Editör sayfası:** abartısız; "What he does not claim" bölümü var.
- **İçerik:** okunan rehberlerin özü somut ve kaynaklı. DD7, B2B, Section 301 ve TikTok Shop sayfaları gerçekten bilgilendirici. Sayfalar arası yakın kopya kalmamış.

---

## 4. Noindex önerisi (başvuru süresince)

| Sayfa | Gerekçe |
|---|---|
| `/reviews/` hub + `/reviews/a2x/`, `/reviews/amzscout/`, `/reviews/aura/`, `/reviews/getida/`, `/reviews/helium-10/`, `/reviews/jungle-scout/`, `/reviews/keepa/`, `/reviews/sellerboard/`, `/reviews/zonguru/` | Y-6: satıcı sayfalarının yeniden düzenlenmiş hali, yüksek alıntı oranı, eski affiliate yolu. |
| `/guides/amazon-200-billion-quarter/` | Amazon'un çeyrek gelir bülteninin özeti. Niş dışında kalıyor (satıcıya uygulanabilir karar yok), haber gibi eskiyor ve başlık eski URL'nin sorgusunu kovalıyor. |
| `/guides/q4-deal-deadlines-2026/` | Sayfanın asıl vaadi olan deal gönderim son tarihleri kendi ifadesiyle "published inside Seller Central". Kalan içerik (BF 27 Kasım, CM 30 Kasım + genel süreler) ince ve 30 Kasım'dan sonra değersiz. Alternatif: holiday-peak sayfasına yönlendirme. |
| `/faq/` | 386 arama önerisi sorusunu listeleyen bağlantı dizini. Kendi cevabı yok ve "search-engine-first" izlenimini güçlendiriyor. Gezinme için kalabilir, indekse gerekmiyor. |
| K-1 kapsamında: editör kaydı (`editor-reviews.json`) olmayan tüm sayfalar | Başvuruya yalnızca incelenmiş çekirdek setle girilmesi için. İnceleme kaydı eklendikçe `noindex` kaldırılsın. |

Not: `noindex` mekanizması hazır (`noindex: true` frontmatter → robots meta, site haritasından düşme ve makale reklamının kapanması). Şu an 0 içerik sayfasında kullanılıyor.

---

## 5. Başvuru öncesi asgari sıra

1. **Bugün ve yarın:** Y-8 (Section 301) güncellenip corrections'a işlensin. O-7 (corrections'taki iç dosya atfı) düzeltilsin.
2. **Bölüm 4:** `noindex` listesi uygulansın.
3. **K-1:** editör çekirdek 30–40 sayfayı fiilen incelesin ve kaydetsin. Kaydı olmayan sayfalar `noindex` kalsın; kapı kuralı eklensin.
4. **Y-7:** SP-API tablolarına bağlam cümlesi eklensin, konu dışı keyFacts temizlensin.
5. **O-8, O-9, D-1/D-13:** mobil ilk ekran, şablon bileşen oranı ve bant düzeltilsin.
6. **15 Kasım sonrası:** A2X güncellensin (sayfa `noindex` olsa bile). `RELEASE=1 npm run check` temiz geçince yayın yapılsın, birkaç gün sonra başvurulsun.
