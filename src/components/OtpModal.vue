<template>
  <div class="otp-backdrop" @click.self="$emit('close')">
    <div class="otp" role="dialog" aria-modal="true" aria-labelledby="otp-title">
      <button type="button" class="otp-x" aria-label="Close" @click="$emit('close')">✕</button>
      <h3 id="otp-title">{{ title }}</h3>
      <p class="otp-sub">We emailed a 6-digit code to <strong>{{ email }}</strong>. It expires in 10 minutes.</p>
      <input
        ref="input"
        v-model="code"
        class="otp-input"
        inputmode="numeric"
        autocomplete="one-time-code"
        maxlength="6"
        placeholder="••••••"
        @input="code = code.replace(/\D/g, '')"
        @keyup.enter="submit"
      />
      <p v-if="error" class="otp-error">{{ error }}</p>
      <p v-if="devCode" class="otp-dev">Local testing (no email set up): your code is <strong>{{ devCode }}</strong></p>
      <button type="button" class="otp-btn" :disabled="busy || code.length !== 6" @click="submit">
        {{ busy ? 'Checking…' : 'Verify →' }}
      </button>
      <button type="button" class="otp-link" :disabled="busy" @click="$emit('resend')">Didn't get it? Send a new code</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{ title: string; email: string; error?: string; busy?: boolean; devCode?: string }>()
const emit = defineEmits<{ verify: [code: string]; resend: []; close: [] }>()

const code = ref('')
const input = ref<HTMLInputElement | null>(null)
onMounted(() => input.value?.focus())

function submit() {
  if (code.value.length === 6) emit('verify', code.value)
}
</script>

<style scoped>
.otp-backdrop { position: fixed; inset: 0; z-index: 450; background: rgba(12, 12, 9, .78); display: grid; place-items: center; padding: 16px; }
.otp { position: relative; width: 100%; max-width: 400px; background: var(--cream, #f5ecd2); border: 4px solid var(--ink, #14140f); box-shadow: 10px 10px 0 var(--sign-yellow, #ffcc00); padding: 26px 24px 20px; }
.otp h3 { font-family: "Bungee", sans-serif; font-size: 18px; margin: 0 0 8px; color: var(--ink, #14140f); }
.otp-sub { font-family: "JetBrains Mono", monospace; font-size: 12px; line-height: 1.5; margin: 0 0 16px; color: var(--ink, #14140f); word-break: break-word; }
.otp-x { position: absolute; top: 8px; right: 10px; border: 0; background: none; font-size: 16px; cursor: pointer; color: var(--ink, #14140f); }
.otp-input { width: 100%; box-sizing: border-box; border: 3px solid var(--ink, #14140f); background: #fff; padding: 12px; font-family: "JetBrains Mono", monospace; font-size: 26px; letter-spacing: .5em; text-align: center; }
.otp-error { color: #d93025; font-family: "JetBrains Mono", monospace; font-size: 12px; margin: 8px 0 0; }
.otp-dev { font-family: "JetBrains Mono", monospace; font-size: 11px; background: #fff4d6; border: 1px dashed #b38600; padding: 6px 8px; margin: 10px 0 0; }
.otp-btn { width: 100%; margin-top: 14px; border: 3px solid var(--ink, #14140f); background: var(--sign-yellow, #ffcc00); padding: 12px; font-family: "Bungee", sans-serif; font-size: 13px; cursor: pointer; box-shadow: 3px 3px 0 var(--ink, #14140f); }
.otp-btn:disabled { opacity: .55; cursor: not-allowed; }
.otp-link { display: block; margin: 12px auto 0; border: 0; background: none; font-family: "JetBrains Mono", monospace; font-size: 12px; text-decoration: underline; cursor: pointer; color: var(--ink, #14140f); }
</style>
