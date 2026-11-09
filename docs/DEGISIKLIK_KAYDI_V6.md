# Değişiklik kaydı v6 (9 Kasım 2026)

Hiçbir URL veya slug değişmedi. Yalnızca bir yeni sayfa eklendi: /articles/.

## 1. Resmî rakamın olmadığı yerde uydurma rakam yerine formül ve çerçeve

| URL | Değişiklik |
|---|---|
| /marketplaces/aliexpress/ | %5/%8 varsayımlı örnek kaldırıldı; yerine r değişkenli örnek kondu. Yeni bölüm eklendi: sözleşmenin oran hakkında belirlediği noktalar, 7 maliyet kalemi (her biri ilgili maddeye bağlı), "ürünün kaldırabileceği azami komisyon" formülü ve oran değişikliği karar tablosu. |
| /guides/narf-canada-mexico/ | Uydurma US$11.50 kaldırıldı. Yerine hedef mağaza fiyat formülü kondu: (P(1−r_US) − F + R) ÷ (1−r_D). |
| /guides/removal-vs-hold-decision/ | Uydurma kaldırma, tasfiye ve imha ücretleri ile tasfiyeci ödemesi kaldırıldı; yerine R, D, L, P ve S değişkenleri kondu. |
| /guides/fba-vs-fbm-breakeven/ | Uydurma $6.00 FBA ücreti yerine F değişkeni kondu. Eşik F = $4.84 (Ocak–Eylül) ve $4.52 (Ekim–Aralık). |
| /guides/inbound-placement-split-arithmetic/ | Uydurma $0.30 yerleştirme ücreti yerine başabaş ücreti kondu: $0.50 ve $0.375. |
| /guides/vendor-central-vs-seller-central/ | Uydurma vendor fiyatı ve allowance kaldırıldı; yerine kabul edilebilir asgari alış fiyatı formülü kondu. |
| /guides/reimbursement-recovery-services/ | Uydurma %20 hizmet ücreti yerine f değişkeni kondu. |
| /guides/fbt-fixed-dollar-problem/ | Varsayılan FBA ücretleri ve 2024'e ait $0.77 kaldırıldı; yerine F₁, F₃ ve δ değişkenleri kondu. |
| /guides/product-research-cost-errors/ | Varsayılan $5.00 FBA ücreti yerine F değişkeni kondu. Kâr formülü: $12.24 − F. |
| /marketplaces/tiktok-shop/ | Varsayılan %10 rezerv yerine s değişkeni kondu. |
| /guides/ipi-restock-limits/ | Kamuya açık eşik eklendi: New Selection için IPI ≥ 300. Yeni bölüm: formülü yayımlanmamış skoru yönetme. |
| /guides/amazon-renewed/ | Yeni bölüm: indirimli oran yayımlanmamışken standart orana göre taban fiyat. |
| /guides/amazon-business-b2b/ | Yeni bölüm: FEE_DISCOUNTS_REPORT ile efektif oranı ölçme ve miktar indirimi cebiri. |
| /guides/vine-and-early-reviews/ | Vine birimlerinde FBA ücretinin uygulanıp uygulanmadığı bilinmediği için ihtiyatlı bütçe formülü eklendi. |
| /guides/aplus-content-brand-tools/ | Onay süresi yayımlanmadığı için planlama yöntemi eklendi. |

## 2. Tarihe bağlı sayfalar (tarih geçince de doğru kalacak şekilde)

| URL | Değişiklik |
|---|---|
| /guides/section-301-china-tariffs/ | Metin ve KeyFact geçmiş zamanda da doğru okunacak şekilde yeniden yazıldı. Yeni bölüm: uzatma belirsizken sevkiyat fiyatlama. |
| /guides/country-of-origin-sourcing/ | KeyFact etiketi değiştirildi. |
| /reviews/a2x/ | "Altı gün sonra" ifadesi kaldırıldı. |
| /guides/q4-deal-deadlines-2026/ (noindex) | "Bu hafta" ve "şimdi" ifadeleri kaldırıldı. |

## 3. Arayüz

- **Yeni /articles/ sayfası:**
  - İndekslenebilir 106 makaleyi listeler; en son değiştirilen başta, ay başlıklarıyla gruplanmış.
  - Konuya göre filtrelenebilir; filtre #fees gibi bir bağlantıyla paylaşılabilir.
  - CollectionPage ve ItemList şeması var.
  - Reklam yok.
- **Header:** Ana menünün başına "Articles" bağlantısı eklendi; masaüstünde ve mobil menüde görünüyor. 981–1320 px arasındaki menü taşması düzeltildi.
- **Diğer bağlantılar:** /articles/ bağlantısı footer'ın "Use" sütununa ve HTML site haritasına eklendi.
- **Düzeltme kaydı:** data/corrections.json dosyasına 9 Kasım kaydı eklendi.

## 4. Kontrol

- Build tamamlandı: 152 sayfa.
- Kapıların hepsi 0 hata verdi: claims, images, policy (RELEASE=1), links ve html-validate.
- Bağımsız doğrulayıcı 11 kusur buldu: NARF cebiri, ters mantık ve fazla iddialı atıflar. Hepsi düzeltildi ve doğrulayıcı ikinci kez kontrol etti. İkinci kontrolde kalan tek atıf, doğrulayıcının gösterdiği claim (section-301-china-tariffs-28) ile değiştirildi.

## Değiştirilen dosyalar

- src/content altında, yukarıda listelenen 19 MDX dosyası
- src/pages/articles.astro (yeni)
- src/components/Header.astro
- src/components/Footer.astro
- src/pages/sitemap.astro
- src/styles/site.css (sona eklenen blok)
- tools/gate-policy.mjs (reklamsız sayfa listesine "articles" eklendi)
- data/corrections.json
