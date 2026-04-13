# 📡 API Reference

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Health Check

```
GET /api/health
```

**Response:**
```json
{
  "status": "ok",
  "service": "rumraket",
  "timestamp": "2026-04-13T12:00:00.000Z"
}
```

---

### Chat

#### Send besked

```
POST /api/chat
```

**Body:**
```json
{
  "message": "Hej, kan du hjælpe mig?",
  "conversationId": "conv_123" // optional
}
```

**Response:**
```json
{
  "conversationId": "conv_123",
  "message": {
    "role": "assistant",
    "content": "Selvfølgelig! Hvad kan jeg hjælpe med?"
  }
}
```

#### Hent samtale

```
GET /api/chat/:conversationId
```

---

### Prompts

#### List prompts

```
GET /api/prompts
```

**Response:**
```json
[
  { "name": "default-assistant", "path": "system/default-assistant.md" },
  { "name": "code-reviewer", "path": "system/code-reviewer.md" }
]
```

#### Hent specifikt prompt

```
GET /api/prompts/:name
```
