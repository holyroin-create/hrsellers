# PROJE DURUMU — 2026-11-08

## Özet
v3 sıfırdan kuruldu. Kod, içerik, görseller ve belgeler hazır; **yayın yalnızca sahip bilgileri girilince açılır** (RELEASE kapısı).

| Alan | Durum |
|---|---|
| Sayfalar | 66 HTML: 30 rehber, 5 pazaryeri ücret sayfası, 6 araç, referans/hub, 9 güven-yasal sayfa, 404 + 14 yönlendirme sayfası |
| İddia defteri | 1.186 iddia, 1.186 `verified`, 0 reddedilen; üretici ≠ doğrulayıcı (13 doğrulayıcı geçişi) — docs/IDDIA_KAYIT_DEFTERI.csv/.json |
| Fotoğraflar | 49 gerçek fotoğraf (Unsplash License), 49 bağımsız lisans denetiminden geçti; 6'sı ilk denetimde reddedilip değiştirildi — data/images.json, docs/image-licenses/ |
| Kapılar (geliştirme modu) | claims 0 hata · images 0 hata · policy 0 hata · links 0 hata · html-validate 0 hata |
| Kapılar (RELEASE=1) | 37 hata — hepsi sahip bilgisi (aşağıda) |
| Eski URL'ler (153) | 50 aynı adreste, 14 konu eşdeğerine yönlendirme, 89 emekli (404) — docs/URL_ENVANTERI.csv |
| Reklam | Kapalı; CMP + onay + sayısal slot olmadan render edilmez |

## SAHİP BİLGİSİ BEKLİYOR (yayını engelleyen)
1. `site.config.json` → `editorName` (gerçek kişi), `publisherLocation`, `ownerConfirmed: true`; yayıncı adı AdSense hesap sahibiyle tutarlı olmalı.
2. Her sayfayı kaynaklarına karşı okuyan gerçek kişi → 35 dosyaya `reviewedBy` + `reviewedDate`.
3. contact@fbatactics.com posta kutusu testi.
4. GitHub deposu, Pages (Actions), DNS, HTTPS — README.

## Riskler
- ⚠ 178 Section 301 muafiyeti 9 Kasım 2026 23:59 EDT'de bitiyor; uzatma/sona erme 10 Kasım'da kontrol edilip 3 sayfa güncellenmeli.
- ⚠ 89 eski URL 404 olacak; bu sayfalardan gelen trafik kaybolur (alakasız yönlendirme soft-404 ve "sneaky redirect" riski taşıdığı için bilinçli tercih).
- ⚠ GitHub Pages koşulları ticari/reklamlı siteler için gri alan; dist/ başka statik barındırıcıya taşınabilir.
- ⚠ 35 sayfanın hepsi aynı gün yayımlanıyor; yeni sitede doğal, ancak sonraki içerik düzenli aralıklarla eklenmeli (90_GUN_PLANI).
- Seller Central, cbp.gov, ftc.gov, cpsc.gov bu ortamda okunamadı; bu kaynaklara dayanan konular (FBA lojistik ücretleri vb.) yazılmadı.

## Belgeler
NIS_KARARI · KARAR_GUNLUGU · POLITIKA_KONTROL_LISTESI · ICERIK_PLANI · URL_ENVANTERI.csv · IDDIA_KAYIT_DEFTERI · TASARIM_ANALIZI · TASARIM_SISTEMI · ARAC_PLANI · DENETIM_RAPORU · 90_GUN_PLANI · PROJE_DURUMU · README · verification/ (doğrulayıcı raporları) · image-licenses/ (49 lisans kanıtı)
