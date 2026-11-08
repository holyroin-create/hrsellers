# DENETİM + ÇALIŞMA PLANI (v4) — 2026-11-08

Kapsam: dist/ (66 HTML + 13 yönlendirme), src/, data/, public/ taraması; önceki bağımsız denetim (DENETIM_RAPORU.md) ve politika listesi (POLITIKA_KONTROL_LISTESI.md) üzerine.

## A. Tespit edilen eksikler (tek liste)
| # | Eksik | Etkilenen URL / dosya | AdSense/kalite riski | Öncelik |
|---|---|---|---|---|
| 1 | Editör/yayıncı kimliği boş; "named reviewer" vaadi karşılıksız | tüm makaleler, /about/, /editorial-standards/, site.config.json | Yanıltıcı temsil, E-E-A-T | P0 |
| 2 | Yazar/Editör sayfası ve Person şeması yok | /author/… (yok) | E-E-A-T, şeffaflık | P0 |
| 3 | İletişim e-postası çalışan bir kutu değil (contact@ test edilmedi) | /contact/, footer, privacy | Sahiplik/iletişim | P0 |
| 4 | 89 eski URL 404 (73 rehber, 9 yazılım sayfası, /reviews/, 2 pazaryeri, /reality-check/) | URL_ENVANTERI.csv | İndeks kaybı, kırık iç/dış bağlantı | P0 |
| 5 | Affiliate açıklaması sayfası yok (/affiliate-disclosure/ yönlendirmeydi) | /affiliate-disclosure/ | Zorunlu açıklama | P0 |
| 6 | Çerez onay mekanizması yok (yalnız Google CMP planı) | tüm sayfalar | Gizlilik/onay | P0 |
| 7 | Organization şeması publisherName'e bağlı, Article author kurum; editor yok | Base/Article/index | Yapısal veri tutarlılığı | P1 |
| 8 | Kategori yapısı 4 sütun; Amazon operasyon konuları için kategori yok | /guides/, menü | Navigasyon | P1 |
| 9 | Gizlilik: sorumlu kişi/adres boş; çerez/yerel depolama beyanı eksik | /privacy/, /cookie-policy/ | AdSense gizlilik şartı | P1 |
| 10 | Kullanım şartlarında uygulanacak hukuk yok | /terms/ | Yasal sayfa bütünlüğü | P2 |
| 11 | Lisans/telif sahibi eski işletme adı | LICENSE*, footer | Tutarlılık | P2 |
| 12 | Hız ölçümü yapılmadı (Lighthouse yalnız CI'da) | 5 örnek URL | Kalite | P2 |
| 13 | Dış bağlantı kontrolü yapılmadı | tüm kaynak linkleri | Kırık link | P1 |
| 14 | Section 301 muafiyet tarihi 9 Kasım'da doluyor | 3 sayfa | Güncellik | P1 (10 Kasım) |

## B. Uygulama sırası
1. **Kimlik (P0):** site.config (editör, e-posta, yayıncı, konum, ownerConfirmed); /author/muhammet-ali-turk/ (yalnız CV bilgisi, ProfilePage+Person şeması); makale bylini "Edited by"; about ve editorial-standards metinleri gerçek sürece göre (AI destekli taslak + ayrı doğrulama + sorumlu editör). Sahte "her sayfayı okudu" iddiası yok.
2. **Zorunlu sayfalar (P0–P2):** /affiliate-disclosure/ gerçek sayfa; privacy (sorumlu, yerel depolama, AdSense maddeleri), cookie-policy (fbt-consent), terms (Türkiye hukuku), footer'da Editör, Affiliate, Cookie settings.
3. **Çerez onayı (P0):** Consent bileşeni (Accept all / Essential only, localStorage), reklam etkinse NPA bayrağı reklam betiğinden önce; Google CMP (EEA/UK/CH) varsa onun mesajı.
4. **Kategori (P1):** "Selling operations" sütunu, menüde Operations, /reviews/ dizini ("Seller software").
5. **Eski URL'ler (P0):** 85 sayfa aynı slug'la sıfırdan, yalnız birincil kaynakla (18 yazar ajanı, WRITER_BRIEF_V4.md); her sayfa ayrı doğrulayıcı ajanla iddia iddia kontrol; kaynak bulunamayan konu draft → en yakın konu sayfasına meta-refresh + canonical (URL 404 olmaz). /reality-check/ → /start-here/ yönlendirmesi; önceki 13 yönlendirme korunur.
6. **Görseller:** yeni sayfalarda önce doğrulanmış katalogdan uygun foto; ardından yeni Unsplash fotoğrafları + bağımsız lisans denetimi.
7. **Teknik (P1–P2):** şema (WebSite, Organization+founder, Article+editor, Person), sitemap/robots/ads.txt, kırık iç+dış link taraması, html-validate, Lighthouse (mobil), mobil ekran görüntüleri.
8. **Son denetim:** bağımsız AdSense simülasyon denetimi, bulguların kapatılması, belgeler (URL_ENVANTERI, IDDIA_KAYIT_DEFTERI, PROJE_DURUMU), ZIP.
