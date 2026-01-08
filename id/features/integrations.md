# 🔌 Integrations

Connect KeWhats dengan aplikasi dan layanan eksternal.

## Integrasi Tersedia

| Platform | Deskripsi |
|----------|-----------|
| **Google Sheets** | 2-way sync data kontak |
| **Telegram** | Forward pesan ke Telegram |
| **Discord** | Notifikasi ke Discord |
| **Slack** | Notifikasi ke Slack |
| **Notion** | Sync ke Notion database |
| **Airtable** | Sync ke Airtable |
| **n8n** | Custom workflow automation |

---

## Google Sheets

### Fitur:
- Sync kontak dari/ke Sheets
- Auto-update saat ada data baru
- Bidirectional sync

### Setup:
1. Klik **"Connect"**
2. Login Google
3. Authorize
4. Pilih spreadsheet
5. Map kolom
6. Enable

---

## Telegram

### Fitur:
- Forward pesan masuk ke bot/group
- Notifikasi penting
- Reply dari Telegram

### Setup:
1. Create bot via @BotFather
2. Get token
3. Paste di KeWhats
4. Set chat ID

---

## Discord / Slack

### Fitur:
- Forward pesan ke channel
- Webhook notifications

### Setup:
1. Create incoming webhook
2. Copy URL
3. Paste di KeWhats
4. Enable

---

## n8n

Lihat [N8N Setup](./n8n-setup) untuk tutorial lengkap.

---

## Use Cases

```
Customer Order → KeWhats → Notion (Database)
Pesan Penting → KeWhats → Slack (Team Notify)
Lead Capture → KeWhats → Airtable (CRM)
```
