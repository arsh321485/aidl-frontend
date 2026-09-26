// The 8 organization policy questions (AIDL Slack guide 4.3). To add or
// change a question, edit this file only — the popup, the counter and the
// Slack/Teams lock all update automatically. Ids and option texts must match
// POLICY_QUESTIONS in aidl-backend/api/org_policy.py.

export interface PolicyQuestion {
  id: string
  question: string
  options: string[]
}

export type PolicyAnswers = Record<string, string>

export const POLICY_STORAGE_KEY = 'aidl-org-policy-answers'

export const POLICY_QUESTIONS: PolicyQuestion[] = [
  {
    id: 'ai_policy',
    question: 'Does your organization have a written AI acceptable-use policy?',
    options: ['Yes, published and enforced', 'Yes, but still a draft', 'No, we are planning one', 'No, not yet'],
  },
  {
    id: 'approved_tools',
    question: 'Which AI tools are employees allowed to use for work?',
    options: ['Only company-approved tools', 'Any tool, with manager approval', 'Any public AI tool', 'Not decided yet'],
  },
  {
    id: 'confidential_data',
    question: 'Can employees enter confidential or customer data into AI tools?',
    options: ['Never', 'Only in approved enterprise tools', 'Yes, if the data is anonymised', 'No rule in place'],
  },
  {
    id: 'human_review',
    question: 'Must AI-generated work be reviewed by a person before it is shared externally?',
    options: ['Always', 'Only for high-risk content', 'No, it is optional'],
  },
  {
    id: 'disclosure',
    question: 'Do employees have to disclose when content was created with AI?',
    options: ['Yes, always', 'Only for client-facing content', 'No'],
  },
  {
    id: 'regulation',
    question: 'Which data-protection regulation mainly applies to your organization?',
    options: ['GDPR (EU / UK)', 'DPDP Act (India)', 'HIPAA / CCPA (US)', 'Other / Not sure'],
  },
  {
    id: 'incident_reporting',
    question: 'How should employees report misuse of AI or a policy violation?',
    options: ['Dedicated compliance / security channel', 'Directly to their manager', 'Through HR', 'No process defined'],
  },
  {
    id: 'training_frequency',
    question: 'How often must employees complete AI and policy training?',
    options: ['Only when they join', 'Every year', 'Every quarter', 'Not required'],
  },
]

export function loadPolicyAnswers(): PolicyAnswers {
  try {
    const raw = JSON.parse(localStorage.getItem(POLICY_STORAGE_KEY) || '{}')
    return raw && typeof raw === 'object' ? raw : {}
  } catch (e) {
    return {}
  }
}

export function savePolicyAnswers(answers: PolicyAnswers) {
  try {
    localStorage.setItem(POLICY_STORAGE_KEY, JSON.stringify(answers))
  } catch (e) {}
}

export function answeredCount(answers: PolicyAnswers): number {
  return POLICY_QUESTIONS.filter((q) => q.options.includes(answers[q.id] ?? '')).length
}

export function isPolicyComplete(answers: PolicyAnswers): boolean {
  return answeredCount(answers) === POLICY_QUESTIONS.length
}

export function firstUnansweredIndex(answers: PolicyAnswers): number {
  const i = POLICY_QUESTIONS.findIndex((q) => !q.options.includes(answers[q.id] ?? ''))
  return i === -1 ? 0 : i
}
