# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-17 06:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0048_skill_exp_level'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='team',
        ),
        migrations.AddField(
            model_name='project',
            name='members',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
