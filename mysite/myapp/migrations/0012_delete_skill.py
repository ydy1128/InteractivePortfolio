# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-08 04:54
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0011_remove_project_skills'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Skill',
        ),
    ]
