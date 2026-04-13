# 🗄️ Database

Alt relateret til databasen — migrationer, seed-data og schemas.

## Mappestruktur

```
database/
├── migrations/      # Database migrationer (versionsstyrede ændringer)
│   └── *.sql        # Én fil per migration, navngivet med timestamp
├── seeds/           # Seed data til udvikling og test
│   └── *.sql        # Test-/startdata
└── schemas/         # Database schemas og ERD-dokumentation
    └── *.sql        # Tabelstrukturer
```

## Konventioner

- Migrationer navngives: `YYYYMMDD_HHMMSS_beskrivelse.sql`
- Hver migration har en `-- UP` og `-- DOWN` sektion.
- Seeds er kun til development/test — aldrig til production.

## Kom i gang

```bash
# Kør migrationer
npm run db:migrate

# Seed database
npm run db:seed

# Nulstil database
npm run db:reset
```
