# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-14 21:45
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0021_auto_20161111_0603'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='place',
            field=models.CharField(default=datetime.datetime(2016, 11, 14, 21, 45, 11, 475109, tzinfo=utc), max_length=30),
            preserve_default=False,
        ),
    ]