---
layout: home
---

<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()

// Redirect to Indonesian version
if (typeof window !== 'undefined') {
  router.go('/id/')
}
</script>

<div style="text-align: center; padding: 4rem 2rem;">
  <h1>🔄 Redirecting...</h1>
  <p>Please wait or <a href="/id/">click here</a> for Indonesian version</p>
  <p>or <a href="/en/">click here</a> for English version</p>
</div>
