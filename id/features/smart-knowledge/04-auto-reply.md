# 🔄 Auto Reply Fallback

Mengaktifkan Smart Knowledge sebagai fallback untuk Auto Reply.

## Overview

Ketika tidak ada rule Auto Reply yang match, sistem akan menggunakan AI dan Knowledge Base untuk menjawab.

---

## Cara Kerja

```
Pesan Masuk → Check Rules → Match? → Kirim Response
                             ↓ No
                        RAG Fallback → AI Response
```

---

## Setup

### Step 1: Buka Auto Reply
Klik **Auto Reply** di sidebar.

### Step 2: Scroll ke RAG Fallback
Di bagian bawah, cari **"Smart Knowledge Fallback"**.

### Step 3: Konfigurasi

1. Toggle **ON**
2. Pilih **Knowledge Base**
3. Isi **Fallback Message**
4. Klik **Save**

---

## Fallback Message

Pesan yang dikirim jika AI tidak menemukan jawaban:

```
Maaf, saya tidak menemukan informasi tersebut.
Silakan hubungi CS kami di 0812-xxx-xxx.
```

---

## Tips

- Pilih KB dengan cakupan luas
- Fallback message yang informatif
- Monitor log untuk perbaikan

---

## Langkah Selanjutnya

- [Inbox SmartReply](./05-inbox)
