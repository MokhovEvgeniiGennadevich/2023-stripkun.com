-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Add LTREE extension
CREATE EXTENSION IF NOT EXISTS "ltree";

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

CREATE TABLE IF NOT EXISTS "category_pid" (
  "id" uuid PRIMARY KEY NOT NULL,
  "pid" ltree
);

CREATE INDEX pid_gist_idx ON category_pid USING GIST (pid);
CREATE INDEX pid_btree_idx ON category_pid USING BTREE (pid);

CREATE TABLE IF NOT EXISTS "category_seo" (
  "id" uuid PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "keywords" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "category_time" (
  "id" uuid PRIMARY KEY NOT NULL,
  -- https://postgrespro.ru/docs/postgresql/9.4/datatype-datetime
  -- timestamp without time zone
  -- timestamptz with time zone
  "createdAt" timestamp NOT NULL default(now()),
  "updatedAt" timestamp NOT NULL default(now())
);
