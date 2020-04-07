from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('ideias', views.IdeiaView)
router.register('realizadores', views.RealizadorView)
router.register('temas', views.TemaView)


urlpatterns = [
    path('', include(router.urls))
   
]