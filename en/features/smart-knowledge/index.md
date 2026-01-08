# 🧠 Smart Knowledge (RAG)

AI-powered knowledge base that enables bots to answer questions based on your business information.

## Overview

With **RAG (Retrieval-Augmented Generation)** technology, AI doesn't just "make up" answers, but searches for relevant information from your knowledge base, then composes accurate answers.

---

## How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│    Customer     │ ──▶ │  Search in       │ ──▶ │    Generate     │
│    Question     │     │  Knowledge Base  │     │    Answer (AI)  │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

1. Customer asks a question
2. System finds relevant info in KB
3. AI generates answer based on that info
4. Accurate answer sent to customer

---

## Key Features

### 📚 Knowledge Base Management
Upload business info: FAQ, products, policies.

### 🔍 Semantic Search
Search based on meaning, not just keywords.

### 🤖 AI-Powered Answers
Generate natural answers from knowledge.

### 🔌 Multi-Integration
- Chatbot Builder
- Auto Reply Fallback
- Inbox SmartReply

---

## Quick Start

### 1. Create Knowledge Base

```
Smart Knowledge → Create → Add content → Save
```

### 2. Content Format

```markdown
## Shipping FAQ

Q: What are the shipping rates?
A: Shipping starts from $5 for standard delivery.

Q: How long does shipping take?
A: Standard 2-3 business days, Express 1 day.
```

### 3. Process

Click **"Process"** to create embeddings.

### 4. Use It

- In **Chatbot**: Add Smart Knowledge node
- In **Auto Reply**: Enable RAG Fallback
- In **Inbox**: Toggle Brain icon

---

## Best Practices

::: tip Content Format
1. Use structured Q&A format
2. Include question variations
3. Complete but concise answers
4. Update regularly
:::

::: warning Limits
- Free Plan: 50 queries/month
- Pro Plan: 1,000 queries/month
- Enterprise Plan: 5,000 queries/month
- Unlimited Plan: Unlimited queries
:::
