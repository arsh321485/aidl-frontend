<template>
  <div class="ap-backdrop" @click.self="$emit('close')">
    <div class="ap-modal" role="dialog" aria-modal="true" aria-label="Pick your avatar">
      <div class="ap-head">
        <span>PICK YOUR AVATAR</span>
        <button type="button" class="ap-close" @click="$emit('close')" aria-label="Close">✕</button>
      </div>

      <div class="ap-body">
        <div v-if="mode === 'presets'" class="ap-scroll">
          <p class="ap-sub">Choose a ready-made face for your licence, or build your own.</p>
          <div class="ap-grid">
            <button
              v-for="preset in PRESETS"
              :key="preset.name"
              type="button"
              class="ap-option"
              :class="{ active: selected?.name === preset.name }"
              @click="selected = preset"
            >
              <span class="ap-thumb"><AvatarBuilder :config="preset" /></span>
            </button>
            <button type="button" class="ap-option ap-custom" @click="openCustom">
              <span class="ap-plus">+</span>
              <small>Create Your Own</small>
            </button>
          </div>
        </div>

        <div v-else class="ap-custom-layout">
          <div class="ap-preview-col">
            <span class="ap-thumb ap-thumb-lg"><AvatarBuilder :config="config" /></span>
            <div class="ap-gender-toggle">
              <button type="button" :class="{ active: config.gender === 'girl' }" @click="setGender('girl')">Girl</button>
              <button type="button" :class="{ active: config.gender === 'boy' }" @click="setGender('boy')">Boy</button>
            </div>
            <button type="button" class="ap-back" @click="mode = 'presets'">← Back to presets</button>
          </div>

          <div class="ap-options-col">
            <section class="ap-section">
              <h4>Face Shape</h4>
              <div class="ap-thumb-grid">
                <button
                  v-for="fs in FACE_SHAPES" :key="fs.key" type="button" class="ap-thumb-btn"
                  :class="{ active: config.faceShape === fs.key }" @click="config.faceShape = fs.key"
                >
                  <span class="ap-thumb"><AvatarBuilder :config="{ ...config, faceShape: fs.key }" /></span>
                  <small>{{ fs.label }}</small>
                </button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Skin Tone</h4>
              <div class="ap-swatch-row">
                <button
                  v-for="s in SKIN_TONES" :key="s.key" type="button" class="ap-swatch"
                  :class="{ active: config.skin === s.value }" :style="{ background: s.value }"
                  :title="s.label" @click="config.skin = s.value"
                ></button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Hairstyle</h4>
              <div class="ap-thumb-grid">
                <button
                  v-for="h in visibleHairstyles" :key="h.key" type="button" class="ap-thumb-btn"
                  :class="{ active: config.hairStyle === h.key }" @click="config.hairStyle = h.key"
                >
                  <span class="ap-thumb"><AvatarBuilder :config="{ ...config, hairStyle: h.key }" /></span>
                  <small>{{ h.label }}</small>
                </button>
              </div>
            </section>

            <section class="ap-section">
              <h4>{{ config.hairStyle === 'hijab' ? 'Hijab Colour' : 'Hair Colour' }}</h4>
              <div class="ap-swatch-row">
                <button
                  v-for="c in HAIR_COLORS" :key="c.key" type="button" class="ap-swatch"
                  :class="{ active: config.hairColor === c.value }" :style="{ background: c.value }"
                  :title="c.label" @click="config.hairColor = c.value"
                ></button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Eyes</h4>
              <div class="ap-thumb-grid">
                <button
                  v-for="e in EYE_STYLES" :key="e.key" type="button" class="ap-thumb-btn"
                  :class="{ active: config.eyes === e.key }" @click="config.eyes = e.key"
                >
                  <span class="ap-thumb"><AvatarBuilder :config="{ ...config, eyes: e.key }" /></span>
                  <small>{{ e.label }}</small>
                </button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Eye Colour</h4>
              <div class="ap-swatch-row">
                <button
                  v-for="c in EYE_COLORS" :key="c.key" type="button" class="ap-swatch"
                  :class="{ active: config.eyeColor === c.value }" :style="{ background: c.value }"
                  :title="c.label" @click="config.eyeColor = c.value"
                ></button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Eyewear</h4>
              <div class="ap-thumb-grid">
                <button
                  v-for="w in EYEWEAR_STYLES" :key="w.key" type="button" class="ap-thumb-btn"
                  :class="{ active: config.eyewear === w.key }" @click="config.eyewear = w.key"
                >
                  <span class="ap-thumb"><AvatarBuilder :config="{ ...config, eyewear: w.key }" /></span>
                  <small>{{ w.label }}</small>
                </button>
              </div>
            </section>

            <section class="ap-section" v-if="config.gender === 'boy'">
              <h4>Facial Hair</h4>
              <div class="ap-thumb-grid">
                <button
                  v-for="f in FACIAL_HAIR_STYLES" :key="f.key" type="button" class="ap-thumb-btn"
                  :class="{ active: config.facialHair === f.key }" @click="config.facialHair = f.key"
                >
                  <span class="ap-thumb"><AvatarBuilder :config="{ ...config, facialHair: f.key }" /></span>
                  <small>{{ f.label }}</small>
                </button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Outfit</h4>
              <div class="ap-thumb-grid">
                <button
                  v-for="o in visibleOutfits" :key="o.key" type="button" class="ap-thumb-btn"
                  :class="{ active: config.outfit === o.key }" @click="config.outfit = o.key"
                >
                  <span class="ap-thumb"><AvatarBuilder :config="{ ...config, outfit: o.key }" /></span>
                  <small>{{ o.label }}</small>
                </button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Outfit Colour</h4>
              <div class="ap-swatch-row">
                <button
                  v-for="c in OUTFIT_COLORS" :key="c.key" type="button" class="ap-swatch"
                  :class="{ active: config.outfitColor === c.value }" :style="{ background: c.value }"
                  :title="c.label" @click="config.outfitColor = c.value"
                ></button>
              </div>
            </section>

            <section class="ap-section">
              <h4>Background</h4>
              <div class="ap-swatch-row">
                <button
                  v-for="c in BG_COLORS" :key="c.key" type="button" class="ap-swatch"
                  :class="{ active: config.bg === c.value }" :style="{ background: c.value }"
                  :title="c.label" @click="config.bg = c.value"
                ></button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="ap-foot">
        <button type="button" class="ap-btn ap-btn-ghost" @click="$emit('close')">Cancel</button>
        <button type="button" class="ap-btn ap-btn-red" :disabled="!canConfirm" @click="confirm">Confirm &amp; Get Permit →</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import AvatarBuilder from './AvatarBuilder.vue'
import {
  SKIN_TONES, HAIR_COLORS, EYE_COLORS, OUTFIT_COLORS, BG_COLORS, FACE_SHAPES,
  HAIRSTYLES, EYE_STYLES, EYEWEAR_STYLES, OUTFIT_STYLES, FACIAL_HAIR_STYLES,
  DEFAULT_AVATAR, PRESETS, type AvatarConfig
} from '../lib/avatar-parts'

const emit = defineEmits<{
  confirm: [avatar: AvatarConfig & { name?: string }]
  close: []
}>()

const mode = ref<'presets' | 'custom'>('presets')
const selected = ref<(AvatarConfig & { name: string }) | null>(null)
const config = reactive<AvatarConfig>({ ...DEFAULT_AVATAR })

const visibleHairstyles = computed(() => HAIRSTYLES.filter(h => h.gender === 'unisex' || h.gender === config.gender))
const visibleOutfits = computed(() => OUTFIT_STYLES.filter(o => o.gender === 'unisex' || o.gender === config.gender))

const canConfirm = computed(() => mode.value === 'custom' || !!selected.value)

function setGender(g: 'boy' | 'girl') {
  config.gender = g
  if (g === 'girl') config.facialHair = 'none'
  if (!visibleHairstyles.value.some(h => h.key === config.hairStyle)) config.hairStyle = g === 'boy' ? 'crew-cut' : 'long-wavy'
  if (!visibleOutfits.value.some(o => o.key === config.outfit)) config.outfit = 'tshirt'
}

function openCustom() {
  if (selected.value) Object.assign(config, selected.value)
  mode.value = 'custom'
}

function confirm() {
  if (mode.value === 'custom') {
    emit('confirm', { ...config })
  } else if (selected.value) {
    emit('confirm', { ...selected.value })
  }
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
  width: min(720px, 100%);
  height: min(640px, 92vh);
  display: flex;
  flex-direction: column;
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
  flex-shrink: 0;
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
.ap-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.ap-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}
.ap-sub {
  font-size: 13px;
  opacity: 0.8;
  margin: 0 0 16px;
}
.ap-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 18px;
}
.ap-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 6px;
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
.ap-thumb {
  display: block;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--ink, #14140f);
  background: #eee;
  flex-shrink: 0;
}
.ap-thumb-lg {
  width: 140px;
  height: 140px;
  margin: 0 auto;
}
.ap-custom-layout {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 18px;
}
.ap-preview-col {
  flex: 0 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
}
.ap-gender-toggle {
  display: flex;
  border: 2px solid var(--ink, #14140f);
  border-radius: 8px;
  overflow: hidden;
}
.ap-gender-toggle button {
  border: 0;
  background: var(--cream-2, #f0e3bd);
  padding: 8px 12px;
  font-family: "Bungee", sans-serif;
  font-size: 10px;
  cursor: pointer;
}
.ap-gender-toggle button.active {
  background: var(--sign-yellow, #ffcc00);
}
.ap-options-col {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding-right: 6px;
}
.ap-section {
  margin-bottom: 16px;
}
.ap-section h4 {
  font-family: "Bungee", sans-serif;
  font-size: 10px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0 0 8px;
  opacity: 0.75;
}
.ap-swatch-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ap-swatch {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--ink, #14140f);
  cursor: pointer;
  padding: 0;
}
.ap-swatch.active {
  box-shadow: 0 0 0 3px var(--cream, #f5ecd2), 0 0 0 5px var(--ink, #14140f);
}
.ap-thumb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
}
.ap-thumb-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 2px;
  background: var(--cream-2, #f0e3bd);
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-size: 8.5px;
  font-family: "JetBrains Mono", monospace;
  text-align: center;
}
.ap-thumb-btn.active {
  border-color: var(--ink, #14140f);
  background: var(--sign-yellow, #ffcc00);
}
.ap-back {
  background: none;
  border: 0;
  text-decoration: underline;
  font-size: 11px;
  cursor: pointer;
  color: inherit;
  padding: 0;
}
.ap-foot {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 2px dashed var(--asphalt-3, #b8ac86);
  padding-top: 16px;
  margin-top: 12px;
  flex-shrink: 0;
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

@media (max-width: 560px) {
  .ap-modal {
    height: min(680px, 94vh);
  }
  .ap-custom-layout {
    flex-direction: column;
    overflow-y: auto;
  }
  .ap-preview-col {
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: center;
  }
  .ap-thumb-lg {
    width: 90px;
    height: 90px;
  }
  .ap-options-col {
    overflow-y: visible;
  }
  .ap-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
