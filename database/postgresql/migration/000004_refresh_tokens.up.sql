-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Refresh Tokens
CREATE TABLE IF NOT EXISTS "refresh_tokens" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid NOT NULL,
  "refresh_token" varchar NOT NULL UNIQUE,
  "created_at" timestamp NOT NULL DEFAULT (NOW())
);