install:
	npm install

start:
	npm run babel-node -- src/bin/brain-balance.js

lint:
	npm run eslint

publish:
	npm publish
