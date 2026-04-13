# 🏗️ Arkitektur

## Overblik

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   Client     │────▶│   API Layer  │────▶│   Services   │
│  (Frontend)  │◀────│  (Express)   │◀────│  (Business)  │
└─────────────┘     └──────────────┘     └──────┬───────┘
                                                │
                                    ┌───────────┼───────────┐
                                    ▼           ▼           ▼
                              ┌──────────┐ ┌──────────┐ ┌──────────┐
                              │ Database │ │  AI/LLM  │ │ Prompts  │
                              │ (Postgres)│ │ (OpenAI) │ │  (Files) │
                              └──────────┘ └──────────┘ └──────────┘
```

## Lag

### 1. API Layer (`src/api/`)
- **Routes** — definerer URL-endpoints
- **Controllers** — håndterer HTTP requests/responses
- **Middleware** — auth, error handling, logging

### 2. Service Layer (`src/services/`)
- **chatService** — AI-samtaler og konversationslogik
- **promptService** — indlæsning og rendering af prompts
- **databaseService** — database queries og forbindelser

### 3. Data Layer
- **Database** (`database/`) — PostgreSQL med migrationer
- **Prompts** (`prompts/`) — versionsstyrede system prompts

## Dataflow

1. Client sender request → API Route
2. Route kalder Controller
3. Controller kalder relevante Services
4. Services interagerer med Database/AI/Prompts
5. Svar sendes retur til client
