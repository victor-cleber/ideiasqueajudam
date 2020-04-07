from django.db import models
from django.utils import timezone
# Create your models here.
class Realizador(models.Model):
    nome = models.CharField(null=False, blank=False, max_length=30)
    email = models.CharField(null=False, blank=False, max_length=20)
    criado_em = models.DateTimeField(default=timezone.now)
    excluido_em = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.nome

class Tema(models.Model):
    nome = models.CharField(null=False, blank=False, max_length=15)
    descricao = models.CharField(null=False, blank=False, max_length=200)
    criado_em = models.DateTimeField(default=timezone.now)
    excluido_em = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.nome

class Ideia(models.Model):

    STATUS = (
        ('AN', 'Analise'),
        ('AP', 'Aprovado'),
        ('EX', 'Excluido'),
    )
    titulo = models.CharField(null=False, blank=False, max_length=20)
    descricao = models.CharField(null=False, blank=False, max_length=200)
    status = models.CharField(null=False, blank=False, max_length=2, choices=STATUS)    
    link_youtube = models.CharField(null=False, blank=False, max_length=200)
    material_complementar = models.CharField(null=True, blank=True, max_length=200)
    caminho_imagem = models.CharField(null=False, blank=False, max_length=200)
    impacto = models.IntegerField(default=0)
    criado_em = models.DateTimeField(default=timezone.now)
    excluido_em = models.DateTimeField(null=True, blank=True)
    realizador = models.ForeignKey(Realizador, on_delete=models.PROTECT)
    tema = models.ForeignKey(Tema, on_delete=models.PROTECT)

    def __str__(self):
        return self.titulo

