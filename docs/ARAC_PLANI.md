# ARAÇ PLANI (oturum envanteri, 2026-11-08)

| Araç | Durum | Kullanım |
|---|---|---|
| Shell (Node 22, npm, Python 3.13, git) | ✔ | Derleme, CI kapıları, envanter betikleri, OG görsel üretimi (sharp) |
| Shell internet | ✘ (yalnızca npm/PyPI/GitHub git okuma) | npm paketleri; `git ls-remote` ile Actions SHA'ları |
| WebFetch | ✔ (bazı .gov ve Seller Central engelli/JS) | Tüm birincil kaynak araştırması ve doğrulaması |
| WebSearch | ✔ | Yalnızca resmi URL bulmak için |
| Tarayıcı (Claude in Chrome / yerleşik) | ✘ bağlı değil (kullanıcı "tarayıcısız devam" dedi) | — JS sayfaları, Trends, ekran görüntüsü QA yapılamadı |
| GitHub API (gh) | ✘ bu repo için yetki yok | — |
| Git klon (holyroin-create/hrsellers) | ✔ okuma | Mevcut site kaynağı, URL envanteri |
| Alt ajanlar | ✔ | Ekip: politika araştırmacısı (P1), 6 yazar (W1–W6), 7 bağımsız doğrulayıcı (V1–V7) |
| Görsel arama/indirme | ✘ ikili indirme yok | Fotoğraf kullanılamadı (K-10) |
| Artifact/Docs araçları | ✔ | Kullanılmadı: teslim ZIP + dosya (talimat) |
| Bellek | ✔ | Proje bağlamı (repo adı, AdSense geçmişi) |

Ekip ve kabul kriterleri:
- P1 Politika: POLITIKA_KONTROL_LISTESI.md — her kural resmi URL + test. ✔
- W1–W6 Yazarlar: CONTENT_CONTRACT.md; her olgu iddia kaydında, birincil kaynak. Üreten onaylayamaz.
- V1–V7 Doğrulayıcılar: üretimi görmemiş; her kaynağı yeniden açar; red → metinden çıkar. Raporlar docs/verification/.
- Ana yürütücü (ben): mimari, tasarım, CI kapıları, envanter, entegrasyon; doğrulayıcıların eklediği iddiaların ikinci imzası.
