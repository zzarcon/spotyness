default: deploy

deploy:
	git push
	git push heroku master

add_remote:
	heroku git:remote -a spotyness