from rest_framework import serializers
from .models import Ideia, Realizador, Tema


class RealizadorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Realizador
        fields = ('id', 'url', 'nome', 'email', 'criado_em', 'excluido_em')


class TemaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Tema
        fields = ('id', 'url', 'nome', 'descricao',
                  'criado_em', 'excluido_em')


class IdeiaSerializer(serializers.HyperlinkedModelSerializer):
    tema = TemaSerializer()
    realizador = RealizadorSerializer()

    class Meta:
        model = Ideia
        fields = ('id', 'titulo', 'descricao', 'status', 'criado_em', 'excluido_em', 'link_youtube',
                  'material_complementar', 'caminho_imagem', 'impacto', 'aceita_termo_uso', 'tema', 'realizador')
