# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-08 01:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_project_order'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=30)),
            ],
        ),
        migrations.RemoveField(
            model_name='project',
            name='tag1',
        ),
        migrations.RemoveField(
            model_name='project',
            name='tag2',
        ),
        migrations.RemoveField(
            model_name='project',
            name='tag3',
        ),
        migrations.RemoveField(
            model_name='project',
            name='tag4',
        ),
        migrations.AddField(
            model_name='project',
            name='tags',
            field=models.ManyToManyField(to='myapp.Tag'),
        ),
    ]