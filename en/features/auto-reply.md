# ⚡ Auto Reply

Automatic replies based on keyword matching with RAG fallback.

## Overview

Auto Reply sends automatic responses when incoming messages match configured triggers.

---

## How It Works

```
Incoming Message → Check Rules → Match? → Send Response
                                   ↓ No
                              RAG Fallback → Send AI Response
```

---

## Creating a Rule

### Step 1: Add Rule
Click **"Add Rule"** on the Auto Reply page.

### Step 2: Configure

| Field | Example |
|-------|---------|
| Name | FAQ Shipping |
| Trigger | shipping, delivery, send |
| Type | contains |
| Response | Shipping starts from $5... |
| Priority | 10 |

### Step 3: Save

---

## Trigger Types

| Type | Match |
|------|-------|
| **contains** | Message contains keyword |
| **exact** | Message exactly matches |
| **startswith** | Message starts with keyword |
| **regex** | Pattern matching |

---

## Priority

Rules are processed from **highest** to lowest priority.

```
Priority 100 → checked first
Priority 50  → checked second
Priority 0   → checked last
```

First match wins!

---

## RAG Fallback

When no rule matches, use AI + Knowledge Base:

1. Scroll to **"Smart Knowledge Fallback"**
2. Toggle **ON**
3. Select **Knowledge Base**
4. Set **Fallback Message**
5. **Save**

---

## Variables

| Variable | Output |
|----------|--------|
| `{name}` | Contact name |
| `{phone}` | Phone number |

---

## Best Practices

::: tip Tips
1. Use specific triggers, avoid generic words
2. Set priorities correctly
3. Use RAG fallback as a safety net
4. Test every new rule
:::
