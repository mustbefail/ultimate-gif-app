install:
	npm ci

start:
	npx parcel ./index.html

lint:
	npx eslint .

prettify:
	npx prettier --write **/*.{js,css,md,html}

lint-staged:
	npx lint-staged

prebuild:
	npm run prebuild

build:
	npx parcel build ./index.html --public-url ./

deploy:
	npx push-dir -dir=dist --branch=gh-pages --cleanup --verbose
