# 🧠 Prompts

Alle system prompts, templates og chains til AI/LLM-integrationen.

## Mappestruktur

```
prompts/
├── system/          # System prompts — definerer AI-agentens rolle og adfærd
│   └── *.md         # Én fil per system prompt
├── templates/       # Prompt templates med variabler ({{variabel}})
│   └── *.md         # Genanvendelige skabeloner
└── chains/          # Kæder af prompts der kører i sekvens
    └── *.json       # Chain-definitioner
```

## Konventioner

- **System prompts** skrives i Markdown (`.md`) — klart, læsbart og versionsstyret.
- **Templates** bruger `{{variabel}}` syntax til dynamisk indhold.
- **Chains** defineres i JSON med en liste af prompt-steps.

## Eksempel

Se `system/default-assistant.md` for et eksempel på et system prompt.
