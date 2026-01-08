# 🔐 Security

Keamanan akun, audit log, dan kebijakan keamanan.

## Security Settings

### Two-Factor Authentication

1. Settings → Security → 2FA
2. Scan QR dengan authenticator app
3. Input 6-digit code
4. Save backup codes
5. 2FA aktif!

---

## Audit Log

Track aktivitas penting:

| Event | Deskripsi |
|-------|-----------|
| `user.login` | Login |
| `user.logout` | Logout |
| `device.added` | Device ditambahkan |
| `api.key_created` | API key dibuat |
| `settings.changed` | Setting diubah |

---

## Active Sessions

Lihat semua session aktif:
- Device/Browser
- IP Address
- Location
- Last Active

Klik **"Logout"** untuk terminate session mencurigakan.

---

## API Key Security

- Satu key per aplikasi
- Set minimum permissions
- Rotate keys berkala
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

Sistem kirim alert untuk:
- Login dari lokasi baru
- Multiple failed login
- API key abuse
- Unusual activity
