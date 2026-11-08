# DENETİM RAPORU (birleşik) — 2026-11-08

Ayrıntı: `DENETIM_RAPORU_A1.md` (bağımsız denetçi A1), `verification/verifier-V2…V9.md` (bağımsız doğrulayıcılar).

## 1. Olgu ve kaynak denetimi
- İddia kayıt defteri: **723 iddia, 722 verified, 1 rejected** (marketplace-walmart-04; metinden çıkarıldı). Kaynak alan adları: ecfr.gov 274, federalregister.gov 98, sell.amazon.com 98, marketplace.walmart.com 86, etsy.com 45, govinfo.gov 36, ebay.com 29, irs.gov 24, usitc.gov 17, shopify.com 16. Blog/vendor/forum kaynağı: 0.
- Her iddia üreten ajandan farklı bir doğrulayıcı tarafından yeniden açıldı (V2–V8); 72 iddia kaynak metnine göre düzeltildi (`verifier_note`). Doğrulayıcının eklediği/düzelttiği 2 iddia ana yürütücü tarafından ayrıca yeniden açılıp imzalandı (`lead-crosscheck`). CI kapısı `verified_by == produced_by` durumunu reddediyor.
- Hesaplamalar: tüm çalışılmış örnekler doğrulayıcılarca yeniden hesaplandı (ör. tarife yığını $1,697.14; drawback; COGS $139,000; Etsy/eBay/Amazon $25 örnekleri). Quiz cevap indeksleri, oran tablosu ve 119 ücret ön ayarı iddialarla eşleşiyor (A1).
- **Kalan risk (Orta):** WebFetch sayfaları küçük bir modelle özetleyerek döndürdüğü için bazı `evidence` alanları birebir alıntı değil, kaynak metnin parçalı/özet hali. Doğrulayıcılar bölüm-hedefli birebir sorgularla karşılaştırdı; yine de insan gözden geçirmesi (aşağıda H3) bu riski kapatacak son adım.
- **Kalan risk (Düşük):** `archive_url` alanları boş — web.archive.org bu oturumda engelliydi. Haftalık iş her kaynak için Wayback kaydı istiyor.

## 2. Görsel lisans denetimi
- Yayında fotoğraf yok; `data/images.json` boş; tüm grafikler özgün SVG/PNG (kodla üretilmiş). Eski sitenin 73 stok fotoğrafı lisans kaydı olmadığı için taşınmadı. Fontlar OFL 1.1, lisans dosyaları `public/fonts-licenses/`. Görsel kapısı: 0 hata.

## 3. AdSense politika denetimi (POLITIKA_KONTROL_LISTESI, 51 madde)
A1 sonucu: 35 karşılandı, 7 kısmen, 2 karşılanmadı (A09 reklam etiketi, B06 insan incelemesi), 7 oturumda doğrulanamaz (CMP, Search Console vb. — hesap tarafı). Düzeltmeler:
- A09: etiket "Advertisements"; reklam yeri kaynak listesinden ayrıldı (makale sonu notunun altı). ✔
- B06/A03: sayfa başına `reviewedBy`/`reviewedDate` alanı; bylinede "Reviewed by"; **yayın modunda CI, insan incelemesi kaydı olmayan sayfayı reddediyor**. → sahibin işi (açık).

## 4. Özgünlük
- Sayfalar arası en yüksek 5-shingle Jaccard benzerliği 0.143 (A1). Tekrarlanan kalıp "scope" notu 15 sayfada konuya özgü metinle değiştirildi. 10 rehbere karar tablosu / varsayımsal örnek / hata matrisi eklendi (W7); bağımsız gözden geçirmede (V9) 8 bölüm ve 9 kapsam notu iddiayı aşan ifadeler için düzeltildi, yeni olgu eklenmedi.

## 5. URL göçü
153 satırın tamamı derlemede doğru sonucu veriyor (A1: 0 uyumsuzluk). Son durum: YENİDEN YAZ 46, KORU 2, BİRLEŞTİR 9 (mutlak https hedefli meta refresh + canonical), KALDIR 96 (404). Değişiklikler: /news/ → /policy-log/ (A1 M4); 3 zayıf yönlendirme kaldırıldı (A1 L2).

## 6. Tasarım
Referanstan alınan: günlük merkezli ana sayfa, görev odaklı menü, arama, lacivert/turuncu karşıtlık. Alınmayan: logolar, stok portre, kart ızgarası, gradyan. Kontrast: tüm metin token'ları WCAG AA (A1). **Ekran görüntüsüyle çok cihazlı QA yapılamadı** (tarayıcı yok) — Lighthouse CI mobil emülasyonla dağıtımda çalışacak.

## 7. Teknik
Yerel kapılar: derleme ✔, HTML doğrulama 0 hata, iddia kapısı 0 hata, görsel kapısı 0 hata, iç bağlantı 0 kırık, politika kapısı 0 hata (yayın modunda 2 bilinçli engel: `ownerConfirmed`, `reviewedBy`). Dış bağlantı ve Lighthouse kapıları yalnızca GitHub Actions'ta (internetli) çalışır — **bu oturumda çalıştırılamadı**. Üçüncü taraf istek: 0 (reklam kapalıyken). Çerez/depolama: 0.

## 8. Simüle AdSense incelemecisi — açık maddeler
| # | Bulgu | Önem | Durum |
|---|---|---|---|
| H1 | 4 rehber doğrulanmamıştı | Yüksek | Kapandı (V8: 93/93) |
| H2 | Yayıncı/editör bilgisi sahibince doğrulanmadı (repoda "HR Express", "Muhammet Ali Türk") | Yüksek | **Açık — SAHİP BİLGİSİ BEKLİYOR** |
| H3 | Kayıtlı insan incelemesi yok | Yüksek | **Açık — sahibin 26 sayfayı okuyup `reviewedBy` yazması gerekiyor** |
| M9 | contact@fbatactics.com posta kutusunun çalıştığı doğrulanamadı | Orta | Açık — sahibin test etmesi |
| M1–M8, L1–L19 | Etiket, yerleşim, kaynak listesi, sözlük/günlük aşımları, özgün analiz, byline, düşük bulgular | — | Kapandı (L5'in "What to check yourself" başlığı bilinçli şablon olarak bırakıldı) |

## 9. Kullanıcı testi (persona senaryoları, işaretlemeden)
1. İthalatçı: arama "MPF" → /guides/tariff-stack-2026/ → /tools/tariff-stack-estimator/ (kaynaklı oranlar) → /guides/entry-type-11-vs-01/. ✔ bağlantılar mevcut.
2. İkinci kanal arayan: ana sayfa → Fees menüsü → /guides/ebay-etsy-for-amazon-sellers/ → /tools/margin-calculator/ (ön ayarlar) → /marketplaces/etsy/. ✔
3. Uyum riski: /start-here/ → /guides/origin-marking-requirements/ → karar tablosu → /guides/us-product-compliance/ → /quiz/. ✔
Gerçek tarayıcıda tıklama testi yapılamadı.

## Kapı sonucu
**Hazır değil — SAHİP BİLGİSİ BEKLİYOR.** Eksik: `site.config.json` → `ownerConfirmed` (+ yayıncı/editör adlarının güncelliği, isteğe bağlı adres ve biyografi); 26 içerik sayfasında `reviewedBy` / `reviewedDate`; contact@ posta kutusu testi. Bunlar tamamlanmadan GitHub Actions dağıtımı bilinçli olarak durur.
