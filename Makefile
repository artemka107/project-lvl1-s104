install:
	npm install

start:
	npm run babel-node -- src/bin/brain-divisor.js

lint:
	npm run eslint

publish:
	npm publish
