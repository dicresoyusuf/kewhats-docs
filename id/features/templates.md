# 📝 Templates

Template pesan siap pakai untuk respons cepat di inbox, broadcast, atau chatbot.

## Overview

Templates membantu Anda menjawab pertanyaan umum dengan cepat dan konsisten.

---

## Membuat Template

1. Buka **Templates** → Klik **"Create Template"**
2. Isi detail:
   - **Name**: Nama template
   - **Category**: Kategori (General, FAQ, Promo, etc)
   - **Content**: Isi pesan

3. Klik **Save**

---

## Contoh Template

### Greeting
```
Halo {{name}}! 👋

Terima kasih sudah menghubungi [Nama Toko].
Ada yang bisa kami bantu hari ini?

Jam operasional: Senin-Sabtu, 09:00-18:00 WIB
```

### FAQ Ongkir
```
📦 Info Ongkir

Ongkir kami menggunakan:
• JNE Reguler: 2-3 hari
• JNE Express: 1-2 hari
• GoSend (Jabodetabek): Same day

Untuk cek ongkir, kirim format:
CEK ONGKIR [KODE POS]
```

### Closing
```
Baik, terima kasih sudah menghubungi kami! 🙏

Jika ada pertanyaan lain, jangan ragu untuk chat kembali.

Semoga harimu menyenangkan! ✨
```

---

## Variables

| Variable | Output |
|----------|--------|
| `{{name}}` | Nama kontak |
| `{{phone}}` | Nomor HP |
| `{{date}}` | Tanggal hari ini |

---

## Menggunakan Template

### Di Inbox:
1. Ketik `/` di input message
2. Pilih template dari list
3. Template ter-insert otomatis
4. Edit jika perlu, lalu kirim

### Keyboard Shortcut:
```
/greeting → Insert template "Greeting"
/ongkir → Insert template "FAQ Ongkir"
```

---

## Best Practices

::: tip Tips
1. Buat template untuk pertanyaan yang sering ditanyakan
2. Gunakan emoji untuk tampilan lebih menarik
3. Keep it short - max 3-4 baris
4. Include call-to-action
:::
