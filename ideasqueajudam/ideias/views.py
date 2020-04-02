from django.shortcuts import render
from rest_framework import viewsets
from .models import Ideia
from .serializers import IdeiaSerializer

# Create your views here.

class IdeiaView(viewsets.ModelViewSet):
    queryset = Ideia.objects.all()
    serializer_class = IdeiaSerializer
