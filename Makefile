.PHONY: test

start:
	yarn
	yarn start

lint:
	NODE_ENV=development yarn
	NODE_ENV=development yarn lint

test:
	NODE_ENV=test yarn
	NODE_ENV=test yarn test
