# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-15 06:33
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0028_remove_education_minor'),
    ]

    operations = [
        migrations.AddField(
            model_name='education',
            name='abroad',
            field=models.BooleanField(default=datetime.datetime(2016, 11, 15, 6, 33, 18, 135684, tzinfo=utc)),
            preserve_default=False,
        ),
    ]