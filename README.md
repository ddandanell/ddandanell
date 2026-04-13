# 🚀 Rumraket

AI-powered applikation med system prompts, database og alt hvad der skal til.

## Mappestruktur

```
rumraket/
│
├── 📁 src/                        # Kildekode
│   ├── api/
│   │   ├── routes/                # API endpoints
│   │   ├── controllers/           # Request handlers
│   │   └── middleware/            # Auth, errors, logging
│   ├── services/                  # Forretningslogik (AI, DB, prompts)
│   ├── models/                    # Data models og types
│   ├── utils/                     # Hjælpefunktioner
│   └── index.js                   # App entry point
│
├── 🧠 prompts/                    # AI System Prompts
│   ├── system/                    # System prompts (rolle & adfærd)
│   ├── templates/                 # Prompt templates med {{variabler}}
│   └── chains/                    # Kæder af prompts i sekvens
│
├── 🗄️ database/                   # Database
│   ├── migrations/                # Versionsstyrede schema-ændringer
│   ├── seeds/                     # Test-/startdata
│   └── schemas/                   # Tabelstrukturer
│
├── ⚙️ config/                     # Konfiguration
│   └── default.json               # App, DB, AI settings
│
├── 🧪 tests/                      # Tests
│   ├── unit/                      # Unit tests
│   ├── integration/               # Integration tests
│   └── e2e/                       # End-to-end tests
│
├── 📖 docs/                       # Dokumentation
│   ├── architecture.md            # System arkitektur
│   ├── api.md                     # API reference
│   └── deployment.md              # Deployment guide
│
├── 🏗️ infrastructure/             # DevOps & Deployment
│   ├── docker/                    # Dockerfile + docker-compose
│   └── ci/                        # CI/CD pipeline (GitHub Actions)
│
├── 📜 scripts/                    # Utility scripts
│   ├── setup.sh                   # Projekt setup
│   └── migrate.sh                 # Database migrationer
│
├── 🌐 public/                     # Statiske filer
│
├── .env.example                   # Environment template
├── .gitignore                     # Git ignores
└── package.json                   # Dependencies & scripts
```

## Kom i gang

```bash
# Setup
npm run setup

# Start udvikling
npm run dev

# Kør tests
npm test
```

## Scripts

| Kommando | Beskrivelse |
|---|---|
| `npm run dev` | Start udviklingsserver med hot reload |
| `npm start` | Start production server |
| `npm test` | Kør alle tests |
| `npm run db:migrate` | Kør database migrationer |
| `npm run setup` | Fuld projekt setup |

## Dokumentation

- [Arkitektur](docs/architecture.md)
- [API Reference](docs/api.md)
- [Deployment](docs/deployment.md)
- [Prompts Guide](prompts/README.md)
- [Database Guide](database/README.md)
