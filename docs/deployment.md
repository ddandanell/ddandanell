# 🚀 Deployment

## Forudsætninger

- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

## Lokal udvikling

```bash
# Klon og installer
git clone <repo-url>
cd rumraket
npm install

# Sæt environment op
cp .env.example .env
# Redigér .env med dine indstillinger

# Kør migrationer
npm run db:migrate

# Start udviklingsserver
npm run dev
```

## Docker

```bash
# Byg og start med Docker Compose
docker compose up --build
```

## Production

```bash
# Byg
npm run build

# Start
npm start
```

## Environment Variables

Se `.env.example` for alle konfigurationsmuligheder.
