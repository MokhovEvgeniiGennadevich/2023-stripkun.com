-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "category" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4()
);

CREATE TABLE IF NOT EXISTS "category_slug" (
  "id" uuid PRIMARY KEY NOT NULL,
  "slug" varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "category_name" (
  "id" uuid PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "category_seo" (
  "id" uuid PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "keywords" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "category_time" (
  "id" uuid PRIMARY KEY NOT NULL,
  "createdAt" timestamp NOT NULL default(now()),
  "updatedAt" timestamp NOT NULL default(now())
);
