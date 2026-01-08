# ⚡ N8N Setup

Workflow automation dengan n8n.

## Apa itu n8n?

n8n adalah open-source workflow automation platform:
- Visual flow builder
- 350+ integrations
- Self-hosted atau cloud

---

## Install n8n

### Docker (Recommended)
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

### npm
```bash
npm install n8n -g
n8n start
```

---

## Connect ke KeWhats

### 1. Get API Key
Settings → API → Copy key

### 2. Di n8n
Add **HTTP Request** node:
```
URL: https://app.kewhats.com/api/...
Headers:
  Authorization: Bearer YOUR_API_KEY
```

---

## Contoh Workflow

### Customer Reply Bot
```
Webhook → IF → HTTP Request (kirim WA)
```

### Lead to CRM
```
Webhook (pesan) → Google Sheets → Slack
```

### Scheduled Broadcast
```
Cron → Get contacts → Loop → Send message
```

---

## Endpoints

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `/messages/send` | POST | Kirim pesan |
| `/contacts` | GET | List kontak |
| `/devices` | GET | List devices |

---

## Tips

::: tip Tips
1. Use webhooks untuk trigger dari KeWhats
2. Add error handling
3. Rate limiting dengan Wait node
4. Test dengan data dummy
:::
