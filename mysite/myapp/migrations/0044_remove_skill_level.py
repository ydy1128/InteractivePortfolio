# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-17 04:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0043_skill_level'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='level',
        ),
    ]
