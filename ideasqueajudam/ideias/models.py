from django.db import models

# Create your models here.

class Ideia(models.Model):
    STATUS = (
        ('AN', 'Analise'),
        ('AP', 'Aprovado'),
        ('EX', 'Excluido'),
    )
    id_ideia = models.AutoField(primary_key=True)
    titulo = models.CharField(null=False, blank=False, max_length=20)
    descricao = models.CharField(null=False, blank=False, max_length=200)
    status = models.CharField(null=False, blank=False, max_length=2, choices=STATUS)
    dt_exclusao = models.DateTimeField(null=True, blank=True)
    dt_criacao = models.DateTimeField(null=False, blank=False)
    link_youtube = models.CharField(null=False, blank=False, max_length=200)
    material_complementar = models.CharField(null=True, blank=True, max_length=200)
    imagem = models.CharField(null=False, blank=False, max_length=200)
    compartilhamentos = models.IntegerField(default=0)

    def __str__(self):
        return self.titulo