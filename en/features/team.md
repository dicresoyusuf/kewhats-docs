# 👥 Team

Team management with role-based access control.

## Roles

| Role | Access |
|------|--------|
| **Owner** | Full access |
| **Admin** | Almost full, except billing |
| **Agent** | Inbox, contacts, templates |
| **Viewer** | Read-only |

---

## Invite Member

1. Open **Team** → Click **"Invite"**
2. Enter email
3. Select role
4. Send invitation
5. Member clicks link in email

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

Monitor team activity:
- User
- Action
- Target
- Timestamp

---

## Best Practices

::: tip Tips
1. Least privilege - minimal access
2. Regular review
3. Monitor logs
4. Immediate offboarding when resigning
:::
