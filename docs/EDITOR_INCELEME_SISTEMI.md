# Editör inceleme sistemi

**Kural:** "Reviewed by Muhammet Ali TÜRK" ifadesi yalnızca `data/editor-reviews.json` dosyasında kaydı olan sayfada görünür. Kayıt yalnızca gerçek bir inceleme yapıldıktan sonra eklenir. Hiçbir ajan bu dosyaya kayıt eklemez.

## Nasıl çalışır
- Makale şablonu (`src/layouts/Article.astro`), sayfanın URL'si için kayıtlı en yeni incelemeyi okur:
  - **Kayıt varsa:** başlık altında "Editor: Muhammet Ali TÜRK · reviewed by Muhammet Ali TÜRK on <tarih>" görünür. Sayfa sonundaki kutuda da "…who reviewed this page against its sources on <tarih>" yazar.
  - **Kayıt yoksa:** kutuda "this page has not yet had a logged human review" yazar. Yani site bu durumu dürüstçe gösterir.
- Politika kontrolü (`tools/gate-policy.mjs`) her kaydı denetler: inceleyen `editorName` ile aynı olmalı, tarih geçerli ve ileri tarihli olmamalı, sayfa mevcut olmalı.
- Kayıt eklemek için: `node tools/log-review.mjs /guides/<slug>/ "kontrol edilenler / yapılan değişiklikler"`. Tarih otomatik olarak bugün yazılır.

## İnceleme kontrol listesi (her sayfa için ~20–30 dk)
1. Başlık ve özet, sayfanın gerçekten cevapladığı soruyla uyumlu mu?
2. "Key facts" kutusundaki her rakam: üst simgeye tıkla, kaynağı aç ve rakamın kaynakta aynen geçtiğini gör.
3. Gövdeden en az 5 iddiayı rastgele seçip kaynağında kontrol et.
4. İşlenmiş örnek (worked example): hesabı elle tekrar yap.
5. Pratik doğruluk: Parknes ve HR Express'teki operasyon deneyiminle çelişen veya eksik kalan bir yer var mı? Varsa bunu kaynaklı düzeltme talebi olarak not et. Kişisel deneyim cümlesi ekleme; site yalnızca kaynaklı bilgi yayımlar.
6. Dil: anlaşılmayan, tekrar eden veya dolgu gibi duran cümle var mı?
7. Sonuç: sorun yoksa kaydı ekle. Sorun varsa önce düzeltmeyi yaptır, sonra kaydı ekle ve düzeltmeyi `data/corrections.json` dosyasına yaz.

## Öncelikli çekirdek liste (35 sayfa)
Seçim ölçütleri: trafik potansiyeli (ücret ve gümrük nişi), YMYL ağırlığı, iddia sayısı.

| # | URL | Neden |
|---|---|---|
| 1 | /marketplaces/amazon/ | En çok aranan ücret sayfası |
| 2 | /guides/amazon-referral-fees/ | Kategori komisyon tablosu |
| 3 | /guides/amazon-fba-fee-changes-2026/ | 2026/2027 ücret değişiklikleri |
| 4 | /guides/fba-storage-four-layers/ | Depolama maliyeti |
| 5 | /guides/inbound-placement-split-arithmetic/ | Gönderi yerleştirme ücreti |
| 6 | /guides/fba-vs-fbm-breakeven/ | Karar sayfası |
| 7 | /guides/mcf-off-amazon-orders/ | MCF ücretleri |
| 8 | /marketplaces/walmart/ | Ücret tablosu |
| 9 | /marketplaces/ebay/ | Ücret tablosu |
| 10 | /marketplaces/etsy/ | Ücret tablosu |
| 11 | /marketplaces/shopify/ | Ücret tablosu |
| 12 | /guides/hts-classification-basics/ | Gümrük temeli |
| 13 | /guides/entry-type-11-vs-01/ | Giriş türleri |
| 14 | /guides/customs-bonds/ | Bono |
| 15 | /guides/customs-holds-and-exams/ | Gümrük beklemeleri |
| 16 | /guides/de-minimis-suspension-2026/ | Güncel düzenleme |
| 17 | /guides/section-321-repeal-2027/ | Güncel düzenleme |
| 18 | /guides/merchandise-processing-fee/ | MPF |
| 19 | /guides/tariff-stack-2026/ | Tarife yığını |
| 20 | /guides/section-301-china-tariffs/ | Tarih hassas |
| 21 | /guides/origin-marking-requirements/ | Uyum |
| 22 | /guides/incoterms-who-is-importer/ | İthalatçı sorumluluğu |
| 23 | /guides/first-sale-valuation/ | Kıymet |
| 24 | /guides/us-product-compliance/ | CPSC |
| 25 | /guides/shipping-lithium-batteries/ | Tehlikeli madde |
| 26 | /guides/review-manipulation-risk/ | FTC kuralı |
| 27 | /guides/sales-tax-nexus/ | Vergi |
| 28 | /guides/form-1099-k-marketplace-sellers/ | Vergi |
| 29 | /guides/account-suspension-appeal/ | Hesap sağlığı |
| 30 | /guides/buy-box-featured-offer/ | Satış |
| 31 | /guides/listing-disappeared/ | Sık sorun |
| 32 | /guides/amazon-stopped-prepping/ | 2026 değişikliği |
| 33 | /guides/launch-sequence/ | Yeni satıcı |
| 34 | /guides/product-research-cost-errors/ | Maliyet |
| 35 | /guides/supplier-verification/ | Tedarik |

Kalan sayfalar haftada 10–15 sayfa olacak şekilde incelenebilir. Bir sayfa incelenene kadar sitede "not yet had a logged human review" olarak görünür.
