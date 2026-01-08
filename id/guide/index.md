# 🚀 Memulai KeWhats

Selamat datang di dokumentasi resmi **KeWhats** - Platform WhatsApp Gateway & Business Automation terlengkap!

## Apa itu KeWhats?

KeWhats adalah platform **All-in-One** untuk mengelola komunikasi WhatsApp bisnis Anda:

- 📱 **Multi-Device** - Hubungkan banyak nomor WhatsApp
- 💬 **Unified Inbox** - Semua chat di satu tempat
- 📤 **Smart Broadcast** - Kirim pesan massal dengan personalisasi
- 🤖 **Visual Chatbot** - Buat bot tanpa coding
- 🧠 **AI-Powered** - Smart Reply, Sentiment, Knowledge Base
- 🔌 **Integrations** - Connect ke berbagai platform

## Quick Start

Ikuti langkah-langkah ini untuk memulai dalam **5 menit**:

### 1️⃣ Registrasi

Buat akun di [app.kewhats.com](https://kewhats.app/register)

[Panduan lengkap →](./registration)

### 2️⃣ Connect Device

Hubungkan nomor WhatsApp pertama Anda dengan scan QR code.

[Panduan lengkap →](./connect-device)

### 3️⃣ Kirim Pesan Pertama

Test dengan mengirim pesan dari dashboard.

[Panduan lengkap →](./first-message)

## Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────┐
│                     KeWhats Platform                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   │
│   │ Device  │   │ Device  │   │ Device  │   │ Device  │   │
│   │   #1    │   │   #2    │   │   #3    │   │   #n    │   │
│   └────┬────┘   └────┬────┘   └────┬────┘   └────┬────┘   │
│        │             │             │             │         │
│        └─────────────┴──────┬──────┴─────────────┘         │
│                             │                               │
│                    ┌────────▼────────┐                     │
│                    │   Core Engine   │                     │
│                    │   (Baileys)     │                     │
│                    └────────┬────────┘                     │
│                             │                               │
│     ┌───────────────────────┼───────────────────────┐      │
│     │                       │                       │      │
│ ┌───▼───┐ ┌───▼───┐ ┌───▼───┐ ┌───▼───┐ ┌───▼───┐ │
│ │ Inbox │ │Chatbot│ │ Broad │ │  AI   │ │  API  │ │
│ │       │ │       │ │ cast  │ │       │ │       │ │
│ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Perlu Bantuan?

- 📖 Jelajahi dokumentasi ini
- 💬 Hubungi support: support@kewhats.app
- 🎮 Join Discord community

---

::: tip TIPS
Bookmark halaman ini untuk referensi cepat!
:::

<style>
h2 {
  margin-top: 2rem !important;
}
</style>
