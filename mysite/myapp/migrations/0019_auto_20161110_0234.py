# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-10 02:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0018_link_attr'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='links',
            field=models.ManyToManyField(blank=True, to='myapp.Link'),
        ),
    ]