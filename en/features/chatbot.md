# 🤖 Chatbot Builder

Visual flow builder to create WhatsApp bots without coding.

## Overview

Drag & drop nodes to build conversational bot flows. No programming knowledge required!

---

## Node Types

### Core Nodes

| Node | Function |
|------|----------|
| **Start** ⚡ | Flow starting point |
| **Message** 💬 | Send message |
| **Condition** 🔀 | Logic branching |
| **Delay** ⏱️ | Time delay |
| **End** 🏁 | Flow ending |

### Advanced Nodes

| Node | Function |
|------|----------|
| **API Call** 🌐 | Call external API |
| **Template** 📝 | Use template |
| **Smart Knowledge** 🧠 | AI from knowledge base |

---

## Example Flows

### Greeting Bot
```
Start → Message("Hello! How can I help?") → End
```

### FAQ Bot with Smart Knowledge
```
Start → Smart Knowledge → End
```

### Order Bot with Condition
```
                    ┌─ Message("Menu:")
Start → Condition ──┤
        (keyword)   └─ Smart Knowledge
```

---

## Triggers

| Type | Match |
|------|-------|
| **exact** | Exact word match |
| **contains** | Contains word |
| **startswith** | Starts with word |
| **all** | All messages |

---

## How to Create

1. **New Chatbot**: Click "New Chatbot"
2. **Fill Info**: Name, device, trigger
3. **Open Builder**: Click "Open Builder"
4. **Drag Nodes**: From palette to canvas
5. **Connect**: Connect nodes together
6. **Configure**: Set properties per node
7. **Save & Activate**: Toggle on

---

## Best Practices

::: tip Tips
1. Start simple, add complexity gradually
2. Always have End node on every branch
3. Test before activation
4. Use Smart Knowledge for FAQs
:::
