# 📤 Broadcast

Send bulk messages to thousands of contacts with personalization, scheduling, and smart delay.

## Overview

Broadcast allows you to send promotional messages, announcements, or reminders to many recipients at once.

---

## Key Features

### 📋 Rich Content
- Text with emoji
- Image + caption
- Video
- Document

### 🎯 Personalization
Use variables for personal messages:
```
Hello {{name}}! 👋
There's a special promo for you...
```

### ⏰ Scheduling
- **Now**: Send immediately
- **Scheduled**: Pick date & time
- **Recurring**: Repeated sending

### 🔄 Smart Delay
Automatic delay between messages to avoid bans.

---

## Creating a Broadcast

### Step 1: New Broadcast
Click **"New Broadcast"** on the Broadcast page.

### Step 2: Fill Details

| Field | Example |
|-------|---------|
| Name | January Promo |
| Device | CS Bot |
| Message | Hello {{name}}! Special promo... |

### Step 3: Select Recipients

- **Manual**: Input numbers one by one
- **Contacts**: Select from contact database
- **Tags**: Filter by tags
- **CSV**: Upload CSV file

### Step 4: Schedule

Choose when to send:
- Now
- Specific date & time
- Recurring (daily/weekly)

### Step 5: Review & Send

Check preview, then click **"Send"** or **"Schedule"**.

---

## Variables

| Variable | Output |
|----------|--------|
| `{{name}}` | Contact name |
| `{{phone}}` | Phone number |
| `{{date}}` | Today's date |

---

## Best Practices

::: warning Avoid Bans
1. Use delay (min 10 seconds)
2. Max 200-300 messages/day per number
3. Send during reasonable hours (09:00-21:00)
4. Don't spam unknown contacts
5. Include opt-out option
:::
