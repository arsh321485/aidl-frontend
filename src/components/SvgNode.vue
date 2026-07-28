<template>
  <component :is="node.tag" v-bind="node.attrs">
    <SvgNode v-for="(child, i) in node.children" :key="i" :node="child" />
  </component>
</template>

<script setup lang="ts">
import type { ShapeNode } from '../lib/avatar-parts'

defineProps<{ node: ShapeNode }>()
</script>
