<template>
  <iframe
    :src="playerSrc"
    class="lesson-player-frame"
    title="AIDL Juniors · Lesson Player"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const playerSrc = computed(() => {
  const lesson = route.query.lesson
  return lesson ? `/junior-player.html?lesson=${encodeURIComponent(String(lesson))}` : '/junior-player.html'
})
</script>

<style scoped>
.lesson-player-frame {
  display: block;
  width: 100%;
  height: 100vh;
  border: none;
  background: #14140f;
}
</style>
