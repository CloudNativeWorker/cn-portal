.PHONY: all build help
BIN_DIR=bin
BASE_PATH=$(shell pwd)
$(shell git fetch --tags)
GIT_COMMIT := $(shell git rev-parse HEAD)
LATEST_TAG := $(shell git describe --tags --abbrev=0)

all: check build
build:
	docker run --rm \
	-e GIT_COMMIT=$(GIT_COMMIT) \
	-e GIT_TAG=$(LATEST_TAG) \
	-v $(BASE_PATH)/docs:/app/static \
	-v $(BASE_PATH)/build/conf.yaml:/app/public/conf.yml \
	lissy93/dashy:2.1.2 sh -c "yarn build && cp -rf /app/dist/* /app/static/"
help:
	@echo "make build - build site"
