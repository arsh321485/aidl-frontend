<template>
  <div class="opq-backdrop" @click.self="emit('close')">
    <div class="opq" role="dialog" aria-modal="true" aria-labelledby="opq-title" @click.stop>
      <div class="opq-head">
        <h2 id="opq-title">Organization Policy Check</h2>
        <button type="button" class="opq-close" aria-label="Close" @click="emit('close')">✕</button>
      </div>

      <div
        class="opq-progress"
        role="progressbar"
        :aria-valuenow="answered"
        aria-valuemin="0"
        :aria-valuemax="total"
        aria-label="Questions answered"
      >
        <div class="opq-progress-fill" :style="{ width: `${(answered / total) * 100}%` }"></div>
      </div>
      <p class="opq-count">Question {{ index + 1 }} / {{ total }} · {{ answered }} answered</p>

      <div class="opq-guide">
        <div class="opq-avatar"><AvatarBuilder :config="guide" /></div>
        <div class="opq-bubble">
          <small>Aisha · AIDL Guide</small>
          <p>{{ current.question }}</p>
        </div>
      </div>

      <div class="opq-options" role="radiogroup" :aria-label="current.question">
        <button
          v-for="option in current.options"
          :key="option"
          type="button"
          role="radio"
          class="opq-option"
          :class="{ selected: answers[current.id] === option }"
          :aria-checked="answers[current.id] === option"
          @click="choose(option)"
        >
          <span class="opq-radio" aria-hidden="true"></span>
          {{ option }}
        </button>
      </div>

      <div class="opq-foot">
        <button type="button" class="opq-btn" :disabled="index === 0" @click="index--">← Back</button>
        <button
          v-if="!isLast"
          type="button"
          class="opq-btn opq-next"
          :disabled="!answers[current.id]"
          @click="index++"
        >
          Next →
        </button>
        <button
          v-else
          type="button"
          class="opq-btn opq-finish"
          :disabled="!complete"
          @click="emit('finish', { ...answers })"
        >
          Finish &amp; Continue →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Organization policy questions popup (AIDL Slack guide 4.1–4.5). Answers are
// kept on every click, so ✕ never loses them and reopening continues from
// the first unanswered question.
import { computed, ref } from 'vue'
import AvatarBuilder from './AvatarBuilder.vue'
import { PRESETS } from '../lib/avatar-parts'
import {
  POLICY_QUESTIONS,
  answeredCount,
  firstUnansweredIndex,
  isPolicyComplete,
  type PolicyAnswers,
} from '../lib/orgPolicyQuestions'

const props = defineProps<{ answers: PolicyAnswers; review?: boolean }>()
const emit = defineEmits<{
  (e: 'update:answers', value: PolicyAnswers): void
  (e: 'close'): void
  (e: 'finish', value: PolicyAnswers): void
}>()

const guide = PRESETS.find((p) => p.name === 'Aisha') ?? PRESETS[0]!
const total = POLICY_QUESTIONS.length
// Review mode starts at question 1 with every answer filled in.
const index = ref(props.review ? 0 : firstUnansweredIndex(props.answers))
const current = computed(() => POLICY_QUESTIONS[index.value]!)
const isLast = computed(() => index.value === total - 1)
const answered = computed(() => answeredCount(props.answers))
const complete = computed(() => isPolicyComplete(props.answers))

function choose(option: string) {
  emit('update:answers', { ...props.answers, [current.value.id]: option })
}
</script>

<style scoped>
.opq-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(10, 10, 7, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.opq {
  width: min(600px, 100%);
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  background: #f5ecd2;
  color: #14140f;
  border: 3px solid #14140f;
  border-radius: 12px;
  padding: 22px 22px 18px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}
.opq-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.opq-head h2 {
  font-family: 'Bungee', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.opq-close {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border: 2px solid #14140f;
  border-radius: 6px;
  background: transparent;
  font-size: 15px;
  cursor: pointer;
}
.opq-progress {
  margin-top: 16px;
  height: 8px;
  border: 2px solid #14140f;
  border-radius: 6px;
  overflow: hidden;
  background: #fff8e3;
}
.opq-progress-fill {
  height: 100%;
  background: #ffcc00;
  transition: width 0.25s ease;
}
.opq-count {
  margin-top: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.8;
}
.opq-guide {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin: 18px 0;
}
.opq-avatar {
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  border: 3px solid #14140f;
  border-radius: 50%;
  overflow: hidden;
  background: #cde9f5;
}
.opq-bubble {
  flex: 1;
  min-width: 0;
  position: relative;
  background: #fff;
  border: 3px solid #14140f;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 4px 4px 0 #14140f;
}
.opq-bubble::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 18px;
  border: 9px solid transparent;
  border-right-color: #14140f;
  border-left: 0;
}
.opq-bubble small {
  display: block;
  font-family: 'Bungee', sans-serif;
  font-size: 9.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.75;
}
.opq-bubble p {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
}
.opq-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.opq-option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 46px;
  padding: 10px 16px;
  text-align: left;
  font: inherit;
  font-size: 14.5px;
  color: #14140f;
  background: #f1e2bd;
  border: 2px solid #14140f;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s, box-shadow 0.12s;
}
.opq-option:hover {
  background: #f7e7b8;
}
.opq-option.selected {
  background: #ffcc00;
  box-shadow: 3px 3px 0 #14140f;
}
.opq-radio {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 2px solid #14140f;
  border-radius: 50%;
  background: #fff;
}
.opq-option.selected .opq-radio {
  background: radial-gradient(circle, #14140f 0 4px, #fff 5px);
}
.opq-foot {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 2px dashed #14140f;
}
.opq-btn {
  min-height: 42px;
  padding: 8px 18px;
  font-family: 'Bungee', sans-serif;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #14140f;
  background: transparent;
  border: 2px solid #14140f;
  border-radius: 8px;
  cursor: pointer;
}
.opq-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.opq-next {
  background: #ffcc00;
}
.opq-finish {
  background: #e23a2e;
  color: #fff;
}
.opq-btn:focus-visible,
.opq-option:focus-visible,
.opq-close:focus-visible {
  outline: 3px solid #14140f;
  outline-offset: 2px;
}
@media (max-width: 480px) {
  .opq {
    padding: 16px 14px 14px;
  }
  .opq-avatar {
    width: 56px;
    height: 56px;
  }
  .opq-bubble p {
    font-size: 15px;
  }
  .opq-btn {
    padding: 8px 12px;
  }
}
</style>
