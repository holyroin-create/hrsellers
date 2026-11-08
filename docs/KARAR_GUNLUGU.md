# KARAR GÜNLÜĞÜ

Biçim: Soru | Seçenekler | Birincil kaynaklar (erişim 2026-11-08) | Seçim | Gerekçe | Risk | Değişim koşulu | Güven

**K-01 Hangi kaynaklar bu oturumda doğrulanabilir?**
Seçenekler: (a) hafızadaki kaynaklara güven, (b) her alanı WebFetch ile test et, (c) yalnızca eski sitenin kaynaklarını yeniden kontrol et. Test edilenler: ecfr.gov ✔, federalregister.gov API ✔ / belge sayfası aralıklı robots engeli, govinfo.gov HTML ✔, sell.amazon.com/pricing ✔ (kısmen), marketplace.walmart.com ✔, ebay.com/help ✔, etsy.com/legal/fees ✔, shopify.com/pricing ✔, irs.gov ✔, docs.github.com ✔, support.google.com ✔; sellercentral.amazon.com yardım ✘ (yalnızca JS), cbp.gov ✘, ftc.gov ✘, cpsc.gov ✘, uscode.house.gov ✘, seller-us.tiktok.com ✘, web.archive.org ✘ (engelli), hts.usitc.gov ✘ (kabuk). Seçim (b). Risk: doğrulanamayan alanlar içerik dışı kalır. Değişim: tarayıcı bağlantısı veya bu alanlara erişim açılırsa kapsam genişler. [Kesin]

**K-02 Niş.** Bkz. NIS_KARARI.md. Seçim: pazaryeri ücretleri + ABD ithalat kuralları. Değişim: GSC verisi 90 günde gösterim/tıklamanın başka bir kümede yoğunlaştığını gösterirse. [Olası]

**K-03 Mevcut 110 rehberin akıbeti.** Seçenekler: (a) hepsini koru, (b) kaynak katmanını yerinde düzelt, (c) birincil kaynakla yeniden yazılabilenleri koru, kalanları yayından kaldır. Kanıt: 506 kaynak URL'sinin çoğunluğu ikincil (novadata.io 11, amzprep 11, feedvisor 9…; birincil yalnızca ~45); önceki AdSense reddi "düşük değerli içerik"; Google spam politikası ölçekli içerik istismarı (developers.google.com/search/docs/essentials/spam-policies). Seçim (c): 22 rehber + 5 pazaryeri sayfası aynı URL'de yeniden yazıldı; 11 URL eşdeğer sayfaya yönlendirildi; 93 URL kaldırıldı (404). Eski MDX'ler `legacy/unverified/` altında saklanıyor. Risk: indeks ve trafik kaybı. Değişim: kaldırılan rehber birincil kaynakla doğrulanırsa aynı URL'de geri gelir. [Kesin — politika önceliği]

**K-04 Statik yönlendirme yöntemi.** Seçenekler: (a) GitHub Pages'te sunucu 301 (yok), (b) meta refresh 0 + canonical, (c) JS yönlendirme. Kaynak: Google Search redirects rehberi — anlık meta refresh kalıcı yönlendirme olarak yorumlanır (POLITIKA_KONTROL_LISTESI B10). Seçim (b), Astro `redirects` yerleşik çıktısı (noindex + canonical + bağlantı). [Kesin]

**K-05 Yığın (stack).** Seçenekler: Astro, Eleventy, Hugo, Jekyll. Seçim: Astro 7.4.7 (mevcut kod tabanı Astro; MDX bileşenleri, içerik koleksiyonu şema doğrulaması, yerleşik sitemap ve statik yönlendirme; npm sürümleri oturumda `npm view` ile doğrulandı). Risk: yok denecek kadar az. [Kesin]

**K-06 Barındırma.** Talimat GitHub Pages. GitHub Pages limitleri: yayın ≤1 GB, aylık 100 GB yumuşak bant genişliği, "online business / e-commerce / SaaS için ücretsiz barındırma değildir" (docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Reklamdan söz edilmiyor. Seçim: GitHub Pages + derleme çıktısı ana makineden bağımsız (dist/ aynı haliyle Cloudflare Pages'e taşınabilir). Risk: GitHub'ın reklam destekli içerik sitesini "online business" sayması. [Olası]

**K-07 Dağıtım eylemleri.** checkout v7.0.1, setup-node v7.1.0, configure-pages v6.0.0, upload-pages-artifact v5.0.0, deploy-pages v5.0.1 — sürüm ve commit SHA'ları `git ls-remote` ile oturumda alındı, iş akışında SHA ile sabitlendi. [Kesin]

**K-08 Rıza (CMP).** Seçenekler: AdSense Privacy & messaging (Google sertifikalı, ücretsiz), üçüncü taraf TCF CMP, CMP yok. Kaynak: support.google.com/adsense/answer/13554116 (EEA/UK 16 Oca 2024, CH 31 Tem 2024 itibarıyla sertifikalı CMP zorunlu). Seçim: AdSense Privacy & messaging, 3 düğmeli Avrupa mesajı. Onay öncesi sitede hiçbir reklam/analitik betiği yüklenmiyor (yalnızca `google-adsense-account` meta etiketi). [Kesin]

**K-09 Analitik.** Seçenekler: GA4, kendi barındırdığı analitik, yok. Seçim: yok (çerez/rıza yükü ve gizlilik metni sadeliği; GSC yeterli). Değişim: sahibi GA4 isterse Consent Mode v2 ile eklenir (C04). [Kesin]

**K-10 Fotoğraflar.** Seçenekler: (a) eski 73 stok foto, (b) Unsplash/Pexels/Wikimedia'dan yeni, (c) özgün SVG veri grafikleri. Kanıt: eski fotoğrafların hiçbirinde kaynak/lisans kaydı yok (src/data/stock.ts yalnızca alt metni içeriyor); shell ağ izni görsel kütüphanelerine kapalı, WebFetch ikili dosya indiremiyor, Wayback engelli. Seçim (c) + (a) tamamen kaldırıldı. Risk: talimattaki "gerçek fotoğraf" hedefi karşılanmadı. Değişim: kullanıcı lisans kanıtıyla fotoğraf eklerse `data/images.json` + görsel kapısıyla eklenir. [Kesin]

**K-11 Yazar/yayıncı bilgisi.** Repodaki src/config.ts: yayıncı "HR Express", editör "Muhammet Ali Türk", e-posta contact@fbatactics.com, AdSense ca-pub-9985150163567506. Biyografi ve sertifika iddiaları doğrulanamadığından sayfaya konmadı. `ownerConfirmed=false` → yayın kapısı kapalı. [Kesin]

**K-12 YZ içerik açıklaması.** Kaynak: Google Search AI-generated content rehberi (B06): değer katmayan ölçekli üretim spam; "nasıl üretildi" bağlamı önerilir. Seçim: About ve Editorial sayfalarında açık beyan; her iddia kayıt defterinde ve bağımsız doğrulanmış. [Kesin]

**K-13 Reklam yerleşimi.** Yalnızca rehber ve pazaryeri sayfalarında, en fazla 2 birim (makale sonu, kaynaklardan önce), "Advertisement" etiketi, 280px rezerve yükseklik (CLS). 404, yasal, araç, dizin sayfalarında yok. Kaynak: A-bölümü kuralları. [Kesin]

**K-14 Doğrulama yöntemi.** WebFetch içerikleri küçük bir modelle özetlediği için "kanıt" alanları bazı yerlerde birebir alıntı değil. Önlem: her iddia üretenden ayrı ajan tarafından yeniden açıldı; doğrulayıcı eklediği iddiayı kendisi onaylayamaz (CI kapısı) — bunlar üçüncü bir geçişle imzalandı. Kalan risk DENETIM_RAPORU'nda. [Olası]
