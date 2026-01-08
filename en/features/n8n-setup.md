# ⚡ N8N Setup

Workflow automation with n8n.

## What is n8n?

n8n is an open-source workflow automation platform:
- Visual flow builder
- 350+ integrations
- Self-hosted or cloud

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

## Connect to KeWhats

### 1. Get API Key
Settings → API → Copy key

### 2. In n8n
Add **HTTP Request** node:
```
URL: https://kewhats.app/api/...
Headers:
  Authorization: Bearer YOUR_API_KEY
```

---

## Example Workflows

### Customer Reply Bot
```
Webhook → IF → HTTP Request (send WA)
```

### Lead to CRM
```
Webhook (message) → Google Sheets → Slack
```

### Scheduled Broadcast
```
Cron → Get contacts → Loop → Send message
```

---

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/messages/send` | POST | Send message |
| `/contacts` | GET | List contacts |
| `/devices` | GET | List devices |

---

## Tips

::: tip Tips
1. Use webhooks for triggers from KeWhats
2. Add error handling
3. Rate limiting with Wait node
4. Test with dummy data
:::
