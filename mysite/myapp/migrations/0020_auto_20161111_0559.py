# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-11-11 05:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0019_auto_20161110_0234'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('attr', models.CharField(max_length=30)),
                ('description', models.TextField(blank=True)),
                ('skills', models.ManyToManyField(to='myapp.Skill')),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('institution', models.CharField(max_length=30)),
                ('start_date', models.CharField(max_length=10)),
                ('end_date', models.CharField(max_length=10)),
                ('place', models.CharField(max_length=30)),
                ('degree', models.CharField(blank=True, max_length=50)),
                ('minor', models.CharField(blank=True, max_length=50)),
                ('description', models.TextField(blank=True)),
                ('courses', models.ManyToManyField(to='myapp.Course')),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('institution', models.CharField(max_length=30)),
                ('start_date', models.CharField(max_length=10)),
                ('end_date', models.CharField(max_length=10)),
                ('degree', models.CharField(blank=True, max_length=50)),
                ('minor', models.CharField(blank=True, max_length=50)),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Board',
        ),
    ]