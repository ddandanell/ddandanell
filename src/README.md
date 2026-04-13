# 🚀 Rumraket — Source Code

Applikationens kildekode.

## Mappestruktur

```
src/
├── api/
│   ├── routes/          # API endpoints / URL-routing
│   ├── controllers/     # Request handlers — modtager og returnerer data
│   └── middleware/       # Auth, logging, error handling, rate limiting
├── services/            # Forretningslogik — AI, database, eksterne API'er
├── models/              # Data models og type-definitioner
└── utils/               # Hjælpefunktioner — formatering, validering, etc.
```

## Ansvar

| Lag | Ansvar |
|---|---|
| **Routes** | Definerer endpoints (`GET /api/chat`) |
| **Controllers** | Håndterer requests, kalder services |
| **Services** | Forretningslogik, AI-kald, database |
| **Models** | Datastrukturer og validering |
| **Middleware** | Cross-cutting concerns (auth, logging) |
| **Utils** | Rene hjælpefunktioner uden side effects |
