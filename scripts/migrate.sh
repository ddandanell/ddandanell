#!/bin/bash
# ===========================================
# Database Migration Script
# ===========================================

set -e

MIGRATIONS_DIR="database/migrations"

echo "🗄️  Kører database migrationer..."

for file in $(ls -1 "$MIGRATIONS_DIR"/*.sql 2>/dev/null | sort); do
    echo "  → Kører: $(basename "$file")"
    # TODO: Kør SQL-fil mod database
    # psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f "$file"
done

echo "✅ Migrationer færdige!"
