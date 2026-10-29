// Content of the /ai-requirements page (AiRequirementsView.vue), generated from
// aidl-design/Global AI Literacy, Awareness, Training & Acceptable Use
// Requirements — Regulato.docx. Regenerate rather than hand-edit.

export type ReqBlock =
  | { kind: 'p'; text: string }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'list'; items: { text: string; url: string }[] }

export interface ReqSection { id: string; title: string; blocks: ReqBlock[] }

export const REQUIREMENTS_UPDATED = 'October 2026'

export const REQUIREMENT_SECTIONS: ReqSection[] = [
 {
  "id": "how-to-read-this-reference",
  "title": "How to read this reference",
  "blocks": [
   {
    "kind": "p",
    "text": "As of October 2026, four instruments impose a direct, binding duty on organisations to build staff AI literacy or competence: the EU AI Act (Article 4, as amended July 2026), ISO/IEC 42001 (clauses 7.2 and 7.3, binding on anyone certified), EU DORA (Article 13(6), financial entities) and the Australian Government's AI policy (all public servants). Everything else arrives indirectly: through human-oversight duties that presuppose trained people, through data-protection training duties that now cover AI processing, through public-sector directives, or through regulator guidance that supervisors treat as the standard of care."
   },
   {
    "kind": "p",
    "text": "Each entry below is tagged with the type of requirement it creates:"
   },
   {
    "kind": "table",
    "head": [
     "Tag",
     "Meaning",
     "Typical evidence"
    ],
    "rows": [
     [
      "Literacy",
      "Broad understanding of what AI is, what it can and cannot do, its risks, and how to use it responsibly",
      "Role-tiered curriculum, completion records, refresh cadence"
     ],
     [
      "Awareness",
      "Knowing the organisation's AI policy, one's own role in it and the consequences of breaching it",
      "Policy acknowledgements, briefings, communications log"
     ],
     [
      "Training / competence",
      "Role-specific skill sufficient to perform an assigned AI task (oversight, development, procurement, audit)",
      "Competence matrix, assessments, certifications, gap-closure records"
     ],
     [
      "Acceptable use",
      "Rules on which tools may be used, for what, with which data, and what must be verified or disclosed",
      "Approved-tool list, AUP, data-classification rules, attestations"
     ]
    ]
   },
   {
    "kind": "p",
    "text": "Status labels: Binding (law or regulation in force), Binding (public sector) (mandatory for government bodies only), Certifiable (voluntary standard, binding once adopted or contracted), Guidance (regulator expectation; not law but used in supervision), Pending (adopted or proposed, not yet applicable)."
   },
   {
    "kind": "p",
    "text": "This is a compliance reference, not legal advice. Dates and texts were checked against the sources listed at the end; national implementing rules and sector regulators add detail that this document summarises rather than reproduces."
   }
  ]
 },
 {
  "id": "europe-binding-law",
  "title": "Europe — binding law",
  "blocks": [
   {
    "kind": "p",
    "text": "The EU AI Act is the only general law in the world that names AI literacy as a standalone duty, and it reaches any organisation whose staff use AI systems in the EU market — a company whose employees use a general-purpose chatbot for drafting or translation is in scope."
   },
   {
    "kind": "table",
    "head": [
     "Instrument",
     "Status",
     "Who must comply",
     "Requirement",
     "Type",
     "Key dates"
    ],
    "rows": [
     [
      "EU AI Act, Art. 4 (Reg. 2024/1689, as replaced by Reg. 2026/1744)",
      "Binding",
      "All providers and deployers of AI systems, any risk tier; covers staff and other persons operating AI on the organisation's behalf (contractors, service providers)",
      "Take measures to support the development of AI literacy, taking into account technical knowledge, experience, education and training, the context of use, and the persons the AI is used on. Amended text adds that no specific level need be guaranteed for any individual. Commission Q&A: manuals alone are insufficient; generative-AI users must be told about system-specific risks such as hallucination; keep internal records of trainings and initiatives",
      "Literacy, Awareness",
      "Applies since 2 Feb 2025; amended text in force 27 Jul 2026; national market-surveillance supervision and enforcement from 2 Aug 2026"
     ],
     [
      "EU AI Act, Art. 4(2)–(3) (new)",
      "Binding on institutions",
      "Commission, Member States, AI Board",
      "Commission and Member States must support providers and deployers (especially SMEs) and publish practical compliance examples; AI Board to adopt recommendations and common objectives",
      "Literacy (support)",
      "From 27 Jul 2026"
     ],
     [
      "EU AI Act, Art. 26(2)",
      "Binding",
      "Deployers of high-risk AI (Annex III)",
      "Assign human oversight to natural persons who have the necessary competence, training and authority",
      "Training / competence",
      "High-risk obligations phased in from Aug 2026–2027 (Omnibus adjusted timing — check current schedule)"
     ],
     [
      "EU AI Act, Art. 14",
      "Binding",
      "Providers of high-risk AI",
      "Design systems so overseers can understand capacities and limitations, detect anomalies, interpret output, override or stop the system",
      "Training / competence (design for)",
      "As above"
     ],
     [
      "EU AI Act, Art. 13 and Art. 26(1)",
      "Binding",
      "Providers / deployers of high-risk AI",
      "Instructions for use must enable deployers to use the system correctly; deployers must use systems in accordance with them",
      "Acceptable use",
      "As above"
     ],
     [
      "EU AI Act, Art. 50",
      "Binding",
      "Providers and deployers of chatbots, deepfake and synthetic-content generators",
      "Disclosure and labelling duties that staff must be trained to apply",
      "Acceptable use",
      "From 2 Aug 2026"
     ],
     [
      "EU AI Act, Art. 99",
      "Binding",
      "—",
      "Fine schedule does not list Art. 4; penalties for literacy failures are set by national law. Regulators have said a literacy gap will act as an aggravating factor in wider enforcement",
      "—",
      "—"
     ],
     [
      "GDPR, Art. 39(1)(b) and Art. 32",
      "Binding",
      "Controllers and processors",
      "DPO must raise awareness and train staff involved in processing; security measures include staff instruction. AI tools that process personal data fall squarely within this",
      "Awareness, Training",
      "In force since 2018"
     ],
     [
      "GDPR, Art. 22 and Art. 35",
      "Binding",
      "Controllers using solely automated decisions with legal or similar effect",
      "Human review by a trained reviewer with authority to change the decision; DPIA for high-risk processing (EDPB lists AI/ML profiling)",
      "Training / competence",
      "In force"
     ],
     [
      "EU DORA (Reg. 2022/2554), Art. 13(6)",
      "Binding",
      "Banks, insurers, investment firms, payment institutions, crypto-asset providers, their critical ICT third parties",
      "Mandatory ICT security awareness programmes and digital operational resilience training for all staff and management, proportionate to role; AI systems are ICT assets in scope",
      "Awareness, Training",
      "Applies since 17 Jan 2025"
     ],
     [
      "Council of Europe Framework Convention on AI and Human Rights (CETS 225), Art. 20",
      "Binding on ratifying states",
      "State parties (EU, UK, US, Canada, Japan and others signed 2024–25)",
      "Parties must promote digital literacy and skills for all segments of the population, including specific expertise for those responsible for identifying and managing AI risks",
      "Literacy (state duty)",
      "Open for signature Sept 2024; in force for parties after ratification thresholds"
     ],
     [
      "UK — no general AI statute",
      "Guidance",
      "UK organisations",
      "Regulators apply existing law: ICO guidance on AI and data protection (staff training on automated decisions and fairness); FCA treats staff competence over AI under SM&CR and Consumer Duty; the Data (Use and Access) Act 2025 reshapes automated-decision rules and requires meaningful human review",
      "Training / competence, Awareness",
      "DUAA provisions commence 2025–26"
     ],
     [
      "UK Government AI Playbook (Feb 2025) and Generative AI Framework for HMG",
      "Binding (public sector)",
      "Central government departments and arm's-length bodies",
      "Ten principles including \"you know how to use AI securely\" and \"you have meaningful human control\"; staff must be trained before deploying; Civil Service AI training programmes mandated under the 2025 digital reform plan",
      "Literacy, Acceptable use",
      "2024–25"
     ],
     [
      "Switzerland",
      "Pending",
      "—",
      "Federal Council (Feb 2025) chose to ratify the CoE Convention and legislate sector-by-sector; draft bill expected 2026–27",
      "—",
      "Pending"
     ]
    ]
   },
   {
    "kind": "p",
    "text": "National AI Act implementations add detail. Spain's AESIA, Germany's BNetzA and Ireland's designated authorities began supervising Art. 4 in August 2026; Italy's Law 132/2025 adds national AI rules including workplace information duties and AI education programmes."
   }
  ]
 },
 {
  "id": "americas-binding-law",
  "title": "Americas — binding law",
  "blocks": [
   {
    "kind": "p",
    "text": "No US federal statute imposes AI literacy on private employers; the binding duties sit in federal-workforce law, state laws (mostly notice and human-review duties that imply trained staff) and Canada's federal directive. Colorado's rewritten law and California's ADMT regulations both land on 1 January 2027."
   },
   {
    "kind": "table",
    "head": [
     "Instrument",
     "Status",
     "Who must comply",
     "Requirement",
     "Type",
     "Key dates"
    ],
    "rows": [
     [
      "US AI Training Act (Pub. L. 117-207)",
      "Binding (public sector)",
      "OMB; federal acquisition workforce (program managers, contracting officers, logisticians)",
      "OMB must run an AI training programme covering capabilities, risks, ethics and procurement of AI, updated at least every two years",
      "Training / competence",
      "Enacted Oct 2022; ongoing"
     ],
     [
      "OMB Memorandum M-25-21 (Apr 2025; replaces M-24-10)",
      "Binding (public sector)",
      "Federal executive agencies",
      "Chief AI Officer; AI use-case inventory; minimum risk-management practices for high-impact AI including operator training; agency AI strategies and compliance plans must address workforce readiness and AI training",
      "Training / competence, Awareness",
      "Compliance plans published Sept 2025"
     ],
     [
      "OMB M-25-22",
      "Binding (public sector)",
      "Federal procurement",
      "Cross-functional acquisition teams with AI expertise; contract terms on AI use",
      "Training / competence",
      "Apr 2025"
     ],
     [
      "Executive Order 14277 (Apr 2025)",
      "Binding (public sector)",
      "Federal departments",
      "Advance AI education for American youth and educator training; AI literacy task force",
      "Literacy (national)",
      "2025 onward"
     ],
     [
      "Texas HB 3512 (2025)",
      "Binding (public sector)",
      "State and local government employees who use computers",
      "Annual certified AI training alongside the existing cybersecurity training, certified by the Department of Information Resources",
      "Training / competence",
      "From Sept 2025"
     ],
     [
      "Texas TRAIGA (HB 149)",
      "Binding",
      "Developers and deployers doing business in Texas; government agencies; healthcare providers",
      "Prohibited uses (manipulation, social scoring, unlawful discrimination by intent); government must disclose AI interaction; healthcare providers must disclose AI use in treatment; AG enforcement with 60-day cure; safe harbour for NIST AI RMF alignment",
      "Acceptable use",
      "In force 1 Jan 2026"
     ],
     [
      "Colorado SB 26-189 (repeals and replaces SB 24-205)",
      "Pending",
      "Developers and deployers of automated decision-making technology (ADMT) materially influencing consequential decisions (employment, housing, credit, education, health, insurance, legal)",
      "Clear notice to individuals; adverse-action process with meaningful human review; developer-to-deployer information on intended uses, harmful uses, training-data categories and oversight instructions; records kept at least three years. Original duty of care, impact assessments and risk programmes removed",
      "Training / competence (human reviewers), Acceptable use",
      "Signed 14 May 2026; effective 1 Jan 2027; AG rules due the same day"
     ],
     [
      "Illinois HB 3773 (Human Rights Act amendment)",
      "Binding",
      "Any employer with one or more Illinois employees",
      "Notice to applicants and employees when AI influences recruitment, hiring, promotion, discipline, discharge or terms of employment; no discriminatory use; no ZIP-code proxies; IDHR draft rules require posted notice and four-year record retention",
      "Acceptable use, Awareness",
      "In force 1 Jan 2026"
     ],
     [
      "California CCPA ADMT, risk-assessment and cybersecurity-audit regulations",
      "Binding",
      "Businesses using ADMT for significant decisions (financial, housing, education, employment, healthcare)",
      "Pre-use notice, opt-out and access rights; documented risk assessments before deployment; human-review and appeal processes; risk assessments submitted to CPPA",
      "Training / competence, Acceptable use",
      "Regulations effective 1 Jan 2026; ADMT compliance by 1 Jan 2027; first submissions 1 Apr 2028"
     ],
     [
      "California Civil Rights Council employment regulations (FEHA)",
      "Binding",
      "California employers using automated-decision systems",
      "Anti-bias testing evidence, four-year record retention, vendor liability",
      "Acceptable use",
      "Effective 1 Oct 2025"
     ],
     [
      "California SB 53 (Transparency in Frontier AI Act)",
      "Binding",
      "Large frontier-model developers",
      "Published safety frameworks, incident reporting, whistleblower protection",
      "— (developer duty)",
      "1 Jan 2026"
     ],
     [
      "New York City Local Law 144",
      "Binding",
      "Employers using automated employment decision tools for NYC roles",
      "Annual independent bias audit; candidate notice; published summary",
      "Acceptable use",
      "Enforced since Jul 2023"
     ],
     [
      "Utah AI Policy Act (SB 149, amended 2025)",
      "Binding",
      "Businesses using generative AI with consumers; regulated occupations",
      "Disclose AI interaction on request; prominent disclosure in regulated professions (health, law, finance)",
      "Acceptable use",
      "2024; sunset extended to 2027"
     ],
     [
      "US state employer AI-training bills",
      "Pending",
      "—",
      "Several 2026 bills (e.g. New York, New Jersey, Virginia) propose workforce AI-literacy or government AI-training mandates; none enacted for private employers as of October 2026",
      "—",
      "Watch 2027 sessions"
     ],
     [
      "Canada — Treasury Board Directive on Automated Decision-Making",
      "Binding (public sector)",
      "Federal institutions using automated decision systems",
      "Algorithmic Impact Assessment; notice and explanation; human-in-the-loop for higher-impact levels; employee training in the design, function and implementation of the system; peer review for impact levels III–IV",
      "Training / competence, Awareness",
      "In force since 2019; amended 2023"
     ],
     [
      "Canada — AIDA (Bill C-27)",
      "Lapsed",
      "—",
      "Died with prorogation Jan 2025; federal government signalled a fresh approach in 2026. Provincial privacy law (Quebec Law 25) requires notice and human review of automated decisions",
      "Acceptable use (Quebec)",
      "Quebec rules in force since Sept 2023"
     ],
     [
      "Brazil — PL 2338/2023 (AI Bill)",
      "Pending",
      "Developers, deployers, distributors",
      "Risk-based duties modelled on the EU; includes governance measures, human oversight and transparency; Senate approved Dec 2024, Chamber of Deputies review ongoing. LGPD Art. 20 already grants review of automated decisions",
      "Training / competence (oversight), Acceptable use",
      "Pending"
     ],
     [
      "Latin America — others",
      "Pending / Guidance",
      "—",
      "Chile (AI bill in Congress), Peru (Law 31814, 2023, principles-based, regulation issued 2025), Mexico (multiple bills), Colombia (CONPES AI policy 2025) — all emphasise capacity-building and ethics training without binding private-sector literacy duties yet",
      "Literacy (policy)",
      "Pending"
     ]
    ]
   }
  ]
 },
 {
  "id": "asia-pacific-binding-law",
  "title": "Asia-Pacific — binding law",
  "blocks": [
   {
    "kind": "p",
    "text": "South Korea is the only Asia-Pacific jurisdiction with a comprehensive AI statute in force; Australia is the only one with a mandatory AI-training rule, and it applies to public servants. Elsewhere the duties come through generative-AI service rules (China), data-protection law and regulator guidance."
   },
   {
    "kind": "table",
    "head": [
     "Instrument",
     "Status",
     "Who must comply",
     "Requirement",
     "Type",
     "Key dates"
    ],
    "rows": [
     [
      "South Korea AI Basic Act and Enforcement Decree",
      "Binding",
      "AI development and utilisation business operators, including foreign operators (domestic representative above revenue/user thresholds)",
      "Generative-AI output notice and labelling; for high-impact AI: risk-management plan, meaningful explanation of outputs, user-protection measures, human oversight and management, documentation; state duty to promote AI ethics education and literacy. Fines up to KRW 30 million, with a grace period of at least one year in 2026",
      "Acceptable use, Training / competence (oversight), Literacy (state)",
      "In force 22 Jan 2026"
     ],
     [
      "South Korea Public AI Act",
      "Binding (public sector)",
      "Public institutions",
      "Governance and oversight of AI in public administration",
      "Training / competence",
      "Passed 2025"
     ],
     [
      "Japan AI Promotion Act (Act No. 53 of 2025)",
      "Binding (effort-based)",
      "Business operators and citizens",
      "Businesses must endeavour to cooperate with government AI measures; citizens encouraged to deepen understanding of AI; government must foster workforce skills and public education. No penalties; non-cooperators may face guidance or recommendations",
      "Literacy (state), Awareness",
      "Promulgated May 2025; fully in force Sept 2025"
     ],
     [
      "Japan AI Guidelines for Business (METI/MIC v1.1, 2025)",
      "Guidance",
      "Developers, providers, business users",
      "Governance, literacy and education of personnel, acceptable-use rules, human oversight",
      "Literacy, Acceptable use",
      "Living document"
     ],
     [
      "China Interim Measures for Generative AI Services (CAC, 2023)",
      "Binding",
      "Providers of generative-AI services to the public in China",
      "Lawful training data, bias prevention, user agreements that define acceptable use, guidance to users on rational and lawful use, minors' protection, security assessment and algorithm filing",
      "Acceptable use, Awareness",
      "In force 15 Aug 2023"
     ],
     [
      "China Measures for Labelling AI-Generated Synthetic Content",
      "Binding",
      "Content-generation service providers and platforms",
      "Explicit and implicit labels; user agreements must state labelling rules; users must not remove or forge labels",
      "Acceptable use",
      "In force 1 Sept 2025"
     ],
     [
      "China AI education policies (MoE 2025 guidelines; \"AI Plus\" action plan)",
      "Binding (public sector)",
      "Schools, universities, public bodies",
      "Phased AI literacy curricula from primary to tertiary; teacher training; civil-servant AI capability building",
      "Literacy (national)",
      "2025 onward"
     ],
     [
      "Singapore — PDPA and PDPC Advisory Guidelines on use of personal data in AI systems (2024)",
      "Binding (PDPA) / Guidance",
      "Organisations deploying AI with personal data",
      "Accountability obligations; staff training on data handling; notice of automated decisions",
      "Awareness, Training",
      "2024"
     ],
     [
      "Singapore Model AI Governance Framework (2020) and Model Framework for Generative AI (2024); AI Verify",
      "Guidance",
      "All organisations",
      "Internal governance, staff awareness and competence, human-involvement levels, acceptable-use policies, incident reporting",
      "Literacy, Acceptable use",
      "Voluntary"
     ],
     [
      "Australia — Policy for the Responsible Use of AI in Government v2.0",
      "Binding (public sector)",
      "All Australian Public Service agencies and staff",
      "Mandatory foundational AI training for all APS staff; accountable official and Chief AI Officer; AI impact assessment for in-scope uses; transparency statements; incident process and reporting pathway",
      "Literacy, Training / competence",
      "Effective 15 Dec 2025; first mandatory requirement 15 Jun 2026; all by Dec 2026"
     ],
     [
      "Australia — Voluntary AI Safety Standard (2024) and National AI Plan (Dec 2025)",
      "Guidance",
      "All organisations",
      "Ten guardrails; guardrail 1 requires accountability, governance and training for staff; the government chose to rely on existing regulators rather than a standalone AI Act",
      "Literacy, Awareness",
      "Voluntary"
     ],
     [
      "Australia — Privacy Act reforms (2024)",
      "Binding",
      "APP entities using automated decisions",
      "Privacy-policy disclosure of automated decisions with significant effect",
      "Acceptable use",
      "Transparency duty from Dec 2026"
     ],
     [
      "New Zealand — Public Service AI Framework (2025); Privacy Act",
      "Binding (public sector) / Guidance",
      "Government agencies",
      "Responsible-use principles; staff capability; algorithm charter",
      "Literacy, Acceptable use",
      "2025"
     ],
     [
      "India — DPDP Act 2023 and DPDP Rules 2025",
      "Binding",
      "Data fiduciaries",
      "Reasonable security safeguards and accountability; staff must handle personal data lawfully; MeitY AI advisories (2024) on labelling and lawful deployment",
      "Awareness, Acceptable use",
      "Rules phased in from Nov 2025"
     ],
     [
      "India — RBI FREE-AI Framework (Aug 2025)",
      "Guidance",
      "Banks, NBFCs, regulated entities",
      "Board-level AI policy; AI literacy and capacity building for boards and staff; human oversight; consumer protection",
      "Literacy, Training / competence",
      "2025; RBI directions expected"
     ],
     [
      "India — SEBI, IRDAI guidance on AI/ML",
      "Guidance",
      "Market intermediaries, insurers",
      "Reporting of AI use; governance and competence of staff",
      "Training / competence",
      "2025"
     ],
     [
      "Vietnam — Law on Artificial Intelligence (2025)",
      "Binding",
      "AI providers and deployers",
      "Risk classification, labelling, human oversight, user-protection duties; state AI-education programmes",
      "Acceptable use, Literacy",
      "Passed Dec 2025; applies from 2026 (check decrees)"
     ],
     [
      "Taiwan — AI Basic Act",
      "Binding (framework)",
      "Government",
      "Principles including transparency, education and talent cultivation; sector regulators to issue rules",
      "Literacy (state)",
      "Passed Dec 2025"
     ],
     [
      "Hong Kong — PCPD Model Personal Data Protection Framework for AI (2024) and Guideline on GenAI for Employees (2025)",
      "Guidance",
      "Organisations procuring or using AI",
      "AI strategy and governance committee; staff training; acceptable-use policy for generative AI covering permitted tools, data input restrictions, output verification and disclosure",
      "Literacy, Acceptable use",
      "2024–25"
     ],
     [
      "Malaysia, Thailand, Indonesia, Philippines",
      "Guidance / Pending",
      "—",
      "National AI governance and ethics guidelines (Malaysia AIGE 2024; Thailand draft AI law; Indonesia MoCI circular 2023; Philippines NAIS 2.0) all promote AI literacy and responsible-use training without binding private-sector mandates yet",
      "Literacy (policy)",
      "Pending"
     ]
    ]
   }
  ]
 },
 {
  "id": "middle-east-africa-binding-law-and-regul",
  "title": "Middle East & Africa — binding law and regulator guidance",
  "blocks": [
   {
    "kind": "p",
    "text": "In this region the binding duties fall almost entirely on government entities, through national AI authorities' frameworks; private-sector duties come via data-protection law, financial regulators and free-zone rules. Several governments have made AI training a workforce mandate for public employees."
   },
   {
    "kind": "table",
    "head": [
     "Instrument",
     "Status",
     "Who must comply",
     "Requirement",
     "Type",
     "Key dates"
    ],
    "rows": [
     [
      "Saudi Arabia — SDAIA Generative AI Guidelines for Government (Jan 2024)",
      "Binding (public sector)",
      "Government entities and their employees",
      "Compliance checklist covering legal and ethical standards, data-processing policies, mandatory training for users, output verification, roles for data management offices; a companion public guideline covers individuals",
      "Training / competence, Acceptable use",
      "Jan 2024"
     ],
     [
      "Saudi Arabia — SDAIA AI Ethics Principles v2 (Sept 2023) and AI Adoption Framework",
      "Binding (public sector) / Guidance",
      "Government entities (mandatory); private sector (recommended)",
      "Seven principles with implementation controls; accountability and competence of staff; awareness programmes",
      "Awareness, Literacy",
      "2023"
     ],
     [
      "Saudi Arabia — PDPL (2023) and Implementing Regulations",
      "Binding",
      "Controllers",
      "Staff training and awareness as part of security and accountability controls; rights relating to automated decisions",
      "Awareness, Training",
      "Enforced from Sept 2024"
     ],
     [
      "Saudi Arabia — SAMA and CMA guidance",
      "Guidance",
      "Banks, insurers, capital-market institutions",
      "Model risk, governance and staff competence expectations extended to AI",
      "Training / competence",
      "Ongoing"
     ],
     [
      "UAE — Charter for the Development and Use of AI (2024)",
      "Binding (public sector) / Guidance",
      "Federal entities; private sector encouraged",
      "Twelve principles, including awareness and education about AI, privacy, transparency, accountability and safety",
      "Awareness, Literacy",
      "2024"
     ],
     [
      "UAE — Cabinet Agentic AI framework and federal training programme",
      "Binding (public sector)",
      "Federal ministries and entities",
      "50% of federal operations to adopt agentic AI within two years; training of 80,000 federal employees across five role categories; Federal Authority for AI and Data established 2026",
      "Training / competence",
      "Approved Apr–May 2026"
     ],
     [
      "UAE — Federal AI-in-health law (approved 2026)",
      "Pending",
      "Healthcare providers",
      "Data governance, safety standards, patient rights; workforce AI capability under the national digital-health policy",
      "Training / competence",
      "Approved 2026; publication pending"
     ],
     [
      "UAE — PDPL (Federal Decree-Law 45/2021)",
      "Binding",
      "Controllers and processors",
      "Security measures and awareness; automated-decision rights; executive regulations pending",
      "Awareness",
      "In force; regulations pending"
     ],
     [
      "UAE — DIFC Data Protection Regulation 10 (2023)",
      "Binding (free zone)",
      "DIFC entities deploying autonomous or semi-autonomous systems",
      "Appoint a responsible officer; ensure staff understand system operation; transparency and human intervention; record keeping",
      "Training / competence, Acceptable use",
      "Sept 2023"
     ],
     [
      "UAE — ADGM Data Protection Regulations and guidance on AI",
      "Binding (free zone) / Guidance",
      "ADGM entities",
      "Accountability and staff awareness for AI processing",
      "Awareness",
      "Ongoing"
     ],
     [
      "UAE — Central Bank, DFSA, FSRA, SCA guidance",
      "Guidance",
      "Financial institutions",
      "Model governance, competence of staff overseeing AI, consumer disclosure",
      "Training / competence",
      "2024–26"
     ],
     [
      "UAE — education mandate",
      "Binding (public sector)",
      "Public schools",
      "AI a mandatory subject K–12 from academic year 2025–26; national teacher upskilling",
      "Literacy (national)",
      "2025"
     ],
     [
      "Qatar — NCSA Guidelines for Secure Adoption and Usage of AI (2024); Qatar National AI Policy",
      "Guidance / Binding (public sector)",
      "Government and critical-sector entities",
      "Secure-use controls, staff awareness and training, acceptable-use rules for generative AI",
      "Awareness, Acceptable use",
      "2024"
     ],
     [
      "Bahrain — PDPL (2019) and national AI policy direction",
      "Binding (PDPL) / Pending",
      "Controllers",
      "Security and staff awareness duties under PDPL; a dedicated AI law was under consultation in 2025",
      "Awareness",
      "PDPL in force 2019"
     ],
     [
      "Oman, Kuwait",
      "Guidance / Pending",
      "—",
      "National AI policies and ethics guidelines; Oman AI Policy (2024) sets public-sector responsible-use rules and capability building",
      "Literacy (policy)",
      "2024–25"
     ],
     [
      "Egypt — Charter for Responsible AI (2023); Personal Data Protection Law 151/2020",
      "Guidance / Binding",
      "Organisations",
      "Awareness, training and ethical-use principles; data-protection training duties",
      "Awareness, Literacy",
      "2023"
     ],
     [
      "Türkiye — KVKK guidance on AI (2021) and draft AI law",
      "Guidance / Pending",
      "Controllers",
      "Privacy-by-design and staff awareness; draft AI law under review",
      "Awareness",
      "Pending"
     ],
     [
      "Israel — AI Policy (2023) and PPA guidance",
      "Guidance",
      "Organisations",
      "Sector-led regulation; privacy authority expects staff training for AI processing",
      "Awareness",
      "2023–25"
     ],
     [
      "Nigeria — NDPC General Application and Implementation Directive (GAID 2025); National AI Strategy (2024)",
      "Binding (GAID) / Guidance",
      "Data controllers of major importance; all organisations",
      "Mandatory data-protection training and awareness; GAID addresses AI and automated decision-making; strategy prioritises AI literacy",
      "Awareness, Training, Literacy",
      "GAID effective Sept 2025"
     ],
     [
      "Kenya — National AI Strategy 2025–2030; Data Protection Act 2019",
      "Guidance / Binding",
      "Organisations",
      "Capacity-building and AI literacy pillars; ODPC expects staff training and DPIAs for automated decisions",
      "Literacy, Awareness",
      "2025"
     ],
     [
      "South Africa — National AI Policy Framework (2024); POPIA s.71",
      "Guidance / Binding",
      "Responsible parties",
      "Human-capital development and ethics; POPIA restricts solely automated decisions and requires appropriate measures",
      "Literacy, Acceptable use",
      "2024"
     ],
     [
      "Rwanda, Ghana, Mauritius, Morocco",
      "Guidance",
      "—",
      "National AI policies emphasising skills and responsible-use awareness; Mauritius and Rwanda include public-sector AI training programmes",
      "Literacy (policy)",
      "2023–25"
     ],
     [
      "African Union Continental AI Strategy (2024)",
      "Guidance (member states)",
      "AU member states",
      "Pillar on skills, talent and AI literacy; model governance frameworks for members",
      "Literacy (state)",
      "Adopted Jul 2024"
     ]
    ]
   }
  ]
 },
 {
  "id": "international-standards-and-frameworks",
  "title": "International standards and frameworks",
  "blocks": [
   {
    "kind": "p",
    "text": "ISO/IEC 42001 is the most demanding instrument on this list once adopted: it requires the organisation to define role competence, close gaps, prove awareness and retain evidence, which is more than the amended EU Article 4 asks. Certifying to it, or contracting to it, converts a voluntary standard into an auditable obligation."
   },
   {
    "kind": "table",
    "head": [
     "Standard / framework",
     "Status",
     "Clause or control",
     "Requirement",
     "Type"
    ],
    "rows": [
     [
      "ISO/IEC 42001:2023 — AI management system",
      "Certifiable",
      "7.2 Competence",
      "Determine competence needed for each role affecting AI performance; ensure it through education, training or experience; act on gaps; evaluate effectiveness; retain documented evidence",
      "Training / competence"
     ],
     [
      "ISO/IEC 42001:2023",
      "Certifiable",
      "7.3 Awareness",
      "All persons doing work under the organisation's control must be aware of the AI policy, their contribution to the AIMS, the benefits of improved AI performance and the implications of non-conformance",
      "Awareness"
     ],
     [
      "ISO/IEC 42001:2023",
      "Certifiable",
      "7.1 Resources; Annex A.4.6 Human resources",
      "Identify and provide human resources with the skills needed across the AI lifecycle",
      "Training / competence"
     ],
     [
      "ISO/IEC 42001:2023",
      "Certifiable",
      "Annex A.2 AI policy; A.3.2 Roles and responsibilities",
      "Documented AI policy communicated to staff; defined, assigned AI roles",
      "Awareness"
     ],
     [
      "ISO/IEC 42001:2023",
      "Certifiable",
      "Annex A.9 Use of AI systems (A.9.2 responsible-use processes, A.9.3 objectives, A.9.4 intended use)",
      "Define and enforce processes for responsible use; ensure systems are used only for intended purposes and in accordance with instructions",
      "Acceptable use"
     ],
     [
      "ISO/IEC 42001:2023",
      "Certifiable",
      "Annex A.8 Information for interested parties; A.6.2.8 Event logging; A.10 Third parties",
      "Users informed of AI use and how to report concerns; supplier staff competence addressed in agreements",
      "Awareness, Acceptable use"
     ],
     [
      "ISO/IEC 42005:2025 — AI system impact assessment",
      "Guidance",
      "Whole standard",
      "Impact assessments should consider competence of operators and affected-party understanding",
      "Training / competence"
     ],
     [
      "ISO/IEC 23894:2023 — AI risk management",
      "Guidance",
      "Clauses on resources and competence; Annex on human factors",
      "Allocate competent people to AI risk roles; address operator error and automation bias as risk sources",
      "Training / competence"
     ],
     [
      "ISO/IEC 22989:2022 and ISO/IEC 5338:2023",
      "Guidance",
      "Terminology; lifecycle",
      "Common vocabulary and lifecycle stages used to scope training content",
      "Literacy"
     ],
     [
      "ISO/IEC 42006:2025",
      "Certifiable (for certification bodies)",
      "Auditor competence",
      "Auditors of AIMS must demonstrate AI competence; feeds client-side expectations",
      "Training / competence"
     ],
     [
      "ISO/IEC 27001:2022 — ISMS",
      "Certifiable",
      "7.2, 7.3; Annex A.6.3 Information security awareness, education and training; A.5.10 Acceptable use of information and other associated assets; A.5.36 Compliance with policies",
      "Role-appropriate security awareness and training; acceptable-use rules for assets, which now include AI services and the data fed to them; evidence retained",
      "Awareness, Training, Acceptable use"
     ],
     [
      "ISO/IEC 27002:2022; ISO/IEC 27701 (privacy); ISO/IEC 27090 (AI security, in development); ISO/IEC 27091 (AI privacy, in development)",
      "Guidance",
      "Implementation guidance",
      "Detailed guidance for training content and AUP design for AI-specific threats (prompt injection, data leakage, model misuse)",
      "Training, Acceptable use"
     ],
     [
      "NIST AI Risk Management Framework 1.0 (Jan 2023)",
      "Guidance (safe harbour under Texas TRAIGA)",
      "GOVERN 2.2",
      "Personnel and partners receive AI risk-management training to perform duties consistent with policies",
      "Training / competence"
     ],
     [
      "NIST AI RMF 1.0",
      "Guidance",
      "GOVERN 1.1–1.7, 3.2, 4.1",
      "Policies and procedures communicated; diverse teams; culture that surfaces AI risk; decommissioning processes",
      "Awareness"
     ],
     [
      "NIST AI RMF 1.0",
      "Guidance",
      "MAP 3.4, MAP 3.5",
      "Operator and practitioner proficiency with AI system performance and trustworthiness defined, assessed and documented; human-oversight processes defined",
      "Training / competence"
     ],
     [
      "NIST AI 600-1 — Generative AI Profile (Jul 2024)",
      "Guidance",
      "GV-1.2, GV-6.1, MS-2.x",
      "Establish acceptable-use policies for generative AI covering permitted tools, data restrictions, disclosure and output verification; train staff on GAI-specific risks (confabulation, data privacy, IP, harmful content)",
      "Acceptable use, Training"
     ],
     [
      "NIST SP 800-53 Rev. 5",
      "Binding (US federal) / Guidance",
      "AT family (AT-2 awareness, AT-3 role-based training)",
      "Security and privacy awareness including role-based training; applicable to AI systems in federal information systems",
      "Awareness, Training"
     ],
     [
      "NIST Cybersecurity Framework 2.0 (2024)",
      "Guidance",
      "GOVERN and PROTECT functions (PR.AT)",
      "Awareness and training outcomes; AI referenced through the 2025 Cyber AI Profile work",
      "Awareness, Training"
     ],
     [
      "CIS Critical Security Controls v8.1",
      "Guidance",
      "Control 14 Security awareness and skills training",
      "Role-specific training programme, updated for new threats including AI misuse",
      "Awareness, Training"
     ],
     [
      "OECD AI Principles (2019, revised 2024)",
      "Guidance (adhering governments)",
      "Principle 2.4 Building human capacity",
      "Governments should equip people with skills and support workers through AI transition",
      "Literacy (state)"
     ],
     [
      "UNESCO Recommendation on the Ethics of AI (2021); UNESCO AI Competency Frameworks for Teachers and Students (2024)",
      "Guidance (member states)",
      "Policy area 8 Education and research",
      "Member states should deliver AI literacy at all levels; competency frameworks define progressive skill levels",
      "Literacy"
     ],
     [
      "G7 Hiroshima Process Code of Conduct (2023)",
      "Guidance",
      "Action 7–9",
      "Organisations developing advanced AI to invest in security, literacy and public awareness",
      "Literacy, Awareness"
     ],
     [
      "IEEE 7000-2021 and IEEE CertifAIEd",
      "Certifiable",
      "Ethics-driven design process",
      "Stakeholder and team competence in value-based design; transparency and accountability criteria",
      "Training / competence"
     ],
     [
      "Council of Europe HUDERIA methodology (2024)",
      "Guidance",
      "Risk and impact assessment",
      "Assessment of operator competence and affected-person understanding",
      "Training / competence"
     ],
     [
      "COBIT 2019 / ISACA AI audit toolkits; IIA AI Auditing Framework (2024)",
      "Guidance",
      "Governance and assurance",
      "Boards and internal audit must have competence to oversee and audit AI",
      "Training / competence"
     ]
    ]
   }
  ]
 },
 {
  "id": "sector-regulators-and-professional-bodie",
  "title": "Sector regulators and professional bodies",
  "blocks": [
   {
    "kind": "p",
    "text": "Financial supervisors are the most explicit: they expect firms to prove that the people overseeing AI are competent, and most now say so in writing. Healthcare, legal and education bodies have converted professional competence duties into AI-specific expectations."
   },
   {
    "kind": "table",
    "head": [
     "Sector",
     "Instrument",
     "Status",
     "Requirement",
     "Type"
    ],
    "rows": [
     [
      "Financial services — EU",
      "DORA Art. 13(6); EBA Guidelines on ICT and security risk management; EIOPA Opinion on AI governance and risk management (Aug 2025); ESMA statement on AI in investment services (May 2024)",
      "Binding / Guidance",
      "All staff and management receive ICT and resilience training; insurers and investment firms must ensure staff using AI have adequate knowledge, with MiFID II knowledge-and-competence rules applied to AI-assisted advice",
      "Awareness, Training / competence"
     ],
     [
      "Financial services — EU banking supervision",
      "ECB supervisory priorities and model-risk expectations (2025–26)",
      "Guidance",
      "Boards must understand AI models they approve; internal validation staff competent in ML",
      "Training / competence"
     ],
     [
      "Financial services — UK",
      "FCA Senior Managers & Certification Regime, Consumer Duty, Conduct Rules guidance; PRA SS1/23 model risk management",
      "Binding / Guidance",
      "Firms must evidence role-relevant, scenario-based training and assess whether it worked; senior managers accountable for AI outcomes; SS1/23 requires competent model owners and validators",
      "Training / competence"
     ],
     [
      "Financial services — US",
      "SR 11-7 Model Risk Management; FINRA Regulatory Notice 24-09 (GenAI); SEC exam priorities; NYDFS Circular (Jul 2024) on AI in insurance; NYDFS Part 500 training rule",
      "Binding / Guidance",
      "Model governance with qualified staff; supervisory procedures for GenAI tools; NYDFS insurers must govern AI and train staff; cybersecurity awareness training mandatory under Part 500",
      "Training / competence, Awareness"
     ],
     [
      "Financial services — Singapore",
      "MAS FEAT Principles (2018); MAS Information Paper on AI model risk (Dec 2024); proposed MAS Guidelines on AI Risk Management (consultation Nov 2025)",
      "Guidance / Pending",
      "Board and senior management oversight; staff competency and training on AI risk; inventories and acceptable-use controls for generative AI",
      "Training / competence, Acceptable use"
     ],
     [
      "Financial services — Hong Kong",
      "HKMA GenAI consumer-protection principles (Aug 2024) and circulars on AI; SFC circular on generative AI language models (Nov 2024)",
      "Guidance (supervisory)",
      "Staff with sufficient expertise to oversee AI; model-risk and cybersecurity controls; acceptable-use rules for LLM tools; senior-management accountability",
      "Training / competence, Acceptable use"
     ],
     [
      "Financial services — other",
      "RBI FREE-AI (India); APRA CPS 230/234 (Australia); OSFI Guideline E-23 model risk (Canada, 2025); BSP, BNM, OJK guidance",
      "Guidance / Binding",
      "AI literacy for boards and staff; operational-resilience and model-risk competence",
      "Literacy, Training / competence"
     ],
     [
      "Financial crime",
      "FATF guidance on digital transformation (2021) and 2025 AI work; Wolfsberg AI/ML principles (2025)",
      "Guidance",
      "Staff must understand AI tools used in AML monitoring and escalation",
      "Training / competence"
     ],
     [
      "Healthcare",
      "WHO Guidance on Ethics and Governance of AI for Health and on Large Multimodal Models (2024); US FDA AI/ML device guidance; HHS/ONC HTI-1 transparency rule; Joint Commission–CHAI Responsible Use of AI in Healthcare guidance (Sept 2025); Texas TRAIGA and SB 1188; UAE federal health-AI law",
      "Binding / Guidance",
      "Clinician training before AI tools enter workflow; disclosure to patients; human review of AI-generated records; workforce AI education programmes",
      "Training / competence, Acceptable use"
     ],
     [
      "Legal profession",
      "ABA Formal Opinion 512 (Jul 2024); Law Society of England and Wales guidance; bar guidance in Canada, Australia, Singapore, India",
      "Binding (professional rules)",
      "Duty of competence includes understanding the generative-AI tools used; confidentiality limits on inputting client data; verification of outputs; disclosure to clients where material",
      "Training / competence, Acceptable use"
     ],
     [
      "Accounting and audit",
      "IAASB and IESBA technology guidance; PCAOB and FRC statements on AI in audit",
      "Guidance",
      "Auditors must be competent in AI tools used in engagements; firm policies on acceptable use",
      "Training / competence, Acceptable use"
     ],
     [
      "Education",
      "UNESCO Guidance for Generative AI in Education and Research (2023); EU Ethical guidelines on AI and data in teaching (2022); national education ministries (UAE K–12 mandate, China MoE, US Dept of Education 2025 guidance)",
      "Guidance / Binding (public)",
      "Teacher AI competency; student AI literacy curricula; institutional acceptable-use rules for generative AI",
      "Literacy, Acceptable use"
     ],
     [
      "Public sector",
      "OMB M-25-21 (US); Australian APS policy; Canada Directive on ADM; UK AI Playbook; Korea Public AI Act; Saudi SDAIA government guidelines; UAE federal programme",
      "Binding (public sector)",
      "Mandatory staff training, accountable officers, impact assessments, transparency statements, acceptable-use rules for generative AI",
      "All four"
     ],
     [
      "Employment and HR",
      "EU AI Act Annex III (employment is high-risk); Illinois HB 3773; NYC LL144; California FEHA regulations; Colorado SB 26-189; EU Platform Work Directive (2024, transposition by Dec 2026)",
      "Binding",
      "HR staff must understand and oversee AI tools in hiring, evaluation and management; worker notice and human review",
      "Training / competence, Acceptable use"
     ],
     [
      "Cybersecurity",
      "NIS2 Directive Art. 20(2) (EU) — management-body training and regular staff training; SEC cyber-disclosure rule; national cyber regulators' AI-secure-use guidance (CISA/NCSC joint guidance 2024–25; Qatar NCSA; Saudi NCA)",
      "Binding / Guidance",
      "Cyber training obligations now routinely include AI-enabled threats and secure use of AI tools",
      "Awareness, Training"
     ],
     [
      "Telecommunications and media",
      "Ofcom (UK) and national regulators' statements on synthetic media; EU AI Act Art. 50",
      "Binding / Guidance",
      "Staff must apply labelling and disclosure rules",
      "Acceptable use"
     ],
     [
      "Children's and consumer protection",
      "UK Online Safety Act; US state chatbot laws (California SB 243, 2025; others); consumer-protection agencies' guidance on AI claims",
      "Binding",
      "Operators of companion chatbots must implement safeguards and disclosures; staff must know the rules",
      "Acceptable use"
     ]
    ]
   }
  ]
 },
 {
  "id": "consolidated-requirements-matrix",
  "title": "Consolidated requirements matrix",
  "blocks": [
   {
    "kind": "p",
    "text": "Eleven distinct obligations recur across every instrument above. The table maps each to the strongest source that imposes it, the people it covers, when it bites, and the evidence a supervisor or auditor will ask for."
   },
   {
    "kind": "table",
    "head": [
     "#",
     "Obligation",
     "Strongest binding source",
     "Also required or expected by",
     "Audience",
     "Trigger / date",
     "Evidence to produce"
    ],
    "rows": [
     [
      "1",
      "Baseline AI literacy for all staff who operate or use AI",
      "EU AI Act Art. 4; Australian APS policy (public sector)",
      "ISO 42001 7.3; NIST AI RMF GOVERN 2.2; Japan AI Guidelines; UNESCO; OECD 2.4",
      "Every employee and contractor using any AI system, including general-purpose chatbots",
      "EU: since 2 Feb 2025, supervised from 2 Aug 2026; APS: from 15 Jun 2026",
      "Curriculum, completion log per person, version history, refresh schedule"
     ],
     [
      "2",
      "Literacy tailored to role, prior knowledge, context and affected persons",
      "EU AI Act Art. 4(1)",
      "ISO 42001 7.2; Commission Q&A; FCA Conduct Rules guidance",
      "Tiered: general users, power users, developers, overseers, procurement, leadership",
      "As above",
      "Role-to-module mapping, needs analysis, system-specific risk briefings (e.g. hallucination for generative AI)"
     ],
     [
      "3",
      "Defined and demonstrated competence for human-oversight roles",
      "EU AI Act Art. 26(2); GDPR Art. 22; Canada Directive on ADM; Colorado SB 26-189 (human review)",
      "ISO 42001 7.2; NIST MAP 3.4; PRA SS1/23; SR 11-7; HKMA/SFC",
      "Named reviewers of high-risk or consequential decisions; model owners and validators",
      "EU high-risk phase-in 2026–27; Colorado 1 Jan 2027; California 1 Jan 2027",
      "Competence matrix, assessment results, authority to override documented, named-person register"
     ],
     [
      "4",
      "Awareness of the AI policy, one's role and consequences of breach",
      "ISO 42001 7.3 (when certified); ISO 27001 7.3",
      "NIST GOVERN 1.x; SDAIA principles; UAE Charter",
      "All personnel under the organisation's control",
      "On adoption; at onboarding and annually",
      "Signed acknowledgements, communications log, policy version control"
     ],
     [
      "5",
      "Acceptable-use policy for AI tools (approved tools, prohibited data, verification, disclosure)",
      "China Interim Measures (user agreements); Illinois, NYC, Texas, Utah disclosure rules; ISO 27001 A.5.10",
      "NIST AI 600-1 GV-1.2; ISO 42001 A.9; HK PCPD GenAI guideline; Singapore GenAI framework; ABA Op. 512",
      "All users; HR, legal, finance, customer-facing roles specifically",
      "In force now in listed jurisdictions",
      "Published AUP, approved-tool register, data-classification rules, attestation records, exception log"
     ],
     [
      "6",
      "Security awareness and resilience training that covers AI threats and secure AI use",
      "DORA Art. 13(6); NIS2 Art. 20(2); NYDFS Part 500; NIST SP 800-53 AT",
      "ISO 27001 A.6.3; CIS 14; national cyber-agency AI guidance",
      "All staff and management bodies",
      "DORA since Jan 2025; NIS2 transposed 2024–25",
      "Annual training records including management; phishing/prompt-injection exercises; board training minutes"
     ],
     [
      "7",
      "Data-protection training for staff handling personal data in AI tools",
      "GDPR Art. 39(1)(b); Saudi PDPL; Nigeria GAID; India DPDP; Singapore PDPA",
      "PCPD framework; ISO 27701",
      "Staff whose AI use touches personal data",
      "In force",
      "DPO training programme, DPIA/risk-assessment records naming AI tools"
     ],
     [
      "8",
      "Notice to workers and candidates about AI in employment decisions",
      "Illinois HB 3773; NYC LL144; California FEHA; Colorado SB 26-189; EU AI Act Art. 26(7)",
      "EU Platform Work Directive",
      "HR, recruiters, managers",
      "Illinois since 1 Jan 2026; Colorado 1 Jan 2027",
      "Posted notices, candidate disclosures, retention for 3–4 years"
     ],
     [
      "9",
      "Disclosure and labelling of AI interactions and synthetic content",
      "EU AI Act Art. 50; China Labelling Measures; Korea AI Basic Act; Texas TRAIGA; Utah",
      "Platform rules",
      "Marketing, communications, product, customer service",
      "China since 1 Sept 2025; Korea since 22 Jan 2026; EU from 2 Aug 2026",
      "Labelling procedures, staff instructions, sample audits"
     ],
     [
      "10",
      "Records proving the programme exists and works",
      "Commission Q&A on Art. 4; ISO 42001 7.2 and 7.5; Illinois rules; California ADMT",
      "All management-system standards",
      "Compliance, HR/L&D, AI governance function",
      "Continuous",
      "Training content, attendance, assessments, effectiveness review, refresh triggers linked to the AI inventory"
     ],
     [
      "11",
      "Board and senior-management AI competence",
      "NIS2 Art. 20(2); FCA SM&CR; RBI FREE-AI; EIOPA opinion; OSFI E-23",
      "ISO 42001 5.1; NIST GOVERN 1.x; IIA framework",
      "Directors, executives, accountable officials, Chief AI Officers",
      "NIS2 now; financial regulators now",
      "Board training records, AI items on board agendas, accountability maps"
     ]
    ]
   },
   {
    "kind": "p",
    "text": "The gaps most often found in practice: training delivered once with no refresh when the AI inventory changes (fails items 2 and 10); human reviewers named but never assessed (item 3); an AUP that bans tools without saying which are approved (item 5); and contractors left out although Art. 4 and ISO 42001 both reach them (item 1)."
   }
  ]
 },
 {
  "id": "common-control-set-one-programme-that-sa",
  "title": "Common control set — one programme that satisfies all of the above",
  "blocks": [
   {
    "kind": "p",
    "text": "A single programme built to ISO/IEC 42001 clauses 7.2 and 7.3, with an acceptable-use policy drawn from NIST AI 600-1, meets every binding literacy, awareness and training duty in this document; jurisdiction-specific notice and disclosure rules bolt on as procedures."
   },
   {
    "kind": "table",
    "head": [
     "Control",
     "What it contains",
     "Satisfies"
    ],
    "rows": [
     [
      "C1. AI inventory and role mapping",
      "Register of every AI system in use (including embedded features and public chatbots), its risk tier, the roles that use, oversee, build or buy it, and the persons it is used on",
      "EU Art. 4 context test; ISO 42001 A.6; NIST MAP; OMB use-case inventory; California/Colorado ADMT scoping"
     ],
     [
      "C2. Four-tier curriculum",
      "Tier 0 all staff (what AI is, limits, hallucination, bias, data rules, how to report concerns); Tier 1 power users (prompting, verification, IP, disclosure); Tier 2 builders and procurers (lifecycle, risk and impact assessment, vendor due diligence); Tier 3 overseers and decision reviewers (system-specific capabilities, failure modes, override authority, automation-bias)",
      "Matrix items 1–3"
     ],
     [
      "C3. Leadership module",
      "Board and executive briefing on AI strategy, risk appetite, regulatory exposure and accountability; recorded in minutes",
      "Item 11"
     ],
     [
      "C4. Acceptable-use policy",
      "Approved-tool list with owners; prohibited inputs by data class (personal, confidential, client, regulated); output-verification duty; disclosure rules for customers, candidates and regulators; labelling of synthetic content; no removal of labels; shadow-AI reporting route; sanctions",
      "Items 5, 8, 9"
     ],
     [
      "C5. Competence assessment for oversight roles",
      "Named reviewers tested on the specific system before authorisation; re-assessed on material model change; authority to override documented",
      "Item 3"
     ],
     [
      "C6. Security and privacy integration",
      "AI modules added to existing security-awareness (DORA, NIS2, Part 500, ISO 27001 A.6.3) and data-protection (GDPR Art. 39) training rather than run separately",
      "Items 6, 7"
     ],
     [
      "C7. Contractor and supplier coverage",
      "Contract clauses requiring supplier staff who operate AI on the organisation's behalf to complete equivalent training; attestation collected",
      "EU Art. 4 \"other persons\"; ISO 42001 A.10"
     ],
     [
      "C8. Refresh triggers",
      "Retraining when a new system enters the inventory, a model changes materially, an incident occurs, or a law changes; annual refresh at minimum",
      "Item 10"
     ],
     [
      "C9. Effectiveness measurement",
      "Completion rate, assessment scores, incident and near-miss trends, spot audits of AUP compliance, user feedback; reviewed at management review",
      "ISO 42001 7.2(d), 9.1, 9.3; FCA expectation that firms assess whether training worked"
     ],
     [
      "C10. Evidence pack",
      "Curriculum with version history; attendance and assessment records per person; policy acknowledgements; board minutes; supplier attestations; mapping of each record to the legal clause it evidences; retention of at least four years",
      "Item 10; Illinois four-year rule; Colorado three-year rule; California five-year rule"
     ]
    ]
   },
   {
    "kind": "p",
    "text": "Sequence for a new programme: C1 first (nothing else can be scoped without it), then C4 and Tier 0 of C2 together so staff have rules and the reason for them at the same time, then C5 for any high-risk or consequential-decision system before it goes live, then C3, C6, C7 and the measurement and evidence layers."
   }
  ]
 },
 {
  "id": "sources",
  "title": "Sources",
  "blocks": [
   {
    "kind": "p",
    "text": "Pages opened for this reference (October 2026):"
   },
   {
    "kind": "list",
    "items": [
     {
      "text": "EU AI Act Article 4 after the Digital Omnibus — KI-Campus",
      "url": "https://www.ki-campus.org/en/blog/eu-ai-act-ai-omnibus-recalibrates-article-4-ai-literacy-remains-mandatory"
     },
     {
      "text": "Article 4 text as amended by Regulation (EU) 2026/1744 — Ainora",
      "url": "https://ainora.lt/blog/eu-ai-act-article-4-ai-literacy"
     },
     {
      "text": "European Commission AI literacy Q&A — takeaways (Ropes & Gray)",
      "url": "https://www.ropesgray.com/en/insights/viewpoints/102kbn5/five-takeaways-from-the-eu-commissions-ai-literacy-qas"
     },
     {
      "text": "Commission Q&A summary — Inside Privacy (Covington)",
      "url": "https://www.insideprivacy.com/artificial-intelligence/european-commission-publishes-qa-on-ai-literacy/"
     },
     {
      "text": "Article 4 enforcement from 2 August 2026 — Secure Privacy",
      "url": "https://secureprivacy.ai/blog/eu-ai-act-article-4-ai-literacy-what-sufficient-means-before-the-2026-deadline"
     },
     {
      "text": "ISO/IEC 42001 clause 7.2 and mapping to the AI Act — Presencis",
      "url": "https://presencis.com/regulations/iso-42001/article-7.2/"
     },
     {
      "text": "ISO/IEC 42001 clause 7.3 awareness — Cyberday",
      "url": "https://www.cyberday.ai/requirement/iso-42001-7-3-awareness"
     },
     {
      "text": "Colorado SB 26-189 — Littler",
      "url": "https://www.littler.com/news-analysis/asap/colorado-amends-its-artificial-intelligence-law-substantially-reducing"
     },
     {
      "text": "Colorado repeal and replacement — Greenberg Traurig",
      "url": "https://www.gtlaw.com/en/insights/2026/5/colorado-repeals-and-replaces-the-colorado-ai-act"
     },
     {
      "text": "Colorado status including stay of enforcement — Eckert Seamans",
      "url": "https://www.eckertseamans.com/legal-updates/colorado-repeals-and-replaces-its-landmark-ai-statute-what-businesses-need-to-know"
     },
     {
      "text": "Texas TRAIGA — Norton Rose Fulbright",
      "url": "https://www.nortonrosefulbright.com/en-us/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act"
     },
     {
      "text": "Illinois HB 3773 and IDHR draft rules — Hinshaw",
      "url": "https://www.hinshawlaw.com/print/v2/content/40555/illinois-adopts-new-ai-in-employment-regulations-what-employers-need-to-know-for-2026.pdf"
     },
     {
      "text": "California ADMT regulations — National Law Review",
      "url": "https://natlawreview.com/article/californias-admt-regulations-new-compliance-obligations-and-emerging-enforcement"
     },
     {
      "text": "California 2026 CCPA regulations — Thompson Coburn",
      "url": "https://www.thompsoncoburn.com/insights/californias-2026-ccpa-regulations-summary-and-preparation-guide/"
     },
     {
      "text": "OMB M-25-21 — Department of Commerce compliance plan",
      "url": "https://www.commerce.gov/sites/default/files/2025-09/DOC-Compliance-Plan-for-OMB-Memorandum-M-25-21.pdf"
     },
     {
      "text": "OMB M-25-21 and M-25-22 overview — Hunton",
      "url": "https://hunton.com/privacy-and-information-security-law/omb-issues-revised-policies-on-ai-use-and-procurement-by-federal-agencies"
     },
     {
      "text": "South Korea AI Basic Act — Cooley",
      "url": "https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways"
     },
     {
      "text": "South Korea AI Basic Act — US ITA market intelligence",
      "url": "https://www.trade.gov/market-intelligence/south-korea-ai-basic-act"
     },
     {
      "text": "Japan AI Promotion Act — Future of Privacy Forum",
      "url": "https://fpf.org/blog/understanding-japans-ai-promotion-act/"
     },
     {
      "text": "China generative AI measures and labelling rules — CASRAI",
      "url": "https://casrai.org/guides/china-ai-regulation-explained"
     },
     {
      "text": "Australia APS AI policy v2.0 — Digital Transformation Agency",
      "url": "https://www.dta.gov.au/articles/ai-policy-update-strengthening-responsible-use-across-government"
     },
     {
      "text": "Australia APS AI Plan — Norton Rose Fulbright",
      "url": "https://www.nortonrosefulbright.com/en-gb/knowledge/publications/a8fb671c/the-australian-public-service-ai-plan-2025"
     },
     {
      "text": "Saudi Arabia AI tracker — HSF Kramer",
      "url": "https://www.hsfkramer.com/insights/reports/ai-tracker/saudi-arabia"
     },
     {
      "text": "SDAIA generative AI guidelines — DataGuidance",
      "url": "https://www.dataguidance.com/news/saudi-arabia-sdaia-publishes-guidelines-generative-ai"
     },
     {
      "text": "UAE AI governance and Charter — Aletihad",
      "url": "https://en.aletihad.ae/news/ai/4680118/uae-among-gulf-s-most-advanced-ai-governance-environments--r"
     },
     {
      "text": "UAE Cabinet agentic AI framework and federal training — GovCon Exec",
      "url": "https://www.govconexec.com/?p=625815"
     },
     {
      "text": "UAE 2026 AI integration report — WAM",
      "url": "https://www.wam.ae/en/article/17gvrzj-uae-expands-integration-across-key-sectors-2026"
     },
     {
      "text": "Financial regulators' training expectations — Learnsignal",
      "url": "https://www.learnsignal.com/blog/ai-compliance-training-finance-teams-regulators/"
     },
     {
      "text": "FCA, DORA and workforce competence — Intuition",
      "url": "https://www.intuition.com/the-new-workforce-risk-financial-services-leaders-are-watching/"
     }
    ]
   },
   {
    "kind": "p",
    "text": "Entries not linked above (GDPR, DORA, NIS2, Council of Europe Convention, Canada Directive on ADM, NIST AI RMF and AI 600-1, ISO/IEC 27001, sector guidance, national strategies) are summarised from the primary texts as known at the time of writing; confirm against the official text before relying on a specific clause."
   }
  ]
 }
]
