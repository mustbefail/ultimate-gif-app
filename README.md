# Ultimate gif app

## An application that allows you to view and search gifs using the [GIPHY API](https://developers.giphy.com/docs/api#quick-start-guide)

As a user I can:

1. Generate random gif.
2. Search gifs by name.
3. Get gifs by category.
4. Infinite scroll for get more gifs.
5. Receive list of valid terms that comletes the given tag.
6. Add to favorites, get link on gif.
7. Save favorites gif.

## Development

make install to install dependencies.

make start to launch dev server, app would be served at http://localhost:1234/

make run lint to lint and prettify your code

The project implements a pre-commit hook that launches staged files linting. If your IDE reports a commit failure then run npm run lint and/or npm run lint:staged and fix reported issues. Note that .eslintrc.js allows console.error and console.warn.

make run build to build production distribution package

make run deploy to publish built app

test commit
