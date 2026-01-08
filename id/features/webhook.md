# 🔗 Webhook

Terima notifikasi HTTP setiap kali ada event (pesan masuk, status berubah, dll).

## Overview

Webhook memungkinkan sistem eksternal Anda menerima real-time notifications dari KeWhats.

---

## Setup Webhook

1. Buka **Webhook** → Klik **"Add Webhook"**
2. Isi:
   - Name
   - URL endpoint
   - Events (checkboxes)
3. Save

---

## Events

| Event | Trigger |
|-------|---------|
| `message.received` | Ada pesan masuk |
| `message.sent` | Pesan terkirim |
| `message.delivered` | Pesan delivered |
| `message.read` | Pesan dibaca |
| `device.connected` | Device online |
| `device.disconnected` | Device offline |

---

## Payload

### Message Received
```json
{
  "event": "message.received",
  "timestamp": "2026-01-08T12:00:00Z",
  "data": {
    "messageId": "ABC123",
    "from": "6281234567890",
    "deviceId": "device_xxx",
    "type": "text",
    "message": "Halo, mau order",
    "pushName": "John Doe"
  }
}
```

---

## Security

Setiap request disertai header signature:
```
X-Webhook-Signature: sha256_hash
```

Verify di server Anda untuk keamanan.

---

## Best Practices

::: tip Tips
1. Respond dalam 3 detik
2. Return HTTP 200 untuk success
3. Handle retry (same event mungkin dikirim ulang)
:::
