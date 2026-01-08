# 📚 API Reference

Dokumentasi lengkap REST API KeWhats untuk integrasi dengan sistem eksternal.

## Base URL

::: code-group
```txt [Production]
https://app.kewhats.com/api
```

```txt [Development]
http://localhost:3001/api
```
:::

---

## Authentication

Semua request memerlukan API Key di header:

```http
Authorization: Bearer YOUR_API_KEY
```

Dapatkan API Key di: **Settings → API**

---

## Quick Reference

### Messaging

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `POST` | `/messages/send` | Kirim pesan teks |
| `POST` | `/messages/send-image` | Kirim gambar |
| `POST` | `/messages/send-document` | Kirim dokumen |

### Devices

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/devices` | List devices |
| `GET` | `/devices/:id` | Detail device |
| `POST` | `/devices` | Tambah device |

### Contacts

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/contacts` | List kontak |
| `POST` | `/contacts` | Tambah kontak |
| `PUT` | `/contacts/:id` | Update kontak |
| `DELETE` | `/contacts/:id` | Hapus kontak |

### Smart Knowledge

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/knowledge` | List knowledge bases |
| `POST` | `/knowledge` | Buat knowledge base |
| `POST` | `/knowledge/query` | Query RAG |

---

## Contoh Request

### Kirim Pesan

::: code-group
```bash [cURL]
curl -X POST https://app.kewhats.com/api/messages/send \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "deviceId": "device_xxx",
    "to": "6281234567890",
    "message": "Hello from API!"
  }'
```

```javascript [JavaScript]
const response = await fetch('https://app.kewhats.com/api/messages/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    deviceId: 'device_xxx',
    to: '6281234567890',
    message: 'Hello from API!'
  })
});
```

```python [Python]
import requests

response = requests.post(
    'https://app.kewhats.com/api/messages/send',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'deviceId': 'device_xxx',
        'to': '6281234567890',
        'message': 'Hello from API!'
    }
)
```
:::

### Response

```json
{
  "success": true,
  "data": {
    "messageId": "ABC123",
    "status": "sent"
  }
}
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `429` | Rate Limited |
| `500` | Server Error |

---

## Rate Limits

| Plan | Requests/Minute |
|------|-----------------|
| Free | 30 |
| Pro | 100 |
| Enterprise | 500 |

---

Lihat dokumentasi lengkap tiap endpoint di halaman masing-masing.
