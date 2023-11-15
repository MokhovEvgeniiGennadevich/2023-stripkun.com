-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4()
);

CREATE TABLE IF NOT EXISTS "users_slug" (
  "id" uuid PRIMARY KEY NOT NULL,
  "slug" varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "users_login" (
  "id" uuid PRIMARY KEY NOT NULL,
  "login" varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "users_password" (
  "id" uuid PRIMARY KEY NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "users_sign_up_date" (
  "id" uuid PRIMARY KEY NOT NULL,
  -- https://postgrespro.ru/docs/postgresql/9.4/datatype-datetime
  -- date: without time
  "date" date NOT NULL DEFAULT (CURRENT_DATE)
)

