from django.contrib import admin
from .models import Tag
from .models import Skill
from .models import Link
from .models import Coursework
from .models import Project
from .models import Course
from .models import Education
from .models import Experience
from .models import Degree

admin.site.register(Tag)
admin.site.register(Skill)
admin.site.register(Link)
admin.site.register(Coursework)
admin.site.register(Project)
admin.site.register(Course)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Degree)