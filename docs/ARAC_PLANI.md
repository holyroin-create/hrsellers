# ARAÇ PLANI

Tüm araçlar istemci tarafında çalışır; girilen veri tarayıcıdan çıkmaz. Platform/devlet oranları yalnızca doğrulanmış iddialardan gelir ve sayfada kaynak etiketiyle gösterilir.

| Araç | URL | Veri kaynağı | Durum |
|---|---|---|---|
| Profit & margin calculator | /tools/margin-calculator/ | data/fee-presets.json (Amazon/Walmart/eBay kategori oranları, iddia kimlikli) | Yayında |
| Duty & entry fee estimator | /tools/duty-estimator/ | data/tool-rates.json (MPF %0,3464, min $34,58, maks $670,86, HMF %0,125, informal $2,77; FY2027) | Yayında; eski /tools/tariff-stack-estimator/ buraya yönlenir |
| Marketplace fee comparison | /tools/fee-comparison/ | data/fee-compare.json (5 platform, eBay $10 kademesi) | Yayında |
| Dimensional weight | /tools/dimensional-weight/ | Kullanıcı böleni girer (kaynaksız varsayılan yok) | Yayında |
| Cash-flow planner | /tools/cash-flow-planner/ | Tamamen kullanıcı girdisi, SVG grafik | Yayında |
| Ad budget & break-even ACoS | /tools/ppc-budget-calculator/ | Kullanıcı girdisi; formül sayfada | Yayında |

## Kurallar
- Reklam yok (gate-policy no-ads listesi).
- Her araç WebApplication JSON-LD, "ne dahil / ne hariç" bölümü ve ilgili rehber bağlantısı içerir.
- Oran değiştiğinde: iddia güncellenir → derleme oranı otomatik alır; doğrulanmamış oran araçta görünmez.

## Sonraki araçlar
1. Satış vergisi eşik bulucu (eyalet tablosu doğrulanınca).
2. Boyutsal ağırlık için taşıyıcı bölen ön ayarları (resmi fiyat kılavuzları okununca).
3. De minimis sonrası entry type seçici (karar ağacı, mevcut iddialarla).
