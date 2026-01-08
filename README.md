# 📚 KeWhats Documentation

Beautiful documentation site for KeWhats - WhatsApp Gateway & Business Automation Platform.

Built with [VitePress](https://vitepress.dev) ⚡

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## 📁 Structure

```
kewhats-docs/
├── .vitepress/
│   ├── config.mjs        # VitePress configuration
│   └── theme/
│       ├── index.js      # Theme config
│       └── custom.css    # Custom styles
├── public/
│   └── logo.svg          # Logo
├── id/                   # Indonesian content
│   ├── index.md          # Homepage
│   ├── guide/            # Getting started
│   ├── features/         # Feature docs
│   ├── api/              # API reference
│   └── faq.md            # FAQ
├── en/                   # English content
│   ├── index.md          # Homepage
│   ├── guide/            # Getting started
│   ├── features/         # Feature docs
│   ├── api/              # API reference
│   └── faq.md            # FAQ
└── package.json
```

## 🌐 Multi-language

Supports:
- 🇮🇩 Bahasa Indonesia (default)
- 🇺🇸 English

## 🎨 Features

- ✨ Beautiful WhatsApp-inspired theme
- 🌙 Dark/Light mode
- 🔍 Local search
- 📱 Responsive design
- 🚀 Lightning fast (Vite-powered)

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dicresoyusuf/kewhats-docs)

Or manually:

1. Push to GitHub
2. Import in Vercel
3. Set build command: `npm run docs:build`
4. Set output directory: `.vitepress/dist`
5. Deploy!

## 📝 License

MIT License - KeWhats Team 2026
