# POLİTİKA KONTROL LİSTESİ — fbatactics.com

Hazırlayan: policy-R1 · Erişim/inceleme tarihi: **2026-11-08** · Kapsam: Google AdSense program politikaları, Google Publisher Policies, Google Publisher Restrictions, AdSense gereklilikleri (CMP, gizlilik, ads.txt) ve Google Search spam politikaları.

Kurallar: Her satırdaki kaynak, bu tarihte WebFetch ile **fiilen okunan** sayfadır. Metinler özetlenmiştir; doğrudan alıntılar 15 kelimenin altındadır. Satır kimlikleri (P-xx, S-xx), `tools/gate-policy.mjs` başlığındaki "rule IDs in docs/POLITIKA_KONTROL_LISTESI.md" atfı için kullanılır.

Durum işaretleri: ✅ karşılanıyor · ⚠ sahip aksiyonu gerekli · ❌ eksik

Güven etiketi: Sitede karşılanma değerlendirmeleri repo incelemesine dayanır [Kesin]; politika yorumu gerektiren satırlar ayrıca [Olası] ile işaretlidir.

---

## 0. Önce düzeltilmesi gerekenler (❌)

| # | Sorun | Neden politika riski | Somut düzeltme |
|---|---|---|---|
| F-1 | **35/35 rehber ve pazaryeri sayfasında `reviewedBy` yok** (`src/content/guides/*.mdx`, `src/content/marketplaces/*.mdx`; `node tools/gate-policy.mjs` 35 uyarı verdi). Buna karşın `src/pages/about.astro` ve `src/pages/editorial-standards.astro` (madde 4) "adlandırılmış bir kişi her sayfayı inceler, adı başlığın altında görünür" diyor. | Sayfalar AI destekli yazılmış ve hepsi aynı gün (`published: "2026-11-08"`, 35 sayfa) yayımlanıyor. İnsan incelemesi kanıtı yoksa: (a) site kendi süreci hakkında yanlış beyanda bulunur (Misleading representation, P-12); (b) ölçekli/otomatik içerik sinyali güçlenir (S-01, P-08). | Sahip (veya adı açıklanan editör) her sayfayı kaynaklarına karşı okusun, frontmatter'a `reviewedBy: "<Ad Soyad>"` eklesin. Yayına `RELEASE=1 npm run check` ile çıkılsın; bu modda eksik `reviewedBy` hata olur. İnceleme tamamlanamayan sayfalar yayına alınmasın. |

Not: Kod tarafında yayın engelleyen başka ❌ bulunmadı. Aşağıdaki ⚠ maddeleri ağırlıkla sahip bilgisi/AdSense paneli işleridir; iki küçük kod iyileştirmesi (P-21 notu, S-07) ⚠ olarak işaretlendi.

---

## 1. Okunan birincil kaynaklar (erişim 2026-11-08)

| Kısa ad | URL | Başlık |
|---|---|---|
| A-PROG | https://support.google.com/adsense/answer/48182 | AdSense Program policies |
| A-PLACE | https://support.google.com/adsense/answer/1346295 | Ad placement policies |
| A-READY | https://support.google.com/adsense/answer/7299563 | Make sure your site's pages are ready for AdSense |
| A-ELIG | https://support.google.com/adsense/answer/9724 | Eligibility requirements for AdSense |
| A-IVT | https://support.google.com/adsense/answer/16737 | Invalid traffic |
| A-CMP | https://support.google.com/adsense/answer/13554116 | Google consent management requirements for serving ads in the EEA, the UK, and Switzerland |
| A-PRIV | https://support.google.com/adsense/answer/1348695 | Required content (gizlilik politikası) |
| A-ADSTXT | https://support.google.com/adsense/answer/12171612 | Ads.txt guide |
| PP-ALL | https://support.google.com/publisherpolicies/answer/10502938 | Google Publisher Policies |
| PP-RESTR | https://support.google.com/publisherpolicies/answer/10437795 | Google Publisher Restrictions |
| PP-NOCONT | https://support.google.com/publisherpolicies/answer/11112688 | Google-served ads on screens without publisher-content |
| PP-MOREADS | https://support.google.com/publisherpolicies/answer/11169917 | More ads or paid promotional material than publisher-content |
| PP-REPL | https://support.google.com/publisherpolicies/answer/11190248 | Google-served ads on screens with replicated content |
| PP-INTERF | https://support.google.com/publisherpolicies/answer/11035030 | Ads interfering |
| PP-DISHON | https://support.google.com/publisherpolicies/answer/11037245 | Dishonest declarations |
| PP-AUTH | https://support.google.com/publisherpolicies/answer/11128498 | Authorized inventory |
| PP-PRIVD | https://support.google.com/publisherpolicies/answer/10437794 | Privacy disclosures |
| PP-IP | https://support.google.com/publisherpolicies/answer/10402772 | Intellectual property abuse |
| PP-DANG | https://support.google.com/publisherpolicies/answer/10522641 | Dangerous or derogatory content |
| PP-MISREP | https://support.google.com/publisherpolicies/answer/11185754 | Misleading representation |
| PP-DECEP | https://support.google.com/publisherpolicies/answer/11185755 | Deceptive practices |
| GS-SPAM | https://developers.google.com/search/docs/essentials/spam-policies | Spam policies for Google web search |
| GS-HELP | https://developers.google.com/search/docs/fundamentals/creating-helpful-content | Creating helpful, reliable, people-first content |
| GS-GENAI | https://developers.google.com/search/docs/fundamentals/using-gen-ai-content | Using generative AI content |
| GS-REDIR | https://developers.google.com/search/docs/crawling-indexing/301-redirects | Redirects and Google Search |

Ek not — AB Kullanıcı Rızası Politikası: Politikanın kendisi `https://www.google.com/about/company/user-consent-policy/` adresinde; bu adres verilen üç alan adının dışında. Sayfa okundu (2026-11-08) ve P-25 satırında yalnızca destekleyici olarak, bu kayıtla birlikte anılıyor. CMP zorunluluğunun dayanağı A-CMP'dir.

Okunamayan sayfa: yok. A-READY sayfası CMP/TCF konusunu içermiyor (okundu, bu konu için kaynak gösterilmedi). Ayrıca `publisherpolicies/answer/11035931` (Publisher Policies içindeki web spam maddesi) ve `11128079` (Abusive experiences) bağlantıları PP-ALL'da listelendi ama ayrıca açılmadı; ilgili satırlarda PP-ALL ve GS-SPAM kaynak gösterildi.

---

## 2. AdSense program politikaları ve uygunluk

| ID | Gereksinim (özet) | Kaynak | Sitede nasıl karşılanıyor | Durum | Kanıt |
|---|---|---|---|---|---|
| P-01 | Başvuru için özgün, kaliteli, kitle çekebilecek içerik; sitenin HTML'ine erişim; 18 yaş. | A-ELIG | 30 rehber + 5 pazaryeri sayfası; her biri ≥1200 kelime ve kaynak bloğu zorunlu (gate). Statik Astro sitesi, HTML tam kontrol altında. Yaş: sahip beyanı. | ✅ (yaş: sahip) | `tools/gate-policy.mjs` (words<1200, `class="sources"` kontrolü); `src/content/` |
| P-02 | Geçersiz trafik yasak: kendi reklamına tıklama ("for any reason is prohibited"), bot/otomatik araç, tekrarlı tıklama. Üçüncü tarafın neden olduğu IVT'den de yayıncı sorumlu. | A-PROG, A-IVT | Kod tarafında tetikleyici yok (otomatik yenileme, bot, ücretli trafik yok). Davranışsal kural: sahip ve ekip canlı reklamlara tıklamamalı; test için reklamlar kapalıyken çalışılmalı. | ⚠ | `src/components/AdSlot.astro` (yenileme yok); sahip/ekip disiplini |
| P-03 | Tıklamayı teşvik yasak (çağrı metni, ok, ödül, reklamı içerik gibi gösterme). Etiket yalnızca "Advertisements" / "Sponsored Links". | A-PROG, A-PLACE | Reklam etiketi "Advertisements"; gate "click the ads", "support us by clicking" kalıplarını derlenen HTML'de hata yapıyor. | ✅ | `src/components/AdSlot.astro` (`aria-label="Advertisements"`, `.ad-label`); `tools/gate-policy.mjs` BAD listesi |
| P-04 | Trafik kaynakları: paid-to-click, autosurf, istenmeyen toplu e-posta, pop-up/yönlendirme yazılımı ile gelen trafikte reklam yok. | A-PROG | Sitede ücretli trafik/kampanya kodu yok. Gelecekteki trafik alımı sahip kararı. | ⚠ | Repo'da reklam/trafik satın alma entegrasyonu yok; sahip taahhüdü |
| P-05 | Reklam kodu değiştirilebilir ama performansı yapay şişirmemeli. | A-PROG | Standart `adsbygoogle.js` + `<ins>` + `push({})`; değişiklik yok. | ✅ | `src/layouts/Base.astro`; `src/components/AdSlot.astro` |
| P-06 | Reklamlar pop-up, e-posta, yazılım, çerçevelenmiş üçüncü taraf içerikte ve içeriksiz sayfalarda yer alamaz; Google ile ilişki ima eden sayfa/URL yasak. | A-PROG, A-PLACE | Reklam yalnızca `Article` düzeninde (rehber/pazaryeri). Gate, yasal/yardımcı sayfalarda (about, contact, privacy, 404, search, tools vb.) reklam kodunu hata yapıyor. Pop-up yok. | ✅ | `src/layouts/Article.astro` (`ads={true}`); `tools/gate-policy.mjs` NOADS |
| P-07 | Site gezinmesi kolay olmalı; tercih değiştirme, istenmeyen yönlendirme/indirme, kötü amaçlı yazılım, araya giren pop-up yok; reklamlar menü/indirme bağlantısı gibi gizlenemez. | A-PROG, A-READY | Header + 4 sütunlu footer (tüm yasal sayfalar), site haritası, breadcrumb, 404. Yönlendirmeler yalnızca birleştirilmiş eski URL'ler için. İndirme/pop-up yok. | ✅ | `src/components/Footer.astro`; `src/components/Breadcrumbs.astro`; `src/pages/sitemap.astro`; `data/redirects.json` |
| P-08 | Kazınmış veya telifli içerik bulunan sitelere reklam konamaz; benzersiz içerik ve net düzen beklenir. | A-READY | Her olgu birincil kaynağa numaralı atıf + claims register; metin özgün üretim. Fotoğraflar lisanslı ve kredili. | ✅ (inceleme için F-1) | `src/pages/editorial-standards.astro`; `data/claims/`; `src/pages/image-credits.astro` |
| P-09 | robots.txt ile engellenen içerik değerlendirilemezse reklam sunumu kapatılabilir. | A-PLACE | `Mediapartners-Google` için `Allow: /`. Yalnızca `/search/` genel ajanlara kapalı (reklamsız sayfa). | ✅ | `public/robots.txt` |

## 3. Google Publisher Policies — içerik politikaları

| ID | Gereksinim (özet) | Kaynak | Sitede nasıl karşılanıyor | Durum | Kanıt |
|---|---|---|---|---|---|
| P-10 | Fikri mülkiyet: telif ihlali yok; sahte ürün satışı/tanıtımı yok. | PP-IP | Metin/grafik özgün; fotoğraflar Unsplash License / Wikimedia (ticari kullanıma izinli, share-alike yok) — lisans ve kaynak sayfası listeleniyor; fontlar OFL. Marka adları yalnızca tanımlayıcı. | ✅ | `src/pages/image-credits.astro`; `tools/gate-images.mjs`; `public/licenses/`; `src/pages/terms.astro` (Trademarks) |
| P-11 | Tehlikeli/aşağılayıcı içerik yok (nefret, taciz, şiddet tehdidi, kendine zarar, şantaj). | PP-DANG | Konu yelpazesi gümrük/ücret/uyum. Hazmat ve lityum pil rehberleri taşımacılık uyum bilgisi veriyor; zarar teşviki yok. [Olası] | ✅ | `src/content/guides/hazmat-dangerous-goods.mdx`, `shipping-lithium-batteries.mdx` |
| P-12 | Yanıltıcı temsil: yayıncı, içerik üreticisi, amaç gizlenmez/yanlış beyan edilmez; sahte bağlantı/onay ima edilmez. | PP-MISREP | Footer, terms, disclaimer ve about'ta Amazon/Walmart/eBay/Etsy/Shopify/CBP ile bağ olmadığı açık. "FBA" adı Amazon programını çağrıştırıyor; açıklama mevcut. Yayıncı "HR Express" adlı; **`editorName` ve `publisherLocation` boş, `ownerConfirmed=false`**. Editoryal sayfalardaki "adlandırılmış inceleyici" beyanı şu an karşılıksız (bkz. F-1). | ⚠ (+ F-1) | `site.config.json`; `src/components/Footer.astro`; `src/pages/about.astro`; `src/pages/disclaimer.astro` |
| P-13 | Aldatıcı uygulamalar: sahte gerekçeyle etkileşim, kimlik avı, hızlı zengin olma vaadi yok. | PP-DECEP | Form/hesap yok (kişisel veri toplanmıyor); gate "limited-time offer", "act now", "we tested", "our clients" kalıplarını hata yapıyor. | ✅ | `src/pages/contact.astro`; `tools/gate-policy.mjs` BAD listesi |
| P-14 | Sahtekârlığı kolaylaştırma yok (sahte belge, hack araçları). | PP-ALL | Sahte yorum rehberi FTC 16 CFR 465 yasaklarını ve cezaları anlatıyor; manipülasyonu öğretmiyor. [Olası] | ✅ | `src/content/guides/review-manipulation-risk.mdx` |
| P-15 | Kısıtlı içerik (silah, tütün, uyuşturucu, kumar, reçeteli ilaç vb.) daha az reklam kaynağı alır. | PP-RESTR | Bu kategorilerde içerik yok. Hazmat/pil sayfaları kısıtlı kategori değil, uyum bilgisi. [Olası] | ✅ | `src/content/guides/` listesi |

## 4. Davranış politikaları — envanter değeri, reklam yerleşimi, beyan

| ID | Gereksinim (özet) | Kaynak | Sitede nasıl karşılanıyor | Durum | Kanıt |
|---|---|---|---|---|---|
| P-16 | İçeriksiz, düşük değerli, yapım aşamasındaki ekranlarda ve uyarı/gezinme/çıkış/hata gibi çıkmaz sayfalarda reklam yok. Otomatik üretilmiş içerik, manuel incelenmedikçe uygun değil. | PP-NOCONT | 404, arama, site haritası, araçlar, yasal sayfalar reklamsız (gate). Placeholder metni gate hatası. **İnceleme:** mevcut `dist/` geliştirme derlemesi (`ALLOW_PLACEHOLDERS=1`) ve birçok sayfada "photo pending" var; üretim derlemesinde `Photo.astro` eksik fotoğrafta derlemeyi durduruyor. AI destekli içeriğin manuel incelemesi kanıtlanmalı (F-1). | ⚠ (+ F-1) | `tools/gate-policy.mjs` (NOADS, placeholder); `src/components/Photo.astro`; `gate-policy` çıktısı 2026-11-08 |
| P-17 | Reklam/ücretli tanıtım, yayıncı içeriğinden fazla olamaz; header/footer/boşluk içerik sayılmaz. | PP-MOREADS | Sayfa başına en fazla 2 reklam birimi (gate); şu an yalnızca makale sonunda 1 birim (`endOfArticle`), ≥1200 kelimelik makalede. | ✅ | `src/layouts/Article.astro`; `tools/gate-policy.mjs` (`units > 2`) |
| P-18 | Kopyalanmış/çoğaltılmış içerikte (kazıma, yeniden yazma, incelenmemiş otomatik içerik) reklam yok; özgün katkı gerekir. | PP-REPL | Kaynaklar özetlenip hesaplayıcı, tablo, örnek ve tarihli doğrulamayla zenginleştiriliyor; resmi metin aynen kopyalanmıyor [Olası]. İnceleme kanıtı F-1'e bağlı. | ⚠ (+ F-1) | `src/pages/editorial-standards.astro`; `src/components/Sources.astro` |
| P-19 | Reklamlar gezinme/aksiyon öğelerinin üstüne veya yanına konmaz; içeriği itmez; çıkmaz ekran yok; bağlantı ve açılır menülere yakınlığa dikkat. | PP-INTERF, A-PLACE | `endOfArticle` birimi **kaynak listesinin hemen altında** (`<Sources />` sonrası). `.ad` 40px dikey boşluk, çerçeve ve etiketle ayrılıyor; tablo/hesaplayıcı/menü içine yerleşim yok. About/editorial sayfaları "source lists"ten uzak tutulduğunu söylüyor. [Olası] Kabul edilebilir; ama Sources ile reklam arasına içerik bloğu (ör. ilgili rehberler) koymak veya `.ad` üst boşluğunu artırmak kazara tık riskini düşürür. | ⚠ | `src/layouts/Article.astro` (satır ~68–69); `src/styles/site.css` (`.ad`) |
| P-20 | Better Ads Standards'a uyum; kötüye kullanılan deneyim yok. | PP-ALL | Pop-up, yapışkan/kayan reklam, otomatik oynayan medya yok. | ✅ | `src/components/AdSlot.astro`; `src/styles/site.css` |
| P-21 | Dürüst beyan: hesap bilgisi, ads.txt ve reklam istek verisi doğru/eksiksiz olmalı. | PP-DISHON | `adsensePublisherId`, ads.txt satırı ve `google-adsense-account` meta etiketi aynı ID. Yayıncı adı/adres AdSense hesabındakiyle aynı olmalı (`publisherLocation` boş). **Kod notu:** gate, `adsEnabled=true` için `adSlots`'taki *tüm* değerleri (kullanılmayan `inArticle` dahil) sayısal istiyor; `inArticle` hiçbir şablonda kullanılmıyor. Ya kullanılmayan anahtar kaldırılmalı ya da kontrol yalnızca kullanılan slotlara uygulanmalı; panelde gereksiz birim açmaya zorlamamalı. | ⚠ | `site.config.json`; `public/ads.txt`; `src/layouts/Base.astro`; `tools/gate-policy.mjs` satır 8 |

## 5. Gizlilik ve rıza

| ID | Gereksinim (özet) | Kaynak | Sitede nasıl karşılanıyor | Durum | Kanıt |
|---|---|---|---|---|---|
| P-22 | Gizlilik politikası olmalı ve uygulanmalı; Google ürünleriyle toplanan/paylaşılan veriler (çerez, web beacon, IP, tanımlayıcı) ve üçüncü tarafların çerez okuyup yazabileceği açıklanmalı. "How Google uses data when you use our partners' sites or apps" bağlantısı önerilir. | PP-PRIVD | Politika: hosting (GitHub), AdSense, çerez/beacon/IP/tanımlayıcı, partner-sites bağlantısı, ABD eyalet yasaları, çocuklar, haklar. Reklam açılınca sayfa yeniden tarihlenecek. | ✅ | `src/pages/privacy.astro` |
| P-23 | Gerekli içerik: Google dahil üçüncü taraf satıcıların önceki ziyaretlere göre reklam için çerez kullandığı; Ads Settings veya aboutads.info ile vazgeçme; diğer reklam ağları adlandırılmalı. | A-PRIV | Üç zorunlu madde ve iki opt-out bağlantısı mevcut; diğer satıcılar CMP mesajında listelenecek diye belirtilmiş. Google dışı ağ kullanılmıyor. | ✅ | `src/pages/privacy.astro`; `src/pages/cookie-policy.astro` |
| P-24 | EEA, UK ve İsviçre'de kişiselleştirilmiş reklam için TCF ile entegre **Google sertifikalı CMP** şart (EEA/UK 16 Ocak 2024, CH 31 Temmuz 2024'ten beri). Sertifikasız trafik kişiselleştirilmemiş/sınırlı reklamla sınırlanabilir. | A-CMP | Kod: `ADS_ON` yalnızca `adsEnabled && googleCmpConfigured` iken true; aksi halde reklam kodu hiç yüklenmiyor. Politikada AdSense "Privacy & messaging" (Google'ın sertifikalı CMP'si) beyan edilmiş. **Sahip:** AdSense panelinde Privacy & messaging → GDPR (EEA/UK/CH) mesajını oluşturup yayımlamalı, rıza geri çekme ("privacy settings") bağlantısını etkinleştirmeli, sonra `googleCmpConfigured=true` yapmalı. | ⚠ | `src/lib/site.*` (`ADS_ON`); `site.config.json` (`googleCmpConfigured:false`); `src/pages/privacy.astro` |
| P-25 | AB Kullanıcı Rızası Politikası: çerez/yerel depolama ve kişiselleştirilmiş reklam için geçerli rıza, rıza kayıtları, geri çekme talimatı, veri kullanan tarafların adlandırılması. (google.com alan adı — bkz. Bölüm 1 notu) | A-CMP; ek: google.com/about/company/user-consent-policy/ | Rıza toplama, kayıt ve satıcı listesi CMP'ye devrediliyor; geri çekme yolu politikada ve çerez politikasında anlatılıyor. Sitenin kendi çerezi/depolaması yok (`localStorage`/`document.cookie` kullanımı bulunmadı). Etkinlik P-24'teki panel kurulumuna bağlı. | ⚠ | `src/pages/cookie-policy.astro`; repo grep (2026-11-08) |
| P-26 | Google çerezleri set/değiştirilmez/silinmez; Google'a kişisel tanımlayıcı bilgi gönderilmez; COPPA: çocuklara yönelik içerik işaretlenir. | PP-ALL | Sitede çerez kodu, form, hesap yok; reklam isteklerine PII eklenmiyor. Site 13 yaş altına yönelik değil (politikada belirtilmiş). | ✅ | `src/layouts/Base.astro`; `src/pages/privacy.astro` (Children) |

## 6. ads.txt ve yetkili envanter

| ID | Gereksinim (özet) | Kaynak | Sitede nasıl karşılanıyor | Durum | Kanıt |
|---|---|---|---|---|---|
| P-27 | ads.txt zorunlu değil ama şiddetle önerilir; kök dizinde, IAB biçiminde, hesaptaki AdSense satırıyla. Doğrulama birkaç gün–bir ay sürebilir. | A-ADSTXT | `google.com, pub-9985150163567506, DIRECT, f08c47fec0942fa0` — `adsensePublisherId` ile eşleşmesi gate'te doğrulanıyor; `dist/ads.txt` zorunlu çıktı. | ✅ | `public/ads.txt`; `tools/gate-policy.mjs` |
| P-28 | ads.txt kullanan alanda yayıncı yetkili satıcı olarak listelenmeli; dosya sürdürülmeli. | PP-AUTH | Tek satış ortağı Google; satır mevcut. **Sahip:** yayından sonra AdSense → Siteler → "Check for updates" ile durumun "Authorized" olduğunu doğrulamalı; yeni ağ eklenirse dosyaya eklemeli. | ⚠ | `public/ads.txt`; AdSense paneli |

## 7. Google Search spam politikaları ve yararlı içerik

| ID | Gereksinim (özet) | Kaynak | Sitede nasıl karşılanıyor | Durum | Kanıt |
|---|---|---|---|---|---|
| S-01 | Ölçekli içerik istismarı: sıralama için toplu, düşük değerli, özgün olmayan sayfa üretimi (AI ile olsun ya da olmasın). AI içeriği de spam politikalarına uymalı; yayından önce manuel doğrulama "critical". | GS-SPAM, GS-GENAI | 35 sayfa, her biri farklı konu, birincil kaynaklı, claims register ve ayrı kontrol geçişi; ≥1200 kelime. Risk: 35 sayfanın tamamı aynı gün yayımlanıyor ve insan inceleyici adı yok. | ❌ → F-1 | `src/content/*/*.mdx` (`published`, `reviewedBy`); `docs/verification/` |
| S-02 | Kim/nasıl/neden: beklenen yerde doğru imza ve yazar geçmişine bağlantı; otomasyon/AI kullanımının açıklanması; uydurma profil yok. | GS-HELP, GS-GENAI | AI kullanımı about ve editorial-standards'ta açıkça yazılı ✅. İmza "By HR Express" + (varsa) "reviewed by" — ancak `editorName`/`editorBio` boş, inceleyici yok; YMYL (vergi/gümrük) konularda güven sinyali zayıf. | ⚠ (+ F-1) | `src/layouts/Article.astro` satır 49; `src/pages/about.astro`; `site.config.json` |
| S-03 | Site itibarı istismarı: güçlü bir host üzerinde sıralama ödünç almak için üçüncü taraf içerik yayımlamak. | GS-SPAM | Üçüncü taraf/sponsorlu içerik yok; tüm içerik yayıncıya ait ve aynı editoryal süreçten geçiyor. | ✅ | `src/pages/about.astro` (no sponsored posts); `src/pages/editorial-standards.astro` md. 10 |
| S-04 | Doorway: benzer sorgular/konumlar için kullanıcıyı tek hedefe yönlendiren neredeyse aynı sayfalar. | GS-SPAM | Konum/şablon varyant sayfası yok; 5 pazaryeri sayfası farklı ücret yapıları, 30 rehber farklı konular. | ✅ | `src/content/guides/`, `src/content/marketplaces/` |
| S-05 | Sinsi yönlendirmeler: kullanıcıyı/arama motorunu istenenden farklı içeriğe aldatıcı biçimde göndermek. Anında meta refresh Google'da kalıcı yönlendirme sayılır; sunucu yönlendirmesi yoksa seçenek. | GS-SPAM, GS-REDIR | 14 eski URL, konu olarak eşdeğer yeni sayfaya `content="0"` anında meta refresh + canonical ile gidiyor; hedef yoksa veya gerçek sayfanın üstüne yazılacaksa postbuild duruyor. Stub'lar site haritasından hariç. Kullanıcıya ve botlara aynı içerik. | ✅ | `data/redirects.json`; `tools/postbuild.mjs`; `astro.config.mjs` (sitemap filter) |
| S-06 | İnce affiliate: satıcı açıklamalarını değer katmadan kopyalayan affiliate sayfaları. | GS-SPAM | Affiliate bağlantı yok (repo'da `tag=`/`amzn.to` yok; "affiliate" kelimesi yalnızca gümrükte ilişkili taraf anlamında). `/affiliate-disclosure/` editorial-standards'a yönleniyor. | ✅ | `src/pages/about.astro`; `data/redirects.json` |
| S-07 | Cloaking, gizli metin, anahtar kelime doldurma, kazıma, link spam, süresi dolmuş alan istismarı. | GS-SPAM | Aynı statik HTML herkese sunuluyor; gizli metin/link satın alma yok. Küçük teknik not: `/search/` hem `robots.txt` ile engelli hem `noindex` taşıyor — engelli sayfada `noindex` görülemez; dizinden kesin çıkması isteniyorsa `Disallow` kaldırılıp yalnızca `noindex` bırakılmalı (spam değil, temizlik). Alan adı sahibin eski sitesinin devamı; konu sürekliliği about'ta açıklanmış. | ⚠ (küçük) | `public/robots.txt`; `src/pages/search/index.astro`; `src/pages/about.astro` |
| S-08 | Tarihleri taze görünmek için değiştirmemek. | GS-HELP | Editorial md. 5: tarih yeniden kontrolsüz değiştirilmez; `lastVerified` ve kaynak satırı tarihleri ayrı. | ✅ | `src/pages/editorial-standards.astro` |

---

## 8. Sahip aksiyonları özeti (⚠)

1. **F-1 / S-01 / S-02 / P-12 / P-16 / P-18:** Adlandırılmış insan incelemesi → 35 sayfaya `reviewedBy`; `editorName` + `editorBio` doldurulmalı (gerçek kişi, gerçek geçmiş).
2. **P-12 / P-21:** `site.config.json` → `publisherLocation` (AdSense hesabındaki adresle tutarlı), `ownerConfirmed: true`.
3. **P-24 / P-25:** AdSense Privacy & messaging'de EEA/UK/CH GDPR mesajı + geri çekme bağlantısı → sonra `googleCmpConfigured: true`; gizlilik politikası tarihini güncelle.
4. **P-16:** Tüm fotoğraflar manifest'e girmeden üretim derlemesi alınmamalı (şu anki `dist/` geliştirme derlemesi, "photo pending" içeriyor); yayın `RELEASE=1 npm run check` ile.
5. **P-02 / P-04:** Canlı reklama kendi tıklamamak; ücretli/teşvikli trafik almamak.
6. **P-28:** Yayından sonra ads.txt durumunu AdSense'te "Authorized" olarak doğrulamak.
7. **P-19 (öneri):** Makale sonu reklamı ile kaynak listesi arasında daha fazla ayrım.
8. **P-21 (kod):** `inArticle` kullanılmıyorsa `adSlots`'tan kaldırmak veya gate kontrolünü kullanılan slotlarla sınırlamak.
9. **S-07 (kod, küçük):** `/search/` için robots `Disallow` ile `noindex` çelişkisini gidermek.
