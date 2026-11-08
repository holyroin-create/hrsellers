# DENETİM RAPORU — fbatactics.com (dist/ derlemesi)

Denetçi: audit-AS1 (bağımsız; siteyi kuran ekipte değil) · Tarih: 2026-11-08 · Yöntem: `http://localhost:8790` üzerinden dist/ incelemesi, 390 px ve 1440 px ekran görüntüleri, derlenmiş HTML'in metin/bağlantı/JSON-LD taraması, kaynak kod (`src/`, `data/`, `site.config.json`) okuması. Kontrol listesi: `docs/POLITIKA_KONTROL_LISTESI.md` (P-xx / S-xx kimlikleri oradan). Web'e çıkılmadı; olgu doğruluğu (ücret oranları, tarihler) kaynaklarına karşı yeniden doğrulanmadı.

Güven etiketleri: [Kesin] = dosyada/çıktıda doğrudan görüldü · [Olası] = politika yorumu veya dolaylı kanıt · [Varsayım] = doğrulanamayan çıkarım.

İncelenen sayfalar: `/`, `/guides/`, rehberler (sales-tax-nexus, tariff-stack-2026, customs-bonds, antidumping-duties, country-of-origin-sourcing, form-1099-k-marketplace-sellers; ayrıca tüm 30 rehberin başlık/kelime/JSON-LD taraması), `/marketplaces/` + amazon/ebay/etsy (tarama), `/tools/` + duty-estimator, ppc-budget-calculator, dimensional-weight/cash-flow-planner (tarama), `/about/`, `/contact/`, `/privacy/`, `/cookie-policy/`, `/terms/`, `/disclaimer/`, `/editorial-standards/`, `/corrections/`, `/image-credits/`, `/policy-log/`, `/glossary/`, `/quiz/`, `/faq/`, `/start-here/`, `/404.html`; yönlendirme kökleri `/affiliate-disclosure/`, `/news/`, `/tools/tariff-stack-estimator/` (+ 14 kökün tamamı tarandı).

---

## 1. Özet karar

**Şu haliyle başvurulursa onay olasılığı: düşük–orta. [Olası]** İçerik kalitesi (birincil kaynak, tarihli atıflar, hesaplayıcılar, çalışılmış örnekler, "tavsiye değildir" çerçevesi) açık ara önceki sürümün ("Düşük değere sahip içerik" reddi, 1 Ağu 2026) üzerinde. Engel içerik derinliği değil, **güven/şeffaflık tutarsızlıkları**:

1. **Site kendi süreci hakkında doğru olmayan şey söylüyor.** About ve "How we check facts" sayfaları her sayfanın adı başlık altında görünen bir insan inceleyici tarafından okunduğunu ve derlemenin aksi halde yayına izin vermediğini söylüyor; 35/35 sayfada inceleyici yok, imza yalnızca "By HR Express". Ana sayfa ise kontrolü "someone who did not write it" diye bir kişiye atfediyor; claims register'da kontrol eden 13 farklı `verifier-*` ajanı var. (K-1, Y-1)
2. **Yayıncı kimliği belirsiz.** Yayıncı yalnızca "HR Express"; adres/ülke yok, editör adı yok, `ownerConfirmed=false`. (Y-2)
3. **Ölçekli/AI içerik sinyalleri:** 35 sayfanın hepsi aynı gün yayımlanmış ve "Verified Nov 8, 2026" taşıyor; FAQ sayfası rehberlerdeki soruların %93'ünü kelimesi kelimesine tekrarlıyor ve soruların bir kısmı ham arama sorgusu dilinde. (Y-3)
4. **Tüm yasal/güven sayfalarında mobil düzen kırık** (metin ekran kenarına yapışık). (Y-4)

Bu dört madde kapatılmadan başvuru yapılmaması önerilir. Kritik/Yüksek maddelerin ikisi kod (Y-1 metin, Y-4 CSS), geri kalanı sahip aksiyonu.

---

## 2. Bulgular tablosu

| ID | Önem | Sayfa / dosya | Bulgu | Önerilen düzeltme | Tür |
|---|---|---|---|---|---|
| K-1 | **Kritik** | `/about/` ("How pages are produced"), `/editorial-standards/` md. 4, tüm rehber/pazaryeri sayfaları; `src/layouts/Article.astro:49`; `site.config.json` | [Kesin] About: "a named reviewer for the publisher reads it… the reviewer's name appears under the headline". Editorial md. 4: "The reviewer's name and the review date appear under the headline; the build refuses to publish a page without them." Gerçekte 35/35 `.mdx`'te `reviewedBy` yok, `editorName`/`editorBio` boş; imza "By HR Express". Yayımlanmış bir sayfa, kendi taahhüdünü çiğniyor → Misleading representation (P-12), AI içeriğin insan incelemesi kanıtı yok (S-01, S-02, P-16, P-18). Ayrıca editorial'daki "build refuses…" cümlesi bu dist var olduğu için yanlış (dist, `RELEASE=1` olmadan alınmış). | Gerçek bir kişi her sayfayı kaynaklarına karşı okusun → `reviewedBy` + `reviewedDate`; `editorName`/`editorBio` (gerçek geçmiş) doldurulsun; yayın `RELEASE=1 npm run check` ile alınsın. Bu yapılamayacaksa about ve editorial md. 4 metni **bugünkü gerçeğe** göre yeniden yazılsın (adlandırılmış inceleyici vaadi kaldırılsın) — ama o durumda AI içerik + insan yok sinyali kalır, onay şansı düşer. İncelemesi bitmeyen sayfa yayına alınmasın. | Sahip (+ gerekirse kod metni) |
| Y-1 | **Yüksek** | `/` "How we check" bloğu — `src/pages/index.astro:139`; `data/claims/*.json` | [Kesin] Ana sayfa: "Checked by a second reader — Every fact is reopened against its source by someone who did not write it." 1186 iddianın `verified_by` alanı `verifier-VG`, `verifier-VD1` … (13 ajan kimliği); insan kontrolcü kaydı yok. Editorial md. 3 "person or process" derken ana sayfa bunu bir kişiye atfediyor → uydurma otorite / sayfalar arası çelişki (PP-MISREP, GS-GENAI "who/how"). "1186 facts checked against official sources" rozeti de bu süreçle desteklenen bir sayı; tek başına sorun değil ama yanındaki "someone" ifadesiyle birlikte insan kontrolü izlenimi veriyor. | Metni gerçeğe uydur: ör. "Checked in a separate pass — each fact is reopened against its source in a checking step separate from drafting, then a named reviewer reads the page" (ikinci kısım yalnızca K-1 tamamlanınca). About'taki "separate checking pass" ifadesiyle aynı dil kullanılsın. | Kod (metin) |
| Y-2 | **Yüksek** | `/about/`, `/privacy/` ("Who is responsible"), `/terms/`, footer "© 2026 HR Express"; `site.config.json` | [Kesin] Yayıncı yalnızca "HR Express": tüzel biçim, ülke/şehir, posta adresi yok; `publisherLocation` boş, `ownerConfirmed=false`; editör adı yok. Okuyucu ve inceleyici siteyi kimin işlettiğini doğrulayamıyor (A-PRIV/PP-PRIVD "veri sorumlusu", PP-DISHON, GS-HELP "who"). [Olası] Sahip notlarına göre HR Express bir kişisel girişim olarak Ocak 2026'da sona ermiş ve AdSense hesabı başka bir kişi adına; yayıncı adı AdSense hesap sahibi/ödeme profili ile tutarlı olmalı. | Sahip: AdSense hesabındaki ad/ünvanla aynı yayıncı adını ve en azından ülke + şehri (`publisherLocation`) girsin; HR Express artık faal değilse gerçek işleten kişi/şirket adı yazılsın. Editör adı + kısa gerçek biyografi. Ardından `ownerConfirmed: true`. | Sahip |
| Y-3 | **Yüksek** | `/faq/` (`src/pages/faq.astro`), `/editorial-standards/` md. 7, `/` FAQ bloğu | [Kesin] `/faq/` 152 soruluk, ~16.500 kelimelik sayfa; 142 soru rehberlerdeki SSS'lerden kelimesi kelimesine aynen alınmış (sayfa `flatMap` ile rehber `faq` alanlarını birleştiriyor), ana sayfadaki 6 sorudan 5'i de aynı. Sorular ham arama sorgusu dilinde: "What is Section 301 tariffs on China?", "How much is anti dumping duty?", "What is anti dumping duty in practice for an importer?". Editorial md. 7 "FAQ questions are taken from Google's public search suggestions" diyor. Toplu olarak: anahtar-kelime güdümlü, site içi çoğaltılmış, otomatik üretilmiş izlenimi (S-01 ölçekli içerik, PP-REPL çoğaltılmış içerik sinyali) [Olası]. Ayrıca 4 ayrı FAQPage JSON-LD (152 Q) + ana sayfa FAQPage + her rehberde FAQPage → aynı Q/A birden çok URL'de işaretli. | `/faq/`'ı tam metin tekrarı yerine **dizin** yap: soru başlığı + tek cümlelik yanıt + rehbere bağlantı, ya da yalnızca rehberlerde olmayan site düzeyi sorular. FAQPage şemasını tek yerde (rehber sayfasında) bırak, `/faq/` ve ana sayfadan kaldır. Soruları dilbilgisel düzelt ("What are the Section 301 tariffs on China?"). Editorial md. 7'yi "questions reflect what sellers search for" gibi nötr bir dille yaz. | Kod |
| Y-4 | **Yüksek** | `Page.astro` düzenini kullanan 17 sayfa: about, contact, privacy, cookie-policy, terms, disclaimer, editorial-standards, corrections, image-credits, policy-log, glossary, faq, quiz, checklists, resources, sitemap, reference/key-dates; `src/styles/site.css:456` | [Kesin] `.legal { padding: 48px 0 80px; }` kısaltması `.wrap`'in `padding: 0 24px` yatay boşluğunu sıfırlıyor; 390 px'te gövde metni, başlıklar ve madde işaretleri ekranın sol/sağ kenarına yapışık (ekran görüntüsü: about, privacy). İnceleyicinin mutlaka açtığı güven sayfalarında "bozuk site" izlenimi; A-READY "kolay gezinme/okunabilirlik". | `.legal { padding-top: 48px; padding-bottom: 80px; }` olarak değiştir (yatay padding'e dokunma). Sonra 390 px'te 17 sayfayı yeniden kontrol et. | Kod |
| O-1 | Orta | `/` FAQ bloğu — `src/pages/index.astro` | [Kesin] Ana sayfadaki SSS yanıtlarındaki 8 dipnot bağlantısı (`#src-marketplace-amazon-15`, `#src-entry-type-11-vs-01-12` vb.) sayfada bulunmayan çapalara gidiyor; ana sayfada kaynak listesi yok. Tıklayınca hiçbir şey olmuyor (sitenin "her sayı açılabilir kaynağa bağlı" vaadiyle çelişiyor). | Ana sayfaya ilgili kaynakları içeren kısa `<Sources>` bloğu ekle ya da dipnotları doğrudan kaynak URL'sine/rehberin `#src-…` çapasına (`/guides/…/#src-…`) bağla. | Kod |
| O-2 | Orta | `/guides/section-301-china-tariffs/`, `/guides/country-of-origin-sourcing/`, `/faq/` | [Kesin] "USTR extended the 178 current exclusions through … November 9, 2026; as of November 8, 2026 no further extension had been published." Bu süre denetimden bir gün sonra doluyor; AdSense incelemesi günler/haftalar sürer, sayfa inceleme sırasında eskimiş olur. | 9–10 Kasım'da Federal Register'ı kontrol edip metni (uzatıldı/sona erdi) güncelle, `corrections` ve `policy-log`'a işle. Benzer süreli ifadeleri (`through … 2026`) toplu tara. | Sahip + içerik |
| O-3 | Orta | `/tools/ppc-budget-calculator/` (~150 kelime), `/tools/cash-flow-planner/` (~160), `/tools/dimensional-weight/` (~190) | [Kesin] Araç sayfaları formül + form dışında çok az açıklama içeriyor; PPC aracı ana menüde yok, yalnızca `/tools/` ve site haritasından erişiliyor ve kaynaksız (tamamen kullanıcı girdisi). Reklam yok (doğru), ama Search açısından ince sayfa. | Her araca 2–3 paragraf: ne zaman kullanılır, girdiler nereden alınır (ör. Amazon Ads raporu), çalışılmış örnek, sınırlamalar; ilgili rehbere bağlantı. PPC aracı sitenin konusuna (ücret/gümrük) zayıf bağlı — ya genişlet ya kaldır. | Kod/içerik |
| O-4 | Orta | Makale düzeni — `src/layouts/Article.astro:68-69` | [Kesin] Tek reklam birimi (`endOfArticle`) kaynak listesinin hemen altında. About/editorial "ads kept out of … source lists" diyor; reklam listede değil ama bitişik → yoğun bağlantı listesine yakınlık, kazara tıklama riski (P-19, A-PLACE) [Olası]. | Reklamı "Related guides" bloğunun altına taşı veya `<Sources/>` ile arasına ilgili rehberler bloğu koy; `.ad` üst boşluğunu ≥48 px yap. | Kod |
| O-5 | Orta | `/privacy/`, `/terms/` | [Kesin] Veri sorumlusu için yalnızca e-posta var; posta adresi/ülke, uygulanacak hukuk, CMP etkinleşince "privacy settings" bağlantısının yeri yok (metin "once the message is active" diyor). Gizlilik metni "This site has applied to show ads" diyor — başvuru sonrası güncellenmesi gerekecek. | Y-2 ile birlikte adres/ülke ekle; CMP kurulunca (P-24) politikayı yeniden tarihle ve footer'a "Privacy settings" bağlantısı ekle. | Sahip |
| O-6 | Orta | Tüm 35 içerik sayfası; `/corrections/` | [Kesin] `published`, `modified`, `lastVerified` = 2026-11-08 (35/35); corrections tek satır: "Site rebuilt from scratch". Dürüst, ama tek günde 35 sayfa + 1186 iddia "verified" profili ölçekli üretim imzası [Olası]. | Tarihleri değiştirme (S-08). Bunun yerine K-1 insan incelemesini gerçekten yap ve `reviewedDate`'ler gerçek tarihleri göstersin; başvuruyu birkaç gün/hafta organik güncelleme (policy-log, düzeltmeler) biriktikten sonra yap. | Sahip |
| D-1 | Düşük | `/about/`, `/contact/`, `/editorial-standards/`, `/corrections/` (aynı Bench Accounting fotoğrafı); tüm araç sayfaları + tariff-stack rehberi (aynı Aaron Lefler fotoğrafı); `/faq/` + `/quiz/` (aynı foto) | [Kesin] Stok fotoğraf tekrarı şablon/otomatik site izlenimini artırıyor; yasal sayfalarda fotoğrafın içerik değeri yok. | Yasal/güven sayfalarında fotoğraf kaldır (yalnızca başlık), araç sayfalarında farklı görseller. | Kod |
| D-2 | Düşük | `/guides/accrual-accounting-cogs/` başlığı | [Kesin] "Inventory and Cost of Goods Sold for Small Sellers (2025)" — 2026 Kasım'ında eski görünen başlık (IRS Pub 334'ün 2025 vergi yılı sürümüne dayandığı için teknik olarak doğru). | Başlığı "(2025 tax year)" yap ya da yıl ifadesini başlıktan çıkar. | Kod/içerik |
| D-3 | Düşük | `/quiz/` soru 9 | [Kesin] 15-gün giriş süresi sorusunun kaynağı `entry-type-11-vs-01` iddiası, "Read the guide" bağlantısı ise `customs-holds-and-exams`. | Bağlantıyı kaynağın geldiği rehbere çevir. | Kod |
| D-4 | Düşük | Hub/araç sayfaları hero (`/tools/*`, `/guides/`, `/about/`) | [Kesin] Mobilde "Photo: … / Unsplash" kredisi breadcrumb'ın üstünde sağ köşede, hero başlığının önünde görünüyor; hangi fotoğrafa ait olduğu belirsiz (arka plan fotoğrafı çok karanlık). | Krediyi hero'nun alt kenarına taşı veya küçük "i" ile göster. | Kod |
| D-5 | Düşük | `docs/POLITIKA_KONTROL_LISTESI.md` S-07, P-21 | [Kesin] Liste `/search/` için robots `Disallow` çelişkisi ve `inArticle` slotu diyor; mevcut `public/robots.txt`'de `/search/` engeli yok, `adSlots` yalnızca `endOfArticle`. Kontrol listesi kodun gerisinde. | Kontrol listesini güncelle (iki madde kapandı). | Doküman |
| D-6 | Düşük | 14 yönlendirme kökü (ör. `/affiliate-disclosure/`, `/news/`, `/tools/tariff-stack-estimator/`) | [Kesin] `content="0"` meta refresh + canonical, gövdede tıklanabilir bağlantı; hedefler mevcut ve konuca eşdeğer. Sorun yok; yalnızca `<title>` "Moved: https://…" ham URL gösteriyor. | İsteğe bağlı: başlığı hedef sayfa adıyla yaz. | Kod |

---

## 3. Olumlu bulgular

- İçerik derinliği gerçek: incelenen rehberler 1.200+ kelime, tablo, karar tablosu, "Worked example (hypothetical)" ve "How to confirm it" bölümleri içeriyor; kaynak bloğunda her kaynak için "supports N statements" ve kontrol tarihi var. Önceki "düşük değerli içerik" reddinin nedeni olan ince/affiliate içerik giderilmiş. [Kesin]
- YMYL çerçevesi düzgün: her makale sonunda "General information, not legal or tax advice", disclaimer'da CBP binding ruling / gümrük müşaviri / vergi uzmanı yönlendirmesi, contact'ta "We can't advise on your shipment…" [Kesin]
- Kaynak çelişkileri gizlenmiyor, açıkça yazılıyor (ör. Illinois 200-işlem eşiği: bülten vs. ana sayfa). Güçlü güvenilirlik sinyali. [Kesin]
- AI kullanımı about ve editorial'da açıkça beyan ediliyor (GS-GENAI). [Kesin]
- Bağımsızlık/marka beyanı footer, terms, disclaimer ve about'ta tutarlı; affiliate bağlantısı, sponsorlu içerik yok. [Kesin]
- Reklam hazırlığı politikaya uygun kurgulanmış: `AdSlot.astro` yalnızca `adsEnabled && googleCmpConfigured && sayısal slot` iken render ediyor, etiket "Advertisements", yalnız makale düzeninde, sayfa başına 1 birim, otomatik yenileme/yapışkan reklam yok. Şu an reklam kodu hiç yüklenmiyor. [Kesin]
- Gizlilik politikası AdSense zorunlu üç maddeyi, Ads Settings + aboutads.info bağlantılarını ve partner-sites bağlantısını içeriyor; sitenin kendi çerezi yok ve bu doğru beyan edilmiş. [Kesin]
- Site içi bağlantılar sağlam: ana sayfadaki 8 dipnot çapası dışında kırık iç bağlantı/çapa bulunmadı (80 HTML tarandı). Yönlendirme kökleri doğru hedeflere gidiyor; 404 sayfası faydalı. [Kesin]
- Mobil makale ve araç sayfaları (390 px) düzgün; duty estimator varsayılan girdilerle sonuç gösteriyor, formül ve "What it does not model" bölümü var. [Kesin]
- Renk paleti kontrast bilinciyle tanımlanmış (CTA ve bağlantı renkleri AA notlu; turuncu yalnız dekoratif). Belirgin kontrast sorunu görülmedi. [Olası — ölçüm aracı çalıştırılmadı]
- Policy log tarihli, her kayıt resmi bildirime bağlı; RSS var. Image credits sayfası her fotoğrafı yazar/kaynak/lisans ile listeliyor. [Kesin]

---

## 4. Başvuru öncesi asgari sıra

1. Y-4 (CSS tek satır) ve Y-1, Y-3, O-1 (kod/metin) düzeltmeleri.
2. K-1: gerçek kişi incelemesi → `reviewedBy`/`reviewedDate`, `editorName`/`editorBio`.
3. Y-2: yayıncı adı + konum AdSense hesabıyla eşleşecek şekilde; `ownerConfirmed: true`.
4. O-2: 9 Kasım Section 301 istisna durumunu güncelle.
5. `RELEASE=1 npm run check` temiz geçtikten sonra yayınla; birkaç gün sonra başvur.

---

## Ek: Denetim sonrası uygulanan düzeltmeler (2026-11-08, ana editör)
| Bulgu | Durum | Değişiklik |
|---|---|---|
| K-1 | ⚠ Sahip aksiyonu | Kod tarafı zaten kilitli: `RELEASE=1` derlemesinde `reviewedBy` olmayan 35 sayfa ve boş `editorName` **hata** verir; deploy.yml yayını RELEASE=1 ile yapar. Yani canlı sitede vaat, gerçek inceleyici girilmeden yayınlanamaz. |
| Y-1 | ✅ | Ana sayfa metni "separate checking pass, independent of the drafting step … named reviewer signs off before release" olarak düzeltildi; başlık "Checked in a second pass". |
| Y-2 | ⚠ Sahip aksiyonu | Yayıncı adı, ülke/adres, editör; AdSense hesap sahibiyle tutarlı olmalı. |
| Y-3 | ✅ | /faq/ artık cevapları kopyalamayan bir dizin (soru → rehberin SSS bölümü), FAQPage şeması yok. |
| Y-4 | ✅ | `.legal` yatay padding'i korunuyor (`padding-top/bottom`). |
| O-1 | ✅ | Ana sayfaya kaynak listesi eklendi; 80 HTML'de kırık sayfa içi çapa: 0. |
| O-2 | ⚠ | 9–10 Kasım'da USTR kontrolü (90_GUN_PLANI). |
| O-3 | ✅ | PPC, nakit akışı ve boyutsal ağırlık sayfalarına işlenmiş örnek, okuma rehberi ve kapsam dışı bölümleri eklendi (hesaplar kontrol edildi). |
| O-4 | ✅ | Reklam birimi üst boşluğu 72 px. |
| O-5 | ⚠ Sahip aksiyonu | Gizlilik sayfasına yayıncı adresi/ülkesi. |
| Kontrol listesi S-07 / P-21 | ✅ | robots.txt `/search/` engeli kaldırıldı; `inArticle` slotu kaldırıldı. |

Ek olarak: atıf birleştirme regex'i HTML'i bozuyordu (21 sayfada kapanmamış etiket) — düzeltildi; html-validate artık 0 hata. Arama formuna submit düğmesi; kaynak listesinde yinelenen çapa kimlikleri giderildi.
