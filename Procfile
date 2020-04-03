ps:scale web=1 --app ideiasqueajudam
config:set DISABLE_COLLECTS=1

#Procfile
web: gunicorn "ideiasqueajudam:create_app()" --log-file - 