install:
	npm install

start:
	npm run babel-node -- src/bin/brain-prime.js

lint:
	npm run eslint

publish:
	npm publish
