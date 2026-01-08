# 📤 Broadcast

Kirim pesan massal ke ribuan kontak dengan personalisasi, scheduling, dan smart delay.

## Overview

Broadcast memungkinkan Anda mengirim pesan promosi, pengumuman, atau reminder ke banyak penerima sekaligus.

---

## Fitur Utama

### 📋 Rich Content
- Text dengan emoji
- Image + caption
- Video
- Document

### 🎯 Personalisasi
Gunakan variables untuk pesan personal:
```
Halo {{name}}! 👋
Ada promo spesial untuk Anda...
```

### ⏰ Scheduling
- **Now**: Kirim sekarang
- **Scheduled**: Pilih tanggal & waktu
- **Recurring**: Pengiriman berulang

### 🔄 Smart Delay
Delay otomatis antar pesan untuk menghindari ban.

---

## Cara Membuat Broadcast

### Step 1: New Broadcast
Klik **"New Broadcast"** di halaman Broadcast.

### Step 2: Isi Detail

| Field | Contoh |
|-------|--------|
| Nama | Promo January |
| Device | CS Bot |
| Pesan | Halo {{name}}! Ada promo... |

### Step 3: Pilih Recipients

- **Manual**: Input nomor satu per satu
- **Contacts**: Pilih dari database kontak
- **Tags**: Filter berdasarkan tag
- **CSV**: Upload file CSV

### Step 4: Schedule

Pilih kapan mengirim:
- Sekarang
- Tanggal & waktu tertentu
- Berulang (daily/weekly)

### Step 5: Review & Send

Periksa preview, lalu klik **"Send"** atau **"Schedule"**.

---

## Variables

| Variable | Output |
|----------|--------|
| `{{name}}` | Nama kontak |
| `{{phone}}` | Nomor HP |
| `{{date}}` | Tanggal hari ini |

---

## Estimasi Waktu

| Recipients | Delay | Estimasi |
|------------|-------|----------|
| 100 | 10 detik | ~17 menit |
| 500 | 20 detik | ~2.7 jam |
| 1000 | 30 detik | ~8.3 jam |

---

## Best Practices

::: warning Hindari Ban
1. Gunakan delay (min 10 detik)
2. Max 200-300 pesan/hari per nomor
3. Kirim di jam wajar (09:00-21:00)
4. Jangan spam ke orang yang tidak kenal
5. Sertakan opt-out option
:::

::: tip Tips
- Test ke nomor sendiri dulu
- Gunakan personalisasi {{name}}
- Pilih waktu optimal (pagi/sore)
- Monitor delivery rate
:::
