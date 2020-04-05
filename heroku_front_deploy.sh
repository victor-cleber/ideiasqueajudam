#!/bin/sh

# Primeiro de um commit :D
heroku auth:whoami && echo "######## Already logged on Heroku #############" || heroku login
if heroku git:remote -a ideiasqueajudamweb; then
    echo "######## Deploying on Heroku #############"
    git subtree push --prefix ideasqueajudam/front heroku master
fi
