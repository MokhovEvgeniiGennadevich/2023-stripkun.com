-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "budget" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4()
);

-- SUMM = SUMM * 1000
CREATE TABLE IF NOT EXISTS "budget_summ" (
  "id" uuid PRIMARY KEY NOT NULL,
  "summ" int NOT NULL
);

CREATE TABLE IF NOT EXISTS "budget_category" (
  "id" uuid PRIMARY KEY NOT NULL,
  "category_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "budget_date" (
  "id" uuid PRIMARY KEY NOT NULL,
  "date" timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS "budget_note" (
  "id" uuid PRIMARY KEY NOT NULL,
  "note" varchar NOT NULL
);