// Landing page "See the cards" section — real topics, card titles and plan
// numbers, copied from the backend's card library (api/data/awareness_packages.json,
// from AI_Usage_Awareness_Packages.xlsx) and api/plans.py. Titles only: card text
// is never shipped to the website, it stays blurred like on /plans.

export interface PreviewCard { no: string; title: string; type: string }
export interface CardTopic { code: string; title: string; covers: string; count: number; cards: PreviewCard[] }
export interface StarterCard extends PreviewCard { topic: string }

export type PlanKey = 'trial' | 'basic' | 'enterprise'
export interface PlanInfo { key: PlanKey; label: string; cards: number; cadence: string; topics: string }

export const LIBRARY_SIZE = 655

export const PLANS: PlanInfo[] = [
  { key: 'trial', label: 'Trial', cards: 12, cadence: '1 card a month', topics: 'Starter set' },
  { key: 'basic', label: 'Basic', cards: 104, cadence: '2 cards a week', topics: 'You pick the topics' },
  { key: 'enterprise', label: 'Enterprise', cards: 208, cadence: '4 cards a week', topics: 'All 15 topics' },
]

// The Default package: the 12 cards every plan starts with (all of Trial).
export const STARTER_CARDS: StarterCard[] = [
  {
    "no": "006",
    "title": "What AI Actually Does",
    "type": "Micro-Lesson",
    "topic": "AI Fundamentals & Judgment"
  },
  {
    "no": "001",
    "title": "Traffic Light Check",
    "type": "Decision Aid",
    "topic": "AI Fundamentals & Judgment"
  },
  {
    "no": "003",
    "title": "Approved Apps Registry",
    "type": "Registry",
    "topic": "Acceptable Use, Approved Tools & Shadow AI"
  },
  {
    "no": "014",
    "title": "Data Classification Cheat Sheet",
    "type": "Reference Card",
    "topic": "Data Protection & Confidentiality"
  },
  {
    "no": "021",
    "title": "The Paste Test",
    "type": "Decision Aid",
    "topic": "Data Protection & Confidentiality"
  },
  {
    "no": "029",
    "title": "The Verification Pass",
    "type": "Checklist",
    "topic": "Output Verification & Model Limits"
  },
  {
    "no": "078",
    "title": "AI-Written Phishing",
    "type": "Drill",
    "topic": "AI-Enabled Security Threats"
  },
  {
    "no": "012",
    "title": "Your Accountability Doesn't Transfer",
    "type": "Gate Briefing",
    "topic": "Accountability, Disclosure & Ethics"
  },
  {
    "no": "086",
    "title": "Personal Data Definitions",
    "type": "Reference Card",
    "topic": "Privacy & Personal Data"
  },
  {
    "no": "052",
    "title": "Deepfake and Voice Verification",
    "type": "Drill",
    "topic": "AI-Enabled Security Threats"
  },
  {
    "no": "037",
    "title": "Third-Party IP in Prompts",
    "type": "Gate Briefing",
    "topic": "Legal, IP & Regulatory"
  },
  {
    "no": "050",
    "title": "Reporting an AI Mistake",
    "type": "Template",
    "topic": "Incidents, Reporting & Culture"
  }
]

export const CARD_TOPICS: CardTopic[] = [
  {
    "code": "C01",
    "title": "AI Fundamentals & Judgment",
    "covers": "What AI is, how it fails, and the judgment calls every user makes before and after using it.",
    "count": 28,
    "cards": [
      {
        "no": "001",
        "title": "Traffic Light Check",
        "type": "Decision Aid"
      },
      {
        "no": "006",
        "title": "What AI Actually Does",
        "type": "Micro-Lesson"
      },
      {
        "no": "007",
        "title": "Confidence vs. Correctness",
        "type": "Decision Aid"
      },
      {
        "no": "008",
        "title": "The Human-in-the-Loop Line",
        "type": "Decision Aid"
      },
      {
        "no": "009",
        "title": "Time Saved vs. Risk Taken",
        "type": "Decision Aid"
      },
      {
        "no": "010",
        "title": "Ask, Draft, Decide",
        "type": "Field Guide"
      },
      {
        "no": "011",
        "title": "When Not to Use AI",
        "type": "Decision Aid"
      },
      {
        "no": "013",
        "title": "Prompt Hygiene Basics",
        "type": "Micro-Lesson"
      }
    ]
  },
  {
    "code": "C02",
    "title": "Data Protection & Confidentiality",
    "covers": "What data may and may not go into an AI tool, classification, redaction, retention.",
    "count": 8,
    "cards": [
      {
        "no": "014",
        "title": "Data Classification Cheat Sheet",
        "type": "Reference Card"
      },
      {
        "no": "015",
        "title": "Redaction Before Submission",
        "type": "Checklist"
      },
      {
        "no": "016",
        "title": "Customer Data in Prompts",
        "type": "Gate Briefing"
      },
      {
        "no": "017",
        "title": "Training-Data Opt-Out",
        "type": "Registry"
      },
      {
        "no": "018",
        "title": "Screenshots Are Data Too",
        "type": "Micro-Lesson"
      },
      {
        "no": "019",
        "title": "Retention and Deletion",
        "type": "Policy"
      },
      {
        "no": "020",
        "title": "Cross-Border Data Flows",
        "type": "Policy"
      },
      {
        "no": "021",
        "title": "The Paste Test",
        "type": "Decision Aid"
      }
    ]
  },
  {
    "code": "C03",
    "title": "Privacy & Personal Data",
    "covers": "Personal data, consent, recordings, employee and special-category data.",
    "count": 11,
    "cards": [
      {
        "no": "053",
        "title": "AI in Meetings",
        "type": "Policy"
      },
      {
        "no": "086",
        "title": "Personal Data Definitions",
        "type": "Reference Card"
      },
      {
        "no": "087",
        "title": "Employee Data in AI Tools",
        "type": "Policy"
      },
      {
        "no": "088",
        "title": "Consent and Notice",
        "type": "Micro-Lesson"
      },
      {
        "no": "089",
        "title": "Anonymisation Is Harder Than It Looks",
        "type": "Worked Examples"
      },
      {
        "no": "090",
        "title": "Subject Access Requests",
        "type": "Checklist"
      },
      {
        "no": "091",
        "title": "Special Category Data",
        "type": "Gate Briefing"
      },
      {
        "no": "092",
        "title": "Children's Data",
        "type": "Gate Briefing"
      }
    ]
  },
  {
    "code": "C04",
    "title": "Acceptable Use, Approved Tools & Shadow AI",
    "covers": "The policy, the approved-tools registry, personal vs. enterprise accounts, unapproved tools and embedded AI.",
    "count": 20,
    "cards": [
      {
        "no": "002",
        "title": "Acceptable Use v3.1",
        "type": "Policy"
      },
      {
        "no": "003",
        "title": "Approved Apps Registry",
        "type": "Registry"
      },
      {
        "no": "004",
        "title": "Data Ethics Gate",
        "type": "Gate Briefing"
      },
      {
        "no": "022",
        "title": "Shadow AI Self-Report",
        "type": "Drill"
      },
      {
        "no": "023",
        "title": "Free Tier vs. Enterprise Tier",
        "type": "Reference Card"
      },
      {
        "no": "024",
        "title": "Browser Extension Risk",
        "type": "Gate Briefing"
      },
      {
        "no": "025",
        "title": "Requesting a New Tool",
        "type": "Template"
      },
      {
        "no": "026",
        "title": "Personal Accounts, Work Tasks",
        "type": "Policy"
      }
    ]
  },
  {
    "code": "C05",
    "title": "Output Verification & Model Limits",
    "covers": "Checking output, hallucinations, unsourced numbers, known model failure modes, grounding in documents.",
    "count": 27,
    "cards": [
      {
        "no": "029",
        "title": "The Verification Pass",
        "type": "Checklist"
      },
      {
        "no": "030",
        "title": "Hallucinated Citations",
        "type": "Worked Examples"
      },
      {
        "no": "031",
        "title": "Numbers Need a Source",
        "type": "Decision Aid"
      },
      {
        "no": "032",
        "title": "Bias in the Draft",
        "type": "Micro-Lesson"
      },
      {
        "no": "033",
        "title": "Reviewing Someone Else's AI Work",
        "type": "Field Guide"
      },
      {
        "no": "034",
        "title": "Code You Didn't Write",
        "type": "Gate Briefing"
      },
      {
        "no": "035",
        "title": "Translation and Tone Failures",
        "type": "Worked Examples"
      },
      {
        "no": "116",
        "title": "Knowledge Cutoffs",
        "type": "Micro-Lesson"
      }
    ]
  },
  {
    "code": "C06",
    "title": "AI-Enabled Security Threats",
    "covers": "AI-written phishing, deepfakes, credential leakage, prompt injection, malicious tools.",
    "count": 12,
    "cards": [
      {
        "no": "051",
        "title": "Prompt Injection in the Wild",
        "type": "Worked Examples"
      },
      {
        "no": "052",
        "title": "Deepfake and Voice Verification",
        "type": "Drill"
      },
      {
        "no": "076",
        "title": "Credential Leakage in Prompts",
        "type": "Gate Briefing"
      },
      {
        "no": "077",
        "title": "Malicious AI Tools",
        "type": "Worked Examples"
      },
      {
        "no": "078",
        "title": "AI-Written Phishing",
        "type": "Drill"
      },
      {
        "no": "079",
        "title": "Social Engineering at Scale",
        "type": "Micro-Lesson"
      },
      {
        "no": "080",
        "title": "Poisoned Inputs",
        "type": "Micro-Lesson"
      },
      {
        "no": "081",
        "title": "Data Exfiltration via Chat",
        "type": "Gate Briefing"
      }
    ]
  },
  {
    "code": "C07",
    "title": "Legal, IP & Regulatory",
    "covers": "Ownership of output, third-party IP, contracts, regulated decisions, records and discovery.",
    "count": 36,
    "cards": [
      {
        "no": "036",
        "title": "Who Owns the Output",
        "type": "Policy"
      },
      {
        "no": "037",
        "title": "Third-Party IP in Prompts",
        "type": "Gate Briefing"
      },
      {
        "no": "038",
        "title": "Client Contract Clauses",
        "type": "Reference Card"
      },
      {
        "no": "039",
        "title": "Regulated Decisions",
        "type": "Policy"
      },
      {
        "no": "041",
        "title": "Audit Trail Requirements",
        "type": "Checklist"
      },
      {
        "no": "042",
        "title": "Records and Discovery",
        "type": "Micro-Lesson"
      },
      {
        "no": "496",
        "title": "AI Clauses to Request",
        "type": "Reference Card"
      },
      {
        "no": "497",
        "title": "AI Clauses Clients Ask For",
        "type": "Reference Card"
      }
    ]
  },
  {
    "code": "C08",
    "title": "Accountability, Disclosure & Ethics",
    "covers": "Personal accountability, disclosing AI use to clients and the public, ethics, inclusion.",
    "count": 32,
    "cards": [
      {
        "no": "012",
        "title": "Your Accountability Doesn't Transfer",
        "type": "Gate Briefing"
      },
      {
        "no": "040",
        "title": "Disclosure Obligations",
        "type": "Decision Aid"
      },
      {
        "no": "136",
        "title": "Telling a Client You Used AI",
        "type": "Template"
      },
      {
        "no": "137",
        "title": "AI Claims in Proposals",
        "type": "Gate Briefing"
      },
      {
        "no": "138",
        "title": "Answering: Is This AI-Written?",
        "type": "Field Guide"
      },
      {
        "no": "139",
        "title": "Public Statements and Media",
        "type": "Policy"
      },
      {
        "no": "140",
        "title": "Regulator and Auditor Questions",
        "type": "Template"
      },
      {
        "no": "141",
        "title": "Explaining an AI Error to a Client",
        "type": "Worked Examples"
      }
    ]
  },
  {
    "code": "C09",
    "title": "Incidents, Reporting & Culture",
    "covers": "Reporting mistakes, learning from near-misses, skills, community and maturity.",
    "count": 24,
    "cards": [
      {
        "no": "005",
        "title": "Mistake Museum",
        "type": "Worked Examples"
      },
      {
        "no": "050",
        "title": "Reporting an AI Mistake",
        "type": "Template"
      },
      {
        "no": "054",
        "title": "Skills Self-Assessment",
        "type": "Assessment"
      },
      {
        "no": "055",
        "title": "Team AI Maturity Review",
        "type": "Field Guide"
      },
      {
        "no": "146",
        "title": "Baseline Skills for Everyone",
        "type": "Assessment"
      },
      {
        "no": "147",
        "title": "Advanced Practitioner Track",
        "type": "Assessment"
      },
      {
        "no": "148",
        "title": "Job Change, Not Job Loss",
        "type": "Micro-Lesson"
      },
      {
        "no": "149",
        "title": "Over-Reliance and Skill Fade",
        "type": "Micro-Lesson"
      }
    ]
  },
  {
    "code": "C10",
    "title": "Effective & Productive Use",
    "covers": "Prompting craft and everyday work tasks: writing, documents, meetings, research, data, slides, media, translation.",
    "count": 110,
    "cards": [
      {
        "no": "056",
        "title": "Context Is the Whole Job",
        "type": "Micro-Lesson"
      },
      {
        "no": "057",
        "title": "Give It the Bad Examples",
        "type": "Micro-Lesson"
      },
      {
        "no": "058",
        "title": "Asking for the Reasoning",
        "type": "Decision Aid"
      },
      {
        "no": "059",
        "title": "Iterate, Don't Restart",
        "type": "Field Guide"
      },
      {
        "no": "060",
        "title": "Constraints Beat Adjectives",
        "type": "Micro-Lesson"
      },
      {
        "no": "061",
        "title": "Reusable Prompt Library",
        "type": "Registry"
      },
      {
        "no": "062",
        "title": "Prompt Versioning",
        "type": "Checklist"
      },
      {
        "no": "063",
        "title": "The Follow-Up Question",
        "type": "Micro-Lesson"
      }
    ]
  },
  {
    "code": "C11",
    "title": "Agents & Automation",
    "covers": "Permissions, logging, approval gates and kill switches for agents and automated workflows.",
    "count": 7,
    "cards": [
      {
        "no": "043",
        "title": "Agent Permissions Review",
        "type": "Gate Briefing"
      },
      {
        "no": "044",
        "title": "Unlogged Agents",
        "type": "Gate Briefing"
      },
      {
        "no": "045",
        "title": "Approval Gates in Workflows",
        "type": "Field Guide"
      },
      {
        "no": "046",
        "title": "Kill Switch Drill",
        "type": "Drill"
      },
      {
        "no": "047",
        "title": "Scope Creep in Automation",
        "type": "Worked Examples"
      },
      {
        "no": "048",
        "title": "Connected Accounts Inventory",
        "type": "Registry"
      },
      {
        "no": "049",
        "title": "Testing Before Production",
        "type": "Checklist"
      }
    ]
  },
  {
    "code": "C12",
    "title": "Governance, Risk & Vendor Management",
    "covers": "Ownership, AI register, risk tiering, vendors, audit, frameworks, assurance, evaluation, oversight design.",
    "count": 100,
    "cards": [
      {
        "no": "096",
        "title": "Who Owns This Use Case",
        "type": "Decision Aid"
      },
      {
        "no": "097",
        "title": "The AI Register",
        "type": "Registry"
      },
      {
        "no": "098",
        "title": "Risk Tiering a Use Case",
        "type": "Decision Aid"
      },
      {
        "no": "099",
        "title": "From Pilot to Production",
        "type": "Checklist"
      },
      {
        "no": "100",
        "title": "Exception Requests",
        "type": "Template"
      },
      {
        "no": "101",
        "title": "Policy Review Cadence",
        "type": "Policy"
      },
      {
        "no": "102",
        "title": "Roles and Responsibilities",
        "type": "Reference Card"
      },
      {
        "no": "103",
        "title": "Escalation Paths",
        "type": "Reference Card"
      }
    ]
  },
  {
    "code": "C13",
    "title": "Role & Function Playbooks",
    "covers": "Function-specific guidance: sales, HR, finance, marketing, support, product, design, PR and more.",
    "count": 120,
    "cards": [
      {
        "no": "066",
        "title": "AI for Sales Outreach",
        "type": "Field Guide"
      },
      {
        "no": "067",
        "title": "AI in Hiring",
        "type": "Gate Briefing"
      },
      {
        "no": "068",
        "title": "AI for Finance Teams",
        "type": "Field Guide"
      },
      {
        "no": "069",
        "title": "AI in Legal Review",
        "type": "Gate Briefing"
      },
      {
        "no": "070",
        "title": "AI for Customer Support",
        "type": "Field Guide"
      },
      {
        "no": "071",
        "title": "AI in Engineering",
        "type": "Field Guide"
      },
      {
        "no": "072",
        "title": "AI for Marketing Content",
        "type": "Policy"
      },
      {
        "no": "073",
        "title": "AI in Procurement",
        "type": "Field Guide"
      }
    ]
  },
  {
    "code": "C14",
    "title": "Technical & IT Practitioner",
    "covers": "Engineering, QA, data engineering, IT service, security operations, identity, cloud and data readiness.",
    "count": 90,
    "cards": [
      {
        "no": "276",
        "title": "Autocomplete vs. Generation",
        "type": "Decision Aid"
      },
      {
        "no": "277",
        "title": "Reading Before Accepting",
        "type": "Checklist"
      },
      {
        "no": "278",
        "title": "Licensing of Generated Code",
        "type": "Gate Briefing"
      },
      {
        "no": "279",
        "title": "Secrets in the Codebase",
        "type": "Gate Briefing"
      },
      {
        "no": "280",
        "title": "Dependency Suggestions",
        "type": "Checklist"
      },
      {
        "no": "281",
        "title": "Generated Tests Are Not Coverage",
        "type": "Micro-Lesson"
      },
      {
        "no": "282",
        "title": "Refactoring at Scale",
        "type": "Field Guide"
      },
      {
        "no": "283",
        "title": "Legacy Code Comprehension",
        "type": "Field Guide"
      }
    ]
  },
  {
    "code": "C15",
    "title": "Strategy & Change Leadership",
    "covers": "Operating model, build/buy/partner decisions and change management.",
    "count": 30,
    "cards": [
      {
        "no": "596",
        "title": "Why We're Doing This",
        "type": "Micro-Lesson"
      },
      {
        "no": "597",
        "title": "Centralised, Federated or Free",
        "type": "Decision Aid"
      },
      {
        "no": "598",
        "title": "The AI Steering Group",
        "type": "Reference Card"
      },
      {
        "no": "599",
        "title": "Funding Model",
        "type": "Decision Aid"
      },
      {
        "no": "600",
        "title": "Prioritising Use Cases",
        "type": "Template"
      },
      {
        "no": "601",
        "title": "Saying No to a Use Case",
        "type": "Field Guide"
      },
      {
        "no": "602",
        "title": "Capability Building vs. Buying",
        "type": "Decision Aid"
      },
      {
        "no": "603",
        "title": "Partner and Advisor Selection",
        "type": "Checklist"
      }
    ]
  }
]
