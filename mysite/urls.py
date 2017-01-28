from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # This is going to be our home view.
    # We'll uncomment it later
    url(r'^$', 'mysite.myapp.views.home', name='home'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    url(r'^old_home/$', 'mysite.myapp.views.old_home', name='old_home'),
    url(r'^old_contact/$', 'mysite.myapp.views.old_contact', name='old_contact'),

)
