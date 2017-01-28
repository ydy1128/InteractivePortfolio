from django.shortcuts import render
from django.shortcuts import redirect
from mysite.myapp.models import Coursework
from mysite.myapp.models import Project
from mysite.myapp.models import Education
from mysite.myapp.models import Course
from mysite.myapp.models import Experience
from mysite.myapp.models import Skill
from mysite.myapp.forms import ContactForm
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.template import Context
from django.contrib import messages
from django.shortcuts import render

def home(request):
    project = Project.objects.all()
    project = project.order_by('-order')
    experience = Experience.objects.all()
    education = Education.objects.all()
    course = Course.objects.all()
    skill = Skill.objects.all()
    skill = skill.order_by('-exp_level')

    args = {
        'project': project,
        'exp': experience,
        'edu': education,
        'course': course,
        'skill' : skill
        }
    return render(request, 'home.html', args)

# Views for old page

#datas from db to main page
def old_home(request):
    coursework = Coursework.objects.all()
    form_class = ContactForm

    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get('contact_name', '')
            contact_email = request.POST.get('contact_email', '')
            form_content = request.POST.get('content', '')

            template = get_template('old_contact_template.txt')
            context = Context({
                'contact_name': contact_name,
                'contact_email': contact_email,
                'form_content': form_content,
            })
            content = template.render(context)

            email = EmailMessage(
                "New contact form submission",
                content,
                "Your website" +'',
                ['ydy1128@gmail.com'],
                headers = {'Reply-To': contact_email }
            )
            email.send()
            return redirect('old_contact')

    args = {
        'coursework': coursework,
        'form': form_class,
    }
    return render(request,'old_home.html', args)

def old_contact(request):
    form_class = ContactForm
    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get('contact_name', '')
            contact_email = request.POST.get('contact_email', '')
            form_content = request.POST.get('content', '')

            template = get_template('old_contact_template.txt')
            context = Context({
                'contact_name': contact_name,
                'contact_email': contact_email,
                'form_content': form_content,
            })
            content = template.render(context)

            email = EmailMessage(
                "New contact form submission",
                content,
                "Your website" +'',
                ['ydy1128@gmail.com'],
                headers = {'Reply-To': contact_email }
            )
            email.send()
            return redirect('old_contact')

    args = {
        'form': form_class
    }
    return render(request,'old_contact.html', args)
