#!/bin/bash
# ===========================================
# Setup Script — Gør projektet klar til brug
# ===========================================

set -e

echo "🚀 Sætter Rumraket op..."

# Check dependencies
command -v node >/dev/null 2>&1 || { echo "❌ Node.js er påkrævet"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm er påkrævet"; exit 1; }

# Install dependencies
echo "📦 Installerer dependencies..."
npm install

# Setup environment
if [ ! -f .env ]; then
    echo "⚙️  Opretter .env fra .env.example..."
    cp .env.example .env
    echo "   ✏️  Husk at opdatere .env med dine indstillinger!"
fi

echo ""
echo "✅ Setup færdig!"
echo ""
echo "Næste skridt:"
echo "  npm run dev    — Start udviklingsserver"
echo "  npm test       — Kør tests"
echo ""
