# Makefile for Git Commands

.PHONY: help init status add commit push

add:
	git add .

commit:
	git commit -m "update"

push:
	git push

all:
	add commit push
