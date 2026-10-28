<template>
  <div class="av">
    <header class="av-top">
      <img :src="aidlLogo" alt="AIDL" class="av-logo" />
      <div>
        <h1>Your licence avatar</h1>
        <p v-if="info">{{ info.name }} · it goes on your AI Driving Licence</p>
      </div>
    </header>

    <div v-if="loading" class="av-msg">Loading…</div>
    <div v-else-if="error && !info" class="av-msg av-err">{{ error }}</div>

    <template v-else-if="info">
      <section v-if="saved" class="av-box av-done">
        <div class="av-preview"><AvatarBuilder :config="saved" /></div>
        <div>
          <h2>✅ Avatar saved</h2>
          <p>{{ message }}</p>
          <p class="av-hint">You can close this page and go back to Slack.</p>
          <button type="button" class="av-btn av-ghost" @click="picking = true">Change it</button>
        </div>
      </section>

      <section v-else class="av-box">
        <h2>Pick the avatar for your licence</h2>
        <p class="av-hint">Choose a ready-made one or build your own. Your licence arrives in Slack as soon as it's saved.</p>
        <p v-if="error" class="av-err-line">{{ error }}</p>
        <button type="button" class="av-btn" :disabled="busy" @click="picking = true">
          {{ busy ? 'Saving…' : 'Choose my avatar →' }}
        </button>
      </section>
    </template>

    <AvatarPickerModal
      v-if="picking"
      confirm-label="Use this avatar"
      @confirm="onPicked"
      @close="picking = false"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo.png'
import AvatarBuilder from '../components/AvatarBuilder.vue'
import AvatarPickerModal from '../components/AvatarPickerModal.vue'
import type { AvatarConfig } from '../lib/avatar-parts'
import { AvatarError, avatarPng, getAvatar, hasToken, saveAvatar, saveToken, type AvatarInfo } from '../lib/avatarApi'

const route = useRoute()
const router = useRouter()
const info = ref<AvatarInfo | null>(null)
const loading = ref(true)
const busy = ref(false)
const picking = ref(false)
const error = ref('')
const message = ref('')
const saved = ref<AvatarConfig | null>(null)

async function onPicked(avatar: AvatarConfig & { name?: string }) {
  picking.value = false
  busy.value = true
  error.value = ''
  const { name: _preset, ...cfg } = avatar
  try {
    const r = await saveAvatar(await avatarPng(cfg), cfg)
    saved.value = cfg
    message.value = r.message
  } catch (e) {
    error.value = e instanceof AvatarError ? e.message : 'Something went wrong. Please try again.'
  } finally {
    busy.value = false
  }
}

onMounted(async () => {
  const token = typeof route.query.token === 'string' ? route.query.token : ''
  if (token) {
    saveToken(token)
    router.replace({ path: '/avatar', query: {} }) // keep the token out of the address bar
  }
  if (route.query.error || !hasToken()) {
    error.value = 'This link has expired. Open “Create my avatar” in Slack again.'
    loading.value = false
    return
  }
  try {
    info.value = await getAvatar()
    picking.value = !info.value.has_avatar
  } catch (e) {
    error.value = e instanceof AvatarError ? e.message : 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.av { min-height: 100vh; background: var(--cream, #f5ecd2); color: var(--ink, #14140f); padding: 28px 16px 60px; }
.av-top { max-width: 720px; margin: 0 auto 22px; display: flex; gap: 14px; align-items: center; }
.av-logo { height: 48px; width: auto; }
.av-top h1 { font-family: "Bungee", sans-serif; font-size: clamp(20px, 4vw, 30px); margin: 0; }
.av-top p { margin: 4px 0 0; font-family: "JetBrains Mono", monospace; font-size: 12px; }
.av-msg { max-width: 720px; margin: 40px auto; text-align: center; font-family: "JetBrains Mono", monospace; }
.av-err { color: #c62f24; }
.av-box { max-width: 720px; margin: 0 auto; border: 3px solid var(--ink, #14140f); background: #fff; padding: 20px; }
.av-box h2 { margin: 0 0 6px; font-family: "Bungee", sans-serif; font-size: 18px; }
.av-hint { font-size: 13px; color: #5a5440; margin: 4px 0 14px; }
.av-err-line { color: #c62f24; font-size: 14px; }
.av-done { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; background: #e6f7ec; }
.av-preview { width: 150px; height: 165px; border: 3px solid var(--ink, #14140f); border-radius: 10px; overflow: hidden; flex: none; }
.av-btn { border: 3px solid var(--ink, #14140f); background: #e3342f; color: #fff; padding: 12px 22px; cursor: pointer;
  font-family: "Bungee", sans-serif; font-size: 14px; }
.av-btn:disabled { opacity: 0.6; cursor: wait; }
.av-ghost { background: #fff; color: var(--ink, #14140f); padding: 8px 14px; font-size: 12px; }
</style>
