# 🧠 Smart Knowledge (RAG)

Smart Knowledge adalah fitur AI-powered knowledge base yang memungkinkan bot menjawab pertanyaan berdasarkan informasi bisnis Anda.

## Overview

Dengan teknologi **RAG (Retrieval-Augmented Generation)**, AI tidak hanya "mengarang" jawaban, tapi mencari informasi relevan dari knowledge base Anda, lalu menyusun jawaban yang akurat.

---

## Cara Kerja

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Pertanyaan │ ──▶ │   Cari di    │ ──▶ │  Generate   │
│  Customer   │     │ Knowledge    │     │  Jawaban    │
└─────────────┘     │    Base      │     │   (AI)      │
                    └──────────────┘     └─────────────┘
```

1. Customer bertanya
2. Sistem mencari informasi relevan di KB
3. AI generate jawaban berdasarkan informasi tersebut
4. Jawaban akurat dikirim ke customer

---

## Fitur Utama

### 📚 Knowledge Base Management
Upload informasi bisnis: FAQ, produk, kebijakan.

### 🔍 Semantic Search
Pencarian berdasarkan makna, bukan hanya keyword.

### 🤖 AI-Powered Answers
Generate jawaban natural dari knowledge.

### 🔌 Multi-Integration
- Chatbot Builder
- Auto Reply Fallback
- Inbox SmartReply

---

## Quick Start

### 1. Buat Knowledge Base

```
Smart Knowledge → Create → Isi konten → Save
```

### 2. Format Konten

```markdown
## FAQ Pengiriman

Q: Berapa ongkir ke Jakarta?
A: Ongkir ke Jakarta mulai dari Rp15.000 untuk reguler.

Q: Berapa lama pengiriman?
A: Reguler 2-3 hari kerja, Express 1 hari.
```

### 3. Process

Klik **"Process"** untuk membuat embeddings.

### 4. Gunakan

- Di **Chatbot**: Tambahkan Smart Knowledge node
- Di **Auto Reply**: Enable RAG Fallback
- Di **Inbox**: Toggle Brain icon

---

## Integrasi

### Chatbot Builder

```
Start → Smart Knowledge Node → End
```

Bot akan menjawab berdasarkan knowledge base.

### Auto Reply Fallback

Ketika tidak ada rule yang match:
1. Sistem query knowledge base
2. Jika ditemukan, kirim jawaban AI
3. Jika tidak, kirim fallback message

### Inbox SmartReply

Toggle 🧠 untuk saran balasan dari knowledge base.

---

## Best Practices

::: tip Format Konten
1. Gunakan format Q&A terstruktur
2. Sertakan variasi pertanyaan
3. Jawaban lengkap tapi ringkas
4. Update berkala
:::

::: warning Batasan
- Plan Free: 50 query/bulan
- Plan Pro: 1,000 query/bulan
- BYOK: Unlimited
:::

---

## Tutorial Lengkap

- [Getting Started](./01-getting-started)
- [Membuat Knowledge Base](./02-creating-kb)
- [Chatbot Integration](./03-chatbot)
- [Auto Reply Fallback](./04-auto-reply)
- [Inbox SmartReply](./05-inbox)
- [BYOK Setup](./06-byok)
- [Best Practices](./07-best-practices)
