<template>
  <svg viewBox="0 0 200 220" class="avatar-svg" preserveAspectRatio="xMidYMid slice">
    <SvgNode v-for="(node, i) in layers" :key="i" :node="node" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SvgNode from './SvgNode.vue'
import { buildAvatarLayers, type AvatarConfig } from '../lib/avatar-parts'

const props = defineProps<{ config: AvatarConfig }>()
const layers = computed(() => buildAvatarLayers(props.config))
</script>

<style scoped>
.avatar-svg {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
</style>
