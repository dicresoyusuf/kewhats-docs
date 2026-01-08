# 🤖 Chatbot Builder

Visual flow builder untuk membuat bot WhatsApp tanpa coding.

## Overview

Drag & drop nodes untuk membangun alur percakapan bot. Tidak perlu pengetahuan programming!

---

## Node Types

### Core Nodes

| Node | Fungsi |
|------|--------|
| **Start** ⚡ | Titik awal flow |
| **Message** 💬 | Kirim pesan |
| **Condition** 🔀 | Percabangan logika |
| **Delay** ⏱️ | Jeda waktu |
| **End** 🏁 | Akhir flow |

### Advanced Nodes

| Node | Fungsi |
|------|--------|
| **API Call** 🌐 | Panggil external API |
| **Template** 📝 | Gunakan template |
| **Smart Knowledge** 🧠 | AI dari knowledge base |

---

## Contoh Flow

### Greeting Bot
```
Start → Message("Halo! Ada yang bisa dibantu?") → End
```

### FAQ Bot dengan Smart Knowledge
```
Start → Smart Knowledge → End
```

### Order Bot dengan Condition
```
                    ┌─ Message("Menu:")
Start → Condition ──┤
        (keyword)   └─ Smart Knowledge
```

---

## Triggers

| Type | Match |
|------|-------|
| **exact** | Kata persis sama |
| **contains** | Mengandung kata |
| **startswith** | Diawali kata |
| **all** | Semua pesan |

---

## Cara Membuat

1. **New Chatbot**: Klik "New Chatbot"
2. **Isi Info**: Nama, device, trigger
3. **Open Builder**: Klik "Open Builder"
4. **Drag Nodes**: Dari palette ke canvas
5. **Connect**: Hubungkan nodes
6. **Configure**: Set properties tiap node
7. **Save & Activate**: Toggle on

---

## Best Practices

::: tip Tips
1. Mulai simple, tambahkan kompleksitas bertahap
2. Selalu ada End node di setiap cabang
3. Test sebelum activate
4. Gunakan Smart Knowledge untuk FAQ
:::
