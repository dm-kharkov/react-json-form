default: dev

build:
	@echo "Building production bundle..."
	npm run build

dev:
	@echo "Starting dev web server..."
	@npm run dev

install:
	@echo "Installing npm modules..."
	@npm ci
