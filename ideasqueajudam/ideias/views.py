from django.shortcuts import render
from rest_framework import viewsets
from .models import Ideia, Realizador, Tema
from .serializers import IdeiaSerializer, RealizadorSerializer, TemaSerializer
from rest_framework import generics
# Create your views here.


class IdeiaView(viewsets.ModelViewSet):
    queryset = Ideia.objects.all()
    serializer_class = IdeiaSerializer


class RealizadorView(viewsets.ModelViewSet):
    queryset = Realizador.objects.all()
    serializer_class = RealizadorSerializer


class TemaView(viewsets.ModelViewSet):
    queryset = Tema.objects.all()
    serializer_class = TemaSerializer
