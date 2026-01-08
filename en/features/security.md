# 🔐 Security

Account security, audit logs, and security policies.

## Security Settings

### Two-Factor Authentication

1. Settings → Security → 2FA
2. Scan QR with authenticator app
3. Enter 6-digit code
4. Save backup codes
5. 2FA active!

---

## Audit Log

Track important activities:

| Event | Description |
|-------|-------------|
| `user.login` | Login |
| `user.logout` | Logout |
| `device.added` | Device added |
| `api.key_created` | API key created |
| `settings.changed` | Settings changed |

---

## Active Sessions

View all active sessions:
- Device/Browser
- IP Address
- Location
- Last Active

Click **"Logout"** to terminate suspicious sessions.

---

## API Key Security

- One key per application
- Set minimum permissions
- Rotate keys regularly
- Delete unused keys

---

## Best Practices

::: tip Tips
1. Enable 2FA
2. Strong password
3. Review sessions regularly
4. Monitor audit logs
:::

---

## Alerts

System sends alerts for:
- Login from new location
- Multiple failed logins
- API key abuse
- Unusual activity
