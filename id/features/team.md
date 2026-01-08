# 👥 Team

Manajemen tim dengan role-based access control.

## Roles

| Role | Akses |
|------|-------|
| **Owner** | Full access |
| **Admin** | Hampir full, kecuali billing |
| **Agent** | Inbox, contacts, templates |
| **Viewer** | Read-only |

---

## Invite Member

1. Buka **Team** → Klik **"Invite"**
2. Isi email
3. Pilih role
4. Send invitation
5. Member klik link di email

---

## Permission Matrix

| Feature | Owner | Admin | Agent | Viewer |
|---------|:-----:|:-----:|:-----:|:------:|
| Dashboard | ✅ | ✅ | ✅ | ✅ |
| Inbox | ✅ | ✅ | ✅ | 👁️ |
| Broadcast | ✅ | ✅ | ❌ | 👁️ |
| Settings | ✅ | ✅ | ❌ | ❌ |
| Billing | ✅ | ❌ | ❌ | ❌ |
| Team | ✅ | 🔶 | ❌ | ❌ |

---

## Activity Log

Pantau aktivitas tim:
- User
- Action
- Target
- Timestamp

---

## Best Practices

::: tip Tips
1. Least privilege - akses minimal
2. Regular review
3. Monitor log
4. Immediate offboarding saat resign
:::
