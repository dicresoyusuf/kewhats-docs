import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "KeWhats Docs",
    description: "Complete Documentation for KeWhats - WhatsApp Gateway & Business Automation Platform",

    // Multi-language
    locales: {
        root: {
            label: 'Bahasa Indonesia',
            lang: 'id',
            title: 'KeWhats Docs',
            description: 'Dokumentasi Lengkap KeWhats - Platform WhatsApp Gateway & Otomasi Bisnis',
            themeConfig: {
                nav: [
                    { text: 'Beranda', link: '/id/' },
                    { text: 'Panduan', link: '/id/guide/' },
                    { text: 'Fitur', link: '/id/features/' },
                    { text: 'API', link: '/id/api/' },
                    { text: 'FAQ', link: '/id/faq' }
                ],
                sidebar: {
                    '/id/guide/': [
                        {
                            text: '🚀 Memulai',
                            collapsed: false,
                            items: [
                                { text: 'Pengenalan', link: '/id/guide/' },
                                { text: 'Registrasi & Login', link: '/id/guide/registration' },
                                { text: 'Connect Device', link: '/id/guide/connect-device' },
                                { text: 'Kirim Pesan Pertama', link: '/id/guide/first-message' }
                            ]
                        },
                        {
                            text: '📱 Device & Koneksi',
                            collapsed: false,
                            items: [
                                { text: 'Manajemen Device', link: '/id/guide/devices' },
                                { text: 'Troubleshooting', link: '/id/guide/device-troubleshooting' }
                            ]
                        }
                    ],
                    '/id/features/': [
                        {
                            text: '💬 Messaging',
                            collapsed: false,
                            items: [
                                { text: 'Inbox', link: '/id/features/inbox' },
                                { text: 'Broadcast', link: '/id/features/broadcast' },
                                { text: 'Templates', link: '/id/features/templates' },
                                { text: 'Contacts', link: '/id/features/contacts' },
                                { text: 'Groups', link: '/id/features/groups' }
                            ]
                        },
                        {
                            text: '🤖 Automation',
                            collapsed: false,
                            items: [
                                { text: 'Chatbot Builder', link: '/id/features/chatbot' },
                                { text: 'Auto Reply', link: '/id/features/auto-reply' },
                                { text: 'Smart Knowledge (RAG)', link: '/id/features/smart-knowledge/' }
                            ]
                        },
                        {
                            text: '🔌 Integration',
                            collapsed: false,
                            items: [
                                { text: 'Webhook', link: '/id/features/webhook' },
                                { text: 'Integrations', link: '/id/features/integrations' },
                                { text: 'N8N Setup', link: '/id/features/n8n-setup' }
                            ]
                        },
                        {
                            text: '✨ AI Features',
                            collapsed: false,
                            items: [
                                { text: 'Overview', link: '/id/features/ai-features' },
                                { text: 'Smart Reply', link: '/id/features/smart-reply' },
                                { text: 'Sentiment Analysis', link: '/id/features/sentiment' }
                            ]
                        },
                        {
                            text: '⚙️ Administration',
                            collapsed: false,
                            items: [
                                { text: 'Dashboard', link: '/id/features/dashboard' },
                                { text: 'Analytics', link: '/id/features/analytics' },
                                { text: 'Team', link: '/id/features/team' },
                                { text: 'Settings', link: '/id/features/settings' },
                                { text: 'Security', link: '/id/features/security' },
                                { text: 'Billing', link: '/id/features/billing' }
                            ]
                        }
                    ],
                    '/id/api/': [
                        {
                            text: '📚 API Reference',
                            collapsed: false,
                            items: [
                                { text: 'Overview', link: '/id/api/' },
                                { text: 'Authentication', link: '/id/api/authentication' },
                                { text: 'Messages', link: '/id/api/messages' },
                                { text: 'Devices', link: '/id/api/devices' },
                                { text: 'Contacts', link: '/id/api/contacts' },
                                { text: 'Broadcasts', link: '/id/api/broadcasts' },
                                { text: 'Smart Knowledge', link: '/id/api/smart-knowledge' }
                            ]
                        }
                    ]
                }
            }
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            title: 'KeWhats Docs',
            description: 'Complete Documentation for KeWhats - WhatsApp Gateway & Business Automation Platform',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/en/guide/' },
                    { text: 'Features', link: '/en/features/' },
                    { text: 'API', link: '/en/api/' },
                    { text: 'FAQ', link: '/en/faq' }
                ],
                sidebar: {
                    '/en/guide/': [
                        {
                            text: '🚀 Getting Started',
                            collapsed: false,
                            items: [
                                { text: 'Introduction', link: '/en/guide/' },
                                { text: 'Registration & Login', link: '/en/guide/registration' },
                                { text: 'Connect Device', link: '/en/guide/connect-device' },
                                { text: 'Send First Message', link: '/en/guide/first-message' }
                            ]
                        },
                        {
                            text: '📱 Device & Connection',
                            collapsed: false,
                            items: [
                                { text: 'Device Management', link: '/en/guide/devices' },
                                { text: 'Troubleshooting', link: '/en/guide/device-troubleshooting' }
                            ]
                        }
                    ],
                    '/en/features/': [
                        {
                            text: '💬 Messaging',
                            collapsed: false,
                            items: [
                                { text: 'Inbox', link: '/en/features/inbox' },
                                { text: 'Broadcast', link: '/en/features/broadcast' },
                                { text: 'Templates', link: '/en/features/templates' },
                                { text: 'Contacts', link: '/en/features/contacts' },
                                { text: 'Groups', link: '/en/features/groups' }
                            ]
                        },
                        {
                            text: '🤖 Automation',
                            collapsed: false,
                            items: [
                                { text: 'Chatbot Builder', link: '/en/features/chatbot' },
                                { text: 'Auto Reply', link: '/en/features/auto-reply' },
                                { text: 'Smart Knowledge (RAG)', link: '/en/features/smart-knowledge/' }
                            ]
                        },
                        {
                            text: '🔌 Integration',
                            collapsed: false,
                            items: [
                                { text: 'Webhook', link: '/en/features/webhook' },
                                { text: 'Integrations', link: '/en/features/integrations' },
                                { text: 'N8N Setup', link: '/en/features/n8n-setup' }
                            ]
                        },
                        {
                            text: '✨ AI Features',
                            collapsed: false,
                            items: [
                                { text: 'Overview', link: '/en/features/ai-features' },
                                { text: 'Smart Reply', link: '/en/features/smart-reply' },
                                { text: 'Sentiment Analysis', link: '/en/features/sentiment' }
                            ]
                        },
                        {
                            text: '⚙️ Administration',
                            collapsed: false,
                            items: [
                                { text: 'Dashboard', link: '/en/features/dashboard' },
                                { text: 'Analytics', link: '/en/features/analytics' },
                                { text: 'Team', link: '/en/features/team' },
                                { text: 'Settings', link: '/en/features/settings' },
                                { text: 'Security', link: '/en/features/security' },
                                { text: 'Billing', link: '/en/features/billing' }
                            ]
                        }
                    ],
                    '/en/api/': [
                        {
                            text: '📚 API Reference',
                            collapsed: false,
                            items: [
                                { text: 'Overview', link: '/en/api/' },
                                { text: 'Authentication', link: '/en/api/authentication' },
                                { text: 'Messages', link: '/en/api/messages' },
                                { text: 'Devices', link: '/en/api/devices' },
                                { text: 'Contacts', link: '/en/api/contacts' },
                                { text: 'Broadcasts', link: '/en/api/broadcasts' },
                                { text: 'Smart Knowledge', link: '/en/api/smart-knowledge' }
                            ]
                        }
                    ]
                }
            }
        }
    },

    // Theme Configuration
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'KeWhats',

        // Search
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Cari',
                                buttonAriaLabel: 'Cari'
                            },
                            modal: {
                                noResultsText: 'Tidak ada hasil untuk',
                                resetButtonTitle: 'Hapus pencarian',
                                footer: {
                                    selectText: 'untuk memilih',
                                    navigateText: 'untuk navigasi'
                                }
                            }
                        }
                    }
                }
            }
        },

        // Social Links
        socialLinks: [
            { icon: 'github', link: 'https://github.com/kewhats/kewhats' },
            { icon: 'discord', link: 'https://discord.gg/kewhats' }
        ],

        // Footer
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 KeWhats Team'
        },

        // Edit Link
        editLink: {
            pattern: 'https://github.com/kewhats/kewhats-docs/edit/main/:path',
            text: 'Edit this page on GitHub'
        },

        // Last Updated
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },

        // Outline
        outline: {
            level: [2, 3],
            label: 'On this page'
        },

        // Carbon Ads (optional)
        // carbonAds: {
        //   code: 'your-carbon-code',
        //   placement: 'your-carbon-placement'
        // }
    },

    // Head tags
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#25D366' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:site_name', content: 'KeWhats Docs' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
    ],

    // Markdown
    markdown: {
        lineNumbers: true,
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        }
    },

    // Build
    cleanUrls: true,
    lastUpdated: true
})
