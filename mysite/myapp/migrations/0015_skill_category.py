# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-08 04:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0014_project_skills'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='category',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
