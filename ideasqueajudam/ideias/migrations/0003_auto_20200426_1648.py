# Generated by Django 3.0.5 on 2020-04-26 04:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ideias', '0002_auto_20200408_0446'),
    ]

    operations = [
        migrations.AddField(
            model_name='ideia',
            name='aceita_termo_uso',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='ideia',
            name='realizador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='realizado_por', to='ideias.Realizador', verbose_name='realizador'),
        ),
        migrations.AlterField(
            model_name='ideia',
            name='tema',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='temas', to='ideias.Tema', verbose_name='tema'),
        ),
    ]
