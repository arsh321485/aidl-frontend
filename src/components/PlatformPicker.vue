<template>
<!-- Navbar "pick a platform, then Add" control (HomeView + SitePageShell).
     Platforms come from lib/platforms.ts, so new ones need no change here.
     [icon Slack ▾] [ADD TO SLACK →] — both follow the picked platform. -->
<div ref="rootEl" class="pp" @keydown.esc="close(true)">
  <button
    ref="triggerEl"
    type="button"
    class="pp-trigger"
    aria-haspopup="menu"
    :aria-expanded="open"
    :aria-label="`Platform: ${current.name}. Change platform`"
    @click="toggle"
  >
    <span class="pp-ic" v-html="current.icon"></span>
    <span class="pp-name">{{ current.short }}</span>
    <svg class="pp-caret" :class="{ 'pp-up': open }" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" /></svg>
  </button>

  <div v-if="open" ref="menuEl" class="pp-menu" role="menu" aria-label="Choose a platform">
    <template v-for="g in groups" :key="g.id">
      <div class="pp-group" role="presentation">{{ g.label }}</div>
      <button
        v-for="p in g.items"
        :key="p.id"
        type="button"
        class="pp-item"
        :class="{ 'pp-on': p.id === modelValue }"
        role="menuitemradio"
        :aria-checked="p.id === modelValue"
        @click="pick(p.id)"
      >
        <span class="pp-ic" v-html="p.icon"></span>
        <span class="pp-item-name">{{ p.name }}</span>
        <span v-if="p.soon" class="pp-soon">SOON</span>
        <svg v-if="p.id === modelValue" class="pp-check" viewBox="0 0 12 10" aria-hidden="true"><path d="M1 5l3.5 3.5L11 1" fill="none" stroke="currentColor" stroke-width="2.2" /></svg>
      </button>
    </template>
  </div>

  <a class="lp-btn lp-y pp-add" :href="addHref" :aria-label="`Add AIDL to ${current.name}`" @click.prevent="emit('add', modelValue)"><span class="pp-add-name">Add to {{ current.short }}</span><span class="lp-arr">→</span></a>
</div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { PLATFORMS, PLATFORM_GROUPS, getPlatform, type PlatformId } from '../lib/platforms'

const props = withDefaults(defineProps<{ modelValue: PlatformId; addHref?: string }>(), { addHref: '#' })
const emit = defineEmits<{ 'update:modelValue': [id: PlatformId]; add: [id: PlatformId] }>()

const current = computed(() => getPlatform(props.modelValue))
const groups = PLATFORM_GROUPS
  .map((g) => ({ ...g, items: PLATFORMS.filter((p) => p.group === g.id) }))
  .filter((g) => g.items.length)

const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)
const triggerEl = ref<HTMLButtonElement | null>(null)
const menuEl = ref<HTMLElement | null>(null)

async function toggle() {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    menuEl.value?.querySelector<HTMLButtonElement>('.pp-on, .pp-item')?.focus()
  }
}
function close(refocus = false) {
  if (!open.value) return
  open.value = false
  if (refocus) triggerEl.value?.focus()
}
function pick(id: PlatformId) {
  emit('update:modelValue', id)
  close(true)
}

// Close when clicking or tabbing outside the picker.
function onDocPointer(e: Event) {
  if (open.value && rootEl.value && !rootEl.value.contains(e.target as Node)) close()
}
onMounted(() => {
  document.addEventListener('pointerdown', onDocPointer)
  document.addEventListener('focusin', onDocPointer)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocPointer)
  document.removeEventListener('focusin', onDocPointer)
})
</script>

<style scoped>
.pp{position:relative;display:flex;align-items:center;gap:12px}
.pp-trigger{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 12px;max-width:190px;
  background:var(--cream);color:var(--ink);border:3px solid var(--ink);box-shadow:3px 3px 0 var(--ink);
  font-family:"Bungee",sans-serif;font-size:12px;white-space:nowrap;transition:transform .12s,box-shadow .12s}
.pp-trigger:hover{transform:translate(-1px,-1px);box-shadow:4px 4px 0 var(--ink)}
.pp-trigger:focus-visible,.pp-item:focus-visible{outline:3px solid var(--red);outline-offset:2px}
.pp-trigger[aria-expanded="true"]{background:var(--ink);color:var(--yellow)}
.pp-ic{flex:none;display:inline-flex;width:18px;height:18px}
.pp-ic :deep(svg){width:100%;height:100%}
.pp-caret{flex:none;width:10px;height:6px;transition:transform .15s}
.pp-caret.pp-up{transform:rotate(180deg)}

.pp-menu{position:absolute;top:calc(100% + 10px);right:0;z-index:60;width:260px;max-width:calc(100vw - 32px);max-height:min(70vh,440px);overflow-y:auto;
  background:var(--cream);border:3px solid var(--ink);box-shadow:5px 5px 0 var(--ink);padding:6px}
.pp-group{font-family:"JetBrains Mono",monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);padding:10px 10px 6px}
.pp-group:not(:first-child){border-top:2px dashed var(--line);margin-top:4px}
.pp-item{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;align-items:center;gap:10px;min-height:44px;padding:8px 10px;
  font-family:"Bungee",sans-serif;font-size:12px;color:var(--ink)}
.pp-item:hover,.pp-item:focus-visible{background:var(--cream-2)}
.pp-item.pp-on{background:var(--ink);color:var(--yellow)}
.pp-item-name{flex:1;min-width:0}
.pp-soon{font-family:"JetBrains Mono",monospace;font-size:9px;letter-spacing:.1em;padding:2px 6px;border:2px solid currentColor;background:var(--yellow);color:var(--ink)}
.pp-item.pp-on .pp-soon{border-color:var(--yellow)}
.pp-check{flex:none;width:12px;height:10px}

.pp-name{overflow:hidden;text-overflow:ellipsis}

/* "Add to Slack →" — follows the picked platform */
.pp-add{height:40px;box-sizing:border-box;min-width:0;max-width:240px}
.pp-add-name{min-width:0;overflow:hidden;text-overflow:ellipsis}

/* Tablet: cap both so long names shorten with "…" */
@media (max-width:900px){
  .pp-trigger{max-width:160px}
  .pp-add{max-width:200px}
}
/* Phone: smaller controls, menu spans the screen */
@media (max-width:640px){
  .pp{gap:8px;min-width:0}
  .pp-trigger{height:34px;padding:0 8px;gap:5px;border-width:2px;box-shadow:2px 2px 0 var(--ink);max-width:130px}
  .pp-ic{width:16px;height:16px}
  .pp-add{height:34px;max-width:160px}
  .pp-menu{position:fixed;top:72px;left:16px;right:16px;width:auto;max-width:none}
}
/* Small phones: no room for the name twice — the picker keeps the icon,
   the Add button keeps "Add to Slack" */
@media (max-width:480px){
  .pp-name{display:none}
  .pp-add{max-width:150px}
}
</style>
