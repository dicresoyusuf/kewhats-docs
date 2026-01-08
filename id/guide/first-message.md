# 📨 Kirim Pesan Pertama

Saatnya test kirim pesan pertama melalui KeWhats!

## Prasyarat

- ✅ Device sudah **Connected** (status 🟢)
- ✅ Punya nomor tujuan yang valid

---

## Cara Kirim Pesan

### Option 1: Via Inbox (UI)

1. Buka menu **"Inbox"** di sidebar
2. Klik tombol **"New Chat"** atau **"+"**
3. Input nomor tujuan:
   ```
   6281234567890
   ```
   ::: warning Format Nomor
   Gunakan format internasional **tanpa** tanda `+`
   - ✅ `6281234567890`
   - ❌ `081234567890`
   - ❌ `+6281234567890`
   :::

4. Ketik pesan:
   ```
   Halo! Ini pesan test dari KeWhats 🚀
   ```
5. Klik **Send** atau tekan `Enter`

### Option 2: Via API

```bash
curl -X POST https://kewhats.app/api/messages/send \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "deviceId": "your_device_id",
    "to": "6281234567890",
    "message": "Hello from API! 🎉"
  }'
```

### Option 3: Via API Docs Page

1. Buka menu **"API Docs"**
2. Cari endpoint **"Send Message"**
3. Klik **"Try it"**
4. Isi parameters
5. Klik **"Execute"**

---

## Verifikasi Pengiriman

### Cek di Inbox

Pesan akan tampil dengan status:

| Icon | Status | Arti |
|------|--------|------|
| ⏳ | Sending | Sedang proses kirim |
| ✓ | Sent | Terkirim ke server WA |
| ✓✓ | Delivered | Sampai ke HP penerima |
| ✓✓ (biru) | Read | Sudah dibaca |

### Cek di Message Logs

Buka **Message Logs** untuk detail lengkap:
- Message ID
- Timestamp
- Status
- Error message (jika ada)

---

## Contoh Pesan Test

```
🎉 Test Message dari KeWhats!

Halo! Jika Anda menerima pesan ini, 
berarti setup KeWhats sudah berhasil.

Timestamp: 2026-01-08 12:00:00

Selamat! 🚀
```

---

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| "Device not connected" | Pastikan device status 🟢 Connected |
| "Invalid phone number" | Gunakan format `62xxx` tanpa `+` |
| "Message failed" | Cek nomor valid & punya WhatsApp |
| Status stuck "Sending" | Cek koneksi internet device |

---

## 🎉 Selamat!

Jika pesan berhasil dikirim dan diterima, **setup KeWhats sudah selesai!**

### Selanjutnya, Explore Fitur:

| Fitur | Untuk |
|-------|-------|
| [Inbox](../features/inbox) | Live chat dengan customer |
| [Templates](../features/templates) | Buat template siap pakai |
| [Broadcast](../features/broadcast) | Kirim pesan massal |
| [Chatbot](../features/chatbot) | Buat bot otomatis |
| [Auto Reply](../features/auto-reply) | Balasan otomatis |
| [Smart Knowledge](../features/smart-knowledge/) | AI berbasis knowledge |

---

## ✅ Checklist Getting Started Selesai!

- [x] ✅ Registrasi akun
- [x] ✅ Login ke dashboard  
- [x] ✅ Connect device WhatsApp
- [x] ✅ Kirim pesan pertama
- [x] ✅ Pesan berhasil diterima

---

::: tip 🎊 CONGRATULATIONS!
Anda sudah siap menggunakan KeWhats untuk bisnis Anda!
:::
