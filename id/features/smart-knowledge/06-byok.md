# 🔑 BYOK - Bring Your Own Key

Gunakan OpenAI API Key sendiri untuk unlimited usage.

## Overview

BYOK memungkinkan Anda menggunakan API key sendiri untuk mendapatkan akses unlimited ke fitur Smart Knowledge.

---

## Keuntungan BYOK

| Aspek | Plan Biasa | BYOK |
|-------|-----------|------|
| Query Limit | 50 - 5000/bulan | **Unlimited** |
| Billing | Termasuk subscription | Pay ke OpenAI langsung |
| Cost | Tetap | Pay-per-use |

---

## Setup BYOK

### Step 1: Dapatkan OpenAI API Key

1. Buka [platform.openai.com](https://platform.openai.com)
2. Login / buat akun
3. Klik **API Keys**
4. Klik **Create new secret key**
5. Copy key (hanya tampil sekali!)

### Step 2: Input di KeWhats

1. Buka **Settings** → **AI Configuration**
2. Paste OpenAI API Key
3. Klik **Validate**
4. Klik **Save**

### Step 3: Verifikasi

Anda akan melihat:
```
Plan: Unlimited (BYOK Active) ∞
```

---

## Estimasi Biaya

| Model | Price (per 1M tokens) |
|-------|----------------------|
| text-embedding-3-small | ~$0.02 |
| gpt-4o-mini | ~$0.15 input, ~$0.60 output |

**Estimasi 1000 queries: ~$0.28** (sangat murah!)

---

## Keamanan

- ✅ Key di-encrypt sebelum disimpan
- ✅ Key tidak pernah dikirim ke frontend
- ✅ Hanya masked version yang ditampilkan

---

## Tips

::: tip Best Practices
1. Set spending limit di OpenAI dashboard
2. Monitor usage secara berkala
3. Regenerate key jika dicurigai bocor
4. Satu key khusus untuk KeWhats
:::

---

## Lihat Juga

- [Smart Knowledge Overview](./)
- [Best Practices](./07-best-practices)
