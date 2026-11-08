# YAYIN SONRASI 90 GÜNLÜK PLAN

Gün 0 = siteyi GitHub Pages'te canlıya aldığınız gün.

## Gün 0–7: geçiş ve dizin
- README adım 4–5: DNS, HTTPS, Search Console site haritası.
- GSC → Sayfalar raporu: yeni 26 içerik sayfasının "Dizine eklendi"ye geçişini izleyin; kaldırılan 93 URL "Bulunamadı (404)" görünecek (beklenen). 11 yönlendirme "Yönlendirmeli sayfa" görünecek (beklenen).
- Actions'ta ilk haftalık kaynak kontrol işinin (pazartesi) issue açıp açmadığına bakın.

## İçerik takvimi (haftada 1–2 sayfa — toplu yükleme yok)
Her yeni/geri dönen sayfa CONTENT_CONTRACT'a göre: yazım → farklı kişi/ajan doğrulaması → CI. Öncelik sırası (kaldırılan URL'ler aynı adresle geri döner):
| Hafta | URL | Birincil kaynak planı |
|---|---|---|
| 1 | /guides/hts-classification-basics/ genişletme: GRI metni | USITC HTS General Rules PDF (tarayıcıdan) |
| 2 | /guides/gs1-barcodes-fnsku/ | gs1us.org (fetch testi gerekli) |
| 3 | /guides/brand-registry-trademark/ | uspto.gov, 37 CFR (eCFR) |
| 4 | /guides/sales-tax-nexus/ | Eyalet gelir idaresi siteleri, tek tek |
| 5 | /guides/supplier-payment-terms/ → yalnızca UCC/resmi kaynak varsa; yoksa çıkarılmış kalsın | — |
| 6 | /guides/freight-modes/ | 46 CFR (eCFR), FMC |
| 7 | /guides/qc-inspections/ | yalnızca birincil standart varsa |
| 8–12 | Amazon FBA ücret rehberleri (fba-storage-four-layers, low-inventory-level-fee, inbound-placement…) | Seller Central yardım sayfaları — ancak tarayıcıyla açılıp doğrulanırsa; aksi halde yayınlanmaz |
Her hafta: politika günlüğüne Federal Register API'den (CBP/USTR/ITA) 1–3 yeni kayıt.

## Doğrulama ve lisans döngüsü
- Haftalık: `weekly-sources.yml` — ölü kaynak, 120 günü geçen iddia, görsel lisans URL'leri; issue açar.
- Aylık: pazaryeri ücret sayfalarını (Amazon, Walmart, eBay, Etsy, Shopify) yeniden açın; değişiklikte iddiayı + cümleyi + `lastVerified` + `data/corrections.json` güncelleyin.
- Ekim başı: CBP MPF yıllık ayarlama bildirimi (yeni mali yıl) → `tool-tariff-stack-estimator` iddiaları ve `data/tool-rates.json`.
- Ocak: IRS Yayın 334 yeni revizyonu → accrual-accounting-cogs.

## İzleme
- GSC: gösterim/tıklama sorgu kümeleri (NIS_KARARI'nda ölçülemeyen talep verisi burada oluşur — gün 60'ta niş puanlamasını bu veriyle yeniden yapın).
- Lighthouse CI her dağıtımda; Core Web Vitals raporu (GSC) yeterli trafik olunca.
- AdSense: başvuru durumu, ads.txt durumu.

## AdSense başvurusu ve olası ret
- Başvuru: canlıya alıştan en erken 2–3 hafta sonra, CMP mesajı yayında (`googleCmpConfigured: true`).
- Ret gelirse kök neden analizi:
  1. Ret gerekçesini AdSense "Politika merkezi"nden birebir kopyalayın.
  2. POLITIKA_KONTROL_LISTESI.md'deki ilgili bölümü (A: içerik/yerleşim, B: kalite/spam, C: rıza, E: gizlilik) satır satır yeniden işaretleyin.
  3. "Düşük değerli içerik" ise: dizinlenmiş sayfa sayısı (GSC), sayfa başına özgün katkı (hesap, tablo, karar akışı), ince/çakışan sayfalar; düzeltme = birleştirme ve derinleştirme, sayfa sayısını şişirmek değil.
  4. "Gezinme/erişilebilirlik" ise: 404, yönlendirmeler, menü, mobil görünüm.
  5. Düzeltmeleri `data/corrections.json`'a değil commit geçmişine kaydedin; en az 2 hafta yeni içerikle bekleyip yeniden başvurun.
- Kimse onayı garanti edemez.
