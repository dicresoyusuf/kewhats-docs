# 🤖 Chatbot Integration

Cara mengintegrasikan Smart Knowledge dengan Chatbot Builder.

## Overview

Tambahkan **Smart Knowledge Node** ke chatbot untuk memberikan respons AI yang cerdas.

---

## Langkah Integrasi

### Step 1: Buka Chatbot Builder
Chatbot → Pilih bot → Open Builder

### Step 2: Tambah Node
Drag **"Smart Knowledge"** dari palette.

### Step 3: Konfigurasi

| Field | Deskripsi |
|-------|-----------|
| Knowledge Base | Pilih KB |
| Fallback Message | Pesan jika tidak ada jawaban |

### Step 4: Connect & Save
Hubungkan nodes → Save → Activate

---

## Contoh Flow

```
Start → Smart Knowledge → End
```

Bot akan menjawab semua pertanyaan dari knowledge base.

---

## Flow Hybrid

```
Start → Condition → Message("Menu")
              ↓
        Smart Knowledge
```

Kombinasi keyword matching + AI knowledge.

---

## Tips

- Pilih KB yang sesuai
- Set fallback message informatif
- Test sebelum activate

---

## Langkah Selanjutnya

- [Auto Reply Fallback](./04-auto-reply)
