#!/bin/sh

# Primeiro de um commit :D
if heroku login && heroku git:remote -a ideiasqueajudamweb; then
    echo "######## Deploying on Heroku #############"
    git subtree push --prefix ideasqueajudam/front heroku master
fi

