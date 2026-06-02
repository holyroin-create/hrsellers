# HRSellers — Kurulum ve Bakım Kılavuzu

Bu klasör, **fbatactics.com** üzerinde yayınlayacağın HRSellers web sitesinin
tam kaynak kodudur. Aşağıdaki adımları sırayla takip et.

Site teknolojisi: **Astro** (statik site) — hızlı, SEO dostu, ücretsiz barındırma.
Toplam **35 sayfa**: ana sayfa, 7 platform sayfası, 8 rehber, 3 araç incelemesi,
kaynaklar, hakkımızda, iletişim, editöryel standartlar ve 4 yasal sayfa.

---

## BÖLÜM A — YAYINA ALMA (tek seferlik)

> Domain (fbatactics.com) ve Cloudflare hesabın zaten var. GitHub Desktop
> yöntemiyle gidiyoruz — sürükle-bırak klasör hatası bir daha yaşanmaz.

### 1. GitHub Desktop kur
- `desktop.github.com` → indir, kur, GitHub hesabınla giriş yap.

### 2. Yeni depo oluştur (temiz başlangıç)
- Eski/bozuk `fba-site` deposu varsa GitHub'da Settings → en alt → Delete ile sil.
- GitHub Desktop: **File → New Repository** → isim: `hrsellers` → bir klasör seç → Create.

### 3. Bu dosyaları depoya kopyala
- Bu klasörün **içindeki her şeyi** (src/, public/, package.json, astro.config.mjs,
  package-lock.json) GitHub Desktop'ın oluşturduğu klasöre yapıştır.
- GitHub Desktop'ta: commit mesajı yaz → **Commit to main** → **Publish repository**
  (Private işaretli kalabilir).

### 4. Cloudflare Pages'e bağla
- `dash.cloudflare.com` → **Compute → Workers & Pages → Create → Pages →
  Connect to Git**.
- ⚠️ Mutlaka **Pages** sekmesini seç (Workers DEĞİL).
- Depoyu (`hrsellers`) seç → **Begin setup**.
- Ayarlar:
  - **Framework preset:** Astro
  - **Build command:** `npm run build`
  - **Build output directory:** `dist`
- **Save and Deploy.** 1-2 dakikada `...pages.dev` adresinde yayında olur.

### 5. fbatactics.com'u bağla
- Pages projen → **Custom domains → Set up a custom domain** → `fbatactics.com`
  → Continue → Activate. Birkaç dakikada HTTPS dahil hazır olur.

### Güncelleme nasıl yapılır (bundan sonra)
Bir dosyayı değiştirince: GitHub Desktop → Commit → **Push origin**. Cloudflare
otomatik yeniden derler. Başka hiçbir şey yapmana gerek yok.

---

## BÖLÜM B — YAYINA ALMADAN ÖNCE YAPILACAKLAR ✅

Site teknik olarak hazır, ama canlıya çıkmadan önce şu 5 maddeyi tamamla:

### 1. İletişim e-postasını değiştir
- Şu an `hello@fbatactics.com` (örnek). Gerçek e-postanı şu dosyalarda değiştir:
  `src/pages/contact.astro`. Kendi adresini yaz.

### 2. İletişim formunu bağla (şu an DEMO)
- Form şu an çalışmıyor (sadece görsel). Ücretsiz bir form servisi öner:
  **Formspree** (formspree.io) veya **Web3Forms** — ücretsiz planları var.
  Kayıt ol, sana bir "endpoint" verir, `contact.astro` içindeki `<form>` etiketine
  eklersin. Ya da en basiti: formu kaldırıp sadece e-posta adresi bırak.

### 3. "Visit" butonlarını affiliate linklerinle değiştir
- Şu an araç "Visit" butonları araçların **resmi sitelerine** gidiyor (çalışıyor).
- Helium 10, Jungle Scout vb. affiliate programlarına kabul edilince, sana özel
  affiliate linkini şu dosyalarda `url:` alanına yapıştır:
  - `src/data/reviews.mjs` (her aracın `url:` satırı)
  - `src/data/resources.mjs` (her aracın `url:` satırı)
- Böylece tıklamalar senin komisyonunu kazandırır.

### 4. Yasal sayfaları gözden geçir
- Privacy, Terms, Affiliate Disclosure, Cookie Policy **genel şablondur**.
- Ben avukat değilim. Kendi ülkene/şirketine göre uyarla, e-postanı gir, mümkünse
  bir hukukçuya kontrol ettir. Dosyalar: `src/pages/privacy.astro`, `terms.astro`,
  `affiliate-disclosure.astro`, `cookie-policy.astro`.

### 5. Affiliate programlarına başvur
- Şu an 11 içerik var (8 rehber + 3 inceleme). Çoğu program 10+ kaliteli içerik
  ister — yani hazırsın.
- Sıra: önce recurring komisyonlu SaaS (Helium 10 ~%25, Jungle Scout %25-30,
  AMZScout %30), sonra içerik biraz daha artınca Amazon Associates.
- ⚠️ Amazon Associates: onaydan sonra **180 günde en az 3 satış** şart, yoksa
  hesap kapanır. Trafik gelmeye başlayınca başvur.

---

## BÖLÜM C — DİL ÇEVİRİSİ HAKKINDA (önemli not)

- Üstteki dil seçici **6 dili** destekler (English + 中文 + Español + العربية +
  Português + Türkçe) ve Google'ın ücretsiz çeviri altyapısını kullanır.
- **HRSellers markası ve mağaza isimleri (Amazon, eBay vb.) çeviride aynı kalır** —
  `notranslate` ile korundu.
- ⚠️ İki not:
  1. Bu **makine çevirisidir** — kalite mükemmel değildir ama anlaşılırdır.
  2. Çeviri sadece **canlı sitede** (internette) çalışır; bilgisayarda çift tıkla
     açtığın önizlemede internet/Google bağlantısı olmadığı için çalışmayabilir.
- İleride bir dile yoğun trafik gelirse, o dilde **elle yazılmış** içerik en iyisidir
  (makine çevirisinden kaliteli). O zaman bana söyle, kurarız.

---

## BÖLÜM D — İÇERİK EKLEME (kendi başına)

### Yeni REHBER (guide) eklemek
- Dosya: `src/data/guides.mjs`. `guides` listesine yeni bir nesne ekle.
- İçerik "blok" sistemiyle yazılır. Kullanabileceğin blok türleri:
  - `{ type: 'p', text: '...' }` — paragraf
  - `{ type: 'h2', text: '...' }` — başlık
  - `{ type: 'callout', variant: 'tip'|'warning'|'info', title:'...', text:'...' }`
  - `{ type: 'steps', items: [{title:'...', text:'...'}] }` — numaralı adımlar
  - `{ type: 'checklist', items: ['...','...'] }` — onay listesi
  - `{ type: 'table', caption:'...', headers:[...], rows:[[...]] }` — tablo
  - `{ type: 'flow', label:'...', steps:['...','...'] }` — akış şeması
  - `{ type: 'keynum', items:[{num:'60', label:'...'}] }` — vurucu istatistik
- `category` alanı şunlardan biri olmalı: getting-started, shipping-logistics,
  fees-reimbursements, account-management, scaling.
- Kaydet → GitHub Desktop → Commit → Push. Sayfa otomatik oluşur.

### Yeni İNCELEME (review) eklemek
- Dosya: `src/data/reviews.mjs`. Mevcut Helium 10 nesnesini örnek al.

### Platform / araç verisi düzenlemek
- Platformlar: `src/data/marketplaces.mjs`
- Kaynaklar dizini: `src/data/resources.mjs`

---

## BÖLÜM F — YÖNETİCİ PANELİ (/admin) KURULUMU

Artık sitende **/admin** adresinde gerçek bir yönetici panelin var. Giriş
**GitHub hesabınla** yapılır (şifre koda gömülü DEĞİL = güvenli). Panelden
rehberleri, araç incelemelerini ve ana sayfa/hakkımızda metinlerini güzel bir
formda düzenleyebilirsin. Kaydedince Cloudflare siteyi otomatik yeniden yayınlar.

> Neden GitHub girişi? Statik sitede sabit kullanıcı adı/şifre güvenli değildir
> (herkes kaynak koddan görebilir). GitHub girişi seni gerçekten korur ve panele
> sadece SENIN GitHub hesabın (depoya erişimi olan) girebilir.

Çalışması için tek seferlik 5 adım (15 dk). Sırayla yap:

### Adım 1 — GitHub OAuth App oluştur
1. github.com → sağ üst profil → **Settings** → en altta **Developer settings**
   → **OAuth Apps** → **New OAuth App**.
2. Şunları gir:
   - Application name: `HRSellers CMS`
   - Homepage URL: `https://fbatactics.com`
   - Authorization callback URL: `https://ESKI-DEGER.workers.dev/callback`
     (şimdilik böyle yaz; Adım 3'te worker adresini alınca düzelteceğiz)
3. **Register application** → açılan sayfada **Client ID**'yi kopyala.
   **Generate a new client secret** → **Client secret**'i de kopyala.
   (Bu ikisini bir yere not et; secret bir daha gösterilmez.)

### Adım 2 — Cloudflare Worker oluştur (giriş köprüsü)
1. dash.cloudflare.com → **Compute → Workers & Pages → Create → Create Worker**.
2. Bir isim ver (örn: `hrsellers-cms-auth`) → **Deploy** (varsayılan kodla).
3. **Edit code** → açılan editördeki her şeyi sil → bu paketteki
   **cloudflare-oauth-worker.js** dosyasının içeriğini yapıştır → **Deploy**.
4. Worker'ın adresini not et: `https://hrsellers-cms-auth.<senin>.workers.dev`

### Adım 3 — Worker'a gizli değişkenleri ekle
1. Worker sayfası → **Settings → Variables and Secrets** (veya "Variables").
2. İki değişken ekle (tipi "Secret/Encrypt" olsun):
   - `GITHUB_CLIENT_ID`     = (Adım 1'deki Client ID)
   - `GITHUB_CLIENT_SECRET` = (Adım 1'deki Client Secret)
3. **Save / Deploy**.
4. Şimdi GitHub'a geri dön (Adım 1'deki OAuth App) → **Authorization callback URL**
   alanını gerçek worker adresinle güncelle:
   `https://hrsellers-cms-auth.<senin>.workers.dev/callback` → **Update application**.

### Adım 4 — Panel ayarını güncelle (config.yml)
`public/admin/config.yml` dosyasında iki satırı kendine göre düzelt:
   - `repo: holyroin-create/hrsellers` → kendi `GitHubKullanıcıAdın/depoAdı`
   - `base_url: https://BURAYA-WORKER-ADRESI.workers.dev`
     → `https://hrsellers-cms-auth.<senin>.workers.dev` (worker adresin, /callback OLMADAN)
Kaydet → GitHub Desktop → Commit → Push. (Cloudflare otomatik yayınlar.)

### Adım 5 — Panele gir
- Tarayıcıda `https://fbatactics.com/admin` aç.
- **Login with GitHub** → GitHub izni → panel açılır.
- Soldaki bölümler: **Rehberler**, **Araç İncelemeleri**, **Sayfa Metinleri**.
  Birine tıkla → bir içeriği aç → düzenle → sağ üst **Publish → Publish now**.
- Birkaç dakika içinde değişiklik canlı sitede görünür.

### Panel ne yapabilir / yapamaz
- ✅ Rehber ekle/düzenle/sil (paragraf, başlık, bilgi kutusu, adımlar, tablo,
  akış şeması, istatistik, onay listesi blokları — sürükleyip sıralayabilirsin).
- ✅ Araç incelemesi ekle/düzenle (puan barları, fiyat planları, artı/eksi…).
- ✅ Ana sayfa hero + Hakkımızda metinlerini düzenle.
- ℹ️ Platform (marketplace) ücret tabloları ve yasal sayfalar şimdilik panelde
  değil; bunları GitHub'dan ya da dosyadan düzenlersin. İstersen sonra panele
  eklenebilir (bana "marketplace'leri de panele ekle" demen yeterli).

### Sorun giderme
- "Login with GitHub" sonrası boş/hatalı sayfa → genelde callback URL yanlış
  ya da worker değişkenleri eksiktir (Adım 1 callback ve Adım 3'ü kontrol et).
- Panel açılıyor ama "config" hatası → config.yml'deki repo/base_url'i kontrol et.
- base_url'de SONUNDA /callback OLMAMALI; sadece worker kökü olmalı.

---

## BÖLÜM E — NELER YAPILDI (özet)

✅ Kurumsal, sade, profesyonel tasarım (satis.amazon.com.tr referansında)
✅ HR harfli logo + sabit "HRSellers" yazısı (her yerde tutarlı)
✅ Üst menüde 6 buton, hepsinde açılır menü + aşağı ok
✅ 6 dilli dil seçici (özel isimler korunarak)
✅ 7 platform sayfası — akış diyagramları + güncel 2026 ücret tabloları
✅ 8 rehber — diyagramlar, tablolar, callout'lar, adımlar (güncel veriyle)
✅ 9 araç incelemesi — 4 kategoride (Research, Reimbursement, Repricing,
   Accounting); puanlama, fiyat kartları, "Visit" butonları çalışıyor
✅ Her sayfanın altında "Full reviews" aracı keşif bölümü
✅ Kaynaklar dizini (12 araç), Hakkımızda, İletişim, Editöryel Standartlar
✅ 4 yasal sayfa (şablon)
✅ Diller artık SADECE dil değiştirince yükleniyor → sayfalar yine hızlı
✅ Mobil uyumlu, hızlı, SEO dostu
✅ /admin yönetici paneli — GitHub ile güvenli giriş, formdan içerik düzenleme
✅ İçerik artık JSON'da (panel-dostu); site görünümü birebir aynı
✅ Tüm iç linkler kontrol edildi — kırık link yok (41 içerik sayfası + /admin)

Başarılar! Sorun yaşarsan hangi adımda olduğunu söyle, yardımcı olurum.
