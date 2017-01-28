from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible
from django.db import models


class Tag(models.Model):
    tag = models.CharField(max_length=30)
    def __str__(self):
        return self.tag

class Skill(models.Model):
    skill = models.CharField(max_length=30)
    category = models.CharField(blank=True, max_length=30)
    exp_level = models.IntegerField(null=True)
    def __str__(self):
        return self.skill

class Link(models.Model):
    name = models.CharField(max_length=30)
    attr = models.CharField(max_length=30)
    url = models.CharField(max_length=2000)
    def __str__(self):
        return self.name

class Project(models.Model):
    order = models.IntegerField(null=True)
    title = models.CharField(max_length=30)
    start_date = models.CharField(null=False, max_length=10)
    end_date = models.CharField(null=False, max_length=10)
    members = models.IntegerField(null=False)
    img = models.CharField(blank=True, max_length=30)
    tags = models.ManyToManyField(Tag)
    prototype = models.CharField(blank=True, max_length=30)
    demo = models.CharField(blank=True, max_length=30)
    links = models.ManyToManyField(Link, blank=True)
    skills = models.ManyToManyField(Skill)
    description = models.TextField(blank=True)
    def __str__(self):
        return self.title

class Coursework(models.Model):
    name = models.CharField(max_length=30)
    attr = models.CharField(max_length=30)
    number = models.IntegerField()
    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=30)
    attr = models.CharField(max_length=30)
    major = models.BooleanField()
    skills = models.ManyToManyField(Skill, blank = True)
    projects = models.ManyToManyField(Project, blank = True)
    description = models.TextField(blank=True)
    def __str__(self):
        return self.name

class Degree(models.Model):
    title = models.CharField(max_length=50)
    courses = models.ManyToManyField(Course)
    def __str__(self):
        return self.title

class Education(models.Model):
    institution = models.CharField(max_length=30)
    place = models.CharField(max_length=30)
    start_date = models.CharField(null=False, max_length=10)
    end_date = models.CharField(null=False, max_length=10)
    place = models.CharField(null=False, max_length=30)
    # degree = models.CharField(blank=True, max_length=50)
    degrees = models.ManyToManyField(Degree, blank = True)
    abroad = models.BooleanField()
    description = models.TextField(blank=True)
    def __str__(self):
        return self.institution

class Experience(models.Model):
    institution = models.CharField(max_length=50)
    place = models.CharField(max_length=30)
    start_date = models.CharField(null=False, max_length=10)
    end_date = models.CharField(null=False, max_length=10)
    job = models.CharField(blank=True, max_length=30)
    description = models.TextField(blank=True)
    volunteer = models.BooleanField();
    def __str__(self):
        return self.institution
