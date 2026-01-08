# 📨 Send Your First Message

Time to test sending your first message through KeWhats!

## Prerequisites

- ✅ Device already **Connected** (status 🟢)
- ✅ Have a valid destination number

---

## How to Send

### Option 1: Via Inbox (UI)

1. Open **"Inbox"** menu
2. Click **"New Chat"** or **"+"** button
3. Input destination number:
   ```
   1234567890
   ```
   ::: warning Number Format
   Use international format **without** `+` sign
   - ✅ `1234567890`
   - ❌ `+1234567890`
   :::

4. Type message:
   ```
   Hello! This is a test from KeWhats 🚀
   ```
5. Click **Send** or press `Enter`

### Option 2: Via API

```bash
curl -X POST https://kewhats.app/api/messages/send \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "deviceId": "your_device_id",
    "to": "1234567890",
    "message": "Hello from API! 🎉"
  }'
```

---

## Verify Delivery

### Check in Inbox

Message will show with status:

| Icon | Status | Meaning |
|------|--------|---------|
| ⏳ | Sending | Processing |
| ✓ | Sent | Sent to WA server |
| ✓✓ | Delivered | Reached recipient's phone |
| ✓✓ (blue) | Read | Message read |

---

## 🎉 Congratulations!

If the message was sent and received successfully, **KeWhats setup is complete!**

### Next, Explore Features:

| Feature | Use For |
|---------|---------|
| [Inbox](../features/inbox) | Live chat with customers |
| [Templates](../features/templates) | Create ready-to-use templates |
| [Broadcast](../features/broadcast) | Send bulk messages |
| [Chatbot](../features/chatbot) | Create automated bots |
| [Auto Reply](../features/auto-reply) | Automatic replies |
| [Smart Knowledge](../features/smart-knowledge/) | AI-based knowledge |

---

## ✅ Getting Started Complete!

- [x] ✅ Account registration
- [x] ✅ Login to dashboard
- [x] ✅ Connect WhatsApp device
- [x] ✅ Send first message
- [x] ✅ Message received successfully

---

::: tip 🎊 CONGRATULATIONS!
You're now ready to use KeWhats for your business!
:::
