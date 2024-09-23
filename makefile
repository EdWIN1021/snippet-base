.PHONY: help all add commit push

help:
	@echo "Available targets:"
	@echo "  all         : Add changes, commit, and push to the remote repository"

all: pull add commit push

pull:
	git pull

add:
	git add .

commit:
	git commit -m "update"

push:
	git push