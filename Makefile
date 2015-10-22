test:
	node node_modules/eslint/bin/eslint .; \
	node node_modules/mocha/bin/mocha

.PHONY: test
