from rest_framework import serializers
from .models import Ideia

class IdeiaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ideia
        fields = ('id_ideia', 'url', 'titulo', 'descricao','dt_criacao', 'link_youtube', 'material_complementar', 'imagem')
    