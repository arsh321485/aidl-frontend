<template>
  <div class="signin-page">
    <div class="signin-card">
      <div class="signin-header">
        <a class="brand" href="#">
          <img class="brand-mark" :src="aidlLogo" alt="AIDL" />
          <span>AIDL</span>
        </a>
        <div class="signin-badge">{{ mode === 'admin' ? 'ORG ADMIN' : 'USER' }}</div>
      </div>

      <div class="signin-body">
        <template v-if="mode === 'admin'">
          <h2 class="signin-title">SIGN IN TO<br/>FLEET OFFICE</h2>
          <p class="signin-sub">Admin credentials for the org dashboard — seats, dispatch keys, policy, approved apps.</p>
        </template>
        <template v-else>
          <h2 class="signin-title">SIGN IN AS<br/>A USER</h2>
          <p class="signin-sub">Use your user account to reach the AIDL home dashboard.</p>
        </template>

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
            <div class="password-wrap">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="••••••••••"
                autocomplete="current-password"
                :class="{ error: hasError }"
              />
              <button
                type="button"
                class="password-toggle"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg v-if="showPassword" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.6 18.6 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
                <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="hasError" class="error-msg">
            Invalid email or password. Please try again.
          </div>

          <button type="submit" class="btn btn-red signin-btn">
            SIGN IN →
          </button>
        </form>

        <p v-if="mode === 'admin'" class="signin-alt">Not an admin? <router-link :to="{ name: 'user-signin' }">Continue as a user →</router-link></p>
        <p v-else class="signin-alt">Not a user? <router-link :to="{ name: 'signin' }">← Back to admin sign in</router-link></p>

        <p class="signin-alt signin-alt-secondary">
          Don't have an account?
          <router-link :to="{ name: mode === 'admin' ? 'admin-signup' : 'user-signup' }">Sign up →</router-link>
        </p>
      </div>

      <div class="signin-foot">
        <span>AIDL · AI DRIVING LICENSE</span>
        <span>v2.6 — COHORT 06</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { verifyCredentials, setCurrentAdminEmail } from '../lib/authAccounts'
import aidlLogo from '../assets/images/aidl-logo.png'

const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')
const hasError = ref(false)
const showPassword = ref(false)

// The path picks the mode ('/' = admin, '/signin' = user) so admin vs.
// user sign-in are distinct, linkable/bookmarkable URLs rather than
// component-local state — see router/index.ts.
const mode = computed<'admin' | 'user'>(() => (route.meta.authRole === 'user' ? 'user' : 'admin'))

watch(mode, () => {
  hasError.value = false
})

function handleSignIn() {
  if (verifyCredentials(mode.value, email.value, password.value)) {
    hasError.value = false
    if (mode.value === 'admin') {
      localStorage.setItem('aidl_auth', 'true')
      setCurrentAdminEmail(email.value.trim())
      const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/fleet-office'
      router.push(redirect)
    } else {
      localStorage.setItem('aidl_user_auth', 'true')
      router.push('/home')
    }
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
  object-fit: cover;
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

.password-wrap {
  position: relative;
  display: flex;
  width: 100%;
}

.password-wrap input {
  width: 100%;
  padding-right: 48px;
  margin: 0;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  margin: 0;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  line-height: 0;
  cursor: pointer;
  color: #6a624a;
  padding: 0;
}

.password-toggle:hover {
  color: var(--ink);
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

.signin-alt {
  margin-top: 18px;
  text-align: center;
  font-size: 13px;
  color: #6a624a;
}

.signin-alt-secondary {
  margin-top: 8px;
}

.signin-alt a {
  color: var(--ink);
  font-weight: 700;
  text-decoration: none;
}

.signin-alt a:hover {
  color: var(--signal-red);
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

@media (max-width: 520px) {
  .signin-page { padding: 24px 14px; }
  .signin-card { box-shadow: 8px 8px 0 var(--sign-yellow); }
  .signin-header,
  .signin-body,
  .signin-foot { padding-left: 18px; padding-right: 18px; }
  .signin-title { font-size: 28px; }
  .signin-foot { flex-direction: column; gap: 6px; text-align: center; }
  .signin-badge { font-size: 9px; }
}
</style>
