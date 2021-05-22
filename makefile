install:
	npm ci

start:
	npx parcel ./src/index.html

lint:
	npx eslint .

prettify:
	npx prettier --write .

build:
	rm -rf dist/*
	npx parcel build ./src/index.html --public-url ./
