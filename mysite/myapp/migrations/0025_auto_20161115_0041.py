# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-15 00:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0024_auto_20161115_0040'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='degree',
        ),
        migrations.AddField(
            model_name='experience',
            name='job',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
