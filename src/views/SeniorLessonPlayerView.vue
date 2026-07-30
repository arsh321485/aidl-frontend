<template>
  <iframe
    :src="playerSrc"
    class="lesson-player-frame"
    title="AIDL · Senior Lesson Player"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const playerSrc = computed(() => {
  const lesson = route.query.lesson
  return lesson ? `/senior-player.html?lesson=${encodeURIComponent(String(lesson))}` : '/senior-player.html'
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
