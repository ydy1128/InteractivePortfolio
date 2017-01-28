# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-16 03:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0029_education_abroad'),
    ]

    operations = [
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('courses', models.ManyToManyField(to='myapp.Course')),
            ],
        ),
        migrations.RemoveField(
            model_name='education',
            name='courses',
        ),
        migrations.RemoveField(
            model_name='education',
            name='degree',
        ),
        migrations.AddField(
            model_name='education',
            name='degrees',
            field=models.ManyToManyField(blank=True, to='myapp.Project'),
        ),
    ]
