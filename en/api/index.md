# 📚 API Reference

Complete REST API documentation for KeWhats integration with external systems.

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

All requests require an API Key in the header:

```http
Authorization: Bearer YOUR_API_KEY
```

Get your API Key at: **Settings → API**

---

## Quick Reference

### Messaging

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/messages/send` | Send text message |
| `POST` | `/messages/send-image` | Send image |
| `POST` | `/messages/send-document` | Send document |

### Devices

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/devices` | List devices |
| `GET` | `/devices/:id` | Device detail |
| `POST` | `/devices` | Add device |

### Contacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/contacts` | List contacts |
| `POST` | `/contacts` | Add contact |
| `PUT` | `/contacts/:id` | Update contact |
| `DELETE` | `/contacts/:id` | Delete contact |

### Smart Knowledge

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/knowledge` | List knowledge bases |
| `POST` | `/knowledge` | Create knowledge base |
| `POST` | `/knowledge/query` | Query RAG |

---

## Example Request

### Send Message

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
