# 🔌 Integrations

Connect KeWhats with external applications and services.

## Available Integrations

| Platform | Description |
|----------|-------------|
| **Google Sheets** | 2-way contact sync |
| **Telegram** | Forward messages to Telegram |
| **Discord** | Discord notifications |
| **Slack** | Slack notifications |
| **Notion** | Sync to Notion database |
| **Airtable** | Sync to Airtable |
| **n8n** | Custom workflow automation |

---

## Google Sheets

### Features:
- Sync contacts from/to Sheets
- Auto-update on new data
- Bidirectional sync

### Setup:
1. Click **"Connect"**
2. Login to Google
3. Authorize
4. Select spreadsheet
5. Map columns
6. Enable

---

## Telegram

### Features:
- Forward incoming messages to bot/group
- Important notifications
- Reply from Telegram

### Setup:
1. Create bot via @BotFather
2. Get token
3. Paste in KeWhats
4. Set chat ID

---

## Discord / Slack

### Features:
- Forward messages to channel
- Webhook notifications

### Setup:
1. Create incoming webhook
2. Copy URL
3. Paste in KeWhats
4. Enable

---

## n8n

See [N8N Setup](./n8n-setup) for complete tutorial.

---

## Use Cases

```
Customer Order → KeWhats → Notion (Database)
Important Message → KeWhats → Slack (Team Notify)
Lead Capture → KeWhats → Airtable (CRM)
```
