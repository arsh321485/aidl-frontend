<template>
  <div class="signin-page">
    <div class="signin-card">
      <div class="signin-header">
        <a class="brand" href="#">
          <span class="brand-mark">AI</span>
          <span>AIDL</span>
        </a>
        <div class="signin-badge">SECURE ACCESS</div>
      </div>

      <div class="signin-body">
        <h2 class="signin-title">SIGN IN TO<br/>YOUR ACCOUNT</h2>
        <p class="signin-sub">Enter your credentials to access the AIDL platform.</p>

        <form @submit.prevent="handleSignIn">
          <div class="field">
            <label>Email Address <span>*</span></label>
            <input
              type="email"
              v-model="email"
              placeholder="you@example.com"
              autocomplete="email"
              :class="{ error: hasError }"
            />
          </div>
          <div class="field" style="margin-top: 16px;">
            <label>Password <span>*</span></label>
            <input
              type="password"
              v-model="password"
              placeholder="••••••••••"
              autocomplete="current-password"
              :class="{ error: hasError }"
            />
          </div>

          <div v-if="hasError" class="error-msg">
            Invalid email or password. Please try again.
          </div>

          <button type="submit" class="btn btn-red signin-btn">
            SIGN IN →
          </button>
        </form>
      </div>

      <div class="signin-foot">
        <span>AIDL · AI DRIVING LICENSE</span>
        <span>v2.6 — COHORT 06</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const hasError = ref(false)

const VALID_EMAIL = 'arshmittal740@gmail.com'
const VALID_PASSWORD = 'Arsh123#Mittal'

function handleSignIn() {
  if (email.value.trim() === VALID_EMAIL && password.value === VALID_PASSWORD) {
    localStorage.setItem('aidl_auth', 'true')
    hasError.value = false
    router.push('/home')
  } else {
    hasError.value = true
  }
}
</script>

<style scoped>
.signin-page {
  min-height: 100vh;
  background: var(--asphalt);
  display: grid;
  place-items: center;
  padding: 40px 20px;
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 20px,
    rgba(255, 204, 0, 0.04) 20px 22px
  );
}

.signin-card {
  width: 100%;
  max-width: 480px;
  background: var(--cream);
  border: 4px solid var(--ink);
  box-shadow: 12px 12px 0 var(--sign-yellow);
  overflow: hidden;
}

.signin-header {
  background: var(--ink);
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Bungee", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: var(--cream);
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--sign-yellow);
  border: 3px solid var(--sign-yellow);
  display: grid;
  place-items: center;
  font-family: "Bungee", sans-serif;
  font-size: 16px;
  color: var(--ink);
  box-shadow: 3px 3px 0 rgba(255,255,255,0.2);
}

.signin-badge {
  background: var(--signal-red);
  color: var(--cream);
  font-family: "Bungee", sans-serif;
  font-size: 11px;
  padding: 5px 10px;
  border: 2px solid var(--cream);
  transform: rotate(-3deg);
}

.signin-body {
  padding: 36px 28px 28px;
}

.signin-title {
  font-family: "Bungee", sans-serif;
  font-size: 36px;
  line-height: 1.0;
  margin: 0 0 12px;
  color: var(--ink);
}

.signin-sub {
  font-size: 15px;
  color: #6a624a;
  margin: 0 0 28px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  text-transform: uppercase;
  color: var(--ink);
}

.field label span {
  color: var(--signal-red);
}

.field input {
  height: 48px;
  border: 3px solid var(--ink);
  background: var(--cream-2);
  padding: 0 16px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
  outline: none;
  transition: background 0.1s;
}

.field input:focus {
  background: var(--sign-yellow);
}

.field input.error {
  border-color: var(--signal-red);
  background: #fff0ee;
}

.error-msg {
  margin-top: 14px;
  padding: 12px 16px;
  background: var(--signal-red);
  color: var(--cream);
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  border: 2px solid var(--ink);
}

.signin-btn {
  margin-top: 24px;
  width: 100%;
  height: 52px;
  font-size: 16px;
  justify-content: center;
  border: 3px solid var(--ink);
  cursor: pointer;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  background: var(--ink);
  color: var(--cream);
  font-family: "Bungee", sans-serif;
  font-size: 14px;
  text-decoration: none;
  box-shadow: 4px 4px 0 var(--sign-yellow);
  transition: transform .12s, box-shadow .12s;
}

.btn.btn-red {
  background: var(--signal-red);
  color: var(--cream);
  box-shadow: 4px 4px 0 var(--ink);
}

.btn.btn-red:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}

.signin-foot {
  background: var(--cream-2);
  border-top: 3px dashed var(--ink);
  padding: 14px 28px;
  display: flex;
  justify-content: space-between;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  color: #6a624a;
}
</style>
