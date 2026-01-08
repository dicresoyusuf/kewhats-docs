# 🚀 Getting Started with KeWhats

Welcome to the official **KeWhats** documentation - The most complete WhatsApp Gateway & Business Automation Platform!

## What is KeWhats?

KeWhats is an **All-in-One** platform for managing your business WhatsApp communication:

- 📱 **Multi-Device** - Connect multiple WhatsApp numbers
- 💬 **Unified Inbox** - All chats in one place
- 📤 **Smart Broadcast** - Send bulk messages with personalization
- 🤖 **Visual Chatbot** - Create bots without coding
- 🧠 **AI-Powered** - Smart Reply, Sentiment, Knowledge Base
- 🔌 **Integrations** - Connect to various platforms

## Quick Start

Follow these steps to get started in **5 minutes**:

### 1️⃣ Register

Create an account at [app.kewhats.com](https://app.kewhats.com/register)

[Full guide →](./registration)

### 2️⃣ Connect Device

Connect your first WhatsApp number by scanning QR code.

[Full guide →](./connect-device)

### 3️⃣ Send First Message

Test by sending a message from the dashboard.

[Full guide →](./first-message)

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     KeWhats Platform                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   │
│   │ Device  │   │ Device  │   │ Device  │   │ Device  │   │
│   │   #1    │   │   #2    │   │   #3    │   │   #n    │   │
│   └────┬────┘   └────┬────┘   └────┬────┘   └────┬────┘   │
│        │             │             │             │         │
│        └─────────────┴──────┬──────┴─────────────┘         │
│                             │                               │
│                    ┌────────▼────────┐                     │
│                    │   Core Engine   │                     │
│                    │   (Baileys)     │                     │
│                    └────────┬────────┘                     │
│                             │                               │
│     ┌───────────────────────┼───────────────────────┐      │
│     │                       │                       │      │
│ ┌───▼───┐ ┌───▼───┐ ┌───▼───┐ ┌───▼───┐ ┌───▼───┐ │
│ │ Inbox │ │Chatbot│ │ Broad │ │  AI   │ │  API  │ │
│ │       │ │       │ │ cast  │ │       │ │       │ │
│ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Need Help?

- 📖 Browse this documentation
- 💬 Contact support: support@kewhats.com
- 🎮 Join Discord community

---

::: tip TIPS
Bookmark this page for quick reference!
:::
