install:
	npm ci

start:
	npx parcel ./index.html

lint:
	npx eslint .

prettify:
	npx prettier --write .

build:
	rm -rf dist/*
	npx parcel build ./index.html --public-url ./
