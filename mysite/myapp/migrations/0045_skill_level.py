# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-17 04:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0044_remove_skill_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='level',
            field=models.IntegerField(null=True),
        ),
    ]
