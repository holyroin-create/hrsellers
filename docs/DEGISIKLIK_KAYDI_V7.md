# Değişiklik kaydı v7 (11 Kasım 2026)

Hiçbir URL, slug veya iddia (claim) değişmedi. Yeni sayfa yok. Kaynak dosyalar düzeltildi; ağ erişimi olmadığı için `npm run build` çalıştırılamadı, aynı değişiklikler `dist/` içindeki HTML'e birebir işlendi. İlk deploy'da GitHub Actions dist'i kaynaktan yeniden üretecek.

## 1. Gerçeğe aykırı / çelişkili ifadeler (politika riski)

| Yer | Sorun | Düzeltme |
|---|---|---|
| Ana sayfa, "How we check" | "a named reviewer signs off before release" — doğru değil: `data/editor-reviews.json` boş, hiçbir sayfa insan incelemesinden geçmedi. | AI ile taslak + ayrı otomatik kontrol olduğu; editörün okuduğu sayfaların bunu tarihle belirttiği yazıldı. |
| Ana sayfa, "How we check" | "No blogs, vendors or forums" — yazılım sayfaları satıcının kendi sayfasını kaynak gösteriyor; editoryal standartlarla çelişki. | "Vendors only for their own product and price" ifadesi eklendi. |
| /about/ | "Unsplash veya Wikimedia Commons" — `data/images.json` içindeki 123 fotoğrafın 123'ü Unsplash. | Yalnız Unsplash yazıldı. |
| /about/ | "worked at Parknes … and then founded HR Express" — iki görev tarihsel olarak çakışıyor (Ağu 2024–May 2025 / Oca 2025–Oca 2026). | "then" kaldırıldı, tarihler eklendi (yazar sayfasındaki tarihlerle aynı). |
| Tüm makale/hub kartları | Yeşil "Verified" etiketi, otomatik kontrolü insan doğrulaması gibi gösterebiliyordu. | "Sources checked" olarak değiştirildi. |
| Çerez bandı + /privacy/ + /cookie-policy/ | "Essential only" düğmesi, reklam açıkken de çerez kullanılmayacağı izlenimi veriyordu; kişiselleştirilmemiş reklamlar da sıklık sınırı, raporlama ve sahtekârlık önleme için çerez kullanır. | Düğmeler "Allow personalized ads" / "Non-personalized ads"; politikalara açıklama eklendi; tarihler 11 Kasım 2026. |

Üç kayıt `data/corrections.json` dosyasına ve /corrections/ sayfasına eklendi.

## 2. Teknik

| Sorun | Etki | Düzeltme |
|---|---|---|
| `Header.astro` betiği, düğmesi olmayan "Articles" `.nav-item` öğesinde `null.addEventListener` hatası veriyordu (v6'da eklenen bağlantı). | **Her sayfada JS hatası; mobil menü düğmesi ve masaüstü açılır menüler çalışmıyordu.** Başvuruda "net gezinme" şartını zayıflatır. | Öğeler düğmesi olanlarla filtrelendi. Playwright ile 19 sayfada 0 JS hatası; mobil menü ve açılır menü açılıyor. |
| Çerez bandı reklam kapalıyken de her ilk ziyarette açılıyordu ve var olmayan reklamlar için seçim istiyordu. | Kafa karıştırıcı UX, inceleme sırasında içerik üzerinde katman. | Bant yalnız `ADS_ON` iken kendiliğinden açılır; reklam kapalıyken yalnız footer'daki "Cookie settings" ile açılır ve durumu doğru anlatır. |
| Bant, Google CMP'nin (`__tcfapi`) yüklenmesini yalnız 800 ms bekliyordu. | EEA'da iki onay penceresinin üst üste çıkma riski. | 3 saniyeye kadar 500 ms aralıkla bekliyor. |
| Ana sayfa `<title>` 85 karakter. | Arama sonucunda kesilir. | "FBA Tactics: Marketplace fees and US import rules, sourced" (58). |
| 4 sayfada description > 165 karakter. | Kesilme. | /affiliate-disclosure/, /disclaimer/, /editorial-standards/, /checklists/ kısaltıldı. |

## 3. Kontrol

- claims 0 hata · images 0 · policy 0 (`RELEASE=1`) · links 0 (dist üzerinde).
- html-validate ve Lighthouse çalıştırılamadı (paketler kurulu değil, ağ kapalı); deploy.yml bunları CI'da çalıştırır.

## Değiştirilen dosyalar

src/pages/index.astro · about.astro · privacy.astro · cookie-policy.astro · affiliate-disclosure.astro · disclaimer.astro · editorial-standards.astro · checklists.astro · guides/index.astro · marketplaces/index.astro · reviews/index.astro · src/layouts/Article.astro · src/components/Consent.astro · src/components/Header.astro · data/corrections.json · dist/ (eşlenmiş) · docs/DEGISIKLIK_KAYDI_V7.md · docs/PROJE_DURUMU.md

## 4. Ek (11 Kasım 2026, ikinci tur): tarihler

| Dosya | Değişiklik |
|---|---|
| src/pages/articles.astro, src/styles/site.css | /articles/ artık konuya göre gruplanıyor; soldaki tarih sütunu kaldırıldı. Her satırda "Sources checked" tarihi kalıyor; makale sayfalarındaki "Updated" tarihi değişmedi. |
| tools/git-dates.mjs (yeni), package.json (prebuild) | Build sırasında her sayfanın `modified` tarihi, dosyayı **değiştiren** son git commit'inin tarihine çekilir (dosyayı ilk ekleyen commit sayılmaz; tarih geri alınmaz, uydurulmaz). Yalnız CI'da ve tam geçmişle çalışır. |
| .github/workflows/deploy.yml | checkout: `fetch-depth: 0` (tam git geçmişi). |

Eski yayın tarihleri hiçbir kaynakta bulunamadığı için `published` tarihleri (2026-11-08) değiştirilmedi. Not: dist/ bu tur için yeniden üretilmedi; GitHub Actions kaynaktan üretir.
