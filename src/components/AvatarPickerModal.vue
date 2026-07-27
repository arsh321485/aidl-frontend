<template>
  <div class="ap-backdrop" @click.self="$emit('close')">
    <div class="ap-modal" role="dialog" aria-modal="true" aria-label="Pick your avatar">
      <div class="ap-head">
        <span>PICK YOUR AVATAR</span>
        <button type="button" class="ap-close" @click="$emit('close')" aria-label="Close">✕</button>
      </div>

      <template v-if="mode === 'presets'">
        <p class="ap-sub">Choose a face for your licence — no real photos needed.</p>
        <div class="ap-grid">
          <button
            v-for="preset in presets"
            :key="preset.color"
            type="button"
            class="ap-option"
            :class="{ active: selected?.color === preset.color }"
            @click="selected = preset"
          >
            <span class="ap-bot" :style="{ '--ap-color': preset.color }">
              <span class="ap-bot-antenna"></span>
              <span class="ap-bot-head"></span>
              <span class="ap-bot-body"></span>
            </span>
            <small>{{ preset.name }}</small>
          </button>
          <button type="button" class="ap-option ap-custom" @click="mode = 'custom'">
            <span class="ap-plus">+</span>
            <small>Create Your Own</small>
          </button>
        </div>
      </template>

      <template v-else>
        <p class="ap-sub">Pick a colour for your avatar.</p>
        <div class="ap-preview">
          <span class="ap-bot ap-bot-lg" :style="{ '--ap-color': customColor }">
            <span class="ap-bot-antenna"></span>
            <span class="ap-bot-head"></span>
            <span class="ap-bot-body"></span>
          </span>
        </div>
        <div class="ap-swatches">
          <button
            v-for="c in customColors"
            :key="c"
            type="button"
            class="ap-swatch"
            :class="{ active: customColor === c }"
            :style="{ background: c }"
            :aria-label="'Choose colour ' + c"
            @click="pickCustom(c)"
          ></button>
        </div>
        <button type="button" class="ap-back" @click="mode = 'presets'">← Back to presets</button>
      </template>

      <div class="ap-foot">
        <button type="button" class="ap-btn ap-btn-ghost" @click="$emit('close')">Cancel</button>
        <button type="button" class="ap-btn ap-btn-red" :disabled="!selected" @click="confirm">Confirm &amp; Get Permit →</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface AvatarChoice {
  color: string
  name: string
}

const emit = defineEmits<{
  confirm: [avatar: AvatarChoice]
  close: []
}>()

const presets: AvatarChoice[] = [
  { color: '#2ec866', name: 'Green' },
  { color: '#6fb3e0', name: 'Sky' },
  { color: '#ffcc00', name: 'Yellow' },
  { color: '#e23a2e', name: 'Red' },
  { color: '#a06fe0', name: 'Violet' }
]

const customColors = ['#2ec866', '#6fb3e0', '#ffcc00', '#e23a2e', '#a06fe0', '#ff9d00', '#14140f', '#f5ecd2']

const mode = ref<'presets' | 'custom'>('presets')
const selected = ref<AvatarChoice | null>(null)
const customColor = ref(customColors[0])

function pickCustom(c: string) {
  customColor.value = c
  selected.value = { color: c, name: 'Custom' }
}

function confirm() {
  if (!selected.value) return
  emit('confirm', selected.value)
}
</script>

<style scoped>
.ap-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 7, 0.6);
  display: grid;
  place-items: center;
  z-index: 200;
  padding: 20px;
}
.ap-modal {
  width: min(480px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: var(--cream, #f5ecd2);
  color: var(--ink, #14140f);
  border: 3px solid var(--ink, #14140f);
  border-radius: 14px;
  box-shadow: 6px 6px 0 var(--ink, #14140f);
  padding: 20px;
}
.ap-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Bungee", sans-serif;
  font-size: 13px;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}
.ap-close {
  width: 30px;
  height: 30px;
  border: 2px solid var(--ink, #14140f);
  background: var(--cream-2, #f0e3bd);
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
}
.ap-sub {
  font-size: 13px;
  opacity: 0.8;
  margin: 0 0 16px;
}
.ap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 18px;
}
.ap-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 6px;
  background: var(--cream-2, #f0e3bd);
  border: 2px solid var(--ink, #14140f);
  border-radius: 10px;
  cursor: pointer;
  font-family: "Bungee", sans-serif;
  font-size: 9px;
}
.ap-option.active {
  background: var(--sign-yellow, #ffcc00);
  box-shadow: 3px 3px 0 var(--ink, #14140f);
}
.ap-custom {
  justify-content: center;
}
.ap-plus {
  font-size: 24px;
  line-height: 1;
}
.ap-bot {
  --ap-color: #2ec866;
  position: relative;
  width: 46px;
  height: 54px;
}
.ap-bot-lg {
  width: 90px;
  height: 106px;
}
.ap-bot-head {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 60%;
  height: 52%;
  background: var(--ink, #14140f);
  border: 2px solid var(--ink, #14140f);
  border-radius: 30% 30% 20% 20%;
}
.ap-bot-head::before,
.ap-bot-head::after {
  content: "";
  position: absolute;
  top: 34%;
  width: 16%;
  height: 16%;
  background: var(--ap-color);
  border-radius: 50%;
}
.ap-bot-head::before { left: 16%; }
.ap-bot-head::after { right: 16%; }
.ap-bot-antenna {
  position: absolute;
  left: 50%;
  top: -14%;
  width: 3px;
  height: 16%;
  background: var(--ink, #14140f);
  transform: translateX(-50%);
}
.ap-bot-antenna::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -6px;
  width: 8px;
  height: 8px;
  background: var(--ap-color);
  border: 2px solid var(--ink, #14140f);
  border-radius: 50%;
  transform: translateX(-50%);
}
.ap-bot-body {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 90%;
  height: 44%;
  background: var(--cream-2, #f0e3bd);
  border: 2px solid var(--ink, #14140f);
  border-radius: 22% 22% 10% 10%;
}
.ap-bot-body::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 18%;
  transform: translateX(-50%);
  width: 26%;
  height: 26%;
  background: var(--ap-color);
  border: 2px solid var(--ink, #14140f);
  border-radius: 50%;
}
.ap-preview {
  display: grid;
  place-items: center;
  padding: 16px 0;
}
.ap-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 14px;
}
.ap-swatch {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--ink, #14140f);
  cursor: pointer;
}
.ap-swatch.active {
  box-shadow: 0 0 0 3px var(--cream, #f5ecd2), 0 0 0 5px var(--ink, #14140f);
}
.ap-back {
  display: block;
  margin: 0 auto 16px;
  background: none;
  border: 0;
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer;
  color: inherit;
}
.ap-foot {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 2px dashed var(--asphalt-3, #b8ac86);
  padding-top: 16px;
}
.ap-btn {
  font-family: "Bungee", sans-serif;
  font-size: 11px;
  padding: 12px 18px;
  border: 2px solid var(--ink, #14140f);
  border-radius: 8px;
  cursor: pointer;
}
.ap-btn-ghost {
  background: var(--cream, #f5ecd2);
  color: var(--ink, #14140f);
}
.ap-btn-red {
  background: var(--signal-red, #e23a2e);
  color: #fff;
}
.ap-btn-red:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
