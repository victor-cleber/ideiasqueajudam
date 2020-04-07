from rest_framework import serializers
from .models import Ideia, Realizador, Tema

class IdeiaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ideia
        fields = ('url', 'titulo', 'descricao','criado_em', 'excluido_em', 'link_youtube', 'material_complementar', 'caminho_imagem', 'realizador', 'tema')
    

class RealizadorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Realizador
        fields = ('url', 'nome', 'email','criado_em', 'excluido_em')
    

class TemaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tema
        fields = ('url', 'nome', 'descricao','criado_em', 'excluido_em')
    