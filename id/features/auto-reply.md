# ⚡ Auto Reply

Balasan otomatis berbasis keyword matching dengan RAG fallback.

## Overview

Auto Reply mengirim respons otomatis ketika pesan masuk cocok dengan trigger yang dikonfigurasi.

---

## Cara Kerja

```
Pesan Masuk → Check Rules → Match? → Kirim Response
                             ↓ No
                        RAG Fallback → Kirim AI Response
```

---

## Membuat Rule

### Step 1: Add Rule
Klik **"Add Rule"** di halaman Auto Reply.

### Step 2: Konfigurasi

| Field | Contoh |
|-------|--------|
| Name | FAQ Ongkir |
| Trigger | ongkir, shipping, kirim |
| Type | contains |
| Response | Ongkir mulai dari Rp15.000... |
| Priority | 10 |

### Step 3: Save

---

## Trigger Types

| Type | Match |
|------|-------|
| **contains** | Pesan mengandung keyword |
| **exact** | Pesan persis sama |
| **startswith** | Pesan diawali keyword |
| **regex** | Pattern matching |

---

## Priority

Rules diproses dari prioritas **tertinggi** ke terendah.

```
Priority 100 → dicek pertama
Priority 50  → dicek kedua
Priority 0   → dicek terakhir
```

First match wins!

---

## RAG Fallback

Ketika tidak ada rule yang match, gunakan AI + Knowledge Base:

1. Scroll ke **"Smart Knowledge Fallback"**
2. Toggle **ON**
3. Pilih **Knowledge Base**
4. Set **Fallback Message**
5. **Save**

---

## Variables

| Variable | Output |
|----------|--------|
| `{name}` | Nama kontak |
| `{phone}` | Nomor HP |

---

## Google Sheet Sync

Import rules dari spreadsheet:

1. Buat sheet dengan format:
   | trigger | triggerType | response | priority |
   |---------|-------------|----------|----------|
   | halo | contains | Halo! 👋 | 10 |

2. Publish as CSV
3. Paste URL di Auto Reply
4. Enable Sync

---

## Best Practices

::: tip Tips
1. Trigger spesifik, hindari kata umum
2. Set prioritas dengan benar
3. Gunakan RAG fallback sebagai safety net
4. Test setiap rule baru
:::
