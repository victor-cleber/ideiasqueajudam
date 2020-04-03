#ps:scale web=1 --app ideiasqueajudamapi
config:set DISABLE_COLLECTS=1

#Procfile
#web: gunicorn "ideiasqueajudamapi.ideiasqueajudam:create_app()" --log-file - 

#web: gunicorn ideiasqueajudamapi.ideiasqueajudam.wsgi
web: python manage.py runserver