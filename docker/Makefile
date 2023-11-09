run:
	cd dev && docker-compose up -d

exec:
	docker exec -it nginx sh

restart:
	docker stop nginx > /dev/null
	docker rm nginx > /dev/null
	make run

logs:
	docker logs -f nginx