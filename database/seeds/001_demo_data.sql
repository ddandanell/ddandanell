-- Seed: Demo data til udvikling
-- ADVARSEL: Kun til development/test — brug IKKE i production!

INSERT INTO users (email, name, role) VALUES
    ('admin@rumraket.dk', 'Admin', 'admin'),
    ('test@rumraket.dk', 'Test Bruger', 'user');

INSERT INTO prompt_versions (name, version, content, is_active) VALUES
    ('default-assistant', 1, 'Du er en hjælpsom AI-assistent...', true),
    ('code-reviewer', 1, 'Du er en erfaren kode-reviewer...', true);
