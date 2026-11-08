# TASARIM ANALİZİ

## Girdi
- Sahibin ilk istemindeki tarz ve sonradan gönderilen 3 referans arayüz (lojistik/kurumsal hizmet siteleri: büyük fotoğraflı kahraman alanı, lacivert + turuncu vurgu, kahramanın üzerine binen özellik şeridi, kart ızgaraları, sayılar panosu, koyu CTA bandı).
- v2 eleştirisi: görsel yok, düz metin blokları, kurumsal güven hissi zayıf, hiyerarşi belirsiz.

## Referanslardan çıkarılan kalıplar → v3 uygulaması
| Referans kalıbı | Neden işe yarıyor | v3'te |
|---|---|---|
| Tam genişlik fotoğraflı kahraman + koyu degrade örtü | Anında konu ve güven sinyali; beyaz başlık okunur | `.hero` liman fotoğrafı + lacivert degrade, H1 + iki CTA |
| Kahramanın altına binen 5 ikonlu özellik şeridi | Değer önerisini taranabilir kılar | `.features` (Primary sources, Second reader, Dated, Calculators, No affiliate) |
| İki sütunlu tanıtım + koyu zaman çizelgesi kartı | Hikâye + güncellik bir bakışta | `.duo` → `.promo` + `.darklog` (policy-log son kayıtlar) |
| Fotoğraflı hizmet kartları | Kategorileri görselle eşler | `.pillars` 4 sütun kartı, sayfa sayısı rozeti |
| Sayılar panosu | Somut veri = otorite | `.numbers` → doğrulanmış key-numbers.json |
| Koyu araç bandı | Etkileşimli değeri öne çıkarır | `.tools-grid` lacivert kartlar |
| SSS akordeonu + CTA bandı | Arama niyetini yakalar, sayfayı kapatır | `.faq` (site-faq.json) + `.cta-banner` |
| Makale: 2 sütun başlık + fotoğraf, yapışkan içindekiler | Uzun içerikte yön bulma | `art-hero`, `.keyfacts`, sticky TOC, side-tools |

## Bilinçli sapmalar
- Referanslardaki stok "ekip/insan" fotoğrafları kullanılmadı (yüz yasağı).
- Turuncu yalnızca dekoratif; metin ve buton zemini için WCAG gereği koyu turuncu #cf4c0a.
- Kahraman kaydırıcı/karusel yok (CLS, erişilebilirlik).
- Reklam alanları içerik akışını bölmeyecek şekilde yalnızca makale sonu ve kenar çubuğunda planlandı.

## QA
Headless Chrome ekran görüntüleri: masaüstü 1440 ve mobil 390 genişlikte ana sayfa, rehber, hub, araç ve yasal şablon (`scripts/shot.sh`).
