# Имя базы данных
DB_NAME=backend_monolith_go

# URL для подключения к базе данных
DB_URL=postgresql://root:root@localhost:5432/$(DB_NAME)?sslmode=disable

run:
	npm run start:dev

# DB: Redis Cache
redis:
	docker run --name redis7 -p 6379:6379 -d redis:7-alpine

# DB: Start Docker PostgreSQL 16
postgres:
	docker run --name postgres16 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres:16-alpine

# DB: Start Docker MySQL 8
mysql:
	docker run --name mysql8 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8

# DB: CREATE DATABASE
createdb:
	docker exec -it postgres16 createdb --username=root --owner=root $(DB_NAME)

# DB: DROP DATABASE && DB: CREATE DATABASE && DB: Migration: UP
dropdb:
	docker exec -it postgres16 dropdb $(DB_NAME)
	make createdb
	make migrateup

# DB: Migration: UP
migrateup:
	migrate -path db/migration -database "$(DB_URL)" -verbose up

# DB: Migration: DOWN && DB: Migration: UP
migratedown:
	migrate -path db/migration -database "$(DB_URL)" -verbose down
	migrate -path db/migration -database "$(DB_URL)" -verbose up

.PHONY: migrateup migratedown run createdb dropdb 