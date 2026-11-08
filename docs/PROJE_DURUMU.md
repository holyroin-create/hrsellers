# PROJE DURUMU — 2026-11-08

Durum: **SAHİP BİLGİSİ BEKLİYOR** (teknik ve içerik işleri tamam; yayın kapısı bilinçli olarak sahibin 3 adımını bekliyor).

## Biten
- [x] 1.2 Araç keşfi → ARAC_PLANI.md
- [x] 2 URL envanteri (153 URL) → URL_ENVANTERI.csv/.json; eski repo `holyroin-create/hrsellers` @ dbab6825 incelendi
- [x] 3 Niş kararı → NIS_KARARI.md (talep verisi ölçülemedi — gerekçesi içinde)
- [x] 4 Politika araştırması → POLITIKA_KONTROL_LISTESI.md (51 kural, 53 kaynak) + policy-sources.json
- [x] 5 İçerik planı → ICERIK_PLANI.md
- [x] 6 Mimari: Astro 7.4.7, GitHub Actions → Pages, SHA-sabitli eylemler, Dependabot, 6 CI kapısı + haftalık kaynak işi
- [x] 7 Tasarım → TASARIM_ANALIZI.md, TASARIM_SISTEMI.md
- [x] 8 Görseller: özgün SVG hero/grafikler, OG PNG üretimi, görsel manifesti + kapısı
- [x] 9 İçerik: 21 rehber + 5 pazaryeri sayfası + 5 hesaplayıcı + quiz + sözlük + politika günlüğü + yasal/güven sayfaları
- [x] 10 Bağımsız denetim → DENETIM_RAPORU.md (+ A1, V2–V9)

## Açık (sahip)
1. `site.config.json`: yayıncı/editör/e-posta güncelliğini onayla → `ownerConfirmed: true`.
2. 26 içerik sayfasını oku; her MDX ön-maddesine `reviewedBy: "Ad Soyad"`, `reviewedDate: "YYYY-MM-DD"`.
3. contact@fbatactics.com posta kutusunu test et.
4. README adımları 2–6 (repo, Pages, DNS, Search Console, AdSense).

## Oturumda yapılamayan (neden)
- Gerçek fotoğraf: görsel kütüphanelerine ağ erişimi yok, ikili indirme yok.
- Wayback arşiv kopyaları: web.archive.org engelli → haftalık iş yapacak.
- Dış bağlantı canlılık ve Lighthouse: shell çevrimdışı → GitHub Actions'ta çalışır.
- Tarayıcıyla çok cihazlı ekran görüntüsü QA: tarayıcı bağlı değil.
- Talep/CPC verisi (Trends, Keyword Planner, GSC): erişim yok.
- Seller Central'a dayanan FBA ücret rehberleri: sayfalar yalnızca JS ile açılıyor → doğrulanamadı, yayından kaldırıldı.

## Devam etmek için
Yeni oturumda: bu dosya + KARAR_GUNLUGU.md + CONTENT_CONTRACT.md + 90_GUN_PLANI.md okunur; `npm ci && npm run check` ile durum görülür.
