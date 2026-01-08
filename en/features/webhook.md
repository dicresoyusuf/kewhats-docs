# 🔗 Webhook

Receive HTTP notifications whenever events occur (incoming messages, status changes, etc.).

## Overview

Webhooks allow your external systems to receive real-time notifications from KeWhats.

---

## Setup Webhook

1. Open **Webhook** → Click **"Add Webhook"**
2. Fill in:
   - Name
   - URL endpoint
   - Events (checkboxes)
3. Save

---

## Events

| Event | Trigger |
|-------|---------|
| `message.received` | Incoming message |
| `message.sent` | Message sent |
| `message.delivered` | Message delivered |
| `message.read` | Message read |
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
    "from": "1234567890",
    "deviceId": "device_xxx",
    "type": "text",
    "message": "Hello, I want to order",
    "pushName": "John Doe"
  }
}
```

---

## Security

Each request includes a signature header:
```
X-Webhook-Signature: sha256_hash
```

Verify on your server for security.

---

## Best Practices

::: tip Tips
1. Respond within 3 seconds
2. Return HTTP 200 for success
3. Handle retries (same event may be sent again)
:::
